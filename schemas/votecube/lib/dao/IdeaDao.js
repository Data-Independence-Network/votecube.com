var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injected } from '@airport/direction-indicator';
import { AND, PLUS, Y } from '@airport/tarmaq-query';
import { BaseIdeaDao, Q, } from "../generated/generated";
let IdeaDao = class IdeaDao extends BaseIdeaDao {
    async findByRepositoryGUID(repositorySource, ideaReposioryGUID) {
        let i;
        let r;
        let sl;
        let is;
        let rs;
        const matchingRepositories = await this.db.find.tree({
            SELECT: {
                '*': Y,
                repository: {},
                ideaLabels: {
                    '*': Y,
                    label: {}
                },
                situationIdeas: {
                    '*': Y,
                    reasons: {
                        '*': Y,
                        factor: {},
                        position: {},
                    }
                }
            },
            FROM: [
                i = Q.Idea,
                r = i.repository.INNER_JOIN(),
                sl = i.ideaLabels.LEFT_JOIN(),
                sl.label.LEFT_JOIN(),
                is = i.situationIdeas.LEFT_JOIN(),
                rs = is.reasons.LEFT_JOIN(),
                rs.factor.LEFT_JOIN(),
                rs.position.LEFT_JOIN()
            ],
            WHERE: AND(r.source.equals(repositorySource), r.GUID.equals(ideaReposioryGUID))
        }, {
            repository: {
                source: repositorySource,
                GUID: ideaReposioryGUID
            }
        });
        if (matchingRepositories.length) {
            return matchingRepositories[0];
        }
        return null;
    }
    async updateShareTotal(delta, idea) {
        const i = Q.Idea;
        await this.db.updateWhere({
            UPDATE: i,
            SET: {
                agreementShareTotal: PLUS(i.agreementShareTotal, delta.totalDelta),
                numberOfAgreements: PLUS(i.numberOfAgreements, delta.numberDelta)
            },
            WHERE: i.equals(idea)
        });
    }
    async updateUrgencyTotal(delta, idea) {
        const i = Q.Idea;
        await this.db.updateWhere({
            UPDATE: i,
            SET: {
                urgencyTotal: PLUS(i.urgencyTotal, delta.totalDelta),
                numberOfUrgencyRatings: PLUS(i.numberOfUrgencyRatings, delta.numberDelta)
            },
            WHERE: i.equals(idea)
        });
    }
};
IdeaDao = __decorate([
    Injected()
], IdeaDao);
export { IdeaDao };
//# sourceMappingURL=IdeaDao.js.map