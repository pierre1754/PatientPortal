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
import { PatientsService } from './patients.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePatientDto, PatientDto } from './dto/patients.dto';
import { TreatmentsService } from 'src/treatments/treatments.service';
import {
  CreateTreatmentDto,
  TreatmentDto,
} from 'src/treatments/dto/treatments.dto';

@Controller('patients')
@ApiTags('Patient')
export class PatientsController {
  constructor(
    private readonly patientsService: PatientsService,
    private readonly treatmentsService: TreatmentsService,
  ) {}

  @Post('/')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Create a new patient',
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The patient details',
    type: PatientDto,
  })
  async create(@Body() createPatientDto: CreatePatientDto) {
    return this.patientsService.create(createPatientDto);
  }

  @Put('/:id')
  @ApiOperation({
    summary: 'Edit a existing patient',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The patient details',
    type: PatientDto,
  })
  async edit(
    @Param('id') id: string,
    @Body() editPatientDto: CreatePatientDto,
  ) {
    return this.patientsService.edit(id, editPatientDto);
  }

  @Get('/')
  @ApiOperation({
    summary: 'Get all patients',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The patients details',
    type: PatientDto,
    isArray: true,
  })
  async findAll() {
    return this.patientsService.findAll();
  }

  @Get('/:id')
  @ApiOperation({
    summary: 'Get a patient by id',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The patient details',
    type: PatientDto,
  })
  async findById(@Param('id') id: string) {
    return this.patientsService.findById(id);
  }

  @Get('/:id/treatments')
  @ApiOperation({
    summary: 'Get all treatments of a patient',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The treatments details',
    type: TreatmentDto,
    isArray: true,
  })
  async findTreatments(@Param('id') id: string) {
    return this.treatmentsService.findByPatientId(id);
  }

  @Post('/:id/treatments')
  @ApiOperation({
    summary: 'Create a new treatment for a patient',
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The treatment details',
    type: TreatmentDto,
  })
  async createTreatment(
    @Param('id') id: string,
    @Body() createTreatmentDto: CreateTreatmentDto,
  ) {
    return this.treatmentsService.createById(id, createTreatmentDto);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Delete a patient',
  })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
  })
  async delete(@Param('id') id: string) {
    return this.patientsService.delete(id);
  }
}
