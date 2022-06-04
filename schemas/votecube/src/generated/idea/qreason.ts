import {
	IQEntityInternal,
	IEntityIdProperties,
	IEntityCascadeGraph,
	IEntityUpdateColumns,
	IEntityUpdateProperties,
	IEntitySelectProperties,
	IEntityDatabaseFacade,
	IEntityFind,
	IEntityFindOne,
	IEntitySearch,
	IEntitySearchOne,
	IQBooleanField,
	IQDateField,
	IQNumberField,
	IQOneToManyRelation,
	IQStringField,
	IQUntypedField,
	IQEntity,
	IQRelation,
	IQRepositoryEntityOneToManyRelation,
	IQRepositoryEntityRelation,
	RawDelete,
	RawUpdate,
} from '@airport/air-traffic-control';
import {
	RepositoryEntityGraph,
	RepositoryEntityEId,
	RepositoryEntityEUpdateColumns,
	RepositoryEntityEUpdateProperties,
	RepositoryEntityESelect,
	QRepositoryEntityQId,
	QRepositoryEntityQRelation,
	QRepositoryEntity,
} from '@airport/holding-pattern';
import {
	IdeaSituationGraph,
	IdeaSituationEId,
	IdeaSituationEOptionalId,
	IdeaSituationEUpdateProperties,
	IdeaSituationESelect,
	QIdeaSituation,
	QIdeaSituationQId,
	QIdeaSituationQRelation,
} from './qideasituation';
import {
	IIdeaSituation,
} from './ideasituation';
import {
	FactorGraph,
	FactorEId,
	FactorEOptionalId,
	FactorEUpdateProperties,
	FactorESelect,
	QFactor,
	QFactorQId,
	QFactorQRelation,
} from '../factor/qfactor';
import {
	IFactor,
} from '../factor/factor';
import {
	PositionGraph,
	PositionEId,
	PositionEOptionalId,
	PositionEUpdateProperties,
	PositionESelect,
	QPosition,
	QPositionQId,
	QPositionQRelation,
} from '../factor/qposition';
import {
	IPosition,
} from '../factor/position';
import {
	IReason,
} from './reason';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface ReasonESelect
    extends RepositoryEntityESelect, ReasonEOptionalId {
	// Non-Id Properties
	axis?: string | IQStringField;
	dir?: number | IQNumberField;
	factorNumber?: number | IQNumberField;
	blue?: number | IQNumberField;
	green?: number | IQNumberField;
	red?: number | IQNumberField;
	outcomeOrdinal?: string | IQStringField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	ideaSituation?: IdeaSituationESelect;
	factor?: FactorESelect;
	position?: PositionESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface ReasonEId
    extends RepositoryEntityEId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface ReasonEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface ReasonEUpdateProperties
	extends RepositoryEntityEUpdateProperties {
	// Non-Id Properties
	axis?: string | IQStringField;
	dir?: number | IQNumberField;
	factorNumber?: number | IQNumberField;
	blue?: number | IQNumberField;
	green?: number | IQNumberField;
	red?: number | IQNumberField;
	outcomeOrdinal?: string | IQStringField;

	// Non-Id Relations - ids only & no OneToMany's
	ideaSituation?: IdeaSituationEOptionalId;
	factor?: FactorEOptionalId;
	position?: PositionEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface ReasonGraph
	extends ReasonEOptionalId, RepositoryEntityGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties
	axis?: string | IQStringField;
	dir?: number | IQNumberField;
	factorNumber?: number | IQNumberField;
	blue?: number | IQNumberField;
	green?: number | IQNumberField;
	red?: number | IQNumberField;
	outcomeOrdinal?: string | IQStringField;

	// Relations
	ideaSituation?: IdeaSituationGraph;
	factor?: FactorGraph;
	position?: PositionGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface ReasonEUpdateColumns
	extends RepositoryEntityEUpdateColumns {
	// Non-Id Columns
	AGE_SUITABILITY?: number | IQNumberField;
	SYSTEM_WIDE_OPERATION_ID?: number | IQNumberField;
	ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
	ORIGINAL_REPOSITORY_ID?: number | IQNumberField;
	ORIGINAL_ACTOR_ID?: number | IQNumberField;
	FACTOR_COORDINATE_AXIS?: string | IQStringField;
	POSITION_ORIENTATION?: number | IQNumberField;
	FACTOR_NUMBER?: number | IQNumberField;
	COLOR_BLUE?: number | IQNumberField;
	COLOR_GREEN?: number | IQNumberField;
	COLOR_RED?: number | IQNumberField;
	OUTCOME_ORDINAL?: string | IQStringField;
	IDEA_SITUATIONS_RID_1?: number | IQNumberField;
	IDEA_SITUATIONS_AID_1?: number | IQNumberField;
	IDEA_SITUATIONS_ARID_1?: number | IQNumberField;
	FACTORS_RID_1?: number | IQNumberField;
	FACTORS_AID_1?: number | IQNumberField;
	FACTORS_ARID_1?: number | IQNumberField;
	POSITIONS_RID_1?: number | IQNumberField;
	POSITIONS_AID_1?: number | IQNumberField;
	POSITIONS_ARID_1?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface ReasonECreateProperties
extends Partial<ReasonEId>, ReasonEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface ReasonECreateColumns
extends ReasonEId, ReasonEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QReason extends QRepositoryEntity
{
	// Id Fields

	// Id Relations

	// Non-Id Fields
	axis: IQStringField;
	dir: IQNumberField;
	factorNumber: IQNumberField;
	blue: IQNumberField;
	green: IQNumberField;
	red: IQNumberField;
	outcomeOrdinal: IQStringField;

	// Non-Id Relations
	ideaSituation: QIdeaSituationQRelation;
	factor: QFactorQRelation;
	position: QPositionQRelation;

}


// Entity Id Interface
export interface QReasonQId extends QRepositoryEntityQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QReasonQRelation
	extends QRepositoryEntityQRelation<IReason, QReason>, QReasonQId {
}
