import { IQEntity } from '@airport/air-traffic-control';
import { ImmutableRowGraph, ImmutableRowEId, ImmutableRowEUpdateColumns, ImmutableRowEUpdateProperties, ImmutableRowESelect, QImmutableRowQId, QImmutableRowQRelation, QImmutableRow } from './qimmutablerow';
/**
 * SELECT - All fields and relations (optional).
 */
export interface SystemGeneratedRowESelect extends ImmutableRowESelect, SystemGeneratedRowEOptionalId {
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface SystemGeneratedRowEId extends ImmutableRowEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface SystemGeneratedRowEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface SystemGeneratedRowEUpdateProperties extends ImmutableRowEUpdateProperties {
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface SystemGeneratedRowGraph extends SystemGeneratedRowEOptionalId, ImmutableRowGraph {
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface SystemGeneratedRowEUpdateColumns extends ImmutableRowEUpdateColumns {
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface SystemGeneratedRowECreateProperties extends Partial<SystemGeneratedRowEId>, SystemGeneratedRowEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface SystemGeneratedRowECreateColumns extends SystemGeneratedRowEId, SystemGeneratedRowEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QSystemGeneratedRow<T> extends QImmutableRow<T> {
}
export interface QSystemGeneratedRowQId extends QImmutableRowQId {
}
export interface QSystemGeneratedRowQRelation<SubType, SubQType extends IQEntity<SubType>> extends QImmutableRowQRelation<SubType, SubQType>, QSystemGeneratedRowQId {
}
//# sourceMappingURL=qsystemgeneratedrow.d.ts.map