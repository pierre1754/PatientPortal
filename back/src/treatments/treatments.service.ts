import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Treatment, TreatmentDocument } from './schema/treatment.schema';
import { Model } from 'mongoose';
import { CreateTreatmentDto } from './dto/treatments.dto';

@Injectable()
export class TreatmentsService {
  constructor(
    @InjectModel(Treatment.name)
    private treatmentModel: Model<TreatmentDocument>,
  ) {}

  async create(createTreatmentDto: CreateTreatmentDto): Promise<Treatment> {
    const createdTreatment = await this.treatmentModel
      .create({ ...createTreatmentDto, date: new Date() })
      .catch((err) => {
        console.log(err);
        throw new InternalServerErrorException(
          'Error while creating treatment',
        );
      });

    if (!createdTreatment) {
      throw new InternalServerErrorException('Error while creating treatment');
    }

    const { __v, ...treatment } = createdTreatment.toObject();
    return treatment;
  }

  async createById(
    id: string,
    createTreatmentDto: CreateTreatmentDto,
  ): Promise<Treatment> {
    const createdTreatment = await this.treatmentModel
      .create({ ...createTreatmentDto, date: new Date(), patient: id })
      .catch((err) => {
        console.log(err);
        throw new InternalServerErrorException(
          'Error while creating treatment',
        );
      });

    if (!createdTreatment) {
      throw new InternalServerErrorException('Error while creating treatment');
    }

    const { __v, ...treatment } = createdTreatment.toObject();
    return treatment;
  }

  async edit(
    id: string,
    editTreatmentDto: CreateTreatmentDto,
  ): Promise<Treatment> {
    const editedTreatment = await this.treatmentModel
      .findByIdAndUpdate(id, editTreatmentDto, { new: true })
      .exec()
      .catch((err) => {
        console.log(err);
        throw new BadRequestException("Invalid treatment's id");
      });

    if (!editedTreatment) {
      throw new NotFoundException(`Treatment with id ${id} not found`);
    }

    const { __v, ...treatment } = editedTreatment.toObject();
    return treatment;
  }

  async findAll(): Promise<Treatment[]> {
    return this.treatmentModel
      .find()
      .select('-__v')
      .exec()
      .catch((err) => {
        console.log(err);
        throw new InternalServerErrorException(
          'Error while fetching treatments',
        );
      });
  }

  async findById(id: string): Promise<Treatment> {
    const treatment = await this.treatmentModel
      .findById(id)
      .exec()
      .catch((err) => {
        console.log(err);
        throw new BadRequestException("Invalid treatment's id");
      });

    if (!treatment) {
      throw new NotFoundException(`Patient with id ${id} not found`);
    }

    const { __v, ...rest } = treatment.toObject();
    return rest;
  }

  async findByPatientId(patientId: string): Promise<Treatment[]> {
    const patients = this.treatmentModel
      .find({ patient: patientId })
      .select('-__v')
      .exec()
      .catch((err) => {
        console.log(err);
        throw new InternalServerErrorException(
          'Error while fetching treatments',
        );
      });

    if (!patients) {
      throw new NotFoundException(
        `No treatments found for patient ${patientId}`,
      );
    }
    return patients;
  }

  async findByDoctorId(doctorId: string): Promise<Treatment[]> {
    const doctors = this.treatmentModel
      .find({ doctor: doctorId })
      .select('-__v')
      .exec()
      .catch((err) => {
        console.log(err);
        throw new InternalServerErrorException(
          'Error while fetching treatments',
        );
      });

    if (!doctors) {
      throw new NotFoundException(`No treatments found for doctor ${doctorId}`);
    }
    return doctors;
  }

  async delete(id: string) {
    const deletedTreatment = await this.treatmentModel
      .findByIdAndDelete(id)
      .exec()
      .catch((err) => {
        console.log(err);
        throw new BadRequestException("Invalid treatment's id");
      });

    if (!deletedTreatment) {
      throw new NotFoundException(`Treatment with id ${id} not found`);
    }
  }
}
