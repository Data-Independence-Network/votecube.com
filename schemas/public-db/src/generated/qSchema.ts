import { QSchema as AirportQSchema } from '@airport/air-control';
import { DbSchema } from '@airport/ground-control';
import { Continent } from '../ddl/location/continent';
import { QContinent } from './location/qcontinent';
import { Country } from '../ddl/location/country';
import { QCountry } from './location/qcountry';
import { County } from '../ddl/location/county';
import { QCounty } from './location/qcounty';
import { Factor } from '../ddl/factor';
import { QFactor } from './qfactor';
import { FactorPosition } from '../ddl/factorposition';
import { QFactorPosition } from './qfactorposition';
import { Label } from '../ddl/poll/label';
import { QLabel } from './poll/qlabel';
import { Poll } from '../ddl/poll/poll';
import { QPoll } from './poll/qpoll';
import { PollContinent } from '../ddl/location/pollcontinent';
import { QPollContinent } from './location/qpollcontinent';
import { PollCountry } from '../ddl/location/pollcountry';
import { QPollCountry } from './location/qpollcountry';
import { PollCounty } from '../ddl/location/pollcounty';
import { QPollCounty } from './location/qpollcounty';
import { PollFactorPosition } from '../ddl/poll/pollfactorposition';
import { QPollFactorPosition } from './poll/qpollfactorposition';
import { PollLabel } from '../ddl/poll/polllabel';
import { QPollLabel } from './poll/qpolllabel';
import { PollState } from '../ddl/location/pollstate';
import { QPollState } from './location/qpollstate';
import { PollTown } from '../ddl/location/polltown';
import { QPollTown } from './location/qpolltown';
import { PollType } from '../ddl/poll/polltype';
import { QPollType } from './poll/qpolltype';
import { Position } from '../ddl/position';
import { QPosition } from './qposition';
import { State } from '../ddl/location/state';
import { QState } from './location/qstate';
import { Theme } from '../ddl/theme';
import { QTheme } from './qtheme';
import { Town } from '../ddl/location/town';
import { QTown } from './location/qtown';
import { Vote } from '../ddl/vote/vote';
import { QVote } from './vote/qvote';
import { VoteFactor } from '../ddl/vote/votefactor';
import { QVoteFactor } from './vote/qvotefactor';
import { VoteFactorType } from '../ddl/vote/votefactortype';
import { QVoteFactorType } from './vote/qvotefactortype';

export interface LocalQSchema extends AirportQSchema {

  db: DbSchema;

	Continent: QContinent;
	Country: QCountry;
	County: QCounty;
	Factor: QFactor;
	FactorPosition: QFactorPosition;
	Label: QLabel;
	Poll: QPoll;
	PollContinent: QPollContinent;
	PollCountry: QPollCountry;
	PollCounty: QPollCounty;
	PollFactorPosition: QPollFactorPosition;
	PollLabel: QPollLabel;
	PollState: QPollState;
	PollTown: QPollTown;
	PollType: QPollType;
	Position: QPosition;
	State: QState;
	Theme: QTheme;
	Town: QTown;
	Vote: QVote;
	VoteFactor: QVoteFactor;
	VoteFactorType: QVoteFactorType;

}

const __constructors__ = {
	Continent: Continent,
	Country: Country,
	County: County,
	Factor: Factor,
	FactorPosition: FactorPosition,
	Label: Label,
	Poll: Poll,
	PollContinent: PollContinent,
	PollCountry: PollCountry,
	PollCounty: PollCounty,
	PollFactorPosition: PollFactorPosition,
	PollLabel: PollLabel,
	PollState: PollState,
	PollTown: PollTown,
	PollType: PollType,
	Position: Position,
	State: State,
	Theme: Theme,
	Town: Town,
	Vote: Vote,
	VoteFactor: VoteFactor,
	VoteFactorType: VoteFactorType
};

export const Q_SCHEMA: LocalQSchema = <any>{
	__constructors__
};
export const Q: LocalQSchema = Q_SCHEMA;
