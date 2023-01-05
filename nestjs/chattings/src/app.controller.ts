import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('index') // controller를 통해 view를 렌더링할 때 사용
  root() {
    return {
      data: {
        title: 'Chattings',
        copyright: 'Youngwoo Kim',
      },
    };
  }
}
