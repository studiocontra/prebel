<template>
  <div class="section home__services">
    <Drop
      maxW="290px"
      :parallax="5" />

    <div class="container">
      <swiper
        class="swiper home-services__slider"
        :modules="[Navigation, Pagination]"
        :loop="true"
        :navigation="{
          prevEl: '.services-arrow--prev',
          nextEl: '.services-arrow--next'
        }"
        :pagination="true"
        :slidesPerView="1">
        <swiper-slide v-for="(item, id) in 2" :key="id">
          <div class="row align-center">
            <div class="col-md-7 col-lg-6">
              <div class="content">
                <span class="eyebrow">
                  Nuestros Servicios
                </span>

                <h2 class="title title--lg">
                  Investigación y desarrollo
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 36" fill="none"><path stroke="#4D5461" stroke-linecap="round" stroke-width="2.5" d="M2 18.063h53.333M39.333 34.063l16.531-14.991a1 1 0 0 0 .013-1.47L39.333 2.063"/></svg>
                </h2>

                <div class="wrap-ctas">
                  <Button href="/servicios">
                    Ver servicio
                  </Button>
                  <NuxtLink to="/services">
                    <Button href="/servicios" theme="light">
                      Ver todos
                    </Button>
                  </NuxtLink>
                </div>
              </div>
            </div>
            <div class="col-md-5 col-lg-6">
              <div class="images">
                <div class="img img--1">
                  <picture>
                    <source :srcset="`https://picsum.photos/seed/news${id}/320/480`" media="(min-width: 576px)">
                    <img :src="`https://picsum.photos/seed/news${id}/150/230`" alt="">
                  </picture>
                </div>
                <div class="img img--2">
                  <picture>
                    <source :srcset="`https://picsum.photos/seed/news2-${id}/250/250`" media="(min-width: 768px)">
                    <img :src="`https://picsum.photos/seed/news2-${id}/150/150`" alt="">
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>

        <div class="services-arrow services-arrow--prev">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M14.71 15.88L10.83 12l3.88-3.88a.996.996 0 1 0-1.41-1.41L8.71 11.3a.996.996 0 0 0 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0c.38-.39.39-1.03 0-1.42z"/></svg>
        </div>
        <div class="services-arrow services-arrow--next">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M9.29 15.88L13.17 12L9.29 8.12a.996.996 0 1 1 1.41-1.41l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3a.996.996 0 0 1-1.41 0c-.38-.39-.39-1.03 0-1.42z"/></svg>
        </div>
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
</script>

<style lang="scss" scoped>
  @import "@scss/components/home/services";
</style>