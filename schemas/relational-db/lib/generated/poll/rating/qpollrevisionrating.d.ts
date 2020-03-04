import { IQDateField, IQNumberField } from '@airport/air-control';
import { MutableActorRowECascadeGraph, MutableActorRowEId, MutableActorRowEUpdateColumns, MutableActorRowEUpdateProperties, MutableActorRowESelect, QMutableActorRowQId, QMutableActorRowQRelation, QMutableActorRow } from '../../infrastructure/row/qmutableactorrow';
import { PollRevisionEOptionalId, PollRevisionESelect, QPollRevisionQRelation } from '../revision/qpollrevision';
import { RatingEOptionalId, RatingESelect, QRatingQRelation } from '../../infrastructure/rating/qrating';
/**
 * SELECT - All fields and relations (optional).
 */
export interface PollRevisionRatingESelect extends MutableActorRowESelect, PollRevisionRatingEOptionalId {
    value?: number | IQNumberField;
    pollRevision?: PollRevisionESelect;
    rating?: RatingESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollRevisionRatingEId extends MutableActorRowEId {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface PollRevisionRatingEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollRevisionRatingEUpdateProperties extends MutableActorRowEUpdateProperties {
    value?: number | IQNumberField;
    pollRevision?: PollRevisionEOptionalId;
    rating?: RatingEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollRevisionRatingECascadeGraph extends MutableActorRowECascadeGraph {
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface PollRevisionRatingEUpdateColumns extends MutableActorRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    ACTOR_ID?: number | IQNumberField;
    UPDATED_AT?: Date | IQDateField;
    VALUE?: number | IQNumberField;
    POLL_REVISION_ID?: number | IQNumberField;
    RATING_ID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollRevisionRatingECreateProperties extends Partial<PollRevisionRatingEId>, PollRevisionRatingEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollRevisionRatingECreateColumns extends PollRevisionRatingEId, PollRevisionRatingEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollRevisionRating extends QMutableActorRow {
    id: IQNumberField;
    value: IQNumberField;
    pollRevision: QPollRevisionQRelation;
    rating: QRatingQRelation;
}
export interface QPollRevisionRatingQId extends QMutableActorRowQId {
    id: IQNumberField;
}
export interface QPollRevisionRatingQRelation extends QMutableActorRowQRelation<QPollRevisionRating>, QPollRevisionRatingQId {
}