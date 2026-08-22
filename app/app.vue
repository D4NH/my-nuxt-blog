<script setup lang="ts">
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>
    <NuxtLayout>
        <div class="flex flex-col min-h-screen px-4 w-full max-w-2xl mx-auto">
            <Header />
            <div class="container flex-grow pb-2 mb-2">
                <NuxtPage class="" />
            </div>
            <Footer />
        </div>
    </NuxtLayout>
</template>
