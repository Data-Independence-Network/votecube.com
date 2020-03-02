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
} from '@airport/air-control';
import {
	ImmutableRowECascadeGraph,
	ImmutableRowEId,
	ImmutableRowEUpdateColumns,
	ImmutableRowEUpdateProperties,
	ImmutableRowESelect,
	QImmutableRowQId,
	QImmutableRowQRelation,
	QImmutableRow,
} from '../../../infrastructure/row/qimmutablerow';
import {
	PollRevisionECascadeGraph,
	PollRevisionEId,
	PollRevisionEOptionalId,
	PollRevisionEUpdateProperties,
	PollRevisionESelect,
	QPollRevision,
	QPollRevisionQId,
	QPollRevisionQRelation,
} from '../qpollrevision';
import {
	FactorSkinECascadeGraph,
	FactorSkinEId,
	FactorSkinEOptionalId,
	FactorSkinEUpdateProperties,
	FactorSkinESelect,
	QFactorSkin,
	QFactorSkinQId,
	QFactorSkinQRelation,
} from '../../../factor/qfactorskin';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface PollFactorSkinRevisionESelect
    extends ImmutableRowESelect, PollFactorSkinRevisionEOptionalId {
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	pollRevision?: PollRevisionESelect;
	factorSkin?: FactorSkinESelect;
	parent?: PollFactorSkinRevisionESelect;
	children?: PollFactorSkinRevisionESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollFactorSkinRevisionEId
    extends ImmutableRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface PollFactorSkinRevisionEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollFactorSkinRevisionEUpdateProperties
	extends ImmutableRowEUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - ids only & no OneToMany's
	pollRevision?: PollRevisionEOptionalId;
	factorSkin?: FactorSkinEOptionalId;
	parent?: PollFactorSkinRevisionEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollFactorSkinRevisionECascadeGraph
	extends ImmutableRowECascadeGraph {
	// Cascading Relations
	children?: PollFactorSkinRevisionECascadeGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface PollFactorSkinRevisionEUpdateColumns
	extends ImmutableRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	POLL_REVISION_ID?: number | IQNumberField;
	FACTOR_SKIN_ID?: number | IQNumberField;
	PARENT_POLL_FACTOR_SKIN_REVISION_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollFactorSkinRevisionECreateProperties
extends Partial<PollFactorSkinRevisionEId>, PollFactorSkinRevisionEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollFactorSkinRevisionECreateColumns
extends PollFactorSkinRevisionEId, PollFactorSkinRevisionEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollFactorSkinRevision extends QImmutableRow
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields

	// Non-Id Relations
	pollRevision: QPollRevisionQRelation;
	factorSkin: QFactorSkinQRelation;
	parent: QPollFactorSkinRevisionQRelation;
	children: IQOneToManyRelation<QPollFactorSkinRevision>;

}


// Entity Id Interface
export interface QPollFactorSkinRevisionQId extends QImmutableRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QPollFactorSkinRevisionQRelation
	extends QImmutableRowQRelation<QPollFactorSkinRevision>, QPollFactorSkinRevisionQId {
}
