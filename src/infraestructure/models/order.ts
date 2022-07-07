import { IsDateString, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
export interface Orders {
  idOrder: number;
  idUser: number;
  orderNumber: number;
  dateTime: Date;
  providerName: string;
  dateCreated: Date;
  observation: string;
  totalValue: number;
  status: boolean;
}

// export interface OrderDTO extends Partial<Orders> {}
export class OrderDTO {
  @IsNotEmpty()
  @IsNumber()
  idUser: number;

  @IsNotEmpty()
  @IsNumber()
  orderNumber: number;

  @IsNotEmpty()
  @IsDateString()
  dateTime: Date;

  @IsOptional()
  @IsString()
  providerName: string;

  @IsOptional()
  @IsString()
  observation: string;

  @IsNotEmpty()
  @IsNumber()
  totalValue: number;

  @IsInt()
  @IsNotEmpty()
  status: boolean;
}

// class mia extends Partial<OrderDTO>{};

// interface UpdateDto extends Partial<OrderDTO> {}
export class UpdatedOrderDTO extends PartialType(OrderDTO) {}
