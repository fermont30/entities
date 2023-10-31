import { 
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToMany,  
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ProductEntity } from './product.entity';

@Entity('categories', { schema: 'ventas' })
export class CategoryEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @CreateDateColumn({
    name: 'create_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createAT: Date;

  @UpdateDateColumn({
    name: 'update_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updateAT: Date;

  @DeleteDateColumn({
    name: 'delete_at',
    type: 'timestamp',
    nullable: true,
  })
  deleteAT: Date;

  @ManyToMany(() => ProductEntity, (product) => product.category)
  products: ProductEntity[];

  @Column('varchar', {
    name: 'title',
    nullable: false,
    comment: 'nombre de la categoria',
  })
  title: string;
  @Column('number', {
    name: 'price',
    nullable: false,
    comment: 'precio de la categoria',
  })
  price: number;

  @Column('varchar', {
    name: 'description',
    nullable: true,
    comment: 'descipcion de la categoria',
  })
  description: string;


}
