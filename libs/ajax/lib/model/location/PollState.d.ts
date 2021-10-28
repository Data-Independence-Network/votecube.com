import { IPollState } from '@votecube/model';
import { In } from '../../core/In';
import { Out } from '../../core/Out';
import { Mode } from '../core/Mode';
import { ITempRecordId, ModelSerializer } from '../core/ModelSerializer';
/**
 * Please try to keep properties serialized in UI-model alphabetic order. :)
 */
export declare class PollStateSerializer extends ModelSerializer<IPollState> {
    constructor();
    serializeRecord(model: IPollState, out: Out, tempRecordIds: ITempRecordId[]): Promise<void>;
    deserialize(mode: Mode, bin: In): Promise<IPollState>;
}
//# sourceMappingURL=PollState.d.ts.map