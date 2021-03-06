import { IQDateField, IQNumberField, IQOneToManyRelation } from '@airport/air-traffic-control';
import { AgeSuitableRowGraph, AgeSuitableRowEId, AgeSuitableRowEUpdateColumns, AgeSuitableRowEUpdateProperties, AgeSuitableRowESelect, QAgeSuitableRowQId, QAgeSuitableRowQRelation, QAgeSuitableRow } from '../../infrastructure/row/qagesuitablerow';
import { OutcomeTranslationGraph, OutcomeTranslationEOptionalId, OutcomeTranslationESelect, QOutcomeTranslationQRelation } from './translation/qoutcometranslation';
import { PollRevisionGraph, PollRevisionESelect, QPollRevision } from './qpollrevision';
import { PollRevision } from '../../../ddl/poll/revision/PollRevision';
import { Outcome } from '../../../ddl/poll/revision/Outcome';
/**
 * SELECT - All fields and relations (optional).
 */
export interface OutcomeESelect extends AgeSuitableRowESelect, OutcomeEOptionalId {
    parentTranslation?: OutcomeTranslationESelect;
    parent?: OutcomeESelect;
    children?: OutcomeESelect;
    pollRevisionsA?: PollRevisionESelect;
    pollRevisionsB?: PollRevisionESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface OutcomeEId extends AgeSuitableRowEId {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface OutcomeEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface OutcomeEUpdateProperties extends AgeSuitableRowEUpdateProperties {
    parentTranslation?: OutcomeTranslationEOptionalId;
    parent?: OutcomeEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface OutcomeGraph extends OutcomeEOptionalId, AgeSuitableRowGraph {
    parentTranslation?: OutcomeTranslationGraph;
    parent?: OutcomeGraph;
    children?: OutcomeGraph[];
    pollRevisionsA?: PollRevisionGraph[];
    pollRevisionsB?: PollRevisionGraph[];
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface OutcomeEUpdateColumns extends AgeSuitableRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    USER_ACCOUNT_ID?: number | IQNumberField;
    AGE_SUITABILITY?: number | IQNumberField;
    PARENT_OUTCOME_TRANSLATION_ID?: number | IQNumberField;
    PARENT_OUTCOME_ID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface OutcomeECreateProperties extends Partial<OutcomeEId>, OutcomeEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface OutcomeECreateColumns extends OutcomeEId, OutcomeEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QOutcome extends QAgeSuitableRow<Outcome> {
    id: IQNumberField;
    parentTranslation: QOutcomeTranslationQRelation;
    parent: QOutcomeQRelation;
    children: IQOneToManyRelation<Outcome, QOutcome>;
    pollRevisionsA: IQOneToManyRelation<PollRevision, QPollRevision>;
    pollRevisionsB: IQOneToManyRelation<PollRevision, QPollRevision>;
}
export interface QOutcomeQId extends QAgeSuitableRowQId {
    id: IQNumberField;
}
export interface QOutcomeQRelation extends QAgeSuitableRowQRelation<Outcome, QOutcome>, QOutcomeQId {
}
//# sourceMappingURL=qoutcome.d.ts.map