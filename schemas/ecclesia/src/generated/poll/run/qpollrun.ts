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
} from '../../infrastructure/row/qimmutableactorrow';
import {
	PollRevisionGraph,
	PollRevisionEId,
	PollRevisionEOptionalId,
	PollRevisionEUpdateProperties,
	PollRevisionESelect,
	QPollRevision,
	QPollRevisionQId,
	QPollRevisionQRelation,
} from '../revision/qpollrevision';
import {
	PollRevision,
} from '../../../ddl/poll/revision/PollRevision';
import {
	PollRunContinentGraph,
	PollRunContinentEId,
	PollRunContinentEOptionalId,
	PollRunContinentEUpdateProperties,
	PollRunContinentESelect,
	QPollRunContinent,
	QPollRunContinentQId,
	QPollRunContinentQRelation,
} from './location/qpollruncontinent';
import {
	PollRunContinent,
} from '../../../ddl/poll/run/location/PollRunContinent';
import {
	PollRunCountryGraph,
	PollRunCountryEId,
	PollRunCountryEOptionalId,
	PollRunCountryEUpdateProperties,
	PollRunCountryESelect,
	QPollRunCountry,
	QPollRunCountryQId,
	QPollRunCountryQRelation,
} from './location/qpollruncountry';
import {
	PollRunCountry,
} from '../../../ddl/poll/run/location/PollRunCountry';
import {
	PollRunStateGraph,
	PollRunStateEId,
	PollRunStateEOptionalId,
	PollRunStateEUpdateProperties,
	PollRunStateESelect,
	QPollRunState,
	QPollRunStateQId,
	QPollRunStateQRelation,
} from './location/qpollrunstate';
import {
	PollRunState,
} from '../../../ddl/poll/run/location/PollRunState';
import {
	PollRunCountyGraph,
	PollRunCountyEId,
	PollRunCountyEOptionalId,
	PollRunCountyEUpdateProperties,
	PollRunCountyESelect,
	QPollRunCounty,
	QPollRunCountyQId,
	QPollRunCountyQRelation,
} from './location/qpollruncounty';
import {
	PollRunCounty,
} from '../../../ddl/poll/run/location/PollRunCounty';
import {
	PollRunTownGraph,
	PollRunTownEId,
	PollRunTownEOptionalId,
	PollRunTownEUpdateProperties,
	PollRunTownESelect,
	QPollRunTown,
	QPollRunTownQId,
	QPollRunTownQRelation,
} from './location/qpollruntown';
import {
	PollRunTown,
} from '../../../ddl/poll/run/location/PollRunTown';
import {
	PollRun,
} from '../../../ddl/poll/run/PollRun';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface PollRunESelect
    extends ImmutableActorRowESelect, PollRunEOptionalId {
	// Non-Id Properties
	endDate?: Date | IQDateField;
	startDate?: Date | IQDateField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	pollRevision?: PollRevisionESelect;
	createdAtRevisions?: PollRevisionESelect;
	pollContinents?: PollRunContinentESelect;
	pollCountries?: PollRunCountryESelect;
	pollStates?: PollRunStateESelect;
	pollCounties?: PollRunCountyESelect;
	pollTowns?: PollRunTownESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollRunEId
    extends ImmutableActorRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface PollRunEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollRunEUpdateProperties
	extends ImmutableActorRowEUpdateProperties {
	// Non-Id Properties
	endDate?: Date | IQDateField;
	startDate?: Date | IQDateField;

	// Non-Id Relations - ids only & no OneToMany's
	pollRevision?: PollRevisionEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollRunGraph
	extends PollRunEOptionalId, ImmutableActorRowGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties
	endDate?: Date | IQDateField;
	startDate?: Date | IQDateField;

	// Relations
	pollRevision?: PollRevisionGraph;
	createdAtRevisions?: PollRevisionGraph[];
	pollContinents?: PollRunContinentGraph[];
	pollCountries?: PollRunCountryGraph[];
	pollStates?: PollRunStateGraph[];
	pollCounties?: PollRunCountyGraph[];
	pollTowns?: PollRunTownGraph[];

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface PollRunEUpdateColumns
	extends ImmutableActorRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	USER_ACCOUNT_ID?: number | IQNumberField;
	END_DATE?: Date | IQDateField;
	START_DATE?: Date | IQDateField;
	POLL_REVISION_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollRunECreateProperties
extends Partial<PollRunEId>, PollRunEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollRunECreateColumns
extends PollRunEId, PollRunEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollRun extends QImmutableActorRow<PollRun>
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields
	endDate: IQDateField;
	startDate: IQDateField;

	// Non-Id Relations
	pollRevision: QPollRevisionQRelation;
	createdAtRevisions: IQOneToManyRelation<PollRevision, QPollRevision>;
	pollContinents: IQOneToManyRelation<PollRunContinent, QPollRunContinent>;
	pollCountries: IQOneToManyRelation<PollRunCountry, QPollRunCountry>;
	pollStates: IQOneToManyRelation<PollRunState, QPollRunState>;
	pollCounties: IQOneToManyRelation<PollRunCounty, QPollRunCounty>;
	pollTowns: IQOneToManyRelation<PollRunTown, QPollRunTown>;

}


// Entity Id Interface
export interface QPollRunQId extends QImmutableActorRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QPollRunQRelation
	extends QImmutableActorRowQRelation<PollRun, QPollRun>, QPollRunQId {
}

