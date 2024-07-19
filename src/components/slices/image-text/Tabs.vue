<template>
  <div class="section wrap-img-text-box">
    <div class="container">
      <div class="img-text-box__box">
        <div class="box__headline" v-if="eyebrow || headline">
          <span class="eyebrow">
            {{ eyebrow }}
          </span>

          <h2 class="title">
            {{ headline }}
          </h2>
        </div>

        <swiper class="swiper img-text-box__slider" :modules="[Pagination, EffectFade]" effect="fade" :fadeEffect="{
          crossFade: true
        }" :loop="true" :pagination="{
          el: '.custom-pagination',
          renderBullet: function (index, className) {
            return `
              <span class='${className}'>${props.slides[index].eyebrow}</span>
              `;
          },
          clickable: true
        }" :slidesPerView="1">

          <template v-slot:container-start>
            <div class="flex-servicios">
              <div class="flex-servicios-content">
                <p>{{ primary }}</p>
                <p>{{ complementary }}</p>
              </div>
              <div class="custom-pagination"></div>
            </div>
          </template>

          <swiper-slide v-for="(item, id) in props.slides" :key="id">
            <div class="row align-center">
              <div class="col-lg-6">
                <div class="content">
                  <div class="headline">
                    <h3 v-if="item.headline" class="title title--sm">
                      {{ item.headline }}
                    </h3>
                  </div>

                  <PrismicRichText :field="item.content" class="text" />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="img">
                  <prismic-image :field="item.image" />
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script setup>
// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper Vue.js components
import { Pagination, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

const props = defineProps({
  dataId: {
    type: String,
    default: ''
  },
  eyebrow: String,
  headline: String,
  primary: String,
  complementary: String,
  slides: [Array, Boolean]
});

function pad(num) {
  var s = "000" + num;
  return s.substr(s.length - 2);
};
</script>


<style lang="scss" scoped>
@import "@scss/components/slices/image-text/tabs";
</style>