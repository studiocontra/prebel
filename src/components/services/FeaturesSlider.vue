<template>
  <div class="section services-features">
    <div class="container">
      <h2 class="eyebrow">
        {{ headline }}
      </h2>
    </div>

    <div class="wrap-services-slider">
      <div class="circle" ref="circle"></div>
      <swiper
        class="swiper services-features__slider"
        :modules="[Scrollbar]"
        :scrollbar="{
          hide: true,
        }"
        :loop="false"
        :slidesPerView="1.1"
        :breakpoints="{
          '768': {
            slidesPerView: 1.4,
          },
          '1800': {
            slidesPerView: 2.4,
          },
        }"
        @init="moveCircle"
        @slideChange="moveCircle">
        <swiper-slide v-for="(item, id) in items" :key="id">
          <Drop
            maxW="180px"
            :parallax="getRandomArbitrary(-10, -3)" />
          <div class="row md-reverse align-bottom">
            <div class="col-md-5 col-lg-6">
              <div class="img">
                <prismic-image :field="item.image" />
              </div>
            </div>
            <div class="col-md-7 col-lg-6">
              <div class="content">
                <span class="title">
                  {{ pad(id) }}
                </span>

                <h3 class="title">
                  {{ item.headline }}
                </h3>

                <prismic-rich-text
                  :field="item.content"
                  class="text" />
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';
// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper Vue.js components
import { Scrollbar } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

const props = defineProps({
  headline: String,
  items: [Array, Boolean],
});

function pad(num) {
  var s = "000" + num;
  return s.substr(s.length - 2);
};

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const circle = ref(null);

function moveCircle(swiper) {
  const totalSlides = swiper.slides.length;
  const activeSlide = swiper.activeIndex + 1;

  circle.value.style.left = `${(80 / totalSlides) * activeSlide}%`
}
</script>

<style lang="scss" scoped>
  @import "@scss/components/services/features";
</style>