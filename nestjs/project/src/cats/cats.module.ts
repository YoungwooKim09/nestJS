import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService], // 기본적으로 캡슐화(은닉화)
  exports: [CatsService], // 다른 모듈에서 사용할 수 있도록 export
})
export class CatsModule {}
