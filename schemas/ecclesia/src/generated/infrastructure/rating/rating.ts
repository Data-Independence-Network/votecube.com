import {
	ISystemGeneratedRow,
} from '../row/systemgeneratedrow';
import {
	IRatingType,
} from './ratingtype';
import {
	IRatingSetting,
} from './ratingsetting';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IRating extends ISystemGeneratedRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
	cssClass?: string;

	// Non-Id Relations
	type?: IRatingType;
	settings?: IRatingSetting[];

	// Transient Properties

	// Public Methods
	
}


