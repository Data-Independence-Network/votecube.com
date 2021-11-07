import {
	container,
	DI
} from '@airport/di'
import {
	IUiSolution
} from '@votecube/model'
import { Factor_Number } from './mutation/types'
import {
	CUBE_DIRECTION,
	CUBE_EVENT_LISTENER,
	CUBE_MOVEMENT,
	CUBE_UTILS,
	EVENT_LISTENER_MAP,
	MUTATION_API,
	VIEWPORT
} from '../tokens'
import { IPerElementEventListenerMap } from '../utils/EventListenerMap'
import {
	Bool,
	IFactorToAxisMapping,
	IPosition,
	ICubeSolution,
	ICubeSolutionDimension,
	IValuesOutCallback,
	Move
} from './CubeMovement'
import { IMutationApi } from './mutation/MutationApi'
import { IViewport } from './Viewport'

export type MovementDirection = -1 | 0 | 1;
export type ChangeInPixels = number;
// export type Range = -1 | 1;
export type DirectionVector = [MovementDirection, ChangeInPixels
	// , Range
];

export interface ICubeEventListener {

	addCubeAdjustment(): void

	clearCubeAdjustment(): void

	clearView(
		elementId: string
	): void

	resumeInteraction(): void

	setPositionData(
		solution: IUiSolution,
		factorNumbers?: Factor_Number[]
	): boolean

	setPositionDataAndMove(
		solution: IUiSolution
	): void

	setView(
		elementId: string
	): void

	setViewPort(
		forCube: boolean,
		cb?: IValuesOutCallback
	): IMutationApi

	suspendInteraction(): void

}

export const TOUCH = document.ontouchmove !== undefined

export class CubeEventListener
	implements ICubeEventListener {

	// document listener map
	private dLM: IPerElementEventListenerMap
	private lastMove = 0
	private suspended = false

	addCubeAdjustment(): void {
		if (this.suspended) {
			return
		}
		// let moveSpeed = 256
		if (this.dLM) {
			this.addCubeAdjustmentToELM(this.dLM)
		} else {
			const eventListenerMap = container(this).getSync(EVENT_LISTENER_MAP)
			this.dLM = eventListenerMap.ad(document)
			this.addCubeAdjustmentToELM(this.dLM)
		}
	}

	addCubeAdjustmentToELM(
		eventListenerMap: IPerElementEventListenerMap
	): void {
		eventListenerMap.ad('keydown',
			ev => {
				if (this.suspended) {
					return
				}
				const [cubeUtils, viewport] = container(this).getSync(CUBE_UTILS, VIEWPORT)
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
			('mousedown',
				event => this.safeOMdTs(event))
			('touchstart',
				event => {
					// https://developer.mozilla.org/en-US/docs/Web/API/Touch_events/
					// Supporting_both_TouchEvent_and_MouseEvent
					try {
						event.preventDefault()
					} catch (_) {
					}
					this.safeOMdTs(event)
				})
			('mouseup',
				_ => this.safeRmMmTm())
			('touchend',
				_ => this.safeRmMmTm())
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
		const viewport = container(this).getSync(VIEWPORT)
		delete viewport.el[elementId]
	}

	resumeInteraction(): void {
		this.suspended = false
	}

	setPositionData(
		solution: IUiSolution,
		factorNumbers: Factor_Number[] = [1, 2, 3]
	): boolean {
		const factorToAxisMapping: IFactorToAxisMapping = {
			1: null,
			2: null,
			3: null
		}
		factorToAxisMapping[factorNumbers[0]] = 'x'
		factorToAxisMapping[factorNumbers[1]] = 'y'
		factorToAxisMapping[factorNumbers[2]] = 'z'

		const viewport = container(this).getSync(VIEWPORT)
		viewport.pd = {
			// axisToFactorMapping: {
			// 	x: factorNumbers[0],
			// 	y: factorNumbers[1],
			// 	z: factorNumbers[2]
			// },
			factorToAxisMapping,
			solution,
			x: this.getUIUiSolutionDimension(1,
				// 'x',
				solution
				// , 100
			),
			y: this.getUIUiSolutionDimension(2,
				// 'y',
				solution),
			z: this.getUIUiSolutionDimension(3,
				// 'z',
				solution),
		}

		return !!solution
	}

	setPositionDataAndMove(
		solution: IUiSolution
	): void {
		if (this.setPositionData(solution)) {
			const viewport = container(this).getSync(VIEWPORT)
			viewport.moveToDegree()
		}
	}

	setView(
		elementId: string
	): void {
		const [cubeUtils, viewport] = container(this).getSync(CUBE_UTILS, VIEWPORT)
		viewport.el[elementId] = cubeUtils.gQ('#' + elementId)
	}

	setViewPort(
		forCube: boolean,
		cb?: IValuesOutCallback
	): IMutationApi {
		const viewport = container(this).getSync(VIEWPORT)

		viewport.reset()
		viewport.cb = (
			uIUiSolution: ICubeSolution
		) => {
			// this.populateSolutionFactor('x', uIUiSolution)
			// this.populateSolutionFactor('y', uIUiSolution)
			// this.populateSolutionFactor('z', uIUiSolution)
			cb(uIUiSolution.solution)
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

		const mutationApi = container(this).getSync(MUTATION_API)

		return mutationApi
	}

	suspendInteraction(): void {
		this.suspended = true
	}

	private getUIUiSolutionDimension(
		factorNumber: Factor_Number,
		// axis: Factor_Axis,
		solution: IUiSolution,
		// solutionFactorValue: number = 0
	): ICubeSolutionDimension {
		if (!solution) {
			return null
		}
		// let dir: Position_Dir = 0

		// if (!solution) {
		// 	return {
		// 		axis,
		// 		dir,
		// 		valid: true,
		// 		value
		// 	}
		// }

		const solutionFactor = solution[factorNumber] as ICubeSolutionDimension
		// if (solutionFactor.outcome === 'A') {
		// 	dir = 1
		// } else if (solutionFactor.outcome === 'B') {
		// 	dir = -1
		// }
		// return {
		// 	axis,
		// 	dir,
		// 	valid: true,
		// 	value: solutionFactor.value
		// }
		solutionFactor.valid = true

		return solutionFactor
	}

	private moveViewport(
		event: IPosition, // event
		viewport: IViewport
	): void {
		const [
			cubeDirection,
			cubeMovement
		] = container(this).getSync(CUBE_DIRECTION, CUBE_MOVEMENT)

		const mouseObject = cubeMovement.mouse
		const startCoords = mouseObject.start
		let lastCoords = mouseObject.last


		const now: number = new Date().getTime()

		if (!cubeMovement.mouse.last) {
			cubeMovement.mouse.last = lastCoords = cubeMovement.mouse.start
			this.lastMove = now
		}

		const { moveX, moveY, xBy, yBy } = cubeDirection.getMove(startCoords, event)

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
	}

	/**
	 * On mousedown or touchstart
	 */
	private oMdTs(
		ev: MouseEvent | TouchEvent, // Event
	): void {
		const [
			cubeMovement,
			cubeUtils,
			viewport
		] = container(this).getSync(CUBE_MOVEMENT, CUBE_UTILS, VIEWPORT)

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

		this.dLM
			.ad('mousemove',
				event => {
					this.oMmTm(event)
				})
			('touchmove',
				event => {
					this.oMmTm(event)
				})
	}

	/**
	 * On mousemove or touchmove
	 */
	private oMmTm(
		ev, // event
	): void {
		const viewport = container(this).getSync(VIEWPORT)

		if (!Object.keys(viewport.el).length) {
			return
		}
		const touches = ev.touches

		// Only perform rotation if one touch or mouse (e.g. still scale with pinch and zoom)
		if (!document.ontouchmove !== undefined || !(touches && touches.length > 1)) {
			try {
				ev.preventDefault()
			} catch (_) {
			}
			const point = touches ? touches[0] : ev
			// Get touch co-ords
			// ev.originalEvent.touches ? ev = ev.originalEvent.touches[0] : null
			// dispatch 'move-viewport' event
			this.moveViewport({ x: point.screenX, y: point.screenY }, viewport)
		}
	}

	private populateCoords(
		ev: MouseEvent | TouchEvent, // Event,
		touches: TouchList,
		start: IPosition
	): void {
		const p: MouseEvent | Touch = touches
			? touches[0]
			: ev as MouseEvent
		start.x = p.pageX
		start.y = p.pageY
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

	/*
	private populateSolutionFactor(
		axis: Factor_Axis,
		uiSolution: ICubeSolution
	): void {
		const solution                    = uiSolution.solution
		const solutionFactor: IUiSolutionFactor = solution[uiSolution.axisToFactorMapping[axis]]
		const solutionDimension           = uiSolution[axis]
		solutionFactor.outcome            = null
		if (solutionDimension.dir === 1) {
			solutionFactor.outcome = 'A'
		} else if (solutionDimension.dir === -1) {
			solutionFactor.outcome = 'B'
		}
		solutionFactor.value = solutionDimension.value
	}
*/
	/**
	 * Remove mousemove or touchmove
	 */
	private rmMmTm(): void {
		const viewport = container(this).getSync(VIEWPORT)
		if (!Object.keys(viewport.el).length) {
			return
		}
		this.dLM.rm('mousemove')('touchmove')
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
