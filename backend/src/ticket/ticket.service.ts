import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ticket } from './ticket.entity';
import { CreateTicketDto, UpdateTicketDto } from './ticket.dto';

@Injectable()
export class TicketService {
  constructor(
    @InjectRepository(Ticket)
    private readonly ticketRepo: Repository<Ticket>,
  ) {}

  create(data: CreateTicketDto) {
    const ticket = this.ticketRepo.create(data);
    return this.ticketRepo.save(ticket);
  }

  findAll() {
    return this.ticketRepo.find();
  }

  findOne(id: string) {
    return this.ticketRepo.findOne({ where: { id } });
  }

  async update(id: string, data: UpdateTicketDto) {
    await this.ticketRepo.update(id, data);
    return this.findOne(id);
  }

  delete(id: string) {
    return this.ticketRepo.delete(id);
  }
}