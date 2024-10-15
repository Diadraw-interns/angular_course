import { Injectable } from '@angular/core';
import { Logger } from './logger';

@Injectable({
  providedIn: 'root',
})
export class LoggerService implements Logger {
  constructor() {}

  log(message: string, data?: any) {
    console.log(
      `%cRoot logger`,
      'background: blue; color: white; display: block; padding: 0px 5px;',
      message,
      data
    );
  }
}
