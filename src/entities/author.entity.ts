// AutorEntity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";
import { LibroEntity } from "./book.entity";


@Entity('autores')
export class AutorEntity {
@PrimaryGeneratedColumn('uuid')
id: string;

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

@Column('varchar', {
name: 'nombre',
nullable: false,
comment: 'Nombre del autor'
})
nombre: string;

@ManyToMany(() => LibroEntity, libro => libro.autores)
libros: LibroEntity[];


}
