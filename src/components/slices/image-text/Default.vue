<template>
  <div class="section image-text">
    <div class="container">
      <swiper
        class="swiper news__slider"
        :modules="[Pagination, EffectFade]"
        effect="fade"
        :fadeEffect="{
          crossFade: true
        }"
        :loop="true"
        :slidesPerView="1"
        :watchOverflow="true">
        <swiper-slide v-for="(item, id) in props.slides" :key="id">
          <div class="row align-center">
            <div class="col-lg-6">
              <div class="img">
                <prismic-image :field="item.image" />

                <Drop
                  maxW="200px"
                  :parallax="-7"
                  workspace=".image-text" />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="content">
                <span class="eyebrow">
                  {{ item.eyebrow }}
                </span>

                <h2 class="title">
                  {{ item.headline }}
                </h2>

                <prismic-rich-text
                  :field="item.content"
                  class="title text" />

                <Button
                  v-if="button_label">
                  {{ button_label }}
                </Button>
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
import { Pagination, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

const props = defineProps({
  button_label: String,
  button_link: Object,
  content: Array,
  eyebrow: String,
  headline: String,
  image: Object,
  slides: [Array, Boolean],
});

function pad(num) {
  var s = "000" + num;
  return s.substr(s.length - 2);
};
</script>

<style lang="scss" scoped>
  @import "@scss/components/slices/image-text/default";
</style>