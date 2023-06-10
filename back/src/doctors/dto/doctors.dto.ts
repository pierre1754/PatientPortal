import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { Types } from 'mongoose';

export class CreateDoctorDto {
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
}

export class DoctorDto {
  @IsString()
  @ApiProperty({
    description: 'The id of the doctor',
    example: '60b0f1e3b9b9b71f1c3f0b1e',
  })
  _id: Types.ObjectId;

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
}
