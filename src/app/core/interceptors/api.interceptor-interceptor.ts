import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AppConfigService } from '../services/app-config.service';

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  const configService = inject(AppConfigService);

  if (!configService.isLoaded()) {
    return next(req);
  }

  const baseUrl = configService.apiBaseUrl;

  // Skip absolute URLs (already full paths)
  if (/^https?:\/\//i.test(req.url)) {
    return next(req);
  }

  // ⭐ BEST METHOD: Use URL class for perfect join
  const finalUrl = new URL(req.url, baseUrl).toString();

  console.log("FINAL URL:", finalUrl);

  return next(req.clone({ url: finalUrl }));
};
