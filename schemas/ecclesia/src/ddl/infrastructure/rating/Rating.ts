import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
}                           from '@airport/air-traffic-control'
import {
	Rating_CssClass,
	Rating_Id
}                           from '../../../types/infrastructure/rating/Rating'
import {SystemGeneratedRow} from '../row/SystemGeneratedRow'
import {RatingSetting}      from './RatingSetting'
import {RatingType}         from './RatingType'

/**
 * Note suitability settings will either have a dedicated UI (like in age suitability),
 * or will be transparent (like country suitability - China).  However they share the
 * same table as all the ratings (since schematically they are the same).  The idea
 * is - rate the poll.  If you think that the poll is good enough to vote or even be shown
 * then you submit a vote.  Rating is about polls.  Voting is about poll opinions.
 */
@Entity()
@Table({name: 'RATINGS'})
export class Rating
	extends SystemGeneratedRow {

	@Id()
	@GeneratedValue()
	@Column({name: 'RATING_ID'})
	id: Rating_Id

	// Yes all icons will be the same everywhere, irrespective of the locale - gotta have a common
	// language
	@Column({name: 'RATING_CSS_CLASS', nullable: false})
	cssClass: Rating_CssClass

	@ManyToOne()
	@JoinColumn({name: 'RATING_TYPE_ID'})
	type: RatingType

	@OneToMany({mappedBy: 'rating'})
	settings: RatingSetting[]

}
