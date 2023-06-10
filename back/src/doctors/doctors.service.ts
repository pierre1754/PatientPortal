import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Doctor, DoctorDocument } from 'src/doctors/schema/doctor.schema';
import { DoctorDto } from './dto/doctors.dto';

@Injectable()
export class DoctorsService {
  constructor(
    @InjectModel(Doctor.name) private doctorModel: Model<DoctorDocument>,
  ) {}

  async create(createDoctorDto: DoctorDto) {
    const createdDoctor = await this.doctorModel
      .create(createDoctorDto)
      .catch((err) => {
        console.log(err);
        throw new InternalServerErrorException('Error while creating doctor');
      });

    if (!createdDoctor) {
      throw new InternalServerErrorException('Error while creating doctor');
    }

    const { __v, ...doctor } = createdDoctor.toObject();
    return doctor;
  }

  async edit(id: string, editDoctorDto: DoctorDto): Promise<DoctorDto> {
    const editedDoctor = await this.doctorModel
      .findByIdAndUpdate(id, editDoctorDto, { new: true })
      .exec()
      .catch((err) => {
        console.log(err);
        throw new BadRequestException('Invalid doctor id');
      });

    if (!editedDoctor) {
      throw new NotFoundException('Doctor not found');
    }

    const { __v, ...doctor } = editedDoctor.toObject();
    return doctor;
  }

  async findAll(): Promise<DoctorDto[]> {
    return await this.doctorModel
      .find()
      .select('-__v')
      .exec()
      .catch((err) => {
        console.log(err);
        throw new InternalServerErrorException('Error while fetching doctors');
      });
  }

  async findById(id: string): Promise<DoctorDto> {
    const doctor = await this.doctorModel
      .findById(id)
      .exec()
      .catch((err) => {
        console.log(err);
        throw new BadRequestException('Invalid doctor id');
      });

    if (!doctor) {
      throw new NotFoundException('Doctor not found');
    }

    const { __v, ...rest } = doctor.toObject();
    return rest;
  }

  async delete(id: string) {
    const deletedDoctor = await this.doctorModel
      .findByIdAndDelete(id)
      .exec()
      .catch((err) => {
        console.log(err);
        throw new BadRequestException('Invalid doctor id');
      });

    if (!deletedDoctor) {
      throw new NotFoundException('Doctor not found');
    }
  }
}
