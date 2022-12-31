import { HttpException } from '@nestjs/common/exceptions';
import { Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class PositiveIntPipe implements PipeTransform {
  transform(value: number) {
    if (value < 0) {
      throw new HttpException('value must be positive', 400);
    }
    return value;
  }
}
