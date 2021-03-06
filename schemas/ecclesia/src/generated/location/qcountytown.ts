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
} from '../infrastructure/row/qsystemgeneratedrow';
import {
	CountyGraph,
	CountyEId,
	CountyEOptionalId,
	CountyEUpdateProperties,
	CountyESelect,
	QCounty,
	QCountyQId,
	QCountyQRelation,
} from './qcounty';
import {
	County,
} from '../../ddl/location/County';
import {
	TownGraph,
	TownEId,
	TownEOptionalId,
	TownEUpdateProperties,
	TownESelect,
	QTown,
	QTownQId,
	QTownQRelation,
} from './qtown';
import {
	Town,
} from '../../ddl/location/Town';
import {
	CountyTown,
} from '../../ddl/location/CountyTown';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface CountyTownESelect
    extends SystemGeneratedRowESelect, CountyTownEOptionalId {
	// Non-Id Properties

	// Id Relations - full property interfaces
	county?: CountyESelect;
	town?: TownESelect;

  // Non-Id relations (including OneToMany's)

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface CountyTownEId
    extends SystemGeneratedRowEId {
	// Id Properties

	// Id Relations - Ids only
	county: CountyEId;
	town: TownEId;

}

/**
 * Ids fields and relations only (optional).
 */
export interface CountyTownEOptionalId {
	// Id Properties

	// Id Relations - Ids only
	county?: CountyEOptionalId;
	town?: TownEOptionalId;

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface CountyTownEUpdateProperties
	extends SystemGeneratedRowEUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - ids only & no OneToMany's

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface CountyTownGraph
	extends CountyTownEOptionalId, SystemGeneratedRowGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties

	// Relations
	county?: CountyGraph;
	town?: TownGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface CountyTownEUpdateColumns
	extends SystemGeneratedRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface CountyTownECreateProperties
extends Partial<CountyTownEId>, CountyTownEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface CountyTownECreateColumns
extends CountyTownEId, CountyTownEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QCountyTown extends QSystemGeneratedRow<CountyTown>
{
	// Id Fields

	// Id Relations
	county: QCountyQRelation;
	town: QTownQRelation;

	// Non-Id Fields

	// Non-Id Relations

}


// Entity Id Interface
export interface QCountyTownQId extends QSystemGeneratedRowQId
{
	
	// Id Fields

	// Id Relations
	county: QCountyQId;
	town: QTownQId;


}

// Entity Relation Interface
export interface QCountyTownQRelation
	extends QSystemGeneratedRowQRelation<CountyTown, QCountyTown>, QCountyTownQId {
}

