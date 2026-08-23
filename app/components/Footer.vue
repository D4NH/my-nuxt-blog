<script setup lang="ts">
const getCurrentYear = () => new Date().getFullYear();
</script>

<template>
    <footer class="container mx-auto mt-12 mb-6 pt-6">
        <div class="grid grid-cols-1">
            <ClientOnly>
                <p class="text-center">© {{ getCurrentYear() }} - Danh Nguyen | Frontend Developer</p>

                <!-- Fallback rendered on SSR to prevent layout shifting -->
                <template #fallback>
                    <p class="text-center">© {{ getCurrentYear() }} - Danh Nguyen | Frontend Developer</p>
                </template>
            </ClientOnly>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
footer {
    border-top: 1px solid var(--color-border);
    color: var(--color-text-muted);
    font-size: 0.813rem;
}
</style>
