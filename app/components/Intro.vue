<script setup lang="ts"></script>

<template>
    <div class="intro mx-auto">
        <div class="flex items-center gap-x-4 mt-12 mb-24">
            <NuxtImg
                format="webp"
                :placeholder="[100, 100, 75, 5]"
                width="100"
                height="100"
                class="h-24 rounded-full"
                src="/img/profile.jpg" />
            <div>
                <div class="text-xl font-medium text-white">Danh Nguyen</div>
                <p class="text-neutral-400">Frontend Developer</p>
            </div>
        </div>

        <slot />
    </div>
</template>
