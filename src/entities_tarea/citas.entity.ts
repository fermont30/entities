// Fernando Montoya

import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn, } from 'typeorm';
import { DoctorEntity } from './doctor.entity';
import { TratamientoEntity } from './tratamiento.entity';
import { HistoriaEntity } from './historia.entity';

@Entity({ name: 'citas' })
export class CitasEntity {
  
  @PrimaryGeneratedColumn('increment')
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

  @Column({ type: 'varchar', length: 20, nullable: false })
  nombre_paciente: string;

  @Column({ type: 'varchar', length: 20, nullable: false })
  apellido_paciente: string;

  @Column({ type: 'date', nullable: false })
  fecha: Date;

  @Column({ type: 'time', nullable: false })
  hora: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  dentista: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  motivo: string; 
  
  @ManyToOne(() => TratamientoEntity, tratamiento => tratamiento.citas)
  tratamiento: TratamientoEntity;

  @ManyToMany(() => DoctorEntity, doctor => doctor.citas)
  doctores: DoctorEntity[];

  @OneToOne(() => HistoriaEntity, historia => historia.cita)
  historia: HistoriaEntity;
}
