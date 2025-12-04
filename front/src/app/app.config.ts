import type { ApplicationConfig } from '@angular/core';

import { APP_BASE_HREF } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import {
  inject,
  makeEnvironmentProviders,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter, withComponentInputBinding, withRouterConfig } from '@angular/router';
import { MODULE_ID, ROOT_PATH } from '@app/shared/util/app.const';
import { provideCoreSelectCurrentUserId } from '@lucca-front/ng/core-select/user';
import { configureLuDialog, provideLuDialog } from '@lucca-front/ng/dialog';
import { configureLuPopover } from '@lucca-front/ng/popover2';
import { provideLuTitleStrategy } from '@lucca-front/ng/title';
import { LU_DEFAULT_DISPLAY_POLICY, LuDisplayFullname } from '@lucca-front/ng/user';
import { LuRemoteModuleStore } from '@lucca/cdk/remote-entity';
import {
  LEGACY_LONG_TO_SHORT_LOCALE_OVERRIDES,
  LUCCA_FALLBACK_LOCALE,
  LUCCA_LOCALES,
  provideLuccaLocaleData,
} from '@lucca/locale-data';
import { defaultSessionExpiration, PRINCIPAL, PRINCIPAL_LOCALE, provideLuccaPrincipal } from '@lucca/principal';
import { provideLuccaTranslate, translationsHttpLoader } from '@lucca/translate';
import { map } from 'rxjs';

import { APP_ROUTES } from './app.routes';

const provideLuccaTools = () =>
  makeEnvironmentProviders([
    provideLuccaPrincipal({ sessionExpiration: defaultSessionExpiration() }),
    provideLuccaLocaleData(() => inject(PRINCIPAL_LOCALE)),
    provideLuccaTranslate({
      locale: () => inject(PRINCIPAL_LOCALE),
      fallbackLocale: LUCCA_FALLBACK_LOCALE,
      supportedLocales: LUCCA_LOCALES,
      loader: translationsHttpLoader({
        i18nAssetsPath: 'meta/i18n',
        i18nCacheBusting: {},
        langOverride: LEGACY_LONG_TO_SHORT_LOCALE_OVERRIDES,
      }),
    }),
    provideLuTitleStrategy({
      appTitle: () =>
        inject(LuRemoteModuleStore)
          .selectEntity(MODULE_ID)
          .pipe(map(({ name }) => name ?? '')),
    }),
  ]);

const provideLuccaFront = () =>
  makeEnvironmentProviders([
    { provide: LU_DEFAULT_DISPLAY_POLICY, useValue: LuDisplayFullname.firstlast },
    provideLuDialog(),
    configureLuDialog(),
    configureLuPopover(),
    provideCoreSelectCurrentUserId(() => inject(PRINCIPAL).id),
  ]);

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: ROOT_PATH,
    },
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(APP_ROUTES, withComponentInputBinding(), withRouterConfig({ onSameUrlNavigation: 'reload' })),
    provideHttpClient(),
    provideLuccaTools(),
    provideLuccaFront(),
  ],
};
