import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsArray, IsOptional, IsString } from 'class-validator';
import { Patient } from 'src/patients/schema/patient.schema';

export class DoctorDto {
  @IsString()
  @ApiProperty({
    description: 'The name of the doctor',
    example: 'John Doe',
  })
  name: string;

  @IsString()
  @ApiProperty({
    description: 'The profession of the doctor',
    example: 'Dentist',
  })
  profession: string;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  @ApiPropertyOptional({
    description: 'The patients of the doctor',
    example: ['60b0f1e3b9b9b71f1c3f0b1e'],
  })
  patients: Patient[];
}
