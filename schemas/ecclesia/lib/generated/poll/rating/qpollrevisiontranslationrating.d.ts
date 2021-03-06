import { IQDateField, IQNumberField, IQOneToManyRelation } from '@airport/air-traffic-control';
import { ImmutableActorRowGraph, ImmutableActorRowEId, ImmutableActorRowEUpdateColumns, ImmutableActorRowEUpdateProperties, ImmutableActorRowESelect, QImmutableActorRowQId, QImmutableActorRowQRelation, QImmutableActorRow } from '../../infrastructure/row/qimmutableactorrow';
import { PollRunGraph, PollRunEOptionalId, PollRunESelect, QPollRunQRelation } from '../run/qpollrun';
import { RatingGraph, RatingEOptionalId, RatingESelect, QRatingQRelation } from '../../infrastructure/rating/qrating';
import { PollRevisionTranslationRating } from '../../../ddl/poll/rating/PollRevisionTranslationRating';
/**
 * SELECT - All fields and relations (optional).
 */
export interface PollRevisionTranslationRatingESelect extends ImmutableActorRowESelect, PollRevisionTranslationRatingEOptionalId {
    value?: number | IQNumberField;
    run?: PollRunESelect;
    rating?: RatingESelect;
    parent?: PollRevisionTranslationRatingESelect;
    child?: PollRevisionTranslationRatingESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollRevisionTranslationRatingEId extends ImmutableActorRowEId {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface PollRevisionTranslationRatingEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollRevisionTranslationRatingEUpdateProperties extends ImmutableActorRowEUpdateProperties {
    value?: number | IQNumberField;
    run?: PollRunEOptionalId;
    rating?: RatingEOptionalId;
    parent?: PollRevisionTranslationRatingEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollRevisionTranslationRatingGraph extends PollRevisionTranslationRatingEOptionalId, ImmutableActorRowGraph {
    value?: number | IQNumberField;
    run?: PollRunGraph;
    rating?: RatingGraph;
    parent?: PollRevisionTranslationRatingGraph;
    child?: PollRevisionTranslationRatingGraph[];
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface PollRevisionTranslationRatingEUpdateColumns extends ImmutableActorRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    USER_ACCOUNT_ID?: number | IQNumberField;
    VALUE?: number | IQNumberField;
    POLL_RUN_ID?: number | IQNumberField;
    RATING_ID?: number | IQNumberField;
    PARENT_POLL_REVISION_TRANSLATION_RATING_ID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollRevisionTranslationRatingECreateProperties extends Partial<PollRevisionTranslationRatingEId>, PollRevisionTranslationRatingEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollRevisionTranslationRatingECreateColumns extends PollRevisionTranslationRatingEId, PollRevisionTranslationRatingEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollRevisionTranslationRating extends QImmutableActorRow<PollRevisionTranslationRating> {
    id: IQNumberField;
    value: IQNumberField;
    run: QPollRunQRelation;
    rating: QRatingQRelation;
    parent: QPollRevisionTranslationRatingQRelation;
    child: IQOneToManyRelation<PollRevisionTranslationRating, QPollRevisionTranslationRating>;
}
export interface QPollRevisionTranslationRatingQId extends QImmutableActorRowQId {
    id: IQNumberField;
}
export interface QPollRevisionTranslationRatingQRelation extends QImmutableActorRowQRelation<PollRevisionTranslationRating, QPollRevisionTranslationRating>, QPollRevisionTranslationRatingQId {
}
//# sourceMappingURL=qpollrevisiontranslationrating.d.ts.map