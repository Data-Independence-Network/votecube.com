import { Column, Entity, ManyToOne, OneToMany, Table } from "@airport/tarmaq-entity"
import { Topic } from "./Topic"
import { AirEntity } from "@airport/final-approach"
import { IChildRecordPage } from "../../common/IChildRecordPage"

export enum TopicPage_Type {
    COMMON = 1,
    SAPOTO = 2,
    VOTECUBE = 3,
}

@Entity()
@Table({ name: 'TOPIC_PAGES' })
export class TopicPage
    extends AirEntity
    implements IChildRecordPage<TopicPage_Type, Topic> {

    @Column({ name: 'TYPE', nullable: false })
    type!: TopicPage_Type;

    @ManyToOne()
    parent!: Topic

    @OneToMany({ mappedBy: 'parent' })
    children!: Topic[]

    @ManyToOne()
    parentPage?: TopicPage

    // Once you fill ~1000 twigTopics to start on ~1000 twigTopicPages
    @OneToMany({ mappedBy: 'parentPage' })
    childPages?: TopicPage[]
}