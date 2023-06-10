import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Patient, PatientDocument } from 'src/patients/schema/patient.schema';
import { CreatePatientDto, PatientDto } from './dto/patients.dto';

@Injectable()
export class PatientsService {
  constructor(
    @InjectModel(Patient.name) private patientModel: Model<PatientDocument>,
  ) {}

  async create(createPatientDto: CreatePatientDto): Promise<PatientDto> {
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

  async edit(
    id: string,
    editPatientDto: CreatePatientDto,
  ): Promise<PatientDto> {
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
    return this.patientModel
      .find()
      .select('-__v')
      .exec()
      .catch((err) => {
        console.log(err);
        throw new InternalServerErrorException('Error while fetching patients');
      });
  }

  async findById(id: string): Promise<PatientDto> {
    const patient = await this.patientModel
      .findById(id)
      .exec()
      .catch((err) => {
        console.log(err);
        throw new BadRequestException("Invalid patient's id");
      });

    if (!patient) {
      throw new NotFoundException(`Patient with id ${id} not found`);
    }

    const { __v, ...rest } = patient.toObject();
    return rest;
  }

  async findByDoctorId(doctorId: string): Promise<PatientDto[]> {
    const patients = await this.patientModel
      .find({ doctor: doctorId })
      .select('-__v')
      .exec()
      .catch((err) => {
        console.log(err);
        throw new BadRequestException("Invalid doctor's id");
      });

    if (!patients) {
      throw new NotFoundException(`Patient with doctor: ${doctorId} not found`);
    }

    return patients;
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
