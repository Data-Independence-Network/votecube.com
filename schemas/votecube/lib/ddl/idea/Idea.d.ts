import { RepositoryEntity } from '@airport/holding-pattern';
import { ForumThread } from '@votecube/forum/lib/server';
import { Agreement } from '../agreement/Agreement';
import { Outcome } from './Outcome';
import { Reason } from './Reason';
import { IdeaLabel } from './IdeaLabel';
export declare class Idea extends RepositoryEntity {
    name: string;
    outcomeA: Outcome;
    outcomeB: Outcome;
    thread: ForumThread;
    children: Idea[];
    ideaLabels: IdeaLabel[];
    reasons: Reason[];
    agreements: Agreement[];
}
//# sourceMappingURL=Idea.d.ts.map