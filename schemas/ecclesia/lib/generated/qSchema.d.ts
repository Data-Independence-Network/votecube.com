import { QSchema as AirportQSchema } from '@airport/air-traffic-control';
import { DbSchema, EntityId } from '@airport/ground-control';
import { QActor } from './user/qactor';
import { QApplication } from './user/qapplication';
import { QContinent } from './location/qcontinent';
import { QCountry } from './location/qcountry';
import { QCountryTown } from './location/qcountrytown';
import { QCounty } from './location/qcounty';
import { QCountyTown } from './location/qcountytown';
import { QDesignPattern } from './factor/position/qdesignpattern';
import { QDevice } from './user/qdevice';
import { QEmoji } from './factor/position/qemoji';
import { QFactor } from './factor/qfactor';
import { QFactorOpinionVersion } from './opinion/qfactoropinionversion';
import { QFactorOpinionVersionTranslation } from './opinion/translation/qfactoropinionversiontranslation';
import { QFactorPosition } from './factor/position/qfactorposition';
import { QFactorTranslation } from './factor/qfactortranslation';
import { QLanguage } from './infrastructure/qlanguage';
import { QOutcome } from './poll/revision/qoutcome';
import { QOutcomeOpinionVersion } from './opinion/qoutcomeopinionversion';
import { QOutcomeOpinionVersionTranslation } from './opinion/translation/qoutcomeopinionversiontranslation';
import { QOutcomeTranslation } from './poll/revision/translation/qoutcometranslation';
import { QPoll } from './poll/qpoll';
import { QPollRevision } from './poll/revision/qpollrevision';
import { QPollRevisionFactorPosition } from './poll/revision/qpollrevisionfactorposition';
import { QPollRevisionOpinion } from './opinion/qpollrevisionopinion';
import { QPollRevisionOpinionRating } from './opinion/rating/qpollrevisionopinionrating';
import { QPollRevisionOpinionVersion } from './opinion/qpollrevisionopinionversion';
import { QPollRevisionOpinionVersionTranslation } from './opinion/translation/qpollrevisionopinionversiontranslation';
import { QPollRevisionRating } from './poll/rating/qpollrevisionrating';
import { QPollRevisionTranslation } from './poll/revision/translation/qpollrevisiontranslation';
import { QPollRevisionTranslationRating } from './poll/rating/qpollrevisiontranslationrating';
import { QPollRun } from './poll/run/qpollrun';
import { QPollRunContinent } from './poll/run/location/qpollruncontinent';
import { QPollRunCountry } from './poll/run/location/qpollruncountry';
import { QPollRunCounty } from './poll/run/location/qpollruncounty';
import { QPollRunState } from './poll/run/location/qpollrunstate';
import { QPollRunTown } from './poll/run/location/qpollruntown';
import { QPollType } from './poll/qpolltype';
import { QPosition } from './factor/position/qposition';
import { QPositionOpinionVersion } from './opinion/qpositionopinionversion';
import { QPositionOpinionVersionTranslation } from './opinion/translation/qpositionopinionversiontranslation';
import { QPositionTranslation } from './factor/position/qpositiontranslation';
import { QRating } from './infrastructure/rating/qrating';
import { QRatingSetting } from './infrastructure/rating/qratingsetting';
import { QRatingType } from './infrastructure/rating/qratingtype';
import { QSkin } from './factor/qskin';
import { QState } from './location/qstate';
import { QStateTown } from './location/qstatetown';
import { QTheme } from './poll/qtheme';
import { QTown } from './location/qtown';
import { QTranslationType } from './infrastructure/qtranslationtype';
import { QUserAccount } from './user/quseraccount';
import { QVote } from './vote/qvote';
import { QVoteFactor } from './vote/qvotefactor';
import { QVoteFactorType } from './vote/qvotefactortype';
import { QVoteType } from './vote/qvotetype';
import { QVoteVersion } from './vote/qvoteversion';
export interface LocalQSchema extends AirportQSchema {
    db: DbSchema;
    Actor: QActor;
    Application: QApplication;
    Continent: QContinent;
    Country: QCountry;
    CountryTown: QCountryTown;
    County: QCounty;
    CountyTown: QCountyTown;
    DesignPattern: QDesignPattern;
    Device: QDevice;
    Emoji: QEmoji;
    Factor: QFactor;
    FactorOpinionVersion: QFactorOpinionVersion;
    FactorOpinionVersionTranslation: QFactorOpinionVersionTranslation;
    FactorPosition: QFactorPosition;
    FactorTranslation: QFactorTranslation;
    Language: QLanguage;
    Outcome: QOutcome;
    OutcomeOpinionVersion: QOutcomeOpinionVersion;
    OutcomeOpinionVersionTranslation: QOutcomeOpinionVersionTranslation;
    OutcomeTranslation: QOutcomeTranslation;
    Poll: QPoll;
    PollRevision: QPollRevision;
    PollRevisionFactorPosition: QPollRevisionFactorPosition;
    PollRevisionOpinion: QPollRevisionOpinion;
    PollRevisionOpinionRating: QPollRevisionOpinionRating;
    PollRevisionOpinionVersion: QPollRevisionOpinionVersion;
    PollRevisionOpinionVersionTranslation: QPollRevisionOpinionVersionTranslation;
    PollRevisionRating: QPollRevisionRating;
    PollRevisionTranslation: QPollRevisionTranslation;
    PollRevisionTranslationRating: QPollRevisionTranslationRating;
    PollRun: QPollRun;
    PollRunContinent: QPollRunContinent;
    PollRunCountry: QPollRunCountry;
    PollRunCounty: QPollRunCounty;
    PollRunState: QPollRunState;
    PollRunTown: QPollRunTown;
    PollType: QPollType;
    Position: QPosition;
    PositionOpinionVersion: QPositionOpinionVersion;
    PositionOpinionVersionTranslation: QPositionOpinionVersionTranslation;
    PositionTranslation: QPositionTranslation;
    Rating: QRating;
    RatingSetting: QRatingSetting;
    RatingType: QRatingType;
    Skin: QSkin;
    State: QState;
    StateTown: QStateTown;
    Theme: QTheme;
    Town: QTown;
    TranslationType: QTranslationType;
    UserAccount: QUserAccount;
    Vote: QVote;
    VoteFactor: QVoteFactor;
    VoteFactorType: QVoteFactorType;
    VoteType: QVoteType;
    VoteVersion: QVoteVersion;
}
export declare const Q_SCHEMA: LocalQSchema;
export declare const Q: LocalQSchema;
export declare function diSet(dbEntityId: EntityId): boolean;
export declare function duoDiSet(dbEntityId: EntityId): boolean;
//# sourceMappingURL=qSchema.d.ts.map