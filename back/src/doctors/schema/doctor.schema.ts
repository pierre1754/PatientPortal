import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DoctorDocument = HydratedDocument<Doctor>;

@Schema()
export class Doctor {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  profession: string;
}

export const DoctorSchema = SchemaFactory.createForClass(Doctor);
