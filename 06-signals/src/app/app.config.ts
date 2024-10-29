import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { routes } from './app.routes';
import { AppData } from './data';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(),
    importProvidersFrom(InMemoryWebApiModule.forRoot(AppData, { delay: 1000 })),
  ],
};
