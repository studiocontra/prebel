<template>
  <div class="section services-features">
    <div class="container">
      <h2 class="eyebrow">
        10 razones para elegirnos
      </h2>
    </div>

    <div class="wrap-services-slider">
      <div class="circle"></div>
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
        }">
        <swiper-slide v-for="(item, id) in 4" :key="id">
          <Drop
            maxW="180px"
            :parallax="getRandomArbitrary(-10, -3)" />
          <div class="row md-reverse align-bottom">
            <div class="col-md-5 col-lg-6">
              <div class="img">
                <img :src="`https://picsum.photos/seed/features-services${id}/380/480`" alt="">
              </div>
            </div>
            <div class="col-md-7 col-lg-6">
              <div class="content">
                <span class="title">
                  {{ pad(id) }}
                </span>

                <h3 class="title">
                  Our Services
                </h3>

                <div class="text">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto accusamus modi recusandae at eaque, consectetur delectus voluptates voluptatem rem voluptate nulla quae quidem sunt tenetur commodi? Consequatur distinctio consequuntur amet.
                  </p>
                </div>
              </div>
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
import { Scrollbar } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

function pad(num) {
  var s = "000" + num;
  return s.substr(s.length - 2);
};

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
</script>

<style lang="scss" scoped>
  @import "@scss/components/services/features";
</style>