<template>
  <div class="section image-text image-text--wide">
    <div class="container">
      <swiper
        class="swiper"
        :modules="[Pagination, EffectFade]"
        effect="fade"
        :fadeEffect="{
          crossFade: true
        }"
        :loop="true"
        :pagination="{
          el: '.swiper-pagination',
          renderBullet: function (index, className) {
            return `<span class='${className}'>${pad(index + 1)}</span>`;
          },
          clickable: true
        }"
        :slidesPerView="1"
        :watchOverflow="true"
        @slideChangeTransitionStart="consoleLog">
        <swiper-slide v-for="(item, id) in props.slides" :key="id">
          <div class="row align-center">
            <div class="col-md-7 col-lg-8">
              <div class="img">
                <prismic-image :field="item.image" />

                <Drop
                  maxW="200px"
                  :parallax="-4"
                  workspace=".image-text" />
              </div>
            </div>

            <div class="col-md-5 col-lg-4">
              <div class="content">
                <span
                  v-if="item.eyebrow"
                  class="eyebrow">
                  {{ item.eyebrow }}
                </span>

                <h2
                  v-if="item.headline"
                  class="title">
                  {{ item.headline }}
                </h2>

                <prismic-rich-text
                  :field="item.content"
                  class="text" />

                <Button
                  v-if="button_label">
                  {{ button_label }}
                </Button>
              </div>
            </div>
          </div>
        </swiper-slide>

        <div class="swiper-pagination" ref="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
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

const pagination = ref(null);

function pad(num) {
  var s = "000" + num;
  return s.substr(s.length - 2);
};

function consoleLog({slides, activeIndex}) {
  const activeSlide = slides[activeIndex];
  const contentTop = activeSlide.querySelector('.content').offsetTop;
  const contentHeight = activeSlide.querySelector('.content').offsetHeight;
  const paginationTop = contentTop + contentHeight + 32;

  console.log(`${paginationTop}px`);
  pagination.value.style.top = `${paginationTop}px`
}
</script>

<style lang="scss" scoped>
  @import "@scss/components/slices/image-text/default";
  @import "@scss/components/slices/image-text/wide";
</style>