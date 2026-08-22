<script setup lang="ts">
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

useHead({
    htmlAttrs: {
        class: 'dark',
    },
});
</script>

<template>
    <NuxtLayout>
        <div class="flex flex-col min-h-screen px-4 w-full max-w-6xl mx-auto">
            <Header />
            <div class="container mx-auto flex-grow pb-2 mb-2">
                <NuxtPage class="w-full max-w-2xl mx-auto" />
            </div>
            <Footer />
        </div>
    </NuxtLayout>
</template>
