import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnswersService } from './answers.service';
import { Answers } from '../../entities/answers.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Answers])],
  providers: [AnswersService],
  controllers: [Answers],
})
export class AnswersModule {}