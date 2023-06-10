import { Module } from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { DoctorsController } from './doctors.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DoctorSchema } from 'src/schemas/doctor.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Doctor', schema: DoctorSchema }]),
  ],
  providers: [DoctorsService],
  controllers: [DoctorsController],
})
export class DoctorsModule {}
