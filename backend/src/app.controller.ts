import { Controller, Get, Post, Req, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { Answers } from './entities/answers.entity';
import { AnswersService } from './modules/answers/answers.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService, private readonly answersServices: AnswersService ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('save')
  save(@Body() b): string {

    const data = JSON.parse(b);
    console.dir(data);
    // this.answersServices.create(data);
    return b;
  }
}
