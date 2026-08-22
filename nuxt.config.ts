// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/content',
        '@nuxt/eslint',
        '@nuxt/icon',
        '@nuxt/image',
        '@nuxtjs/tailwindcss',
        '@vueuse/nuxt',
        'nuxt-gtag',
        '@vesp/nuxt-fontawesome',
        'vue3-carousel-nuxt',
    ],
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    future: {
        compatibilityVersion: 4,
    },
    experimental: {
        typedPages: true,
    },
    content: {
        experimental: { nativeSqlite: true },
    },
    eslint: {
        config: {
            standalone: false,
            nuxt: {
                sortConfigKeys: true,
            },
        },
    },
    css: ['~/assets/styles/app.scss'],
    gtag: {
        id: 'G-0MY09VW5T8',
    },
    fontawesome: {
        component: 'fa',
        suffix: true,
        icons: {
            solid: ['map-marker-alt', 'arrow-right', 'calendar', 'calendar-day'],
        },
    },
    image: {
        provider: 'ipx',
    },
    tailwindcss: {
        config: {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        dark: {
                            bg: '#0d1117', // Main page background
                            surface: '#161b22', // Cards / Containers
                            border: '#30363d', // Borders & dividers
                            text: '#f0f6fc', // Primary body text
                            muted: '#8b949e', // Secondary / muted text
                        },
                    },
                },
            },
        },
    },
});
