import { PositiveIntPipe } from './../common/pipes/positiveInt.pipe';
import { HttpExceptionFilter } from '../common/exceptions/http-exception.filter';
import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Delete,
  UseFilters,
} from '@nestjs/common';
import { HttpException } from '@nestjs/common/exceptions';
import { CatsService } from './cats.service';
import { Param } from '@nestjs/common';
import { ParseIntPipe } from '@nestjs/common';
import { UseInterceptors } from '@nestjs/common';
import { SuccessInterceptor } from '../common/interceptors/success.interceptor';

// dependency injection
@Controller('cats')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getAllCat() {
    // console.log('Hello Controller');
    return { cats: 'get all cat' };
  }

  @Get(':id')
  getOneCat(@Param('id', ParseIntPipe, PositiveIntPipe) param: number) {
    // console.log(param);
    // console.log(typeof param);
    return 'one cat';
  }

  @Post()
  createCat() {
    return 'create cat';
  }

  @Put(':id')
  updateCat() {
    return 'update cat';
  }

  @Patch(':id')
  updatePartialCat() {
    return 'update partial cat';
  }

  @Delete(':id')
  deleteCat() {
    return 'delete cat';
  }
}
