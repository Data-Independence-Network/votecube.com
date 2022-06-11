import { AirEntity } from "@airport/holding-pattern";
import { Situation } from "@sapoto/core";
import { Agreement, Idea } from "../ddl";
import { Reason } from "./Reason";
export declare class SituationIdea extends AirEntity {
    idea: Idea;
    situation: Situation;
    agreements: Agreement[];
    reasons: Reason[];
    agreementShareTotal: number;
    numberOfAgreements: number;
}
//# sourceMappingURL=SituationIdea.d.ts.map