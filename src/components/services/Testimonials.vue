<template>
  <div class="section testimonials">
    <div class="container">
      <h2 class="eyebrow">
        Testimonios
      </h2>

      <swiper
        class="swiper testimonials__slider"
        :modules="[Pagination]"
        :loop="true"
        :pagination="{
          renderBullet: function (index, className) {
            return `<span class='${className}'>${pad(index + 1)}</span>`;
          },
          clickable: true
        }"
        :slidesPerView="1">
        <swiper-slide v-for="(item, id) in 6" :key="id">
          <div class="single-testimonial">
            <div class="quote quote--top">
              <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.1148 0V4.19672C7.60656 4.32787 4.59016 8.2623 4.59016 14.0328H10.4918V25.0492H0V14.4262C0 6.95082 4.45902 0.2623 13.1148 0ZM32 0V4.19672C26.3607 4.32787 23.3443 8.2623 23.3443 14.0328H29.377V25.0492H18.8852V14.4262C18.8852 6.95082 23.2131 0.2623 32 0Z" fill="#8C96A1"/>
              </svg>
            </div>

            <div class="content">
              <div class="title">
                <p>
                  Durante la feria, PREBEL exhibió su amplia gama de productos cosméticos innovadores y de alta calidad, captando la atención de profesionales de la industria y visitantes por igual.
                </p>
              </div>

              <div class="quote quote--bottom">
                <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.8852 25.0488L18.8852 20.8521C24.3934 20.721 27.4098 16.7865 27.4098 11.016L21.5082 11.016L21.5082 -0.000349962L32 -0.000349045L32 10.6226C32 18.098 27.541 24.7865 18.8852 25.0488ZM1.90735e-06 25.0488L2.27424e-06 20.8521C5.63935 20.721 8.65574 16.7865 8.65574 11.016L2.62295 11.016L2.62295 -0.000351613L13.1148 -0.000350696L13.1148 10.6226C13.1148 18.098 8.78689 24.7865 1.90735e-06 25.0488Z" fill="#8C96A1"/>
                </svg>
              </div>
            </div>


            <div class="author">
              <p>
                Lorem, ipsum dolor.
              </p>

              <span>
                Director of company
              </span>
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
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

function pad(num) {
  var s = "000" + num;
  return s.substr(s.length - 2);
};
</script>


<style lang="scss" scoped>
  @import "@scss/components/services/testimonials";
</style>