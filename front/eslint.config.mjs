import paggaLint from '@lucca/pagga-eslint';
import prettier from 'eslint-plugin-prettier/recommended';
import tseslint from 'typescript-eslint';
import luccaTranslate from '@lucca/translate/eslint-plugin';
import sheriffPlugin from '@softarc/eslint-plugin-sheriff';

export default tseslint.config(
  ...paggaLint.recommended,
  { ignores: ['**/*.spec.ts', '**/*.mock.ts', '**/tests/*'] },
  {
    files: ['**/*.ts'],
    plugins: {
      '@softarc/sheriff': sheriffPlugin,
    },
    rules: {
      '@softarc/sheriff/deep-import': 'error',
      '@softarc/sheriff/dependency-rule': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@angular-eslint/prefer-on-push-component-change-detection': 'off', // No need anymore with zonelessßß
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'lbnb',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: ['element', 'attribute'],
          prefix: 'lbnb',
          style: 'kebab-case',
        },
      ],
    },
  },
  {
    files: ['**/*.html'],
    extends: [...luccaTranslate.configs.recommended],
  },
  prettier,
);
