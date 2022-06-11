import { IQNumberField, IQStringField } from '@airport/air-traffic-control';
import { AirEntityGraph, AirEntityEId, AirEntityEUpdateColumns, AirEntityEUpdateProperties, AirEntityESelect, QAirEntityQId, QAirEntityQRelation, QAirEntity } from '@airport/holding-pattern';
import { AgreementGraph, AgreementEOptionalId, AgreementESelect, QAgreementQRelation } from './qagreement';
import { ReasonGraph, ReasonEOptionalId, ReasonESelect, QReasonQRelation } from '../idea/qreason';
import { IAgreementFactor } from './agreementfactor';
/**
 * SELECT - All fields and relations (optional).
 */
export interface AgreementFactorESelect extends AirEntityESelect, AgreementFactorEOptionalId {
    axis?: string | IQStringField;
    share?: number | IQNumberField;
    agreement?: AgreementESelect;
    reason?: ReasonESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface AgreementFactorEId extends AirEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface AgreementFactorEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface AgreementFactorEUpdateProperties extends AirEntityEUpdateProperties {
    axis?: string | IQStringField;
    share?: number | IQNumberField;
    agreement?: AgreementEOptionalId;
    reason?: ReasonEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface AgreementFactorGraph extends AgreementFactorEOptionalId, AirEntityGraph {
    axis?: string | IQStringField;
    share?: number | IQNumberField;
    agreement?: AgreementGraph;
    reason?: ReasonGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface AgreementFactorEUpdateColumns extends AirEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    SYSTEM_WIDE_OPERATION_ID?: number | IQNumberField;
    ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
    ORIGINAL_REPOSITORY_ID?: number | IQNumberField;
    ORIGINAL_ACTOR_ID?: number | IQNumberField;
    AXIS?: string | IQStringField;
    SHARE?: number | IQNumberField;
    AGREEMENTS_RID_1?: number | IQNumberField;
    AGREEMENTS_AID_1?: number | IQNumberField;
    AGREEMENTS_ARID_1?: number | IQNumberField;
    REASONS_RID_1?: number | IQNumberField;
    REASONS_AID_1?: number | IQNumberField;
    REASONS_ARID_1?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface AgreementFactorECreateProperties extends Partial<AgreementFactorEId>, AgreementFactorEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface AgreementFactorECreateColumns extends AgreementFactorEId, AgreementFactorEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QAgreementFactor extends QAirEntity {
    axis: IQStringField;
    share: IQNumberField;
    agreement: QAgreementQRelation;
    reason: QReasonQRelation;
}
export interface QAgreementFactorQId extends QAirEntityQId {
}
export interface QAgreementFactorQRelation extends QAirEntityQRelation<IAgreementFactor, QAgreementFactor>, QAgreementFactorQId {
}
//# sourceMappingURL=qagreementfactor.d.ts.map