import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Doctor } from './doctor.schema';

export type PatientDocument = HydratedDocument<Patient>;

@Schema()
export class Patient {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  age: number;

  @Prop()
  gender: string;

  @Prop({ required: true })
  address: string;

  @Prop()
  phone: string;

  @Prop()
  email: string;

  @Prop()
  bloodGroup: string;

  @Prop()
  weight: number;

  @Prop()
  height: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' })
  doctor: Doctor;
}

export const PatientSchema = SchemaFactory.createForClass(Patient);
