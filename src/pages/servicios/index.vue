<template>
  <main class="services">
    <ServicesHero v-bind="servicesData.hero[0]" />
    <ServicesCards
      :headline="servicesData.services_headline"
      :cards="servicesData.services" />

    <SliceZone
      :slices="servicesData.slices"
      :components="{
        service_type: ServiceType,
        services_reason: ServicesReason,
        our_clients: OurClients,
        testimonials: Testimonials,
      }" />
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