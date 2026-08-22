<script lang="ts" setup>
import 'vue3-carousel/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';

const route = useRoute();

const { data: pageData } = await useAsyncData(`category-${route.path}`, async () => {
    const introPost = await queryCollection('travel')
        .where('path', 'LIKE', `${route.path}/%`)
        .where('intro', 'IS NOT NULL')
        .select('category', 'intro', 'date')
        .first();

    const allPostsInCategory = await queryCollection('travel')
        .where('path', 'LIKE', `${route.path}/%`)
        .select('category', 'title', 'date', 'image', 'path')
        .order('date', 'ASC')
        .all();

    const allPosts = await queryCollection('travel')
        .select('category', 'title', 'date', 'image', 'path')
        .where('intro', 'IS NOT NULL')
        .order('date', 'ASC')
        .limit(4)
        .all();

    const paths = allPostsInCategory.map((item) => item.path);

    if (paths.length === 0) {
        return { introPost, fullPosts: [] };
    }

    const singlePost = await queryCollection('travel')
        .where('path', 'IN', paths)
        .order('date', 'ASC')
        .all();

    const images = singlePost.map((post) => {
        let imageUrls: string[] = [];

        if (Array.isArray(post.images) && typeof post.images[0] === 'string') {
            imageUrls = post.images as string[];
        } else if (post.body?.value) {
            imageUrls = post.body.value.flatMap((node: any) => {
                const child = node?.[2];
                return Array.isArray(child) && child[0] === 'img' && child[1]?.src
                    ? [child[1].src]
                    : [];
            });
        }

        return {
            ...post,
            images: imageUrls.map((url, index) => ({
                id: index + 1,
                url,
            })),
        };
    });

    return {
        introPost,
        allPostsInCategory,
        allPosts,
        singlePost,
        images,
    };
});

function shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        const current = shuffled[i];
        const target = shuffled[j];

        if (current !== undefined && target !== undefined) {
            shuffled[i] = target;
            shuffled[j] = current;
        }
    }

    return shuffled;
}

const randomizedPosts = computed(() => {
    if (!pageData.value?.allPosts) return [];
    return shuffleArray(pageData.value.allPosts);
});
</script>

<template>
    <div class="grid grid-cols-1">
        <Intro class="w-full mb-24">
            <h1 class="text-3xl font-medium mb-6 uppercase">
                {{ pageData?.introPost?.category }}
            </h1>
            <p>
                {{ pageData?.introPost?.intro }}
            </p>
        </Intro>

        <div
            v-for="(post, index) in pageData?.images"
            :key="post.path"
            :class="{ 'mt-12': index > 0 }">
            <div class="relative overflow-hidden">
                <Carousel
                    height="525"
                    items-to-show="1"
                    slide-effect="fade">
                    <Slide
                        v-for="image in post.images"
                        :key="image.id">
                        <img
                            :src="image.url"
                            :alt="`${post.title} photo ${image.id}`"
                            class="rounded-lg [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]" />
                    </Slide>
                    <template #addons>
                        <Navigation class="m-4" />
                        <Pagination />
                    </template>
                </Carousel>
                <div class="absolute bottom-0 inset-x-0 p-3">
                    <h2 class="text-xl font-bold text-white">
                        {{ post.title }}
                    </h2>
                    <time
                        class="text-xs text-neutral-400 uppercase inline-block px-1 -mx-1 relative z-10 bg-black rounded-md">
                        <fa-icon
                            class="mr-1"
                            icon="calendar-day" />{{ pageData?.introPost?.date }}
                    </time>
                </div>
            </div>
            <p class="text-sm text-neutral-400 ml-3">{{ post.description }}</p>
        </div>

        <h1 class="text-3xl font-medium mt-24 uppercase">Other trips</h1>
        <div
            v-if="randomizedPosts"
            class="grid grid-cols-2 gap-4 mt-6">
            <NuxtLink
                v-for="item in randomizedPosts"
                :key="item.path"
                :to="`/travel/${item.path.split('/')[2]}`"
                class="group relative block w-full overflow-hidden rounded-lg bg-neutral-900">
                <img
                    v-if="item.image"
                    :src="item.image"
                    :alt="item.category"
                    class="w-full object-cover [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] transition-transform duration-300 group-hover:scale-105 group-hover:brightness-110" />
                <div class="absolute bottom-0 inset-x-0 p-3">
                    <h3 class="text-white font-medium truncate">
                        <fa-icon
                            class="mr-1"
                            icon="map-marker-alt" />{{ item.category }}
                    </h3>
                    <time class="text-xs text-neutral-400 uppercase mt-1">{{ item.date }}</time>
                </div>
            </NuxtLink>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.carousel {
    --vc-pgn-background-color: rgba(255, 255, 255, 0.7);
    --vc-pgn-active-color: rgba(255, 255, 255, 1);
    --vc-png-bottom: 21px;
    --vc-nav-background: rgba(255, 255, 255, 0.7);
    --vc-nav-border-radius: 100%;

    &__pagination {
        justify-content: end;
        transform: none;
        left: 0;
        right: 10px;
    }
}
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
