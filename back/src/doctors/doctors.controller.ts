import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateDoctorDto, DoctorDto } from './dto/doctors.dto';
import { PatientsService } from 'src/patients/patients.service';
import { PatientDto } from 'src/patients/dto/patients.dto';
import { TreatmentsService } from 'src/treatments/treatments.service';
import { TreatmentDto } from 'src/treatments/dto/treatments.dto';

@Controller('doctors')
@ApiTags('Doctor')
export class DoctorsController {
  constructor(
    private readonly doctorsService: DoctorsService,
    private readonly patientsService: PatientsService,
    private readonly treatmentsService: TreatmentsService,
  ) {}

  @Post('/')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Create a new doctor',
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The doctor details',
    type: DoctorDto,
  })
  async create(@Body() createDoctorDto: CreateDoctorDto) {
    return this.doctorsService.create(createDoctorDto);
  }

  @Put('/:id')
  @ApiOperation({
    summary: 'Edit a existing doctor',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The doctor details',
    type: DoctorDto,
  })
  async edit(@Param('id') id: string, @Body() editDoctorDto: CreateDoctorDto) {
    return this.doctorsService.edit(id, editDoctorDto);
  }

  @Get('/')
  @ApiOperation({
    summary: 'Get all doctors',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The doctors details',
    type: DoctorDto,
    isArray: true,
  })
  async findAll() {
    return this.doctorsService.findAll();
  }

  @Get('/:id')
  @ApiOperation({
    summary: 'Get a doctor by id',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The doctor details',
    type: DoctorDto,
  })
  async findById(@Param('id') id: string) {
    return this.doctorsService.findById(id);
  }

  @Get('/:id/patients')
  @ApiOperation({
    summary: 'Get all patients of a doctor',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The patients details',
    type: PatientDto,
    isArray: true,
  })
  async findPatients(@Param('id') id: string) {
    return this.patientsService.findByDoctorId(id);
  }

  @Get('/:id/treatments')
  @ApiOperation({
    summary: 'Get all treatments of a doctor',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The treatments details',
    type: TreatmentDto,
    isArray: true,
  })
  async findTreatments(@Param('id') id: string) {
    return this.treatmentsService.findByDoctorId(id);
  }

  @Delete('/:id')
  @ApiOperation({
    summary: 'Delete a doctor',
  })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
  })
  async delete(@Param('id') id: string) {
    return this.doctorsService.delete(id);
  }
}
