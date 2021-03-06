import {
	ISystemGeneratedRow,
} from '../infrastructure/row/systemgeneratedrow';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface ITheme extends ISystemGeneratedRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
	name?: string;
	ageSuitability?: number;

	// Non-Id Relations

	// Transient Properties

	// Public Methods
	
}


