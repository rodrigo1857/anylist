import { Injectable } from '@nestjs/common';
import { CreateItemInput } from './dto/create-item.input';
import { UpdateItemInput } from './dto/update-item.input';
import { Item } from './entities/item.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ItemsService {

  constructor(
    @InjectRepository(Item)
    private readonly itemsRepository:Repository<Item>
  ) {}

  async create(createItemInput: CreateItemInput):Promise<Item>  {
    const newItem = this.itemsRepository.create(createItemInput);
    return await this.itemsRepository.save(newItem);
  }

  async findAll(): Promise<Item[]> {
    return await this.itemsRepository.find();
  }

  async findOne(id: string):Promise<Item>{
    const itemT = await this.itemsRepository.findOne({ where: { id }});
    return  itemT;
  }

  update(id: number, updateItemInput: UpdateItemInput) {
    return `This action updates a #${id} item`;
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }
}
