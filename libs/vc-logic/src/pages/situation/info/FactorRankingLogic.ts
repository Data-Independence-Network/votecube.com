import {DI}                   from '@airport/di'
import {
	IUiSolution,
	IUiSolutionFactor,
	SolutionFactor_Value
}                             from '@votecube/model'
import {fly}                  from 'svelte/transition'
import {ILogicUtils}          from '../../../LogicUtils'
import {IPageSolution}            from '../../../situation/SituationManager'
import {cardMove}             from '../../../store'
import {FACTOR_RANKING_LOGIC} from '../../../tokens'

export type AddOrRemove = 'add' | 'remove'

export interface IFactorInfo {

	factorNumber: number;
	factorTd: HTMLElement

}

export interface IInElementOffset {

	topLeft: {
		x: number
		y: number
	}
	x: number
	y: number

}

export interface IInElementOffsetEvent {

	pageX: number
	pageY: number
	target: HTMLElement

}

export interface IFactorRankingLogic {

	addOrRemoveAFactor(
		solutionFactors: IUiSolutionFactor[],
		index: number,
		addOrRemove: AddOrRemove,
		solution: IUiSolution,
		logicUtils: ILogicUtils
	): {
		numMoved: number,
		placeholder: boolean,
	}

	getAlternateIndex(
		absDy: number,
		dy: number,
		originalIndex: number,
		have3: boolean
	): number

	getFactorInfoAtCoords(
		x: number,
		y: number,
		factorNumberToExclude: number
	): IFactorInfo

	getInElementOffset(
		event: IInElementOffsetEvent
	): IInElementOffset

	moveFactorDown(
		solutionFactors: IUiSolutionFactor[],
		solution: IUiSolution,
		originalIndex: number,
		newIndex: number,
		logicUtils: ILogicUtils
	): boolean

	moveFactorUp(
		solutionFactors: IUiSolutionFactor[],
		soultion: IUiSolution,
		originalIndex: number,
		newIndex: number,
		logicUtils: ILogicUtils
	): boolean

	setOutcome(
		solutionFactors: IUiSolutionFactor[],
		index: number,
		outcome: 'A' | 'B',
		// adjustRanking = false
	): void

}

export class FactorRankingLogic
	implements IFactorRankingLogic {

	getFactorInfoAtCoords(
		x: number,
		y: number,
		factorNumberToExclude: number
	): IFactorInfo {
		if (!x || !y) {
			return null
		}
		let nodes
		const msDoc = document as any
		if (msDoc.msElementsFromPoint) {
			nodes = msDoc.msElementsFromPoint(
				x,
				y
			)
		} else {
			nodes = document.elementsFromPoint(
				x,
				y
			)
		}

		if (!nodes || !nodes.forEach) {
			return null
		}

		let matchingFactorInfo: IFactorInfo = null
		nodes.forEach(
			node => {
				const factorInfo = this.getFactorInfo(node)
				if (!matchingFactorInfo && factorInfo
					&& factorInfo.factorNumber !== factorNumberToExclude) {
					matchingFactorInfo = factorInfo
				}
			})

		return matchingFactorInfo
	}

	getInElementOffset(
		event: IInElementOffsetEvent
	): IInElementOffset {
		// event (directly for mouse/via touches[0] for touch)
		// 	pageX/Y gives the cursor position on screen at mouse/touchDown

		const cursorPositionX = event.pageX
		const cursorPositionY = event.pageY

		const factorInfoAtCoords = this.getFactorInfoAtCoords(
			cursorPositionX, cursorPositionY, -1)

		if (!factorInfoAtCoords) {
			return null
		}

		// target (directly on event for mouse/via touches[0].target for touch)
		// 	has the information for the top left corner of the element:

		const boundingClientRect = event.target.getBoundingClientRect()
		const elemTopLeftCornerX = boundingClientRect.left
		const elemTopLeftCornerY = boundingClientRect.top


		// factorPosition places the element based on the top left corner
		// so need to know the offset by which to move the picture to top and left:

		return {
			topLeft: {
				x: elemTopLeftCornerX,
				y: elemTopLeftCornerY
			},
			x: cursorPositionX - elemTopLeftCornerX,
			y: cursorPositionY - elemTopLeftCornerY
		}

		// Whereever the cursor is at we need to substract the offsets from it
		// to show the element.
	}

	getAlternateIndex(
		absDy: number,
		dy: number,
		originalIndex: number,
		have3: boolean
	): number {
		switch (originalIndex) {
			case 0: {
				if (dy > 0) {
					if (absDy < 200) {
						return 1
					} else {
						return have3 ? 2 : 1
					}
				}
				break
			}
			case 1: {
				if (dy > 0) {
					return 2
				} else {
					return 0
				}
			}
			case 2: {
				if (dy < 0) {
					if (absDy < 200) {
						return 1
					} else {
						return 0
					}
				}
				break
			}
		}

		return originalIndex
	}

	addOrRemoveAFactor(
		solutionFactors: IUiSolutionFactor[],
		index: number,
		addOrRemove: AddOrRemove,
		solution: IPageSolution,
		logicUtils: ILogicUtils
	): {
		numMoved: number,
		placeholder: boolean,
	} {
		const [_, secondFactor, thirdFactor] = solutionFactors
		let numMoved                         = 0
		let placeholder                      = false
		if (index === 0) {
			if (
				// Cannot add the first factor
				addOrRemove === 'add'
				// Cannot remove the first factor if there are no other factors
				|| (!secondFactor.outcome && !thirdFactor.outcome)) {
				return {
					numMoved,
					placeholder
				}
			}
			placeholder       = true
			// scheduleFactorPlaceholder()
			solution.changeMillis = 550

			// Remove first factor
			this.removeFirstFactor(solutionFactors, solution, !!thirdFactor.outcome,
				logicUtils)
			return {
				numMoved: 1,
				placeholder
			}
		}

		numMoved      = 1
		const outcome = solutionFactors[index].outcome
		if (addOrRemove === 'remove') {
			// remove
			if (!outcome) {
				// Don't remove if it's already removed
				return {
					numMoved: 0,
					placeholder,
				}
			}
			solution.changeMillis = 550
			placeholder       = true
			// scheduleFactorPlaceholder(index, direction)
			if (index === 1 && thirdFactor.outcome) {
				this.onMove(1, [2, 1])
				this.swapOnRemove(
					// solutionFactors,
					solution, secondFactor, thirdFactor,
					null, 2, logicUtils)
				this.moveUpOne(1, logicUtils)
			} else {
				this.setOutcome(solutionFactors, index, null)
				this.adjustRanking(solutionFactors, index, null)
			}
		} else {
			// add
			if (outcome) {
				// Don't add if it's already added
				return {
					numMoved: 0,
					placeholder
				}
			}
			solution.changeMillis = 550
			if (index === 2 && !secondFactor.outcome) {
				this.setOutcome(solutionFactors, 1, 'A')
				this.adjustRanking(solutionFactors, 1, 'A')
				numMoved = 2
			}
			this.setOutcome(solutionFactors, index, 'A')
			this.adjustRanking(solutionFactors, index, 'A')
		}

		return {
			numMoved,
			placeholder
		}
	}

	move(
		index: number,
		options,
		logicUtils: ILogicUtils
	): void {
		logicUtils.transition(
			'factor_' + index,
			fly,
			options
		)
	}

	moveFactorDown(
		solutionFactors: IUiSolutionFactor[],
		solution: IPageSolution,
		originalIndex: number,
		newIndex: number,
		logicUtils: ILogicUtils
	): boolean {
		switch (originalIndex) {
			// Started the move from 1st Factor
			case 0: {
				if (newIndex === 1) {
					this.onMove(1, [0, 1])
					solution.changeMillis = 200
					this.setFactorOrder(
						solutionFactors,
						originalIndex,
						-1,
						solution,
						logicUtils,
					)
					this.moveUpOne(0, logicUtils)
				} else {
					this.onMove(2, [0, 2])
					solution.changeMillis = 600
					this.setFactorOrder(
						solutionFactors,
						originalIndex,
						-1,
						solution,
						logicUtils,
						solutionFactors[0],
						solutionFactors[2],
						0
					)
					this.moveUpTwo(0, logicUtils)
				}
				return true
			}
			// Started the move from 2nd Factor
			case 1: {
				this.onMove(1, [1, 2])
				solution.changeMillis = 200
				this.setFactorOrder(
					solutionFactors,
					originalIndex,
					-1,
					solution,
					logicUtils,
				)
				this.moveUpOne(1, logicUtils)
				return true
			}
			// Started the move from 3rd Factor
			// case 2: {
			// Not possible, nothing to do
			// return
			// }
		}
		return false
	}

	moveFactorUp(
		solutionFactors: IUiSolutionFactor[],
		solution: IPageSolution,
		originalIndex: number,
		newIndex: number,
		logicUtils: ILogicUtils
	): boolean {
		switch (originalIndex) {
			// Started the move from 1st Factor
			// case 0: {
			// 	// Not possible, nothing to do
			// 	return
			// }
			// Started the move from 2nd Factor
			case 1: {
				this.onMove(1, [1, 0])
				solution.changeMillis = 200
				this.setFactorOrder(
					solutionFactors,
					originalIndex,
					1,
					solution,
					logicUtils,
				)
				this.moveDownOne(1, logicUtils)
				return true
			}
			// Started the move from 3rd Factor
			case 2: {
				if (newIndex === 1) {
					this.onMove(1, [2, 1])
					solution.changeMillis = 200
					this.setFactorOrder(
						solutionFactors,
						originalIndex,
						1,
						solution,
						logicUtils,
					)
					this.moveDownOne(2, logicUtils)
				} else {
					this.onMove(2, [2, 0])
					solution.changeMillis = 600
					this.setFactorOrder(
						solutionFactors,
						originalIndex,
						1,
						solution,
						logicUtils,
						solutionFactors[0],
						solutionFactors[2],
						0
					)
					this.moveDownTwo(2, logicUtils)
				}
				return true
			}
		}
		return false
	}

	setOutcome(
		solutionFactors: IUiSolutionFactor[],
		index: number,
		outcome: 'A' | 'B',
		// adjustRanking = false
	): void {
		solutionFactors[index].outcome = outcome
		// if (adjustRanking) {
		// 	dispatch('rankingAdjusted')
		// }
	}

	private adjustRanking(
		solutionFactors: IUiSolutionFactor[],
		index: number,
		outcome: 'A' | 'B',
		// doAdjust = true
	): boolean {
		const [
			      firstSolutionFactor,
			      secondSolutionFactor,
			      thirdSolutionFactor
		      ] = solutionFactors
		switch (index) {
			case 0: {
				// firstFactor.dir = dir
				// Don't have to worry about dir === 0 - 1st factor cannot have it as such
				if (
					// If there the 1st factor is present in solution
					this.factorsAt(100, 0, 0, solutionFactors)
					// Or its another standard distribution
					|| this.factorsAt(66, 34, 0, solutionFactors)
					|| this.factorsAt(55, 30, 15, solutionFactors)
				) {
					// Nothing to do, just change direction
				} else {
					// set default distribution
					firstSolutionFactor.value  = 55
					secondSolutionFactor.value = 30
					thirdSolutionFactor.value  = 15
				}
				break
			}
			case 1: {
				// secondFactor.dir = dir
				// If the 2nd factor is being removed from the solution
				if (!outcome) {
					firstSolutionFactor.value  = 100
					secondSolutionFactor.value = 0
					thirdSolutionFactor.value  = 0
					// thirdFactor.dir    = 0
					break
				}
				// Otherwise the 2nd factor is now present in the solution
				if (
					this.factorsAt(55, 30, 15, solutionFactors)
					|| this.factorsAt(66, 34, 0, solutionFactors)) {
					// Factors are already at reserved values, no need to adjust values
				} else if (
					this.factorsAt(100, 0, 0, solutionFactors)
				) {
					// Add the second factor
					firstSolutionFactor.value  = 66
					secondSolutionFactor.value = 34
				} else {
					// set default distribution
					firstSolutionFactor.value  = 55
					secondSolutionFactor.value = 30
					thirdSolutionFactor.value  = 15
				}
				break
			}
			case 2: {
				// If the 3rd factor is being removed from the solution
				if (!outcome) {
					firstSolutionFactor.value  = 66
					secondSolutionFactor.value = 34
					thirdSolutionFactor.value  = 0
					break
				}
				// Otherwise the 3rd factor is now present in the solution
				if (
					this.factorsAt(55, 30, 15, solutionFactors)
				) {
					// Factors are already at reserved values, no need to adjust values
				} else {
					// set default distribution
					firstSolutionFactor.value  = 55
					secondSolutionFactor.value = 30
					thirdSolutionFactor.value  = 15
				}
				break
			}
			default:
				return false
		}

		return true
		// if (doAdjust) {
		// 	dispatch('rankingAdjusted')
		// }
	}

	private swapOnRemove(
		// solutionFactors,
		solution: IUiSolution,
		removedFactor: IUiSolutionFactor,
		movedFactor1: IUiSolutionFactor,
		movedFactor2: IUiSolutionFactor,
		adjustRankingIndex: number,
		logicUtils: ILogicUtils
	): void {
		if (movedFactor2) {
			movedFactor2.value = movedFactor1.value
		}

		movedFactor1.value    = removedFactor.value
		removedFactor.value   = 0
		removedFactor.outcome = null

		// page.set({factorOrderDelta: page.get().factorOrderDelta + 1})

		if (!adjustRankingIndex) {
			adjustRankingIndex = movedFactor2 ? 2 : 1
		}

		this.adjustRanking(
			logicUtils.getSolutionFactorNodesInValueOrder(solution),
			adjustRankingIndex, null
		)
	}

	private removeFirstFactor(
		solutionFactors: IUiSolutionFactor[],
		solution: IUiSolution,
		move3: boolean,
		logicUtils: ILogicUtils
	): void {
		if (move3) {
			this.onMove(1, [2, 1, 0])
		} else {
			this.onMove(1, [1, 0])
		}
		const [firstFactor, secondFactor, thirdFactor] = solutionFactors
		this.swapOnRemove(
			// solutionFactors,
			solution, firstFactor, secondFactor,
			move3 ? thirdFactor : null, 0, logicUtils)
		if (move3) {
			this.moveUpOne(1, logicUtils)
		}
		this.moveUpOne(0, logicUtils)
	}

	private setFactorOrder(
		solutionFactors: IUiSolutionFactor[],
		index: number,
		delta: number,
		solution: IUiSolution,
		logicUtils: ILogicUtils,
		oldHigherFactor?: IUiSolutionFactor,
		oldLowerFactor?: IUiSolutionFactor,
		deltaIndex?: number,
	): boolean {
		const [firstSolutionFactor, secondSolutionFactor, thirdSolutionFactor]
			      = solutionFactors
		let oldHigherOutcome: 'A' | 'B'
		let oldHigherValue: number
		if (!oldHigherFactor) {
			switch (index) {
				case 0: {
					// Only Down arrow can be pressed, no need to check delta
					deltaIndex      = 0
					oldHigherFactor = firstSolutionFactor
					oldLowerFactor  = secondSolutionFactor
					break
				}
				case 1: {
					if (delta > 0) {
						deltaIndex      = 0
						oldHigherFactor = firstSolutionFactor
						oldLowerFactor  = secondSolutionFactor
					} else {
						deltaIndex      = 1
						oldHigherFactor = secondSolutionFactor
						oldLowerFactor  = thirdSolutionFactor
					}
					break
				}
				case 2: {
					// Only Up arrow can be pressed, no need to check delta
					deltaIndex      = 1
					oldHigherFactor = secondSolutionFactor
					oldLowerFactor  = thirdSolutionFactor
					break
				}
			}
		}
		oldHigherOutcome      = oldHigherFactor.outcome
		oldHigherValue        = oldHigherFactor.value
		oldHigherFactor.value = oldLowerFactor.value
		oldLowerFactor.value  = oldHigherValue as SolutionFactor_Value

		// page.set({factorOrderDelta: page.get().factorOrderDelta + 1})

		return this.adjustRanking(
			logicUtils.getSolutionFactorNodesInValueOrder(solution),
			deltaIndex, oldHigherOutcome
		)
	}

	private onMove(
		move,
		moved
	): void {
		cardMove.set({
			move,
			moved
		})
	}

	private moveDownOne(
		index: number,
		logicUtils: ILogicUtils,
		duration = 400
	): void {
		this.move(index, {y: -100, duration}, logicUtils)
	}

	private moveDownTwo(
		index,
		logicUtils: ILogicUtils
	): void {
		this.move(index, {y: -200, duration: 800}, logicUtils)
	}

	private moveUpOne(
		index,
		logicUtils: ILogicUtils,
		duration = 400
	): void {
		this.move(index, {y: 100, duration}, logicUtils)
	}

	private moveUpTwo(
		index,
		logicUtils: ILogicUtils
	): void {
		this.move(index, {y: 200, duration: 800}, logicUtils)
	}

	private factorsAt(
		firstFactorValue: number,
		secondFactorValue: number,
		thirdFactorValue: number,
		solutionFactors: IUiSolutionFactor[]
	): boolean {
		return solutionFactors[0].value === firstFactorValue
			&& solutionFactors[1].value === secondFactorValue
			&& solutionFactors[2].value === thirdFactorValue
	}

	private getFactorInfo(
		node: HTMLElement | null
	): IFactorInfo | null {
		if (!node) {
			return null
		}
		while (node.getAttribute
		&& !node.getAttribute('factorNumber')
		&& node.parentNode) {
			node = node.parentNode as HTMLElement
		}
		if (node.getAttribute
			&& node.getAttribute('factorNumber')) {
			return {
				factorNumber: parseInt(node.getAttribute('factorNumber')),
				factorTd: node
			}
		}
		return null
	}

}

DI.set(FACTOR_RANKING_LOGIC, FactorRankingLogic)