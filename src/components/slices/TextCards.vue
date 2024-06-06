<template>
  <div class="services-cards">
    <div class="container">
      <span
        v-if="eyebrow"
        class="eyebrow"
        role="heading">
        {{ eyebrow }}
      </span>

      <h2
        v-if="headline"
        class="eyebrow">
        {{ headline }}
      </h2>

      <swiper
        v-if="cards"
        class="swiper home-services__slider"
        :modules="[Navigation, Pagination]"
        :loop="true"
        :navigation="{
          prevEl: '.services-arrow--prev',
          nextEl: '.services-arrow--next'
        }"
        :pagination="true"
        :slidesPerView="1"
        :watchOverflow="true"
        :spaceBetween="20"
        :breakpoints="{
          600: {
            slidesPerView: 2
          },
          992: {
            slidesPerView: 3
          }
        }">
        <swiper-slide v-for="(item, id) in cards" :key="id">
          <div class="card">
            <div class="card__image">
              <prismic-image :field="item.image" />
            </div>

            <div class="card__content">
              <h3 class="eyebrow">
                {{ item.headline }}
              </h3>

              <PrismicRichText
                :field="item.content"
                class="text" />

              <Button
                v-if="item.button_link && item.button_label">
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
// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper Vue.js components
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const props = defineProps({
  eyebrow: String,
  headline: String,
  cards: [Array, Boolean],
});
</script>

<style lang="scss" scoped>
  @import "@scss/components/slices/text-cards";
</style>