import { IAirEntity } from '@airport/holding-pattern';
import { IIdeaLabel } from './idealabel';
import { ISituationIdea } from './situationidea';
import { IIdeaTopic } from './ideatopic';
export interface IIdea extends IAirEntity {
    name?: string;
    children?: IIdea[];
    ideaLabels?: IIdeaLabel[];
    situationIdeas?: ISituationIdea[];
    ideaTopics?: IIdeaTopic[];
}
//# sourceMappingURL=idea.d.ts.map