import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DoctorDto } from './dto/doctors.dto';

@Controller('doctors')
@ApiTags('Doctor')
export class DoctorsController {
  constructor(private readonly doctorsService: DoctorsService) {}

  @Post('/create')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Create a new doctor',
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The doctor details',
    type: DoctorDto,
  })
  async create(@Body() createDoctorDto: DoctorDto) {
    return this.doctorsService.create(createDoctorDto);
  }

  @Post('/edit/:id')
  @ApiOperation({
    summary: 'Edit a existing doctor',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The doctor details',
    type: DoctorDto,
  })
  async edit(@Param('id') id: string, @Body() editDoctorDto: DoctorDto) {
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

  @Delete('/delete/:id')
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
