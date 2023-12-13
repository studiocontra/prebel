<template>
  <div class="section work-cards">
    <div class="container">
      <h2 v-if="headline" class="eyebrow">
        {{ headline }}
      </h2>

      <swiper
        v-if="cards"
        class="swiper work-cards__slider"
        :modules="[Pagination]"
        :pagination="{
          clickable: true
        }"
        :slidesPerView="1.2"
        :breakpoints="{
          '576': {
            slidesPerView: 1.7,
          },
          '768': {
            slidesPerView: 2.2,
          },
          '1200': {
            slidesPerView: 3,
          },
        }">
        <swiper-slide v-for="(item, id) in cards" :key="id">
          <div class="card">
            <div class="card__headline">
              <h3 class="title">
                {{ item.headline }}
              </h3>
            </div>

            <div class="card__image">
              <prismic-image :field="item.image" />
            </div>

            <div class="card__content">
              <Button
                v-if="item.button_link && item.button_label"
                theme="dark">
                {{ item.button_label }}
              </Button>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  headline: String,
  cards: [Array, Boolean],
});

// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper Vue.js components
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
</script>

<style lang="scss" scoped>
  @import "@scss/components/work/cards";
</style>