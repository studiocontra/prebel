<template>
  <div class="section home__news">
    <div class="container">
      <div class="home-news__box">
        <swiper
          class="swiper home-news__slider"
          :modules="modules"
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
          :slides-per-view="1">
          <swiper-slide v-for="(item, id) in 4" :key="id">
            <div class="row">
              <div class="col-lg-6">
                <div class="img">
                  <picture>
                    <source :srcset="`https://picsum.photos/seed/news${id}/599/441`" media="(min-width: 1200px)">
                    <source :srcset="`https://picsum.photos/seed/news${id}/500/370`" media="(min-width: 768px)">
                    <source :srcset="`https://picsum.photos/seed/news${id}/626/460`" media="(min-width: 500px)">
                    <img :src="`https://picsum.photos/seed/news${id}/500/370`" alt="Placeholder Image">
                  </picture>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="content">
                  <span class="eyebrow">
                    Noticias y updates
                  </span>

                  <h2 class="title">
                    Prebel en la Feria de Cosmeticos
                  </h2>

                  <div class="text">
                    <p>
                      Durante la feria, PREBEL exhibió su amplia gama de productos cosméticos innovadores y de alta calidad, captando la atención de profesionales de la industria y visitantes por igual. El stand de la empresa presentó formulaciones vanguardistas, diseños atractivos de envases y una exhibición de sus últimos lanzamientos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper Vue.js components
import { Pagination, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [Pagination, EffectFade],
    };
  },
  methods: {
    pad(num) {
      var s = "000" + num;
      return s.substr(s.length - 2);
    }
  }
}
</script>


<style lang="scss" scoped>
  @import "@scss/components/home/news";
</style>