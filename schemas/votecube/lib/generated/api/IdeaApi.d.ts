import { ILabel, IIdea } from '../../generated/interfaces';
import { IRepositoryIdentifier } from '../../types';
export declare class IdeaApi {
    ideaApi: IdeaApi;
    getIdeasForLabels(labels: ILabel[]): Promise<IIdea[]>;
    getLeafIdeas(idea: IIdea): Promise<IIdea[]>;
    getStemIdea(idea: IIdea): Promise<IIdea>;
    getIdea(repositorySource: string, ideaRepositoryUuId: string): Promise<IIdea>;
    saveExistingIdea(idea: IIdea): Promise<IRepositoryIdentifier>;
    saveNewIdea(idea: IIdea): Promise<IRepositoryIdentifier>;
}
//# sourceMappingURL=IdeaApi.d.ts.map