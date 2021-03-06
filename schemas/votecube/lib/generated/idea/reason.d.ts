import { IAirEntity } from '@airport/holding-pattern';
import { ISituationIdea } from './situationidea';
import { IIdea } from './idea';
import { IFactor } from '../factor/factor';
import { IPosition } from '../factor/position';
export interface IReason extends IAirEntity {
    axis?: string;
    dir?: number;
    factorNumber?: number;
    blue?: number;
    green?: number;
    red?: number;
    outcomeOrdinal?: string;
    situationIdea?: ISituationIdea;
    idea?: IIdea;
    factor?: IFactor;
    position?: IPosition;
}
//# sourceMappingURL=reason.d.ts.map