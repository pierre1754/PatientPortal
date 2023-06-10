import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class PatientDto {
  @IsString()
  @ApiProperty()
  name: string;

  @IsNumber()
  @ApiProperty()
  age: number;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  gender: string;

  @IsString()
  @ApiProperty()
  address: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  phone: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  email: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  bloodGroup: string;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ required: false })
  weight: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ required: false })
  height: number;
}
