import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppData } from './data';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes, withComponentInputBinding()),
    importProvidersFrom(InMemoryWebApiModule.forRoot(AppData, { delay: 1000 })),
  ],
};
