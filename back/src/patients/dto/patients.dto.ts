import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class PatientDto {
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
}
