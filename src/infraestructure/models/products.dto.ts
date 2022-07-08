import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class ProductDTO {
  @IsNotEmpty()
  @IsNumber()
  idOrder: number;

  @IsNotEmpty()
  @IsNumber()
  valueUnit: number;

  @IsNotEmpty()
  @IsString()
  unit: number;

  @IsNotEmpty()
  @IsString()
  descriptionProd: string;

  @IsOptional()
  @IsString()
  sku: string;

  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  @IsNotEmpty()
  @IsNumber()
  qtyBox: number;

  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  weight: number;

  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  volume: number;

  @IsOptional()
  @IsString()
  mark: string;

  @IsInt()
  @IsNotEmpty()
  status: boolean;
}
export class UpdatedProuductDTO extends PartialType(ProductDTO) {}
