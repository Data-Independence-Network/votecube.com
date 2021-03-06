import {
	Column,
	DbNumber,
	Entity,
	GeneratedValue,
	Id,
	Table
}                           from '@airport/air-traffic-control'
import {
	Device_Hash,
	Device_Id
} from '../../types/user/Device'
import {SystemGeneratedRow} from '../infrastructure/row/SystemGeneratedRow'

@Entity()
@Table({name: 'DEVICES'})
export class Device
	extends SystemGeneratedRow {

	@GeneratedValue()
	@Id()
	@Column({name: 'DEVICE_ID'})
	id: Device_Id

	@Column({name: 'DEVICE_HASH', nullable: false})
	@DbNumber()
	hash: Device_Hash

}
