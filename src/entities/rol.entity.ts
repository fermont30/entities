// Fernando Montoya
import { RolNombre } from 'src/enum/rol.enum';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { UsuarioEntity } from './usuario.entity';

@Entity({ name: 'rol' })
export class RolEntity {
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

  @Column({ type: 'varchar', length: 10, nullable: false, unique: true })
  rolNombre: RolNombre;

  @ManyToMany(() => UsuarioEntity, (usuario) => usuario.roles)
  usuarios: UsuarioEntity[];
}
