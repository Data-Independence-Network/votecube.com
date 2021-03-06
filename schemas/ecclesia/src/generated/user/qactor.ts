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
	UserAccountGraph,
	UserAccountEId,
	UserAccountEOptionalId,
	UserAccountEUpdateProperties,
	UserAccountESelect,
	QUserAccount,
	QUserAccountQId,
	QUserAccountQRelation,
} from './quseraccount';
import {
	UserAccount,
} from '../../ddl/user/UserAccount';
import {
	DeviceGraph,
	DeviceEId,
	DeviceEOptionalId,
	DeviceEUpdateProperties,
	DeviceESelect,
	QDevice,
	QDeviceQId,
	QDeviceQRelation,
} from './qdevice';
import {
	Device,
} from '../../ddl/user/Device';
import {
	ApplicationGraph,
	ApplicationEId,
	ApplicationEOptionalId,
	ApplicationEUpdateProperties,
	ApplicationESelect,
	QApplication,
	QApplicationQId,
	QApplicationQRelation,
} from './qapplication';
import {
	Application,
} from '../../ddl/user/Application';
import {
	Actor,
} from '../../ddl/user/Actor';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface ActorESelect
    extends SystemGeneratedRowESelect, ActorEOptionalId {
	// Non-Id Properties
	hash?: number | IQNumberField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	userAccount?: UserAccountESelect;
	device?: DeviceESelect;
	application?: ApplicationESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface ActorEId
    extends SystemGeneratedRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface ActorEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface ActorEUpdateProperties
	extends SystemGeneratedRowEUpdateProperties {
	// Non-Id Properties
	hash?: number | IQNumberField;

	// Non-Id Relations - ids only & no OneToMany's
	userAccount?: UserAccountEOptionalId;
	device?: DeviceEOptionalId;
	application?: ApplicationEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface ActorGraph
	extends ActorEOptionalId, SystemGeneratedRowGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties
	hash?: number | IQNumberField;

	// Relations
	userAccount?: UserAccountGraph;
	device?: DeviceGraph;
	application?: ApplicationGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface ActorEUpdateColumns
	extends SystemGeneratedRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	ACTOR_HASH?: number | IQNumberField;
	USER_ACCOUNT_ID?: number | IQNumberField;
	DEVICE_ID?: number | IQNumberField;
	APPLICATION_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface ActorECreateProperties
extends Partial<ActorEId>, ActorEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface ActorECreateColumns
extends ActorEId, ActorEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QActor extends QSystemGeneratedRow<Actor>
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields
	hash: IQNumberField;

	// Non-Id Relations
	userAccount: QUserAccountQRelation;
	device: QDeviceQRelation;
	application: QApplicationQRelation;

}


// Entity Id Interface
export interface QActorQId extends QSystemGeneratedRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QActorQRelation
	extends QSystemGeneratedRowQRelation<Actor, QActor>, QActorQId {
}

