import { Field, Float, ID, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: 'items' })
@ObjectType()
export class Item {

  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Field(() => String)
  @Column()
  name: string;

  @Column()
  @Field(() => Float)
  quantity:number;

  @Column({nullable:true})
  @Field(() => String,{nullable:true})
  quantityUnits?:string;

}
