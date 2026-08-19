// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/content',
        '@nuxt/eslint',
        '@nuxt/icon',
        '@nuxt/image',
        '@vueuse/nuxt',
        'nuxt-gtag',
    ],
    devtools: { enabled: true },
    css: [
        '~/assets/styles/_bootstrap.scss',
        '~/assets/styles/app.scss',
    ],
    content: {
        experimental: { nativeSqlite: true },
    },
    compatibilityDate: '2025-07-15',
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    quietDeps: true,
                    silenceDeprecations: ['legacy-js-api', 'import'],
                    additionalData: `@use "sass:map"; @use "~/assets/styles/abstracts" as *;`,
                },
            },
        },
    },
    eslint: {
        config: {
            stylistic: {
                semi: true,
                indent: 4,
                quotes: 'single',
                commaDangle: 'always-multiline',
            },
        },
    },
});
