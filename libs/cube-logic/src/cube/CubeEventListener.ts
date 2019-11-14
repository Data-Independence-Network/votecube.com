import {
	container,
	DI
}                                    from '@airport/di'
import {
	Factor_Axis,
	Factor_Number,
	IVote,
	IVoteFactor,
	Position_Dir
}                                    from '@votecube/model'
import {
	CUBE_DIRECTION,
	CUBE_EVENT_LISTENER,
	CUBE_MOVEMENT,
	CUBE_UTILS,
	EVENT_LISTENER_MAP,
	MUTATION_API,
	VIEWPORT
}                                    from '../diTokens'
import {IPerElementEventListenerMap} from '../utils/EventListenerMap'
import {
	Bool,
	IFactorToAxisMapping,
	IPosition,
	IUiVote,
	IUiVoteDimension,
	IValuesOutCallback,
	Move
}                                    from './CubeMovement'
import {IMutationApi}                from './mutation/MutationApi'
import {IViewport}                   from './Viewport'

export type MovementDirection = -1 | 0 | 1;
export type ChangeInPixels = number;
// export type Range = -1 | 1;
export type DirectionVector = [MovementDirection, ChangeInPixels
	// , Range
];

export interface ICubeEventListener {

	addCubeAdjustment(): Promise<void>

	clearCubeAdjustment(): void

	clearView(
		elementId: string
	): void

	resumeInteraction(): void

	setPositionData(
		vote: IVote,
		factorNumbers?: Factor_Number[]
	): Promise<boolean>

	setPositionDataAndMove(
		vote: IVote
	): Promise<void>

	setView(
		elementId: string
	): void

	setViewPort(
		forCube: boolean,
		cb?: IValuesOutCallback
	): Promise<IMutationApi>

	suspendInteraction(): void

}

export class CubeEventListener
	implements ICubeEventListener {

	// document listener map
	private dLM: IPerElementEventListenerMap
	private lastMove  = 0
	private suspended = false
	private TOUCH     = document.ontouchmove !== undefined

	async addCubeAdjustment(): Promise<void> {
		if (this.suspended) {
			return
		}
		// let moveSpeed = 256
		if (this.dLM) {
			this.addCubeAdjustmentToELM(this.dLM)
		} else {
			container(this).get(EVENT_LISTENER_MAP).then(
				eventListenerMap => {
					this.dLM = eventListenerMap.ad(document)
					this.addCubeAdjustmentToELM(this.dLM)
				})
		}
	}

	addCubeAdjustmentToELM(
		eventListenerMap: IPerElementEventListenerMap
	): void {
		eventListenerMap.ad('keydown',
			ev => {
				container(this).get(CUBE_UTILS, VIEWPORT).then(([cubeUtils, viewport]) => {
					this.rmMmTm()
					switch (ev.keyCode) {
						case 37: // left
							viewport.move(Bool.False, Move.None, Bool.True, Move.Down)
							break

						case 38: // up
							// prevent default
							cubeUtils.pD(ev)
							viewport.move(Bool.True, Move.Up)
							break

						case 39: // right
							viewport.move(Bool.False, Move.None, Bool.True, Move.Up)
							break

						case 40: // down
							// prevent default
							cubeUtils.pD(ev)
							viewport.move(Bool.True, Move.Down)
							break

						case 27: // esc
							viewport.reset()
							break
						// case 109:
						// 	if (!viewport.el) {
						// 		return
						// 	}
						// 	if (moveSpeed > 128) {
						// 		moveSpeed /= 2
						// 	}
						// 	break
						// case 107:
						// 	if (!viewport.el) {
						// 		return
						// 	}
						// 	if (moveSpeed < 4096) {
						// 		moveSpeed *= 2
						// 	}
						// 	break

						default:
							break
					}
				})

			})
		('mousedown', this.safeOMdTs)
		('touchstart', (
			event
		) => {
			// https://developer.mozilla.org/en-US/docs/Web/API/Touch_events/
			// Supporting_both_TouchEvent_and_MouseEvent
			event.preventDefault()
			this.safeOMdTs(event)
		})
		('mouseup', this.safeRmMmTm)
		('touchend', this.safeRmMmTm)
	}

	clearCubeAdjustment(): void {
		this.dLM.rm('keydown')
		('mousedown')
		('touchstart')
		('mouseup')
		('touchend')
	}

	clearView(
		elementId: string
	): void {
		container(this).get(VIEWPORT).then(
			viewport => {
				delete viewport.el[elementId]
			})
	}

	resumeInteraction(): void {
		this.suspended = false
	}

	async setPositionData(
		vote: IVote,
		factorNumbers: Factor_Number[] = [1, 2, 3]
	): Promise<boolean> {
		const factorToAxisMapping: IFactorToAxisMapping = {
			1: null,
			2: null,
			3: null
		}
		factorToAxisMapping[factorNumbers[0]]           = 'x'
		factorToAxisMapping[factorNumbers[1]]           = 'y'
		factorToAxisMapping[factorNumbers[2]]           = 'z'

		const viewport = await container(this).get(VIEWPORT)
		viewport.pd    = {
			axisToFactorMapping: {
				x: factorNumbers[0],
				y: factorNumbers[1],
				z: factorNumbers[2]
			},
			factorToAxisMapping,
			vote,
			x: this.getUiVoteDimension(1, 'x', vote
				// , 100
			),
			y: this.getUiVoteDimension(2, 'y', vote),
			z: this.getUiVoteDimension(3, 'z', vote),
		}

		return !!vote
	}

	async setPositionDataAndMove(
		vote: IVote
	): Promise<void> {
		if (await this.setPositionData(vote)) {
			const viewport = await container(this).get(VIEWPORT)
			viewport.moveToDegree()
		}
	}

	setView(
		elementId: string
	): void {
		container(this).get(CUBE_UTILS, VIEWPORT).then(([cubeUtils, viewport]) => {
			viewport.el[elementId] = cubeUtils.gQ('#' + elementId)
		})
	}

	async setViewPort(
		forCube: boolean,
		cb?: IValuesOutCallback
	): Promise<IMutationApi> {
		const viewport = await container(this).get(VIEWPORT)

		viewport.reset()
		viewport.cb = (
			uiVote: IUiVote
		) => {
			this.populateVoteFactor('x', uiVote)
			this.populateVoteFactor('y', uiVote)
			this.populateVoteFactor('z', uiVote)
			cb(uiVote.vote)
		}

		if (forCube) {
			if (cb) {
				this.addCubeAdjustment()
			} else {
				this.clearCubeAdjustment()
			}
		}

		if (!cb) {
			return null
		}

		const mutationApi = await container(this).get(MUTATION_API)

		return mutationApi
	}

	suspendInteraction(): void {
		this.suspended = true
	}

	private getUiVoteDimension(
		factorNumber: Factor_Number,
		axis: Factor_Axis,
		vote: IVote,
		// value: VoteFactor_Value = 0
	): IUiVoteDimension {
		let dir: Position_Dir = 0

		// if (!vote) {
		// 	return {
		// 		axis,
		// 		dir,
		// 		valid: true,
		// 		value
		// 	}
		// }

		const voteFactor = vote[factorNumber]
		if (voteFactor.outcome === 'A') {
			dir = 1
		} else if (voteFactor.outcome === 'B') {
			dir = -1
		}
		return {
			axis,
			dir,
			valid: true,
			value: voteFactor.value
		}
	}

	private moveViewport(
		event: IPosition, // event
		viewport: IViewport
	): void {
		container(this).get(CUBE_DIRECTION, CUBE_MOVEMENT).then((
			[
				cubeDirection,
				cubeMovement
			]) => {
			const mouseObject = cubeMovement.mouse
			const startCoords = mouseObject.start
			let lastCoords    = mouseObject.last


			const now: number = new Date().getTime()

			if (!cubeMovement.mouse.last) {
				cubeMovement.mouse.last = lastCoords = cubeMovement.mouse.start
				this.lastMove           = now
			}

			const {moveX, moveY, xBy, yBy} = cubeDirection.getMove(startCoords, event)

			if (now - this.lastMove >= 8) {
				startCoords.x = lastCoords.x
				startCoords.y = lastCoords.y
				if (moveX || moveY) {
					viewport.move(moveX, xBy, moveY, yBy)
				}
				this.lastMove = now
			}

			lastCoords.x = event.x
			lastCoords.y = event.y
		})
	}

	/**
	 * On mousedown or touchstart
	 */
	private oMdTs(
		ev: MouseEvent | TouchEvent, // Event
	): void {
		container(this).get(CUBE_MOVEMENT, CUBE_UTILS, VIEWPORT).then((
			[
				cubeMovement,
				cubeUtils,
				viewport
			]) => {

			if (!Object.keys(viewport.el).length) {
				return
			}
			this.rmMmTm()

			delete cubeMovement.mouse.last

			// clicks on links, images, or videos
			if (cubeUtils.iT(ev.target as Element, 'A')('IFRAME')()) {
				return
			}

			this.populateStartCoords(ev, cubeMovement.mouse.start)

			this.dLM.ad('mousemove', this.oMmTm)('touchmove', this.oMmTm)
		})
	}

	/**
	 * On mousemove or touchmove
	 */
	private oMmTm(
		ev, // event
	): void {
		container(this).get(VIEWPORT).then(
			viewport => {
				if (!Object.keys(viewport.el).length) {
					return
				}
				const touches = ev.touches

				// Only perform rotation if one touch or mouse (e.g. still scale with pinch and zoom)
				if (!this.TOUCH || !(touches && touches.length > 1)) {
					ev.preventDefault()
					const point = touches ? touches[0] : ev
					// Get touch co-ords
					// ev.originalEvent.touches ? ev = ev.originalEvent.touches[0] : null
					// dispatch 'move-viewport' event
					this.moveViewport({x: point.screenX, y: point.screenY}, viewport)
				}
			})
	}

	private populateCoords(
		ev: MouseEvent | TouchEvent, // Event,
		touches: TouchList,
		start: IPosition
	): void {
		const p: MouseEvent | Touch = touches
			? touches[0]
			: ev as MouseEvent
		start.x                     = p.pageX
		start.y                     = p.pageY
	}

	private populateEndCoords(
		ev: MouseEvent | TouchEvent, // Event,
		end: IPosition
	): void {
		return this.populateCoords(ev, (ev as TouchEvent).changedTouches, end)
	}

	private populateStartCoords(
		ev: MouseEvent | TouchEvent, // Event,
		start: IPosition
	): void {
		// ev.originalEvent.touches ? ev = ev.originalEvent.touches[0] : null
		return this.populateCoords(ev, (ev as TouchEvent).touches, start)
	}

	private populateVoteFactor(
		axis: Factor_Axis,
		uiVote: IUiVote
	): void {
		const vote                    = uiVote.vote
		const voteFactor: IVoteFactor = vote[uiVote.axisToFactorMapping[axis]]
		const voteDimension           = uiVote[axis]
		voteFactor.outcome            = null
		if (voteDimension.dir === 1) {
			voteFactor.outcome = 'A'
		} else if (voteDimension.dir === -1) {
			voteFactor.outcome = 'B'
		}
		voteFactor.value = voteDimension.value
	}

	/**
	 * Remove mousemove or touchmove
	 */
	private rmMmTm(): void {
		container(this).get(VIEWPORT).then(
			viewport => {
				if (!Object.keys(viewport.el).length) {
					return
				}
				this.dLM.rm('mousemove')('touchmove')
			})
	}

	private safeOMdTs(
		event: MouseEvent | TouchEvent
	): void {
		if (this.suspended) {
			return
		}
		this.oMdTs(event)
	}

	private safeRmMmTm(): void {
		if (this.suspended) {
			return
		}

		this.rmMmTm()
	}
}

DI.set(CUBE_EVENT_LISTENER, CubeEventListener)