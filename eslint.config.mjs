import withNuxt from './.nuxt/eslint.config.mjs';
import eslintConfigPrettier from 'eslint-config-prettier';

export default withNuxt({
    rules: {
        'vue/block-order': [
            'error',
            {
                order: [['script', 'template'], 'style'],
            },
        ],
        'vue/no-multiple-template-root': 'off',
    },
})
    .append(eslintConfigPrettier)
    .append({
        files: ['**/*ts', '**/*vue', '**/*js'],
        rules: {
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/no-unused-vars': 'off',

            'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
            'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

            'vue/multiline-html-element-content-newline': [
                'error',
                {
                    ignores: ['a', 'NuxtLink', 'RouterLink', 'span', 'pre', 'textarea'],
                },
            ],
            'vue/component-name-in-template-casing': ['error', 'PascalCase'],
            'vue/define-macros-order': [
                'error',
                {
                    order: ['defineOptions', 'defineProps', 'defineEmits', 'defineSlots'],
                },
            ],
        },
    });
