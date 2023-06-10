import { Module } from '@nestjs/common';
import { TreatmentsService } from './treatments.service';
import { TreatmentsController } from './treatments.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TreatmentSchema } from './schema/treatment.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Treatment', schema: TreatmentSchema }]),
  ],
  providers: [TreatmentsService],
  controllers: [TreatmentsController],
  exports: [TreatmentsService],
})
export class TreatmentsModule {}
