import {
	Column,
	Entity,
	GeneratedValue,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
} from '@airport/air-control'
import {ReferenceRow} from '@airport/holding-pattern'
import {Continent}    from './Continent'
import {State}        from './State'

export type Country_Id = number
export type Country_Name = string

@Entity()
@Table({
	name: 'COUNTRIES'
})
export class Country
	extends ReferenceRow {

	@GeneratedValue()
	@Column({name: 'COUNTRY_ID'})
	id: Country_Id

	@ManyToOne()
	@JoinColumn({name: 'CONTINENT_ID', nullable: false})
	continent: Continent

	@Column({name: 'COUNTRY_NAME', nullable: false})
	name: Country_Name

	@OneToMany({mappedBy: 'COUNTRY_ID'})
	states: State[]

}
