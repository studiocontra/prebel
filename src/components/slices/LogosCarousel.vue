<template>
  <div class="section logos-carousel">
    <div class="container">
      <div class="logos-carousel__headline">
        <h3 class="title">
          {{ headline }}
        </h3>
      </div>

      <Swiper
        class="logos-carousel__slider"
        :modules="[Autoplay]"
        :loop="true"
        :slidesPerView="'auto'"
        :freemode="true"
        :speed="750"
        :autoplay="{
          delay: 3000
        }">
        <template v-for="(logo, id) in items" :key="id">
          <SwiperSlide class="single-logo">
            <prismic-image :field="logo.logo" />
          </SwiperSlide>
        </template>
      </Swiper>
    </div>
  </div>
</template>

<script setup>
// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/vue';

// import required modules
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

const props = defineProps({
  dataSliceVariation: String,
  headline: String,
  items: [Array, Boolean],
});
</script>

<style lang="scss" scoped>
  @import "@scss/components/slices/logos-carousel";
</style>