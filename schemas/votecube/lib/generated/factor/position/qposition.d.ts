import { IQNumberField, IQOneToManyRelation, IQStringField } from '@airport/air-control';
import { RepositoryEntityGraph, RepositoryEntityEId, RepositoryEntityEUpdateColumns, RepositoryEntityEUpdateProperties, RepositoryEntityESelect, QRepositoryEntityQId, QRepositoryEntityQRelation, QRepositoryEntity } from '@airport/holding-pattern';
import { FactorPositionGraph, FactorPositionESelect, QFactorPosition } from './qfactorposition';
import { FactorPosition } from '../../../ddl/factor/position/FactorPosition';
import { Position } from '../../../ddl/factor/Position';
/**
 * SELECT - All fields and relations (optional).
 */
export interface PositionESelect extends RepositoryEntityESelect, PositionEOptionalId {
    name?: string | IQStringField;
    factorPositions?: FactorPositionESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PositionEId extends RepositoryEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface PositionEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PositionEUpdateProperties extends RepositoryEntityEUpdateProperties {
    name?: string | IQStringField;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PositionGraph extends PositionEOptionalId, RepositoryEntityGraph {
    name?: string | IQStringField;
    factorPositions?: FactorPositionGraph[];
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface PositionEUpdateColumns extends RepositoryEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    SYSTEM_WIDE_OPERATION_ID?: number | IQNumberField;
    NAME?: string | IQStringField;
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
export interface QPosition extends QRepositoryEntity<Position> {
    name: IQStringField;
    factorPositions: IQOneToManyRelation<FactorPosition, QFactorPosition>;
}
export interface QPositionQId extends QRepositoryEntityQId {
}
export interface QPositionQRelation extends QRepositoryEntityQRelation<Position, QPosition>, QPositionQId {
}
//# sourceMappingURL=qposition.d.ts.map