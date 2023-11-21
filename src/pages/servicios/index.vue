<template>
  <main class="services">
  </main>
</template>

<script setup>
const { client } = usePrismic();
const { locale, localeCodes } = useI18n();

// Import your slices
import ServiceType from '@/slices/ServiceType';
import ServicesReason from '@/slices/ServicesReason';
import OurClients from '@/slices/OurClients';
import Testimonials from '@/slices/Testimonials';

const { data } = await useAsyncData("[services]", () =>
  client.getSingle("services", {lang: locale.value})
);

const servicesData = data.value.data;
</script>