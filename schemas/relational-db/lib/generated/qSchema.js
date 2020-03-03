import { AIR_DB } from '@airport/air-control';
import { diSet as dS, duoDiSet as ddS } from '@airport/check-in';
import { DI } from '@airport/di';
import { getSchemaName } from '@airport/ground-control';
import { Actor } from '../ddl/user/actor';
import { Application } from '../ddl/user/application';
import { Continent } from '../ddl/location/continent';
import { Country } from '../ddl/location/country';
import { CountryTown } from '../ddl/location/countrytown';
import { County } from '../ddl/location/county';
import { CountyTown } from '../ddl/location/countytown';
import { DesignPattern } from '../ddl/factor/position/designpattern';
import { Device } from '../ddl/user/device';
import { Emoji } from '../ddl/factor/position/emoji';
import { Factor } from '../ddl/factor/factor';
import { FactorOpinionVersion } from '../ddl/opinion/factoropinionversion';
import { FactorOpinionVersionRating } from '../ddl/opinion/user/factoropinionversionrating';
import { FactorOpinionVersionTranslation } from '../ddl/opinion/translation/factoropinionversiontranslation';
import { FactorPosition } from '../ddl/factor/position/factorposition';
import { FactorSkin } from '../ddl/factor/factorskin';
import { FactorTranslation } from '../ddl/factor/factortranslation';
import { ImmutableActorRow } from '../ddl/infrastructure/row/immutableactorrow';
import { ImmutableRow } from '../ddl/infrastructure/row/immutablerow';
import { Language } from '../ddl/infrastructure/language';
import { MutableActorRow } from '../ddl/infrastructure/row/mutableactorrow';
import { MutableRow } from '../ddl/infrastructure/row/mutablerow';
import { OutcomeVersion } from '../ddl/poll/revision/outcomeversion';
import { OutcomeVersionTranslation } from '../ddl/poll/revision/translation/outcomeversiontranslation';
import { Poll } from '../ddl/poll/poll';
import { PollRevision } from '../ddl/poll/revision/pollrevision';
import { PollRevisionFactorPosition } from '../ddl/poll/revision/pollrevisionfactorposition';
import { PollRevisionFactorTranslation } from '../ddl/poll/revision/translation/pollrevisionfactortranslation';
import { PollRevisionOpinion } from '../ddl/opinion/pollrevisionopinion';
import { PollRevisionOpinionVersion } from '../ddl/opinion/pollrevisionopinionversion';
import { PollRevisionOpinionVersionRating } from '../ddl/opinion/user/pollrevisionopinionversionrating';
import { PollRevisionOpinionVersionTranslation } from '../ddl/opinion/translation/pollrevisionopinionversiontranslation';
import { PollRevisionPositionTranslation } from '../ddl/poll/revision/translation/pollrevisionpositiontranslation';
import { PollRevisionTranslation } from '../ddl/poll/revision/translation/pollrevisiontranslation';
import { PollRun } from '../ddl/poll/run/pollrun';
import { PollRunContinent } from '../ddl/poll/run/location/pollruncontinent';
import { PollRunCountry } from '../ddl/poll/run/location/pollruncountry';
import { PollRunCounty } from '../ddl/poll/run/location/pollruncounty';
import { PollRunState } from '../ddl/poll/run/location/pollrunstate';
import { PollRunTown } from '../ddl/poll/run/location/pollruntown';
import { PollType } from '../ddl/poll/polltype';
import { Position } from '../ddl/factor/position/position';
import { PositionOpinionVersion } from '../ddl/opinion/positionopinionversion';
import { PositionOpinionVersionRating } from '../ddl/opinion/user/positionopinionversionrating';
import { PositionOpinionVersionTranslation } from '../ddl/opinion/translation/positionopinionversiontranslation';
import { PositionTranslation } from '../ddl/factor/position/positiontranslation';
import { Rating } from '../ddl/infrastructure/rating/rating';
import { RatingReason } from '../ddl/infrastructure/rating/ratingreason';
import { RatingReasonTranslation } from '../ddl/infrastructure/rating/ratingreasontranslation';
import { RatingSetting } from '../ddl/infrastructure/rating/ratingsetting';
import { RatingTranslation } from '../ddl/infrastructure/rating/ratingtranslation';
import { RatingType } from '../ddl/infrastructure/rating/ratingtype';
import { State } from '../ddl/location/state';
import { StateTown } from '../ddl/location/statetown';
import { SystemGeneratedRow } from '../ddl/infrastructure/row/systemgeneratedrow';
import { Theme } from '../ddl/poll/theme';
import { Town } from '../ddl/location/town';
import { TranslationType } from '../ddl/infrastructure/translationtype';
import { UserAccount } from '../ddl/user/useraccount';
import { UserPoll } from '../ddl/poll/user/userpoll';
import { UserPollRating } from '../ddl/poll/user/userpollrating';
import { UserPollRevision } from '../ddl/poll/user/userpollrevision';
import { UserPollRevisionRating } from '../ddl/poll/user/userpollrevisionrating';
import { UserPollRevisionTranslation } from '../ddl/poll/user/userpollrevisiontranslation';
import { UserPollRevisionTranslationRating } from '../ddl/poll/user/userpollrevisiontranslationrating';
import { Vote } from '../ddl/vote/vote';
import { VoteFactor } from '../ddl/vote/votefactor';
import { VoteFactorType } from '../ddl/vote/votefactortype';
import { VoteRevision } from '../ddl/vote/voterevision';
import { VoteType } from '../ddl/vote/votetype';
const __constructors__ = {
    Actor: Actor,
    Application: Application,
    Continent: Continent,
    Country: Country,
    CountryTown: CountryTown,
    County: County,
    CountyTown: CountyTown,
    DesignPattern: DesignPattern,
    Device: Device,
    Emoji: Emoji,
    Factor: Factor,
    FactorOpinionVersion: FactorOpinionVersion,
    FactorOpinionVersionRating: FactorOpinionVersionRating,
    FactorOpinionVersionTranslation: FactorOpinionVersionTranslation,
    FactorPosition: FactorPosition,
    FactorSkin: FactorSkin,
    FactorTranslation: FactorTranslation,
    ImmutableActorRow: ImmutableActorRow,
    ImmutableRow: ImmutableRow,
    Language: Language,
    MutableActorRow: MutableActorRow,
    MutableRow: MutableRow,
    OutcomeVersion: OutcomeVersion,
    OutcomeVersionTranslation: OutcomeVersionTranslation,
    Poll: Poll,
    PollRevision: PollRevision,
    PollRevisionFactorPosition: PollRevisionFactorPosition,
    PollRevisionFactorTranslation: PollRevisionFactorTranslation,
    PollRevisionOpinion: PollRevisionOpinion,
    PollRevisionOpinionVersion: PollRevisionOpinionVersion,
    PollRevisionOpinionVersionRating: PollRevisionOpinionVersionRating,
    PollRevisionOpinionVersionTranslation: PollRevisionOpinionVersionTranslation,
    PollRevisionPositionTranslation: PollRevisionPositionTranslation,
    PollRevisionTranslation: PollRevisionTranslation,
    PollRun: PollRun,
    PollRunContinent: PollRunContinent,
    PollRunCountry: PollRunCountry,
    PollRunCounty: PollRunCounty,
    PollRunState: PollRunState,
    PollRunTown: PollRunTown,
    PollType: PollType,
    Position: Position,
    PositionOpinionVersion: PositionOpinionVersion,
    PositionOpinionVersionRating: PositionOpinionVersionRating,
    PositionOpinionVersionTranslation: PositionOpinionVersionTranslation,
    PositionTranslation: PositionTranslation,
    Rating: Rating,
    RatingReason: RatingReason,
    RatingReasonTranslation: RatingReasonTranslation,
    RatingSetting: RatingSetting,
    RatingTranslation: RatingTranslation,
    RatingType: RatingType,
    State: State,
    StateTown: StateTown,
    SystemGeneratedRow: SystemGeneratedRow,
    Theme: Theme,
    Town: Town,
    TranslationType: TranslationType,
    UserAccount: UserAccount,
    UserPoll: UserPoll,
    UserPollRating: UserPollRating,
    UserPollRevision: UserPollRevision,
    UserPollRevisionRating: UserPollRevisionRating,
    UserPollRevisionTranslation: UserPollRevisionTranslation,
    UserPollRevisionTranslationRating: UserPollRevisionTranslationRating,
    Vote: Vote,
    VoteFactor: VoteFactor,
    VoteFactorType: VoteFactorType,
    VoteRevision: VoteRevision,
    VoteType: VoteType
};
export const Q_SCHEMA = {
    __constructors__,
    domain: 'public',
    name: '@votecube/relational-db'
};
export const Q = Q_SCHEMA;
export function diSet(dbEntityId) {
    return dS(Q.__dbSchema__, dbEntityId);
}
export function duoDiSet(dbEntityId) {
    return ddS(Q.__dbSchema__, dbEntityId);
}
DI.db().get(AIR_DB).then((airDb) => {
    airDb.QM[getSchemaName(Q_SCHEMA)] = Q;
});
//# sourceMappingURL=qSchema.js.map