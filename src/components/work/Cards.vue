<template>
  <div class="section work-cards">
    <div class="container">
      <swiper
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
        <swiper-slide>
          <div class="card">
            <div class="card__headline">
              <h3 class="title">
               Jóvenes Graduados
              </h3>
            </div>

            <div class="card__image">
              <img :src="`https://picsum.photos/seed/work-card/400/500`" alt="Placeholder Image">
            </div>

            <div class="card__content">
              <Button>
                Conoce más
              </Button>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="card">
            <div class="card__headline">
              <h3 class="title">
               Profesionales Experimentados
              </h3>
            </div>

            <div class="card__image">
              <img :src="`https://picsum.photos/seed/work-card2/400/500`" alt="Placeholder Image">
            </div>

            <div class="card__content">
              <Button>
                Conoce más
              </Button>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="card">
            <div class="card__headline">
              <h3 class="title">
               Operaciones y Administración
              </h3>
            </div>

            <div class="card__image">
              <img :src="`https://picsum.photos/seed/work-card3/400/500`" alt="Placeholder Image">
            </div>

            <div class="card__content">
              <Button>
                Conoce más
              </Button>
            </div>
          </div>
        </swiper-slide>
      </swiper>

      <!-- <div class="row">
        <div class="col-sm-6 col-lg-4">
          <div class="card">
            <div class="card__headline">
              <h3 class="title">
               Jóvenes Graduados
              </h3>
            </div>

            <div class="card__image">
              <img :src="`https://picsum.photos/seed/work-card/400/500`" alt="Placeholder Image">
            </div>

            <div class="card__content">
              <Button>
                Conoce más
              </Button>
            </div>
          </div>
        </div>

        <div class="col-sm-6 col-lg-4">
          <div class="card">
            <div class="card__headline">
              <h3 class="title">
               Profesionales Experimentados
              </h3>
            </div>

            <div class="card__image">
              <img :src="`https://picsum.photos/seed/work-card2/400/500`" alt="Placeholder Image">
            </div>

            <div class="card__content">
              <Button>
                Conoce más
              </Button>
            </div>
          </div>
        </div>

        <div class="col-sm-6 col-lg-4">
          <div class="card">
            <div class="card__headline">
              <h3 class="title">
               Operaciones y Administración
              </h3>
            </div>

            <div class="card__image">
              <img :src="`https://picsum.photos/seed/work-card3/400/500`" alt="Placeholder Image">
            </div>

            <div class="card__content">
              <Button>
                Conoce más
              </Button>
            </div>
          </div>
        </div>
      </div> -->
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
import 'swiper/css/pagination';
</script>

<style lang="scss" scoped>
  @import "@scss/components/work/cards";
</style>