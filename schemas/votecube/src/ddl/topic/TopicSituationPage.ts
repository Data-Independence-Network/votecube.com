import { Column, Entity, ManyToOne, OneToMany, Table } from "@airport/tarmaq-entity"
import { Topic } from "./Topic"
import { AirEntity } from "@airport/final-approach"
import { IChildRecordPage } from "../../common/IChildRecordPage"
import { Situation, Situation_Type } from "../situation/Situation"

@Entity()
@Table({ name: 'TOPIC_SITUATION_PAGES' })
export class TopicSituationPage
    extends AirEntity
    implements IChildRecordPage<Situation_Type, Topic, Situation> {

    @Column({ name: 'TYPE', nullable: false })
    type!: Situation_Type;

    @ManyToOne()
    parent!: Topic

    @OneToMany({ mappedBy: 'parent' })
    children!: Situation[]

    @ManyToOne()
    parentPage?: TopicSituationPage

    // Once you fill ~1000 twigTopics to start on ~1000 twigTopicPages
    @OneToMany({ mappedBy: 'parentPage' })
    childPages?: TopicSituationPage[]
}