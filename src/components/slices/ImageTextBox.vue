<template>
  <div class="section wrap-news">
    <div class="container">
      <div class="news__box">
        <div class="box__headline">
          <span class="eyebrow">
            {{ eyebrow }}
          </span>

          <h2 class="title">
            {{ headline }}
          </h2>
        </div>

        <swiper
          class="swiper news__slider"
          :modules="[Pagination, EffectFade]"
          effect="fade"
          :fadeEffect="{
            crossFade: true
          }"
          :loop="true"
          :pagination="{
            renderBullet: function (index, className) {
              return `<span class='${className}'>${pad(index + 1)}</span>`;
            },
            clickable: true
          }"
          :slidesPerView="1">
          <swiper-slide v-for="(item, id) in props.slides" :key="id">
            <div class="row align-center">
              <div class="col-lg-6">
                <div class="img">
                  <prismic-image :field="item.image" />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="content">
                  <h3 class="title title--sm">
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
  eyebrow: String,
  headline: String,
  slides: [Array, Boolean]
});

function pad(num) {
  var s = "000" + num;
  return s.substr(s.length - 2);
};
</script>


<style lang="scss" scoped>
  @import "@scss/components/slices/image-text-box";
</style>