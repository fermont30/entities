// Fernando Montoya

import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'historia' })
export class HistoriaEntity {

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

  @Column({ type: 'date', nullable: false })
  fecha: Date;

  @Column({ type: 'time', nullable: false })
  hora: string;

  @Column({ type: 'varchar', length: 20, nullable: false })
  nombre_paciente: string;

  @Column({ type: 'varchar', length: 20, nullable: false })
  apellido_paciente: string;

  @Column({ type: 'integer', nullable: false})
  edad: number;

  @Column({ type: 'integer', nullable: false})
  telefono: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  direccion: string;

  @Column({ type: 'varchar', length: 20, nullable: false })
  genero: string;

  @Column({ type: 'varchar', length: 20, nullable: false })
  estado_civil: string;  

  @Column({ type: 'varchar', length: 100, nullable: false })
  motivo: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  enfermedades: string; 
  
  @Column({ type: 'varchar', length: 100, nullable: false })
  alergias: string;
  
  @Column({ type: 'varchar', length: 100, nullable: false })
  medicamentos: string
}
