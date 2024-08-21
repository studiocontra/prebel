<template>
  <main class="sustainability" v-if="data">
    <SliceZone
      :slices="sustainabilityData.slices"
      :components="{
        page_hero: PageHero,
        text_image_full: TextImageFull,
        text_block: TextBlock,
        text_images_shapes: TextImagesShape,
        image_text: ImageText,
        banner_cta: BannerCta,
        video: Video,
      }" />
  </main>
</template>

<script setup>
const { client } = usePrismic();
const { localeProperties } = useI18n();
const { value: { language, code } } = localeProperties;
import { useHeaderStore } from '@/stores/header';
const headerStore = useHeaderStore();

// Import your slices
import ImageText from '@/slices/ImageText'
import PageHero from '@/slices/PageHero'
import TextBlock from '@/slices/TextBlock'
import TextImageFull from '@/slices/TextImageFull'
import TextImagesShape from '@/slices/TextImagesShape'
import BannerCta from '@/slices/BannerCta'
import Video from '@/slices/Video'

const { data } = await useAsyncData("[sustainability]", () =>
  client.getSingle("sustainability", {lang: language})
);

const sustainabilityData = data.value.data;

onMounted(() => headerStore.setTheme(sustainabilityData.header_color_scheme.toLowerCase()));
</script>

<style lang="scss" scoped>
  @import "@scss/pages/sustainability";
</style>