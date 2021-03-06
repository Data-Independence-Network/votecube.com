import { IEntityIdProperties, IEntityCascadeGraph, IEntityUpdateColumns, IEntityUpdateProperties, IEntitySelectProperties, IQNumberField, IQStringField, IQEntity, IQRelation } from '@airport/air-traffic-control';
import { VoteVersionGraph, VoteVersionEOptionalId, VoteVersionESelect, QVoteVersionQRelation } from './qvoteversion';
import { PollRevisionFactorPositionGraph, PollRevisionFactorPositionEOptionalId, PollRevisionFactorPositionESelect, QPollRevisionFactorPositionQRelation } from '../poll/revision/qpollrevisionfactorposition';
import { VoteFactorTypeGraph, VoteFactorTypeEOptionalId, VoteFactorTypeESelect, QVoteFactorTypeQRelation } from './qvotefactortype';
import { VoteFactor } from '../../ddl/vote/VoteFactor';
/**
 * SELECT - All fields and relations (optional).
 */
export interface VoteFactorESelect extends IEntitySelectProperties, VoteFactorEOptionalId {
    share?: string | IQStringField;
    voteRevision?: VoteVersionESelect;
    pollFactorPos?: PollRevisionFactorPositionESelect;
    type?: VoteFactorTypeESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface VoteFactorEId extends IEntityIdProperties {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface VoteFactorEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface VoteFactorEUpdateProperties extends IEntityUpdateProperties {
    share?: string | IQStringField;
    voteRevision?: VoteVersionEOptionalId;
    pollFactorPos?: PollRevisionFactorPositionEOptionalId;
    type?: VoteFactorTypeEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface VoteFactorGraph extends VoteFactorEOptionalId, IEntityCascadeGraph {
    share?: string | IQStringField;
    voteRevision?: VoteVersionGraph;
    pollFactorPos?: PollRevisionFactorPositionGraph;
    type?: VoteFactorTypeGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface VoteFactorEUpdateColumns extends IEntityUpdateColumns {
    SHARE?: string | IQStringField;
    VOTE_VERSION_ID?: number | IQNumberField;
    POLL_REVISION_FACTOR_POSITION_ID?: number | IQNumberField;
    VOTE_FACTOR_TYPE_ID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface VoteFactorECreateProperties extends Partial<VoteFactorEId>, VoteFactorEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface VoteFactorECreateColumns extends VoteFactorEId, VoteFactorEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QVoteFactor extends IQEntity<VoteFactor> {
    id: IQNumberField;
    share: IQStringField;
    voteRevision: QVoteVersionQRelation;
    pollFactorPos: QPollRevisionFactorPositionQRelation;
    type: QVoteFactorTypeQRelation;
}
export interface QVoteFactorQId {
    id: IQNumberField;
}
export interface QVoteFactorQRelation extends IQRelation<VoteFactor, QVoteFactor>, QVoteFactorQId {
}
//# sourceMappingURL=qvotefactor.d.ts.map