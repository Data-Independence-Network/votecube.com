import {
	Column,
	Entity,
	GeneratedValue,
	Table,
	TraditionalServerSeq
} from '@airport/air-control'
import {ImmutableRepoRow} from '@airport/holding-pattern'

export type Label_Id = number
export type Label_Name = string

@Entity()
@Table({name: 'LABELS'})
export class Label
	extends ImmutableRepoRow {

	// @GeneratedValue()
	@TraditionalServerSeq()
	@Column({name: 'LABEL_ID'})
	id: Label_Id

	@Column({name: 'NAME', nullable: false})
	name: Label_Name

}