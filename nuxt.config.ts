// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['shadcn-docs-nuxt'],

  i18n: {
    defaultLocale: 'zh',
    locales: [
      {
        code: 'zh',
        name: '中文',
        language: 'zh-CN',
      },
    ],
  },

  compatibilityDate: '2025-09-25',
  modules: ['@nuxtjs/i18n'],
});