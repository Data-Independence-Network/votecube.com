import {ZoomIndex}                 from '../cubeMoveMatrix'
import {
	DimensionPercentages,
	Direction,
	PositionPercent
}                                  from '../cubeMovement'
import {
	Dimension,
	Viewport,
	viewport
}                                  from '../Viewport'
import {DegreePositionChooser}     from './DegreePositionChooser'
import {FinalPositionFinder}       from './FinalPositionFinder'
import {MatrixValueChooser}        from './MatrixValueChooser'
import {PercentagePositionChooser} from './PercentagePositionChooser'
import {PercentChange}             from './types'

export interface IMutationApi {

	changeZoom(
		zoomIndex: ZoomIndex
	): void

	moveX(
		direction: Direction
	): void

	moveXToPercent(
		movePercent: PositionPercent
	): void

	moveY(
		direction: Direction
	): void

	moveYToPercent(
		movePercent: PositionPercent
	): void

	moveZ(
		direction: Direction
	): void

	moveZToPercent(
		movePercent: PositionPercent
	): void

}

export class MutationApi
	implements IMutationApi {

	private degreePositionChooser     = new DegreePositionChooser()
	private finalPositionFinder       = new FinalPositionFinder()
	private matrixValueChooser        = new MatrixValueChooser()
	private percentagePositionChooser = new PercentagePositionChooser()

	constructor(
		private vp: Viewport
	) {
	}

	changeZoom(
		zoomIndex: ZoomIndex
	): void {
		this.vp.zm = zoomIndex
	}

	moveX(
		direction: Direction
	): void {
		this.move('x', direction)
	}

	moveXToPercent(
		movePercent: PositionPercent
	): void {
		this.moveToPercent('x', movePercent, null, this.vp.vd.x)
	}

	moveY(
		direction: Direction
	): void {
		this.move('y', direction)
	}

	moveYToPercent(
		movePercent: PositionPercent
	): void {
		this.moveToPercent('y', movePercent, null, this.vp.vd.y)
	}

	moveZ(
		direction: Direction
	): void {
		this.move('z', direction)
	}

	moveZToPercent(
		movePercent: PositionPercent
	): void {
		this.moveToPercent('z', movePercent, null, this.vp.vd.z)
	}

	private move(
		dimension: Dimension,
		direction: Direction
		// dimensionPercentages: DimensionPercentages
	): void {
		const dimensionPercentages = this.vp.pp[dimension]
		if (!this.isChangeAllowed(direction, dimensionPercentages)) {
			return
		}
		let percentChange = this.getPercentChange()
		let nextStep
		switch (direction) {
			case 1:
				nextStep = this.getNextStep(
					dimensionPercentages.plus, dimensionPercentages.minus, direction)
				break
			case -1:
				nextStep = this.getNextStep(
					dimensionPercentages.minus, dimensionPercentages.plus, direction)
				break
		}

		this.moveToPercent(dimension, null, percentChange, direction)
	}

	private getNextStep(
		minus: PositionPercent,
		plus: PositionPercent,
		direction: Direction
	): number {
		let percentChange = this.getPercentChange()
		let percentToChange
		switch (direction) {
			case -1:
				percentToChange = minus
				break
			case 1:
				percentToChange = plus
		}
		return Math.floor(percentToChange / percentChange) + 1
		// if (plus) {
		// 	return [Math.floor(plus / percentChange) + 1, direction]
		// } else if (minus) {
		// 	if (minus <= percentChange) {
		// 		return [0, direction]
		// 	}
		// } else {
		// 	return [1, direction]
		// }
	}

	private getPercentChange(): 1 | 5 | 20 {
		switch (this.vp.zm) {
			case 0:
				return 20
			case 1:
				return 5
			case 2:
				return 1
		}
	}

	private isChangeAllowed(
		direction: Direction,
		dimensionPercentages: DimensionPercentages
	): boolean {
		let currentValue = direction === 1
			? dimensionPercentages.plus
			: dimensionPercentages.minus

		return currentValue !== 100
	}

	private moveToPercent(
		dimension: Dimension,
		newPercent: PositionPercent,
		percentChange: PercentChange,
		direction: Direction
	): void {
		// First see the order of recently moved dimensions

		this.vp.rmd = this.vp.rmd.filter(
			changedDim => dimension != changedDim)
		this.vp.rmd.unshift(dimension)
		let numPreviousMoves = this.vp.rmd.length
		if (numPreviousMoves > 3) {
			this.vp.rmd.pop()
		}

		if (percentChange) {
			this.percentagePositionChooser.changePositionPercentages(dimension, percentChange, direction, this.vp)
		} else {
			this.percentagePositionChooser.setPositionPercentages(dimension, newPercent, direction, this.vp)
		}

		const closestMatrixPosition = this.matrixValueChooser.getClosestMatrixPosition(this.vp)

		const finalPosition = this.finalPositionFinder.findFinalPosition(closestMatrixPosition, this.vp)

		this.degreePositionChooser.setFinalDegrees(finalPosition, this.vp)
	}

}

export const mutationApi = new MutationApi(viewport)
