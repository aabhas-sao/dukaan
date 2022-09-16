import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OperatorsController } from './operators.controller';
import { OperatorsService } from './operators.service';
import { OperatorsSchema } from './schemas/operators.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'operators', schema: OperatorsSchema }]),
  ],
  controllers: [OperatorsController],
  providers: [OperatorsService],
})
export class OperatorsModule {}
