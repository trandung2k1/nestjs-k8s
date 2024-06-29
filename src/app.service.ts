import { Injectable } from '@nestjs/common';
import * as os from 'os';
@Injectable()
export class AppService {
  getHello(): string {
    return `<h1>I'm ${os.hostname()}</h1>`;
  }
}
