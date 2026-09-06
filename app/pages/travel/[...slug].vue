<script lang="ts" setup>
import 'vue3-carousel/carousel.css';
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel';

const route = useRoute();

const randomizedPosts = ref<any[]>([]);

const cleanPath = computed(() => {
    let rawPath = Array.isArray(route.params.slug) ? '/' + route.params.slug.join('/') : route.path;

    rawPath = rawPath.replace(/\/$/, '') || '/';

    if (!rawPath.startsWith('/travel')) {
        rawPath = `/travel${rawPath}`;
    }

    return rawPath;
});

const { data: pageData } = await useAsyncData(`travel-page-${cleanPath.value}`, async () => {
    const singlePost = await queryCollection('travel')
        .where('path', 'LIKE', `${cleanPath.value}/%`)
        .order('date', 'ASC')
        .all();

    if (!singlePost.length) {
        return { introPost: null, singlePost: [], images: [], destinationCategories: [] };
    }

    const introPost = singlePost[0];

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
                url: url.startsWith('/') ? url : `/${url}`,
            })),
        };
    });

    const candidatePosts = await queryCollection('travel')
        .where('path', 'NOT LIKE', `${cleanPath.value}/%`)
        .order('date', 'ASC')
        .all();

    const destinationMap = new Map<string, any>();

    for (const post of candidatePosts) {
        const pathSegments = post.path.split('/').filter(Boolean);
        if (pathSegments.length >= 2) {
            const parentFolderPath = `/${pathSegments[0]}/${pathSegments[1]}`;

            if (!destinationMap.has(parentFolderPath)) {
                destinationMap.set(parentFolderPath, {
                    path: parentFolderPath,
                    category: post.category,
                    date: post.date,
                    image: post.image
                        ? post.image.startsWith('/')
                            ? post.image
                            : `/${post.image}`
                        : '',
                });
            }
        }
    }

    return {
        introPost,
        singlePost,
        images,
        destinationCategories: Array.from(destinationMap.values()),
    };
});

const shuffleArray = <T,>(array: T[]): T[] => {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
};

watchEffect(() => {
    if (pageData.value?.destinationCategories) {
        randomizedPosts.value = pageData.value.destinationCategories.slice(0, 4);
    }
});

onMounted(() => {
    if (pageData.value?.destinationCategories?.length) {
        randomizedPosts.value = shuffleArray(pageData.value.destinationCategories).slice(0, 4);
    }
});

useHead({
    title: computed(() =>
        pageData.value?.introPost?.category
            ? `${pageData.value.introPost.category} | Danh Nguyen`
            : 'Travel | Danh Nguyen'
    ),
});
</script>

<template>
    <div class="grid grid-cols-1">
        <template v-if="pageData?.introPost">
            <Intro class="w-full mb-24">
                <h1 class="text-2xl font-medium mt-14 mb-6 uppercase">
                    {{ pageData.introPost.category }}
                </h1>
                <p>
                    {{ pageData.introPost.intro }}
                </p>
            </Intro>
            <div v-if="pageData.images.length">
                <div
                    v-for="(post, index) in pageData.images"
                    :key="post.path"
                    :class="{ 'mt-12': index > 0 }">
                    <div class="relative overflow-hidden">
                        <Carousel
                            height="525"
                            :items-to-show="1"
                            slide-effect="fade">
                            <Slide
                                v-for="image in post.images"
                                :key="image.id">
                                <NuxtImg
                                    :src="image.url"
                                    :alt="`${post.title} photo ${image.id}`"
                                    format="webp"
                                    loading="lazy"
                                    :placeholder="[672, 525, 75, 5]"
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
                                    icon="calendar-day" />{{ post.date }}
                            </time>
                        </div>
                    </div>
                    <p class="text-sm text-neutral-400 ml-3">{{ post.description }}</p>
                </div>

                <div class="flex justify-between">
                    <h2 class="text-2xl font-medium mt-16 mb-6 uppercase">Other Destinations</h2>
                    <NuxtLink
                        class="text-right self-end mb-6"
                        to="/travel">
                        View all
                        <fa-icon
                            class="ml-1"
                            icon="arrow-right" />
                    </NuxtLink>
                </div>
                <div
                    v-if="randomizedPosts.length"
                    class="grid grid-cols-2 gap-4">
                    <NuxtLink
                        v-for="item in randomizedPosts"
                        :key="item.path"
                        :to="item.path"
                        class="group relative block w-full overflow-hidden rounded-lg bg-neutral-900 h-[175px]">
                        <NuxtImg
                            v-if="item.image"
                            :src="item.image"
                            :alt="item.category"
                            format="webp"
                            loading="lazy"
                            quality="80"
                            height="175"
                            :placeholder="[312, 175, 75, 5]"
                            class="w-full h-[175px] object-cover [mask-image:linear-gradient(to_bottom,black_25%,transparent_100%)] transition-transform duration-300 group-hover:scale-105 group-hover:brightness-110" />
                        <div class="absolute bottom-0 inset-x-0 p-3">
                            <h3 class="text-white font-medium truncate">
                                <fa-icon
                                    class="mr-1"
                                    icon="map-marker-alt" />{{ item.category }}
                            </h3>
                            <time class="text-xs text-neutral-400 uppercase mt-1">
                                {{ item.date }}
                            </time>
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </template>

        <div
            v-else
            class="py-12 text-center">
            <p>Page not found for path: {{ cleanPath }}</p>
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
