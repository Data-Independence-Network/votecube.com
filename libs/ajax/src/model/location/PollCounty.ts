import {DI}                             from '@votecube/di'
import {EntityType, IPollCounty}        from '@votecube/model'
import {In}                             from '../../core/In'
import {Out}                            from '../../core/Out'
import {AJAX_Z_POLL_COUNTY}             from '../../tokens'
import {Mode}                           from '../core/Mode'
import {ITempRecordId, ModelSerializer} from '../core/ModelSerializer'

/**
 * Please try to keep properties serialized in UI-model alphabetic order. :)
 */
export class PollCountySerializer
	extends ModelSerializer<IPollCounty> {

	constructor() {
		super(EntityType.PLL_CNTY);
	}

	serializeRecord(
		model: IPollCounty,
		out: Out,
		tempRecordIds: ITempRecordId[]
	): void {
		out.num(model.county.id)
	}

	deserialize(
		mode: Mode,
		bin: In
	): IPollCounty {
		return undefined
	}

}

DI.set(AJAX_Z_POLL_COUNTY, PollCountySerializer)