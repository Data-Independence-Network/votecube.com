var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { AirEntity } from '@airport/holding-pattern';
import { Column, Entity, ManyToOne, Table } from '@airport/tarmaq-entity';
let SituationIdeaReason = class SituationIdeaReason extends AirEntity {
};
__decorate([
    Column({ name: 'IS_POSITIVE_OUTCOME', nullable: false })
], SituationIdeaReason.prototype, "isPositiveOutcome", void 0);
__decorate([
    ManyToOne({ optional: true })
], SituationIdeaReason.prototype, "situationIdea", void 0);
__decorate([
    ManyToOne()
], SituationIdeaReason.prototype, "reason", void 0);
__decorate([
    ManyToOne({ optional: true })
], SituationIdeaReason.prototype, "reasonCubeDisplay", void 0);
SituationIdeaReason = __decorate([
    Entity(),
    Table({ name: 'SITUATION_IDEA_REASONS' })
], SituationIdeaReason);
export { SituationIdeaReason };
//# sourceMappingURL=SituationIdeaReason.js.map