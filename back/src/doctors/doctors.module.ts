import { Module } from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { DoctorsController } from './doctors.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DoctorSchema } from 'src/doctors/schema/doctor.schema';
import { TreatmentsModule } from 'src/treatments/treatments.module';
import { PatientsModule } from 'src/patients/patients.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Doctor', schema: DoctorSchema }]),
    PatientsModule,
    TreatmentsModule,
  ],
  providers: [DoctorsService],
  controllers: [DoctorsController],
})
export class DoctorsModule {}
