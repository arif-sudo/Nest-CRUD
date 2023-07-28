import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!!!';
  }

  getProg(): string {
    return 'NEST JS';
  }
}
