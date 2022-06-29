import { Y } from "@airport/air-traffic-control";
import { Injected } from "@airport/direction-indicator";
import { Idea, Reason, SituationIdea } from "../ddl/ddl";
import { BaseReasonDao } from "../generated/baseDaos";
import { Q, QIdea, QReason, QSituationIdea } from "../generated/generated";

@Injected()
export class ReasonDao
    extends BaseReasonDao {

    async findAllForIdea(
        idea: Idea
    ): Promise<Reason[]> {
        let r: QReason,
            i: QIdea
        return await this._find({
            select: {
                uuId: Y,
                factor: {
                    uuId: Y
                },
                position: {
                    uuId: Y
                }
            },
            from: [
                r = Q.Reason,
                i = r.idea.leftJoin()
            ],
            where: i.equals(idea)
        })
    }

    async findAllForSituationIdea(
        situationIdea: SituationIdea
    ): Promise<Reason[]> {
        let r: QReason,
            si: QSituationIdea
        return await this._find({
            select: {
                uuId: Y,
                factor: {
                    uuId: Y
                },
                position: {
                    uuId: Y
                }
            },
            from: [
                r = Q.Reason,
                si = r.situationIdea.leftJoin()
            ],
            where: si.equals(situationIdea)
        })
    }

}