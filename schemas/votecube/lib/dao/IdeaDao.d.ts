import { BaseIdeaDao, IBaseIdeaDao } from "../generated/generated";
import { ITotalDelta } from '@sapoto/core';
import { IRepositoryIdentifier } from '../types';
import { Idea } from '../ddl/ddl';
export interface IIdeaDao extends IBaseIdeaDao {
    findByRepositoryUuId(repositorySource: string, ideaReposioryUuid: string): Promise<Idea>;
    saveExistingIdea(idea: Idea): Promise<IRepositoryIdentifier>;
    saveNewIdea(idea: Idea): Promise<IRepositoryIdentifier>;
    updateShareTotal(delta: ITotalDelta, idea: Idea): Promise<void>;
    updateUrgencyTotal(delta: ITotalDelta, idea: Idea): Promise<void>;
}
export declare class IdeaDao extends BaseIdeaDao implements IIdeaDao {
    findByRepositoryUuId(repositorySource: string, ideaReposioryUuid: string): Promise<Idea>;
    saveExistingIdea(idea: Idea): Promise<IRepositoryIdentifier>;
    saveNewIdea(idea: Idea): Promise<IRepositoryIdentifier>;
    updateShareTotal(delta: ITotalDelta, idea: Idea): Promise<void>;
    updateUrgencyTotal(delta: ITotalDelta, idea: Idea): Promise<void>;
}
//# sourceMappingURL=IdeaDao.d.ts.map