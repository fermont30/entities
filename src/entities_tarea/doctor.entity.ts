// Fernando Montoya

import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, CreateDateColumn, DeleteDateColumn, UpdateDateColumn, JoinTable } from "typeorm";
import { CitasEntity } from "./citas.entity";


@Entity()
export class DoctorEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({
    name: 'create_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createAt: Date;

  @UpdateDateColumn({
    name: 'update_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updateAt: Date;

  @DeleteDateColumn({
    name: 'delete_at',
    type: 'timestamp',
    nullable: true,
  })
  deleteAt: Date;

  @Column()
  nombre: string;

  @Column()
  especialidad: string;  

  @ManyToMany(() => CitasEntity, cita => cita.doctores)
  @JoinTable()
  citas: CitasEntity[];
}