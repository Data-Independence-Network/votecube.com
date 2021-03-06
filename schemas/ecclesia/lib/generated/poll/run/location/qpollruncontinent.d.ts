import { IEntityIdProperties, IEntityCascadeGraph, IEntityUpdateColumns, IEntityUpdateProperties, IEntitySelectProperties, IQNumberField, IQEntity, IQRelation } from '@airport/air-traffic-control';
import { ContinentGraph, ContinentEOptionalId, ContinentESelect, QContinentQRelation } from '../../../location/qcontinent';
import { PollRunGraph, PollRunEOptionalId, PollRunESelect, QPollRunQRelation } from '../qpollrun';
import { PollRunContinent } from '../../../../ddl/poll/run/location/PollRunContinent';
/**
 * SELECT - All fields and relations (optional).
 */
export interface PollRunContinentESelect extends IEntitySelectProperties, PollRunContinentEOptionalId {
    continent?: ContinentESelect;
    run?: PollRunESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollRunContinentEId extends IEntityIdProperties {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface PollRunContinentEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollRunContinentEUpdateProperties extends IEntityUpdateProperties {
    continent?: ContinentEOptionalId;
    run?: PollRunEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollRunContinentGraph extends PollRunContinentEOptionalId, IEntityCascadeGraph {
    continent?: ContinentGraph;
    run?: PollRunGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface PollRunContinentEUpdateColumns extends IEntityUpdateColumns {
    CONTINENT_ID?: number | IQNumberField;
    POLL_RUN_ID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollRunContinentECreateProperties extends Partial<PollRunContinentEId>, PollRunContinentEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollRunContinentECreateColumns extends PollRunContinentEId, PollRunContinentEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollRunContinent extends IQEntity<PollRunContinent> {
    id: IQNumberField;
    continent: QContinentQRelation;
    run: QPollRunQRelation;
}
export interface QPollRunContinentQId {
    id: IQNumberField;
}
export interface QPollRunContinentQRelation extends IQRelation<PollRunContinent, QPollRunContinent>, QPollRunContinentQId {
}
//# sourceMappingURL=qpollruncontinent.d.ts.map