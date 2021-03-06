import { IQDateField, IQNumberField, IQOneToManyRelation, IQStringField } from '@airport/air-traffic-control';
import { ImmutableActorRowGraph, ImmutableActorRowEId, ImmutableActorRowEUpdateColumns, ImmutableActorRowEUpdateProperties, ImmutableActorRowESelect, QImmutableActorRowQId, QImmutableActorRowQRelation, QImmutableActorRow } from '../../infrastructure/row/qimmutableactorrow';
import { PositionGraph, PositionEOptionalId, PositionESelect, QPositionQRelation } from './qposition';
import { LanguageGraph, LanguageEOptionalId, LanguageESelect, QLanguageQRelation } from '../../infrastructure/qlanguage';
import { PositionTranslation } from '../../../ddl/factor/position/PositionTranslation';
/**
 * SELECT - All fields and relations (optional).
 */
export interface PositionTranslationESelect extends ImmutableActorRowESelect, PositionTranslationEOptionalId {
    name?: string | IQStringField;
    position?: PositionESelect;
    language?: LanguageESelect;
    parent?: PositionTranslationESelect;
    children?: PositionTranslationESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PositionTranslationEId extends ImmutableActorRowEId {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface PositionTranslationEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PositionTranslationEUpdateProperties extends ImmutableActorRowEUpdateProperties {
    name?: string | IQStringField;
    position?: PositionEOptionalId;
    language?: LanguageEOptionalId;
    parent?: PositionTranslationEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PositionTranslationGraph extends PositionTranslationEOptionalId, ImmutableActorRowGraph {
    name?: string | IQStringField;
    position?: PositionGraph;
    language?: LanguageGraph;
    parent?: PositionTranslationGraph;
    children?: PositionTranslationGraph[];
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface PositionTranslationEUpdateColumns extends ImmutableActorRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    USER_ACCOUNT_ID?: number | IQNumberField;
    POSITION_NAME?: string | IQStringField;
    POSITION_ID?: number | IQNumberField;
    LANGUAGE_ID?: number | IQNumberField;
    PARENT_POSITION_TRANSLATION_ID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PositionTranslationECreateProperties extends Partial<PositionTranslationEId>, PositionTranslationEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PositionTranslationECreateColumns extends PositionTranslationEId, PositionTranslationEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPositionTranslation extends QImmutableActorRow<PositionTranslation> {
    id: IQNumberField;
    name: IQStringField;
    position: QPositionQRelation;
    language: QLanguageQRelation;
    parent: QPositionTranslationQRelation;
    children: IQOneToManyRelation<PositionTranslation, QPositionTranslation>;
}
export interface QPositionTranslationQId extends QImmutableActorRowQId {
    id: IQNumberField;
}
export interface QPositionTranslationQRelation extends QImmutableActorRowQRelation<PositionTranslation, QPositionTranslation>, QPositionTranslationQId {
}
//# sourceMappingURL=qpositiontranslation.d.ts.map