import type * as translations from '@assets/i18n/fr.json';

import { buildTranslateService } from '@lucca/translate';

export type Translations = typeof translations;

export const { TranslateService, injectTranslations, translate } = buildTranslateService<Translations>({
  providedIn: 'root',
});
