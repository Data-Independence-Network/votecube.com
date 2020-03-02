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
	ImmutableActorRowECascadeGraph,
	ImmutableActorRowEId,
	ImmutableActorRowEUpdateColumns,
	ImmutableActorRowEUpdateProperties,
	ImmutableActorRowESelect,
	QImmutableActorRowQId,
	QImmutableActorRowQRelation,
	QImmutableActorRow,
} from '../../infrastructure/row/qimmutableactorrow';
import {
	PositionECascadeGraph,
	PositionEId,
	PositionEOptionalId,
	PositionEUpdateProperties,
	PositionESelect,
	QPosition,
	QPositionQId,
	QPositionQRelation,
} from './qposition';
import {
	LanguageECascadeGraph,
	LanguageEId,
	LanguageEOptionalId,
	LanguageEUpdateProperties,
	LanguageESelect,
	QLanguage,
	QLanguageQId,
	QLanguageQRelation,
} from '../../infrastructure/qlanguage';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface PositionTranslationESelect
    extends ImmutableActorRowESelect, PositionTranslationEOptionalId {
	// Non-Id Properties
	description?: string | IQStringField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	position?: PositionESelect;
	language?: LanguageESelect;
	parent?: PositionTranslationESelect;
	children?: PositionTranslationESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PositionTranslationEId
    extends ImmutableActorRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface PositionTranslationEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PositionTranslationEUpdateProperties
	extends ImmutableActorRowEUpdateProperties {
	// Non-Id Properties
	description?: string | IQStringField;

	// Non-Id Relations - ids only & no OneToMany's
	position?: PositionEOptionalId;
	language?: LanguageEOptionalId;
	parent?: PositionTranslationEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PositionTranslationECascadeGraph
	extends ImmutableActorRowECascadeGraph {
	// Cascading Relations
	children?: PositionTranslationECascadeGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface PositionTranslationEUpdateColumns
	extends ImmutableActorRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	ACTOR_ID?: number | IQNumberField;
	POSITION_DESCRIPTION?: string | IQStringField;
	POSITION_ID?: number | IQNumberField;
	LANGUAGE_ID?: number | IQNumberField;
	PARENT_POSITION_TRANSLATION_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PositionTranslationECreateProperties
extends Partial<PositionTranslationEId>, PositionTranslationEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PositionTranslationECreateColumns
extends PositionTranslationEId, PositionTranslationEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPositionTranslation extends QImmutableActorRow
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields
	description: IQStringField;

	// Non-Id Relations
	position: QPositionQRelation;
	language: QLanguageQRelation;
	parent: QPositionTranslationQRelation;
	children: IQOneToManyRelation<QPositionTranslation>;

}


// Entity Id Interface
export interface QPositionTranslationQId extends QImmutableActorRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QPositionTranslationQRelation
	extends QImmutableActorRowQRelation<QPositionTranslation>, QPositionTranslationQId {
}
