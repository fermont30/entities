//Fernando Montoya
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { RolEntity } from './rol.entity';


@Entity({ name: 'usuario' })
export class UsuarioEntity {
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

  @Column({ type: 'varchar', length: 50, nullable: false, unique: true })
  nombreUsuario: string;

  @Column({ type: 'varchar', length: 50, nullable: false, unique: true })
  email: string;

  @Column({ type: 'varchar', nullable: false })
  password: string;

  @ManyToMany(() => RolEntity, (rol) => rol.usuarios, { eager: true })
  @JoinTable()
  roles: RolEntity[];

}
