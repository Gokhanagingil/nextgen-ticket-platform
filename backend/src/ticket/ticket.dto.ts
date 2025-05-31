import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { TicketType, TicketPriority, TicketStatus } from './ticket.entity';

export class CreateTicketDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  description: string;

  @IsEnum(TicketType)
  type: TicketType;

  @IsEnum(TicketPriority)
  priority: TicketPriority;
}

export class UpdateTicketDto {
  @IsString()
  title?: string;

  @IsString()
  description?: string;

  @IsEnum(TicketPriority)
  priority?: TicketPriority;

  @IsEnum(TicketStatus)
  status?: TicketStatus;
}