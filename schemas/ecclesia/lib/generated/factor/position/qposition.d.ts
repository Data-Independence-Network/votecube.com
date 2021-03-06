import { IQDateField, IQNumberField, IQOneToManyRelation } from '@airport/air-traffic-control';
import { AgeSuitableRowGraph, AgeSuitableRowEId, AgeSuitableRowEUpdateColumns, AgeSuitableRowEUpdateProperties, AgeSuitableRowESelect, QAgeSuitableRowQId, QAgeSuitableRowQRelation, QAgeSuitableRow } from '../../infrastructure/row/qagesuitablerow';
import { PollRevisionGraph, PollRevisionEOptionalId, PollRevisionESelect, QPollRevisionQRelation } from '../../poll/revision/qpollrevision';
import { PositionTranslationGraph, PositionTranslationEOptionalId, PositionTranslationESelect, QPositionTranslation, QPositionTranslationQRelation } from './qpositiontranslation';
import { PositionTranslation } from '../../../ddl/factor/position/PositionTranslation';
import { FactorPositionGraph, FactorPositionESelect, QFactorPosition } from './qfactorposition';
import { FactorPosition } from '../../../ddl/factor/position/FactorPosition';
import { Position } from '../../../ddl/factor/position/Position';
/**
 * SELECT - All fields and relations (optional).
 */
export interface PositionESelect extends AgeSuitableRowESelect, PositionEOptionalId {
    createdAtPollRevision?: PollRevisionESelect;
    parentTranslation?: PositionTranslationESelect;
    parent?: PositionESelect;
    children?: PositionESelect;
    factorPositions?: FactorPositionESelect;
    translations?: PositionTranslationESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PositionEId extends AgeSuitableRowEId {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface PositionEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PositionEUpdateProperties extends AgeSuitableRowEUpdateProperties {
    createdAtPollRevision?: PollRevisionEOptionalId;
    parentTranslation?: PositionTranslationEOptionalId;
    parent?: PositionEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PositionGraph extends PositionEOptionalId, AgeSuitableRowGraph {
    createdAtPollRevision?: PollRevisionGraph;
    parentTranslation?: PositionTranslationGraph;
    parent?: PositionGraph;
    children?: PositionGraph[];
    factorPositions?: FactorPositionGraph[];
    translations?: PositionTranslationGraph[];
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface PositionEUpdateColumns extends AgeSuitableRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    USER_ACCOUNT_ID?: number | IQNumberField;
    AGE_SUITABILITY?: number | IQNumberField;
    POLL_REVISION_ID?: number | IQNumberField;
    PARENT_POSITION_TRANSLATION_ID?: number | IQNumberField;
    PARENT_POSITION_ID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PositionECreateProperties extends Partial<PositionEId>, PositionEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PositionECreateColumns extends PositionEId, PositionEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPosition extends QAgeSuitableRow<Position> {
    id: IQNumberField;
    createdAtPollRevision: QPollRevisionQRelation;
    parentTranslation: QPositionTranslationQRelation;
    parent: QPositionQRelation;
    children: IQOneToManyRelation<Position, QPosition>;
    factorPositions: IQOneToManyRelation<FactorPosition, QFactorPosition>;
    translations: IQOneToManyRelation<PositionTranslation, QPositionTranslation>;
}
export interface QPositionQId extends QAgeSuitableRowQId {
    id: IQNumberField;
}
export interface QPositionQRelation extends QAgeSuitableRowQRelation<Position, QPosition>, QPositionQId {
}
//# sourceMappingURL=qposition.d.ts.map