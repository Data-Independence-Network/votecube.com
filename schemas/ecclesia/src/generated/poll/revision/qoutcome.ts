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
	RawDelete,
	RawUpdate,
} from '@airport/air-traffic-control';
import {
	AgeSuitableRowGraph,
	AgeSuitableRowEId,
	AgeSuitableRowEUpdateColumns,
	AgeSuitableRowEUpdateProperties,
	AgeSuitableRowESelect,
	QAgeSuitableRowQId,
	QAgeSuitableRowQRelation,
	QAgeSuitableRow,
} from '../../infrastructure/row/qagesuitablerow';
import {
	OutcomeTranslationGraph,
	OutcomeTranslationEId,
	OutcomeTranslationEOptionalId,
	OutcomeTranslationEUpdateProperties,
	OutcomeTranslationESelect,
	QOutcomeTranslation,
	QOutcomeTranslationQId,
	QOutcomeTranslationQRelation,
} from './translation/qoutcometranslation';
import {
	OutcomeTranslation,
} from '../../../ddl/poll/revision/translation/OutcomeTranslation';
import {
	PollRevisionGraph,
	PollRevisionEId,
	PollRevisionEOptionalId,
	PollRevisionEUpdateProperties,
	PollRevisionESelect,
	QPollRevision,
	QPollRevisionQId,
	QPollRevisionQRelation,
} from './qpollrevision';
import {
	PollRevision,
} from '../../../ddl/poll/revision/PollRevision';
import {
	Outcome,
} from '../../../ddl/poll/revision/Outcome';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface OutcomeESelect
    extends AgeSuitableRowESelect, OutcomeEOptionalId {
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	parentTranslation?: OutcomeTranslationESelect;
	parent?: OutcomeESelect;
	children?: OutcomeESelect;
	pollRevisionsA?: PollRevisionESelect;
	pollRevisionsB?: PollRevisionESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface OutcomeEId
    extends AgeSuitableRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface OutcomeEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface OutcomeEUpdateProperties
	extends AgeSuitableRowEUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - ids only & no OneToMany's
	parentTranslation?: OutcomeTranslationEOptionalId;
	parent?: OutcomeEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface OutcomeGraph
	extends OutcomeEOptionalId, AgeSuitableRowGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties

	// Relations
	parentTranslation?: OutcomeTranslationGraph;
	parent?: OutcomeGraph;
	children?: OutcomeGraph[];
	pollRevisionsA?: PollRevisionGraph[];
	pollRevisionsB?: PollRevisionGraph[];

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface OutcomeEUpdateColumns
	extends AgeSuitableRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	USER_ACCOUNT_ID?: number | IQNumberField;
	AGE_SUITABILITY?: number | IQNumberField;
	PARENT_OUTCOME_TRANSLATION_ID?: number | IQNumberField;
	PARENT_OUTCOME_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface OutcomeECreateProperties
extends Partial<OutcomeEId>, OutcomeEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface OutcomeECreateColumns
extends OutcomeEId, OutcomeEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QOutcome extends QAgeSuitableRow<Outcome>
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields

	// Non-Id Relations
	parentTranslation: QOutcomeTranslationQRelation;
	parent: QOutcomeQRelation;
	children: IQOneToManyRelation<Outcome, QOutcome>;
	pollRevisionsA: IQOneToManyRelation<PollRevision, QPollRevision>;
	pollRevisionsB: IQOneToManyRelation<PollRevision, QPollRevision>;

}


// Entity Id Interface
export interface QOutcomeQId extends QAgeSuitableRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QOutcomeQRelation
	extends QAgeSuitableRowQRelation<Outcome, QOutcome>, QOutcomeQId {
}

