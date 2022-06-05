import { IQDateField, IQNumberField, IQStringField } from '@airport/air-traffic-control';
import { RepositoryEntityGraph, RepositoryEntityEId, RepositoryEntityEUpdateColumns, RepositoryEntityEUpdateProperties, RepositoryEntityESelect, QRepositoryEntityQId, QRepositoryEntityQRelation, QRepositoryEntity } from '@airport/holding-pattern';
import { IFactor } from './factor';
/**
 * SELECT - All fields and relations (optional).
 */
export interface FactorESelect extends RepositoryEntityESelect, FactorEOptionalId {
    object?: string | IQStringField;
    action?: string | IQStringField;
    customText?: string | IQStringField;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface FactorEId extends RepositoryEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface FactorEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface FactorEUpdateProperties extends RepositoryEntityEUpdateProperties {
    object?: string | IQStringField;
    action?: string | IQStringField;
    customText?: string | IQStringField;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface FactorGraph extends FactorEOptionalId, RepositoryEntityGraph {
    object?: string | IQStringField;
    action?: string | IQStringField;
    customText?: string | IQStringField;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface FactorEUpdateColumns extends RepositoryEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    CREATED_AT?: Date | IQDateField;
    SYSTEM_WIDE_OPERATION_ID?: number | IQNumberField;
    ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
    ORIGINAL_REPOSITORY_ID?: number | IQNumberField;
    ORIGINAL_ACTOR_ID?: number | IQNumberField;
    OBJECT?: string | IQStringField;
    ACTION?: string | IQStringField;
    NAME?: string | IQStringField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface FactorECreateProperties extends Partial<FactorEId>, FactorEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface FactorECreateColumns extends FactorEId, FactorEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QFactor extends QRepositoryEntity {
    object: IQStringField;
    action: IQStringField;
    customText: IQStringField;
}
export interface QFactorQId extends QRepositoryEntityQId {
}
export interface QFactorQRelation extends QRepositoryEntityQRelation<IFactor, QFactor>, QFactorQId {
}
//# sourceMappingURL=qfactor.d.ts.map