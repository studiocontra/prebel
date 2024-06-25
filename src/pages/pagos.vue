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
const { value: { iso, code } } = localeProperties;

// Import your slices
import PageHero from '@/slices/PageHero'
import PaymentMethods from '@/slices/PaymentMethods'
import TextBlock from '@/slices/TextBlock'

const { data } = await useAsyncData("[pagos]", () =>
  client.getSingle("payment_methods", { lang: iso })
);

const paymentMethodsData = data.value.data;

console.log(paymentMethodsData.slices);

useHead({
  title: data.value?.data.meta_title,
  meta: [
    {
      name: "description",
      content: data.value?.data.meta_description,
    },
  ],
});
</script>

<style lang="scss" scoped>
  @import "@scss/pages/single-services";
</style>