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
	PollRevisionGraph,
	PollRevisionEId,
	PollRevisionEOptionalId,
	PollRevisionEUpdateProperties,
	PollRevisionESelect,
	QPollRevision,
	QPollRevisionQId,
	QPollRevisionQRelation,
} from '../poll/revision/qpollrevision';
import {
	PollRevision,
} from '../../ddl/poll/revision/PollRevision';
import {
	PollRunGraph,
	PollRunEId,
	PollRunEOptionalId,
	PollRunEUpdateProperties,
	PollRunESelect,
	QPollRun,
	QPollRunQId,
	QPollRunQRelation,
} from '../poll/run/qpollrun';
import {
	PollRun,
} from '../../ddl/poll/run/PollRun';
import {
	VoteGraph,
	VoteEId,
	VoteEOptionalId,
	VoteEUpdateProperties,
	VoteESelect,
	QVote,
	QVoteQId,
	QVoteQRelation,
} from '../vote/qvote';
import {
	Vote,
} from '../../ddl/vote/Vote';
import {
	PollRevisionOpinionRatingGraph,
	PollRevisionOpinionRatingEId,
	PollRevisionOpinionRatingEOptionalId,
	PollRevisionOpinionRatingEUpdateProperties,
	PollRevisionOpinionRatingESelect,
	QPollRevisionOpinionRating,
	QPollRevisionOpinionRatingQId,
	QPollRevisionOpinionRatingQRelation,
} from './rating/qpollrevisionopinionrating';
import {
	PollRevisionOpinionRating,
} from '../../ddl/opinion/rating/PollRevisionOpinionRating';
import {
	PollRevisionOpinionVersionGraph,
	PollRevisionOpinionVersionEId,
	PollRevisionOpinionVersionEOptionalId,
	PollRevisionOpinionVersionEUpdateProperties,
	PollRevisionOpinionVersionESelect,
	QPollRevisionOpinionVersion,
	QPollRevisionOpinionVersionQId,
	QPollRevisionOpinionVersionQRelation,
} from './qpollrevisionopinionversion';
import {
	PollRevisionOpinionVersion,
} from '../../ddl/opinion/PollRevisionOpinionVersion';
import {
	FactorOpinionVersionGraph,
	FactorOpinionVersionEId,
	FactorOpinionVersionEOptionalId,
	FactorOpinionVersionEUpdateProperties,
	FactorOpinionVersionESelect,
	QFactorOpinionVersion,
	QFactorOpinionVersionQId,
	QFactorOpinionVersionQRelation,
} from './qfactoropinionversion';
import {
	FactorOpinionVersion,
} from '../../ddl/opinion/FactorOpinionVersion';
import {
	OutcomeOpinionVersionGraph,
	OutcomeOpinionVersionEId,
	OutcomeOpinionVersionEOptionalId,
	OutcomeOpinionVersionEUpdateProperties,
	OutcomeOpinionVersionESelect,
	QOutcomeOpinionVersion,
	QOutcomeOpinionVersionQId,
	QOutcomeOpinionVersionQRelation,
} from './qoutcomeopinionversion';
import {
	OutcomeOpinionVersion,
} from '../../ddl/opinion/OutcomeOpinionVersion';
import {
	PositionOpinionVersionGraph,
	PositionOpinionVersionEId,
	PositionOpinionVersionEOptionalId,
	PositionOpinionVersionEUpdateProperties,
	PositionOpinionVersionESelect,
	QPositionOpinionVersion,
	QPositionOpinionVersionQId,
	QPositionOpinionVersionQRelation,
} from './qpositionopinionversion';
import {
	PositionOpinionVersion,
} from '../../ddl/opinion/PositionOpinionVersion';
import {
	PollRevisionOpinion,
} from '../../ddl/opinion/PollRevisionOpinion';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface PollRevisionOpinionESelect
    extends ImmutableActorRowESelect, PollRevisionOpinionEOptionalId {
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	pollRevision?: PollRevisionESelect;
	run?: PollRunESelect;
	vote?: VoteESelect;
	ratings?: PollRevisionOpinionRatingESelect;
	versions?: PollRevisionOpinionVersionESelect;
	factors?: FactorOpinionVersionESelect;
	outcomes?: OutcomeOpinionVersionESelect;
	positions?: PositionOpinionVersionESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollRevisionOpinionEId
    extends ImmutableActorRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface PollRevisionOpinionEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollRevisionOpinionEUpdateProperties
	extends ImmutableActorRowEUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - ids only & no OneToMany's
	pollRevision?: PollRevisionEOptionalId;
	run?: PollRunEOptionalId;
	vote?: VoteEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollRevisionOpinionGraph
	extends PollRevisionOpinionEOptionalId, ImmutableActorRowGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties

	// Relations
	pollRevision?: PollRevisionGraph;
	run?: PollRunGraph;
	vote?: VoteGraph;
	ratings?: PollRevisionOpinionRatingGraph[];
	versions?: PollRevisionOpinionVersionGraph[];
	factors?: FactorOpinionVersionGraph[];
	outcomes?: OutcomeOpinionVersionGraph[];
	positions?: PositionOpinionVersionGraph[];

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface PollRevisionOpinionEUpdateColumns
	extends ImmutableActorRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	USER_ACCOUNT_ID?: number | IQNumberField;
	POLL_ID?: number | IQNumberField;
	POLL_RUN_ID?: number | IQNumberField;
	VOTE_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollRevisionOpinionECreateProperties
extends Partial<PollRevisionOpinionEId>, PollRevisionOpinionEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollRevisionOpinionECreateColumns
extends PollRevisionOpinionEId, PollRevisionOpinionEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollRevisionOpinion extends QImmutableActorRow<PollRevisionOpinion>
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields

	// Non-Id Relations
	pollRevision: QPollRevisionQRelation;
	run: QPollRunQRelation;
	vote: QVoteQRelation;
	ratings: IQOneToManyRelation<PollRevisionOpinionRating, QPollRevisionOpinionRating>;
	versions: IQOneToManyRelation<PollRevisionOpinionVersion, QPollRevisionOpinionVersion>;
	factors: IQOneToManyRelation<FactorOpinionVersion, QFactorOpinionVersion>;
	outcomes: IQOneToManyRelation<OutcomeOpinionVersion, QOutcomeOpinionVersion>;
	positions: IQOneToManyRelation<PositionOpinionVersion, QPositionOpinionVersion>;

}


// Entity Id Interface
export interface QPollRevisionOpinionQId extends QImmutableActorRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QPollRevisionOpinionQRelation
	extends QImmutableActorRowQRelation<PollRevisionOpinion, QPollRevisionOpinion>, QPollRevisionOpinionQId {
}

