// LibroEntity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";
import { AutorEntity } from "./author.entity";


@Entity('libros')
export class LibroEntity {
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
name: 'titulo',
nullable: false,
comment: 'Título del libro'
})
titulo: string;

@ManyToMany(() => AutorEntity, autor => autor.libros)
@JoinTable()
autores: AutorEntity[];

@Column('varchar',{
    name:'autor',
    nullable:false,
    comment:'autor del libro'   
})
autor:string;



}
