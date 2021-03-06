var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { IDEA_API, } from '../../to_be_generated/common-tokens';
import { DEPENDENCY_INJECTION, Inject, Injected, } from '@airport/direction-indicator';
// An API stub for other Applications and UIs to use
let IdeaApi = class IdeaApi {
    constructor() {
        DEPENDENCY_INJECTION.db().manualInject(this, IDEA_API);
    }
    async getIdeasForLabels(labels) {
        return await this.ideaApi.getIdeasForLabels(labels);
    }
    async getLeafIdeas(idea) {
        return await this.ideaApi.getLeafIdeas(idea);
    }
    async getStemIdea(idea) {
        return await this.ideaApi.getStemIdea(idea);
    }
    async getIdea(repositorySource, ideaRepositoryUuId) {
        return await this.ideaApi.getIdea(repositorySource, ideaRepositoryUuId);
    }
    async saveIdea(idea) {
        return await this.ideaApi.saveIdea(idea);
    }
};
__decorate([
    Inject()
], IdeaApi.prototype, "ideaApi", void 0);
IdeaApi = __decorate([
    Injected()
], IdeaApi);
export { IdeaApi };
//# sourceMappingURL=IdeaApi.js.map