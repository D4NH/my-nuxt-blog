// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
    files: ['**/*.ts', '**/*.vue', '**/*.js'],
    rules: {
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-unused-vars': 'off',

        // 1. Enforce strict single-line content for links to prevent trailing whitespace bugs
        'vue/multiline-html-element-content-newline': ['error', {
            ignores: ['a', 'NuxtLink', 'RouterLink', 'span', 'pre', 'textarea'],
        }],

        // 2. Multi-word component names rule (can be turned off for Nuxt pages/layouts)
        'vue/multi-word-component-names': 'off',

        // 3. Recommended Vue formatting/structure rules
        'vue/html-self-closing': ['error', {
            html: { normal: 'never', void: 'always', component: 'always' },
        }],
        'vue/component-name-in-template-casing': ['error', 'PascalCase'],
        'vue/define-macros-order': ['error', {
            order: ['defineOptions', 'defineProps', 'defineEmits', 'defineSlots'],
        }],

        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    },
});
