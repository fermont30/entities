// Fernando Montoya

import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

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
}
