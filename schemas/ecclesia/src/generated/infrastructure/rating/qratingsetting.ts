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
	SystemGeneratedRowGraph,
	SystemGeneratedRowEId,
	SystemGeneratedRowEUpdateColumns,
	SystemGeneratedRowEUpdateProperties,
	SystemGeneratedRowESelect,
	QSystemGeneratedRowQId,
	QSystemGeneratedRowQRelation,
	QSystemGeneratedRow,
} from '../row/qsystemgeneratedrow';
import {
	CountryGraph,
	CountryEId,
	CountryEOptionalId,
	CountryEUpdateProperties,
	CountryESelect,
	QCountry,
	QCountryQId,
	QCountryQRelation,
} from '../../location/qcountry';
import {
	Country,
} from '../../../ddl/location/Country';
import {
	RatingGraph,
	RatingEId,
	RatingEOptionalId,
	RatingEUpdateProperties,
	RatingESelect,
	QRating,
	QRatingQId,
	QRatingQRelation,
} from './qrating';
import {
	Rating,
} from '../../../ddl/infrastructure/rating/Rating';
import {
	RatingSetting,
} from '../../../ddl/infrastructure/rating/RatingSetting';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface RatingSettingESelect
    extends SystemGeneratedRowESelect, RatingSettingEOptionalId {
	// Non-Id Properties
	key?: string | IQStringField;
	value?: string | IQStringField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	country?: CountryESelect;
	rating?: RatingESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface RatingSettingEId
    extends SystemGeneratedRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface RatingSettingEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface RatingSettingEUpdateProperties
	extends SystemGeneratedRowEUpdateProperties {
	// Non-Id Properties
	key?: string | IQStringField;
	value?: string | IQStringField;

	// Non-Id Relations - ids only & no OneToMany's
	country?: CountryEOptionalId;
	rating?: RatingEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface RatingSettingGraph
	extends RatingSettingEOptionalId, SystemGeneratedRowGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties
	key?: string | IQStringField;
	value?: string | IQStringField;

	// Relations
	country?: CountryGraph;
	rating?: RatingGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface RatingSettingEUpdateColumns
	extends SystemGeneratedRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	RATING_SETTING_KEY?: string | IQStringField;
	RATING_SETTING_VALUE?: string | IQStringField;
	COUNTRY_ID?: number | IQNumberField;
	RATING_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface RatingSettingECreateProperties
extends Partial<RatingSettingEId>, RatingSettingEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface RatingSettingECreateColumns
extends RatingSettingEId, RatingSettingEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QRatingSetting extends QSystemGeneratedRow<RatingSetting>
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields
	key: IQStringField;
	value: IQStringField;

	// Non-Id Relations
	country: QCountryQRelation;
	rating: QRatingQRelation;

}


// Entity Id Interface
export interface QRatingSettingQId extends QSystemGeneratedRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QRatingSettingQRelation
	extends QSystemGeneratedRowQRelation<RatingSetting, QRatingSetting>, QRatingSettingQId {
}

