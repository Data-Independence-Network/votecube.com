import { IQDateField, IQNumberField, IQOneToManyRelation } from '@airport/air-traffic-control';
import { ImmutableActorRowGraph, ImmutableActorRowEId, ImmutableActorRowEUpdateColumns, ImmutableActorRowEUpdateProperties, ImmutableActorRowESelect, QImmutableActorRowQId, QImmutableActorRowQRelation, QImmutableActorRow } from '../infrastructure/row/qimmutableactorrow';
import { PollRunGraph, PollRunEOptionalId, PollRunESelect, QPollRunQRelation } from '../poll/run/qpollrun';
import { VoteVersionGraph, VoteVersionESelect, QVoteVersion } from './qvoteversion';
import { VoteVersion } from '../../ddl/vote/VoteVersion';
import { Vote } from '../../ddl/vote/Vote';
/**
 * SELECT - All fields and relations (optional).
 */
export interface VoteESelect extends ImmutableActorRowESelect, VoteEOptionalId {
    type?: number | IQNumberField;
    run?: PollRunESelect;
    revisions?: VoteVersionESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface VoteEId extends ImmutableActorRowEId {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface VoteEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface VoteEUpdateProperties extends ImmutableActorRowEUpdateProperties {
    type?: number | IQNumberField;
    run?: PollRunEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface VoteGraph extends VoteEOptionalId, ImmutableActorRowGraph {
    type?: number | IQNumberField;
    run?: PollRunGraph;
    revisions?: VoteVersionGraph[];
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface VoteEUpdateColumns extends ImmutableActorRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    USER_ACCOUNT_ID?: number | IQNumberField;
    VOTE_TYPE_ID?: number | IQNumberField;
    POLL_RUN_ID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface VoteECreateProperties extends Partial<VoteEId>, VoteEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface VoteECreateColumns extends VoteEId, VoteEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QVote extends QImmutableActorRow<Vote> {
    id: IQNumberField;
    type: IQNumberField;
    run: QPollRunQRelation;
    revisions: IQOneToManyRelation<VoteVersion, QVoteVersion>;
}
export interface QVoteQId extends QImmutableActorRowQId {
    id: IQNumberField;
}
export interface QVoteQRelation extends QImmutableActorRowQRelation<Vote, QVote>, QVoteQId {
}
//# sourceMappingURL=qvote.d.ts.map