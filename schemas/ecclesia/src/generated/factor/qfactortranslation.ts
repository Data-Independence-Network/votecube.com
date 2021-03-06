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
	ImmutableActorRowGraph,
	ImmutableActorRowEId,
	ImmutableActorRowEUpdateColumns,
	ImmutableActorRowEUpdateProperties,
	ImmutableActorRowESelect,
	QImmutableActorRowQId,
	QImmutableActorRowQRelation,
	QImmutableActorRow,
} from '../infrastructure/row/qimmutableactorrow';
import {
	FactorGraph,
	FactorEId,
	FactorEOptionalId,
	FactorEUpdateProperties,
	FactorESelect,
	QFactor,
	QFactorQId,
	QFactorQRelation,
} from './qfactor';
import {
	Factor,
} from '../../ddl/factor/Factor';
import {
	LanguageGraph,
	LanguageEId,
	LanguageEOptionalId,
	LanguageEUpdateProperties,
	LanguageESelect,
	QLanguage,
	QLanguageQId,
	QLanguageQRelation,
} from '../infrastructure/qlanguage';
import {
	Language,
} from '../../ddl/infrastructure/Language';
import {
	FactorTranslation,
} from '../../ddl/factor/FactorTranslation';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface FactorTranslationESelect
    extends ImmutableActorRowESelect, FactorTranslationEOptionalId {
	// Non-Id Properties
	name?: string | IQStringField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	factor?: FactorESelect;
	language?: LanguageESelect;
	parent?: FactorTranslationESelect;
	children?: FactorTranslationESelect;
	childFactors?: FactorESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface FactorTranslationEId
    extends ImmutableActorRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface FactorTranslationEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface FactorTranslationEUpdateProperties
	extends ImmutableActorRowEUpdateProperties {
	// Non-Id Properties
	name?: string | IQStringField;

	// Non-Id Relations - ids only & no OneToMany's
	factor?: FactorEOptionalId;
	language?: LanguageEOptionalId;
	parent?: FactorTranslationEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface FactorTranslationGraph
	extends FactorTranslationEOptionalId, ImmutableActorRowGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties
	name?: string | IQStringField;

	// Relations
	factor?: FactorGraph;
	language?: LanguageGraph;
	parent?: FactorTranslationGraph;
	children?: FactorTranslationGraph[];
	childFactors?: FactorGraph[];

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface FactorTranslationEUpdateColumns
	extends ImmutableActorRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	USER_ACCOUNT_ID?: number | IQNumberField;
	FACTOR_NAME?: string | IQStringField;
	FACTOR_ID?: number | IQNumberField;
	LANGUAGE_ID?: number | IQNumberField;
	PARENT_FACTOR_TRANSLATION_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface FactorTranslationECreateProperties
extends Partial<FactorTranslationEId>, FactorTranslationEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface FactorTranslationECreateColumns
extends FactorTranslationEId, FactorTranslationEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QFactorTranslation extends QImmutableActorRow<FactorTranslation>
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields
	name: IQStringField;

	// Non-Id Relations
	factor: QFactorQRelation;
	language: QLanguageQRelation;
	parent: QFactorTranslationQRelation;
	children: IQOneToManyRelation<FactorTranslation, QFactorTranslation>;
	childFactors: IQOneToManyRelation<Factor, QFactor>;

}


// Entity Id Interface
export interface QFactorTranslationQId extends QImmutableActorRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QFactorTranslationQRelation
	extends QImmutableActorRowQRelation<FactorTranslation, QFactorTranslation>, QFactorTranslationQId {
}

