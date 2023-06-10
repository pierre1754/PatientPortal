import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
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
    const createdPatient = await this.patientModel
      .create(createPatientDto)
      .catch((err) => {
        console.log(err);
        throw new InternalServerErrorException('Error while creating patient');
      });

    if (!createdPatient) {
      throw new InternalServerErrorException('Error while creating patient');
    }

    const { __v, ...patient } = createdPatient.toObject();
    return patient;
  }

  async edit(id: string, editPatientDto: PatientDto): Promise<PatientDto> {
    const editedPatient = await this.patientModel
      .findByIdAndUpdate(id, editPatientDto, { new: true })
      .exec()
      .catch((err) => {
        console.log(err);
        throw new BadRequestException("Invalid patient's id");
      });

    if (!editedPatient) {
      throw new NotFoundException(`Patient with id ${id} not found`);
    }

    const { __v, ...patient } = editedPatient.toObject();
    return patient;
  }

  async findAll(): Promise<PatientDto[]> {
    return this.patientModel.find().select('-__v').exec();
  }

  async delete(id: string) {
    const deletedPatient = await this.patientModel
      .findByIdAndDelete(id)
      .exec()
      .catch((err) => {
        console.log(err);
        throw new BadRequestException("Invalid patient's id");
      });

    if (!deletedPatient) {
      throw new NotFoundException(`Patient with id ${id} not found`);
    }
  }
}
