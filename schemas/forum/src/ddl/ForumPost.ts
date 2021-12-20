import {
    DbDate,
    DbString,
    Entity,
    ManyToOne,
    Table
} from "@airport/air-control";
import { RepositoryEntity } from "@airport/holding-pattern";
import { ForumThread } from "./ForumThread";

export type ForumPost_Text = string
export type ForumPost_CreatedAt = Date

@Entity()
@Table({ name: "FORUM_POST" })
export class ForumPost
    extends RepositoryEntity {

    @DbString()
    text: ForumPost_Text

    @DbDate()
    createdAt: ForumPost_CreatedAt

    @ManyToOne({ mappedBy: "posts" })
    thread: ForumThread

}