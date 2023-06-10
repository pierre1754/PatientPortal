import { Body, Controller, Get, HttpStatus, Param, Post } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PatientDto } from './patients.dto';

@Controller('patients')
@ApiTags('Patient')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @Post('/create')
  @ApiOperation({
    summary: 'Create a new patient',
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The patient details',
    type: PatientDto,
  })
  async create(@Body() createPatientDto: PatientDto) {
    return this.patientsService.create(createPatientDto);
  }

  @Post('/edit/:id')
  @ApiOperation({
    summary: 'Edit a existing patient',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The patient details',
    type: PatientDto,
  })
  async edit(@Param() id: string, @Body() editPatientDto: PatientDto) {
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
}
