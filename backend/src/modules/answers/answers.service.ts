import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Answers } from '../../entities/Answers.entity';

@Injectable()
export class AnswersService {
  constructor(
    @InjectRepository(Answers)
    private readonly AnswersRepository: Repository<Answers>,
  ) {}

  create(answer: Answers) {
      this.AnswersRepository.create(answer);
  }

  findAll(): Promise<Answers[]> {
    return this.AnswersRepository.find();
  }
}