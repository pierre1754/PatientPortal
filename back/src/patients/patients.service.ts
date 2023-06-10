import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Patient, PatientDocument } from 'src/schemas/patient.schema';
import { PatientDto } from './patients.dto';

@Injectable()
export class PatientsService {
  constructor(
    @InjectModel(Patient.name) private patientModel: Model<PatientDocument>,
  ) {}

  async create(createPatientDto: PatientDto): Promise<PatientDto> {
    try {
      const createdPatient = await this.patientModel.create(createPatientDto);
      const { __v, ...patient } = createdPatient.toObject();

      return patient;
    } catch (error) {
      throw new InternalServerErrorException('Error while creating patient');
    }
  }

  async edit(id: string, editPatientDto: PatientDto): Promise<PatientDto> {
    try {
      const editedPatient = this.patientModel.findByIdAndUpdate(
        id,
        editPatientDto,
        { new: true },
      );

      return editedPatient.select('-__v').exec();
    } catch (error) {
      throw new InternalServerErrorException('Error while editing patient');
    }
  }

  async findAll(): Promise<PatientDto[]> {
    try {
      return this.patientModel.find().select('-__v').exec();
    } catch (error) {
      throw new InternalServerErrorException('Error while fetching patients');
    }
  }
}
