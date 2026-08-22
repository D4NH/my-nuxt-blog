<script lang="ts" setup>
const route = useRoute();
const isTravelActive = computed(() => route.path.startsWith('/travel'));
</script>

<template>
    <header class="container mx-auto mb-4">
        <div class="grid grid-cols-1">
            <nav class="flex justify-between my-4 navbar">
                <NuxtLink
                    class="text-xl navbar__link my-2"
                    to="/"
                    >Danh Nguyen</NuxtLink
                >
                <ul class="flex flex-nowrap">
                    <li class="my-2">
                        <NuxtLink
                            class="navbar__link"
                            to="/about/"
                            >About me</NuxtLink
                        >
                    </li>
                    <li class="my-2">
                        <NuxtLink
                            class="navbar__link ml-4"
                            :class="{ 'router-link-active': isTravelActive }"
                            to="/travel/"
                            >Travel</NuxtLink
                        >
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    border-bottom: 1px solid var(--color-border);
}

.navbar {
    &__link {
        &.router-link-active {
            color: var(--color-primary);

            &:hover {
                color: var(--color-primary-hover);
            }
        }
    }
}
</style>
