import { AirEntity } from "@airport/final-approach";
import { Column, Entity, ManyToOne, OneToMany, Table, Transient } from "@airport/tarmaq-entity";
import { SituationRating } from "./SituationRating";
import { Topic } from "../topic/Topic";
import { SituationPage } from "./SituationPage";

export enum Situation_Type {
    GENERAL = 1,
    SPECIFIC = 2,
}

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
@Table({ name: 'SITUATIONS' })
export class Situation
    extends AirEntity {

    @Column({ name: 'TYPE', nullable: false })
    type!: Situation_Type

    @Column({ name: 'TEXT', nullable: false })
    text!: string

    @Column({ name: 'URGENCY_TOTAL' })
    urgencyTotal?: number = 0

    @Column({ name: 'NUMBER_OF_URGENCY_RATINGS' })
    numberOfUrgencyRatings?: number = 0

    @Column({ name: 'IMPORTANCE_TOTAL' })
    importanceTotal?: number = 0

    @Column({ name: 'NUMBER_OF_IMPORTANCE_RATINGS' })
    numberOfImportanceRatings?: number = 0

    @OneToMany({ mappedBy: 'branch' })
    childPages: SituationPage[] = []

    @ManyToOne()
    topic!: Topic

    @OneToMany({ mappedBy: 'situation' })
    ratings?: SituationRating[]

    @Transient()
    userRating?: SituationRating
}