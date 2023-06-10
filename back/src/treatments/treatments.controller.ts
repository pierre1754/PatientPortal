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
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TreatmentsService } from './treatments.service';
import { CreateTreatmentDto, TreatmentDto } from './dto/treatments.dto';

@Controller('treatments')
@ApiTags('Treatment')
export class TreatmentsController {
  constructor(private readonly treatmentsService: TreatmentsService) {}

  @Post('/create')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Create a new treatment',
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The treatment details',
    type: TreatmentDto,
  })
  async create(@Body() createTreatmentDto: CreateTreatmentDto) {
    return this.treatmentsService.create(createTreatmentDto);
  }

  @Post('/edit/:id')
  @ApiOperation({
    summary: 'Edit a existing treatment',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The treatment details',
    type: TreatmentDto,
  })
  async edit(
    @Param('id') id: string,
    @Body() editTreatmentDto: CreateTreatmentDto,
  ) {
    return this.treatmentsService.edit(id, editTreatmentDto);
  }

  @Get('/')
  @ApiOperation({
    summary: 'Get all treatments',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The treatments details',
    type: TreatmentDto,
    isArray: true,
  })
  async findAll() {
    return this.treatmentsService.findAll();
  }

  @Get('/:id')
  @ApiOperation({
    summary: 'Get a treatment by id',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The treatment details',
    type: TreatmentDto,
  })
  async findById(@Param('id') id: string) {
    return this.treatmentsService.findById(id);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Delete a treatment by id',
  })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
  })
  async delete(@Param('id') id: string) {
    return this.treatmentsService.delete(id);
  }
}
