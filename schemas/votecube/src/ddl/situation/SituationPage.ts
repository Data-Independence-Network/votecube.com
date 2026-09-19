import { Column, Entity, ManyToOne, OneToMany, Table } from "@airport/tarmaq-entity"
import { AirEntity } from "@airport/final-approach"
import { IChildRecordPage } from "../../common/IChildRecordPage"
import { Situation_Type } from "./Situation";
import { Situation } from "@sapoto/core";

@Entity()
@Table({ name: 'SITUATION_PAGES' })
export class SituationPage
    extends AirEntity
    implements IChildRecordPage<Situation_Type, Situation> {

    @Column({ name: 'TYPE', nullable: false })
    type!: Situation_Type;

    @ManyToOne()
    parent!: Situation;

    @OneToMany({ mappedBy: 'parent' })
    children!: Situation[]

    @ManyToOne()
    parentPage?: SituationPage

    // Once you fill ~1000 twigTopics to start on ~1000 twigTopicPages
    @OneToMany({ mappedBy: 'parentPage' })
    childPages?: SituationPage[]
}