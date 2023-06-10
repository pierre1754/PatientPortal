import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Types } from 'mongoose';
import { Doctor } from 'src/doctors/schema/doctor.schema';

export class CreatePatientDto {
  @IsString()
  @ApiProperty({
    description: 'The name of the patient',
    example: 'John Doe',
  })
  name: string;

  @IsNumber()
  @ApiProperty({
    description: 'The age of the patient',
    example: 20,
  })
  age: number;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    description: 'The gender of the patient',
    example: 'Male',
  })
  gender: string;

  @IsString()
  @ApiProperty({
    description: 'The address of the patient',
    example: '35000 Rennes France',
  })
  address: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    description: 'The phone number of the patient',
    example: '0123456789',
  })
  phone: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    description: 'The email of the patient',
    example: 'test@test.com',
  })
  email: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    description: 'The blood group of the patient',
    example: 'A+',
  })
  bloodGroup: string;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({
    description: 'The weight of the patient',
    example: 70,
  })
  weight: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({
    description: 'The height of the patient',
    example: 180,
  })
  height: number;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    description: 'The doctor of the patient',
    example: '60b0f1e3b9b9b71f1c3f0b1e',
  })
  doctor: Doctor;
}

export class PatientDto {
  @IsString()
  @ApiProperty({
    description: 'The id of the patient',
    example: '60b0f1e3b9b9b71f1c3f0b1e',
  })
  _id: Types.ObjectId;

  @IsString()
  @ApiProperty({
    description: 'The name of the patient',
    example: 'John Doe',
  })
  name: string;

  @IsNumber()
  @ApiProperty({
    description: 'The age of the patient',
    example: 20,
  })
  age: number;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    description: 'The gender of the patient',
    example: 'Male',
  })
  gender: string;

  @IsString()
  @ApiProperty({
    description: 'The address of the patient',
    example: '35000 Rennes France',
  })
  address: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    description: 'The phone number of the patient',
    example: '0123456789',
  })
  phone: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    description: 'The email of the patient',
    example: 'test@test.com',
  })
  email: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    description: 'The blood group of the patient',
    example: 'A+',
  })
  bloodGroup: string;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({
    description: 'The weight of the patient',
    example: 70,
  })
  weight: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({
    description: 'The height of the patient',
    example: 180,
  })
  height: number;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    description: 'The doctor of the patient',
    example: '60b0f1e3b9b9b71f1c3f0b1e',
  })
  doctor: Doctor;
}
