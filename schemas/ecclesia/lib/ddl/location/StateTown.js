var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Entity, Id, JoinColumn, ManyToOne, Table } from '@airport/air-traffic-control';
import { SystemGeneratedRow } from '../infrastructure/row/SystemGeneratedRow';
/**
 * Composite Id - should never be referenced by id, only by the first part.
 */
let StateTown = class StateTown extends SystemGeneratedRow {
};
__decorate([
    Id(),
    ManyToOne(),
    JoinColumn({ name: 'STATE_ID', nullable: false })
], StateTown.prototype, "state", void 0);
__decorate([
    Id(),
    ManyToOne(),
    JoinColumn({ name: 'TOWN_ID', nullable: false })
], StateTown.prototype, "town", void 0);
StateTown = __decorate([
    Entity(),
    Table({
        name: 'STATE_TOWNS'
    })
], StateTown);
export { StateTown };
//# sourceMappingURL=StateTown.js.map