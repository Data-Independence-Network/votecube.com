import { AirEntity } from "@airport/final-approach";
import { Column, DbNumber, Entity, ManyToOne, Table } from "@airport/tarmaq-entity";
import { Situation } from "./Situation";

export enum SituationRating_Importance {
    VERY_LOW = 1,
    LOW = 2,
    MEDIUM = 3,
    HIGH = 4,
    VERY_HIGH = 5
}

export enum SituationRating_Urgency {
    VERY_LOW = 1,
    LOW = 2,
    MEDIUM = 3,
    HIGH = 4,
    VERY_HIGH = 5
}

@Entity()
@Table({ name: 'SITUATION_RATINGS' })
export class SituationRating
    extends AirEntity {

    @Column({ name: 'IMPORTANCE_RATING' })
    @DbNumber()
    importanceRating!: SituationRating_Importance

    @Column({ name: 'URGENCY_RATING' })
    @DbNumber()
    urgencyRating!: SituationRating_Urgency

    @ManyToOne()
    situation!: Situation
}
