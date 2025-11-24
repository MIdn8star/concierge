import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AppConfigService {
  private config: any = null;

  loadConfig(config: any) {
    this.config = config;
  }

  get apiBaseUrl(): string {
    return this.config?.apiBaseUrl;
  }

  isLoaded(): boolean {
    return this.config !== null;
  }
}
