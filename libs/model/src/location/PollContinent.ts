import {Id}         from '../core/Model'
import {IPoll}      from '../poll/Poll'
import {IContinent} from './Continent'

export type PollContinentId = Id

export const POLL_CONTINENTS = 'POLL_CONTINENTS'

export interface IPollContinent {

	continent: IContinent
	id: PollContinentId
	poll: IPoll

}