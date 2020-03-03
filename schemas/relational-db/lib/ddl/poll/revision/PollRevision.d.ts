import { AgeSuitability } from '../../../types/common';
import { PollRevision_Id } from '../../../types/poll/revision/PollRevision';
import { ImmutableActorRow } from '../../infrastructure/row/ImmutableActorRow';
import { PollRevisionOpinion } from '../../opinion/PollRevisionOpinion';
import { Poll } from '../Poll';
import { PollRun } from '../run/PollRun';
import { UserPollRevisionRating } from '../user/UserPollRevisionRating';
import { OutcomeVersion } from './OutcomeVersion';
import { PollRevisionFactorPosition } from './PollRevisionFactorPosition';
import { PollRevisionTranslation } from './translation/PollRevisionTranslation';
/**
 * Different revisions of a given poll.
 */
export declare class PollRevision extends ImmutableActorRow {
    id: PollRevision_Id;
    ageSuitability: AgeSuitability;
    poll: Poll;
    createdAtRun: PollRun;
    outcomeVersionA: OutcomeVersion;
    outcomeVersionB: OutcomeVersion;
    parent: PollRevision;
    children: PollRevision[];
    ratings: UserPollRevisionRating[];
    factorPositions: PollRevisionFactorPosition[];
    allTranslations: PollRevisionTranslation[];
    opinions: PollRevisionOpinion[];
}