<script setup lang="ts">
const route = useRoute();
const { data: allPosts } = await useAsyncData(route.path, () =>
    queryCollection('travel')
        .select('category', 'title', 'date', 'image', 'path')
        .where('intro', 'IS NOT NULL')
        .order('date', 'DESC')
        .all()
);
</script>

<template>
    <div class="grid grid-cols-1">
        <Intro>
            <h1 class="text-3xl font-medium mb-6 uppercase">Travel</h1>
            <p class="mx-auto">
                I love traveling, exploring new places, soaking in local cultures and trying new
                things wherever I go. Check out my recent trips and adventures on this page and feel
                free to reach out if you want to share travel recommendations or swap stories.
            </p>
        </Intro>

        <h1 class="text-3xl font-medium mt-24 mb-6 uppercase">Destinations</h1>
        <div class="grid grid-cols-2 gap-4">
            <NuxtLink
                v-for="post in allPosts"
                :key="post.title"
                :to="`/travel/${post.path.split('/')[2]}`"
                class="group relative block w-full overflow-hidden rounded-lg">
                <img
                    :src="post.image"
                    :alt="`Picture of ${post.category}`"
                    height="175"
                    class="w-full h-[175px] object-cover [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] transition-transform duration-300 group-hover:scale-105 group-hover:brightness-110" />

                <div class="absolute bottom-0 inset-x-0 p-3">
                    <h3 class="text-white font-medium">
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
