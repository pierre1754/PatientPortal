import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Patient } from '../../patients/schema/patient.schema';
import { Doctor } from 'src/doctors/schema/doctor.schema';

export type TreatmentDocument = HydratedDocument<Treatment>;

@Schema()
export class Treatment {
  @Prop({ required: true })
  treatment: string;

  @Prop({ required: true })
  date: Date;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true,
  })
  patient: Patient;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true })
  doctor: Doctor;
}

export const TreatmentSchema = SchemaFactory.createForClass(Treatment);
