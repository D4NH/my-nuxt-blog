<script setup lang="ts">
import Intro from '~/components/Intro.vue';

const route = useRoute();
const { data: travelPosts } = await useAsyncData(route.path, () =>
    queryCollection('travel')
        .select('category', 'title', 'date', 'image', 'path')
        .where('intro', 'IS NOT NULL')
        .order('date', 'DESC')
        .limit(4)
        .all()
);
</script>

<template>
    <div class="grid grid-cols-1">
        <Intro>
            <h1 class="text-3xl font-medium mb-6 uppercase">About</h1>
            <p class="mx-auto">
                Tech enthusiast, web developer and gadget collector. I moved from the Netherlands to
                Indonesia in 2025 and spend most of my free time playing badminton, gaming,
                traveling or reading manga.
            </p>
        </Intro>

        <h1 class="text-3xl font-medium mt-24 mb-6 uppercase">Work experience</h1>
        <ul class="space-y-6">
            <li class="md:grid grid-cols-[100px_1fr_auto] gap-4">
                <time class="text-sm text-neutral-400">2020 - 2025</time>
                <div>
                    <h3 class="text-sm font-semibold text-white">Zilveren Kruis</h3>
                    <p class="text-xs text-neutral-400 mt-1">Leiden, The Netherlands</p>
                </div>
                <span class="text-sm italic text-neutral-400">Senior Frontend Developer</span>
            </li>
            <li class="md:grid grid-cols-[100px_1fr_auto] gap-4">
                <time class="text-sm text-neutral-400">2016 - 2020</time>
                <div>
                    <h3 class="text-sm font-semibold text-white">Developers.nl</h3>
                    <p class="text-xs text-neutral-400 mt-1">Rotterdam, The Netherlands</p>
                </div>
                <span class="text-sm italic text-neutral-400">Frontend Developer</span>
            </li>
            <li class="md:grid grid-cols-[100px_1fr_auto] gap-4">
                <time class="text-sm text-neutral-400">2012 - 2016</time>

                <div>
                    <h3 class="text-sm font-semibold text-white">Luminis</h3>
                    <p class="text-xs text-neutral-400 mt-1">Apeldoorn, The Netherlands</p>
                </div>

                <span class="text-sm italic text-neutral-400">Frontend Engineer</span>
            </li>
            <li class="md:grid grid-cols-[100px_1fr_auto] gap-4">
                <time class="text-sm text-neutral-400">2007 - 2011</time>
                <div>
                    <h3 class="text-sm font-semibold text-white">Philips</h3>
                    <p class="text-xs text-neutral-400 mt-1">Eindhoven, The Netherlands</p>
                </div>
                <span class="text-sm italic text-neutral-400">Online Service Expert</span>
            </li>
        </ul>

        <div class="flex justify-between">
            <h1 class="text-3xl font-medium mt-24 mb-6 uppercase">Travel</h1>
            <NuxtLink
                class="text-right self-end mb-6"
                to="/travel">
                View all
                <fa-icon
                    class="ml-1"
                    icon="arrow-right" />
            </NuxtLink>
        </div>
        <div class="grid grid-cols-2 gap-4">
            <NuxtLink
                v-for="post in travelPosts"
                :key="post.title"
                :to="`/travel/${post.path.split('/')[2]}`"
                class="group relative block w-full overflow-hidden rounded-lg">
                <NuxtImg
                    :src="post.image"
                    :alt="`Picture of ${post.category}`"
                    height="175"
                    class="w-full h-[175px] object-cover [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] transition-transform duration-300 group-hover:scale-105 group-hover:brightness-110" />

                <div class="absolute bottom-0 inset-x-0 p-3">
                    <h3 class="text-white font-medium truncate">
                        <fa-icon
                            class="mr-1"
                            icon="map-marker-alt" />{{ post.category }}
                    </h3>
                    <time class="text-xs text-neutral-400 uppercase mt-1">{{ post.date }}</time>
                </div>
            </NuxtLink>
        </div>
    </div>
</template>
