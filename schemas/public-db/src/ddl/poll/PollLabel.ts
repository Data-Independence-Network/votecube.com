import {
	Column,
	Entity,
	GeneratedValue,
	JoinColumn,
	ManyToOne,
	Table,
	TraditionalServerSeq
} from '@airport/air-control'
import {ImmutableRepoRow} from '@airport/holding-pattern'
import {Label}           from './Label'
import {Poll}            from './Poll'

export type PollLabel_Id = number

@Entity()
@Table({name: 'POLL_LABELS'})
export class PollLabel
	extends ImmutableRepoRow {

	// @GeneratedValue()
	@TraditionalServerSeq()
	@Column({name: 'POLL_LABEL_ID'})
	id: PollLabel_Id

	@ManyToOne()
	// @JoinColumn({name: 'LABEL_ID', nullable: false})
	label: Label

	@ManyToOne()
	// @JoinColumn({name: 'POLL_ID', nullable: false})
	poll: Poll

}
