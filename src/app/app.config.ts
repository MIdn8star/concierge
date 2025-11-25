import { ApplicationConfig, inject, provideAppInitializer } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import {
  HttpClient,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';

import { firstValueFrom } from 'rxjs';

import { authInterceptor } from './core/interceptors/auth-interceptor';
import { AppConfigService } from './core/services/app-config.service';
import {apiInterceptor} from './core/interceptors/api.interceptor-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([apiInterceptor, authInterceptor])
    ),

    provideAppInitializer(async () => {
      const http = inject(HttpClient);
      const configService = inject(AppConfigService);

      const config = await firstValueFrom(
        http.get('/assets/config.json')
      );

      console.log('config', config);

      configService.loadConfig(config);
    }),
  ]
};
