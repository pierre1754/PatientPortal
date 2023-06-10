import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

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
}

export const PatientSchema = SchemaFactory.createForClass(Patient);
