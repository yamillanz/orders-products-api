import { IsDateString, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

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
export class UpdatedOrderDTO extends PartialType(OrderDTO) {}
