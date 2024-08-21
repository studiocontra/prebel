<template>
  <main class="pagos">
    <SliceZone
      :slices="paymentMethodsData.slices"
      :components="{
        page_hero: PageHero,
        payment_methods: PaymentMethods,
        text_block: TextBlock,
      }" />
  </main>
</template>

<script setup>
const { client } = usePrismic();
const { localeProperties } = useI18n();
const { value: { language, code } } = localeProperties;

import { useHeaderStore } from "@/stores/header";

const headerStore = useHeaderStore();

// Import your slices
import PageHero from '@/slices/PageHero'
import PaymentMethods from '@/slices/PaymentMethods'
import TextBlock from '@/slices/TextBlock'

const { data } = await useAsyncData("[pagos]", () =>
  client.getSingle("payment_methods", { lang: language })
);

const paymentMethodsData = data.value.data;

console.log(paymentMethodsData.slices);

onMounted(() =>
  headerStore.setTheme(paymentMethodsData.header_color_scheme.toLowerCase())
);


useSeoMeta({
  title: paymentMethodsData["meta_title"],
  description: paymentMethodsData["meta_description"],
  ogImage: paymentMethodsData["meta_image"],
});
</script>

<style lang="scss" scoped>
  @import "@scss/pages/single-services";
</style>