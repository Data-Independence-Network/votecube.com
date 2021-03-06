import {
	IAgeSuitableRow,
} from '../infrastructure/row/agesuitablerow';
import {
	IPollRevision,
} from '../poll/revision/pollrevision';
import {
	IFactorTranslation,
} from './factortranslation';
import {
	IFactorPosition,
} from './position/factorposition';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IFactor extends IAgeSuitableRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	createdAtPollRevision?: IPollRevision;
	parentTranslation?: IFactorTranslation;
	parent?: IFactor;
	children?: IFactor[];
	factorPositions?: IFactorPosition[];
	translations?: IFactorTranslation[];

	// Transient Properties

	// Public Methods
	
}


