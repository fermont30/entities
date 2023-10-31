import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserEntity } from "./user.entity";

@Entity('role',{schema:'ventas'})

export class RoleEntity
{
@PrimaryGeneratedColumn('uuid')
id :string;
@CreateDateColumn({
    name:'create_at',
    type:'timestamp',
    default:() => 'CURRENT_TIMESTAMP'
})
createAT:Date;

@UpdateDateColumn({
    name:'update_at',
    type:'timestamp',
    default:() => 'CURRENT_TIMESTAMP'
})
updateAT:Date;

@DeleteDateColumn({
    name:'delete_at',
    type:'timestamp',
    nullable: true,
})
deleteAT:Date;

@OneToOne(() => UserEntity, user => user.role)
user:UserEntity;

@Column('varchar',{
    name:'name',
    nullable:false,
    comment:'nombre del ususario'   
})
name:string;

@Column('varchar',{
    name:'lastname',
    nullable:false,
    comment:'apellido del usuario'   
})
lastname:string;

@Column('number',{
    name:'cedula',
    nullable:false,
    comment:'numero de identificacio'   
})
price:number;

@Column('varchar',{
    name:'direction',
    nullable:false,
    comment:'dirreccion del usuario'   
})
direction:string;

@Column('varchar',{
    name:'passwork',
    nullable:false,
    comment:'contraseña del ususario'   
})
passwork:string;

}