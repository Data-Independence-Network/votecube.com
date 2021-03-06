import { IQDateField, IQNumberField, IQStringField } from '@airport/air-traffic-control';
import { SystemGeneratedRowGraph, SystemGeneratedRowEId, SystemGeneratedRowEUpdateColumns, SystemGeneratedRowEUpdateProperties, SystemGeneratedRowESelect, QSystemGeneratedRowQId, QSystemGeneratedRowQRelation, QSystemGeneratedRow } from './row/qsystemgeneratedrow';
import { Language } from '../../ddl/infrastructure/Language';
/**
 * SELECT - All fields and relations (optional).
 */
export interface LanguageESelect extends SystemGeneratedRowESelect, LanguageEOptionalId {
    name?: string | IQStringField;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface LanguageEId extends SystemGeneratedRowEId {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface LanguageEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface LanguageEUpdateProperties extends SystemGeneratedRowEUpdateProperties {
    name?: string | IQStringField;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface LanguageGraph extends LanguageEOptionalId, SystemGeneratedRowGraph {
    name?: string | IQStringField;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface LanguageEUpdateColumns extends SystemGeneratedRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    LANGUAGE_NAME?: string | IQStringField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface LanguageECreateProperties extends Partial<LanguageEId>, LanguageEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface LanguageECreateColumns extends LanguageEId, LanguageEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QLanguage extends QSystemGeneratedRow<Language> {
    id: IQNumberField;
    name: IQStringField;
}
export interface QLanguageQId extends QSystemGeneratedRowQId {
    id: IQNumberField;
}
export interface QLanguageQRelation extends QSystemGeneratedRowQRelation<Language, QLanguage>, QLanguageQId {
}
//# sourceMappingURL=qlanguage.d.ts.map