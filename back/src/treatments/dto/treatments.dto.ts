import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsString } from 'class-validator';
import { Doctor } from 'src/doctors/schema/doctor.schema';
import { Patient } from 'src/patients/schema/patient.schema';

export class CreateTreatmentDto {
  @IsString()
  @ApiProperty({
    description: 'The name of the treatment',
    example: 'Tooth extraction',
  })
  treatment: string;

  @IsString()
  @ApiProperty({
    description: 'The patient of the treatment',
    example: '60b0f1e3b9b9b71f1c3f0b1e',
  })
  patient: Patient;

  @IsString()
  @ApiProperty({
    description: 'The doctor of the treatment',
    example: '60b0f1e3b9b9b71f1c3f0b1e',
  })
  doctor: Doctor;
}

export class TreatmentDto {
  @IsString()
  @ApiProperty({
    description: 'The id of the treatment',
    example: '60b0f1e3b9b9b71f1c3f0b1e',
  })
  _id: string;

  @IsString()
  @ApiProperty({
    description: 'The name of the treatment',
    example: 'Tooth extraction',
  })
  treatment: string;

  @IsDate()
  @ApiProperty({
    description: 'The date of the treatment',
    example: '2021-05-28T00:00:00.000Z',
  })
  date: Date;

  @IsString()
  @ApiProperty({
    description: 'The patient of the treatment',
    example: '60b0f1e3b9b9b71f1c3f0b1e',
  })
  patient: Patient;

  @IsString()
  @ApiProperty({
    description: 'The doctor of the treatment',
    example: '60b0f1e3b9b9b71f1c3f0b1e',
  })
  doctor: Doctor;
}
