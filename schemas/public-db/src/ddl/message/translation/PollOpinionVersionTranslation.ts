import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                           from '@airport/air-control'
import {Language}           from '../../infrastructure/Language'
import {SystemGeneratedRow} from '../../infrastructure/SystemGeneratedRow'
import {PollOpinionVersion} from '../PollOpinionVersion'

export type PollOpinionVersionTranslation_Id = number
export type PollOpinionVersionTranslation_Title = string
export type PollOpinionVersionTranslation_Text = string
export type PollOpinionVersionTranslation_IsOriginal = boolean

/**
 * Belongs to PollOpinionVersion - does not need user tracking.
 */
@Entity()
@Table({name: 'POLL_OPINION_VERSION_TRANSLATIONS'})
export class PollOpinionVersionTranslation
	extends SystemGeneratedRow {

	@GeneratedValue()
	@Id()
	@Column({name: 'POLL_OPINION_VERSION_TRANSLATION_ID'})
	id: PollOpinionVersionTranslation_Id

	/**
	 * All translations should come from the original version.
	 */
	@Column({name: 'POLL_OPINION_VERSION_TRANSLATION_IS_ORIGINAL', nullable: false})
	original: PollOpinionVersionTranslation_IsOriginal

	@Column({name: 'POLL_OPINION_VERSION_TRANSLATION_TITLE', nullable: false})
	title: PollOpinionVersionTranslation_Title

	@Column({name: 'POLL_OPINION_VERSION_TRANSLATION_TEXT', nullable: false})
	text: PollOpinionVersionTranslation_Text

	@ManyToOne()
	@JoinColumn({name: 'POLL_OPINION_VERSION_ID', nullable: false})
	pollOpinionVersion: PollOpinionVersion

	@ManyToOne()
	@JoinColumn({name: 'LANGUAGE_ID', nullable: false})
	language: Language

	/*
		No translation types for Opinions, they are always machine generated
		@ManyToOne()
		@JoinColumn({name: 'TRANSLATION_TYPE_ID', nullable: false})
		translationType: TranslationType
	*/

}
