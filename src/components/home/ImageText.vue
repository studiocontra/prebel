<template>
  <div class="section home__img-text">
    <div class="container">
      <div class="row align-center">
        <div class="col-lg-6">
          <div class="img">
            <picture>
              <source srcset="https://picsum.photos/seed/imgtxt/600/600" media="(min-width: 1200px)">
              <source srcset="https://picsum.photos/seed/imgtxt/900/900" media="(min-width: 768px)">
              <source srcset="https://picsum.photos/seed/imgtxt/626/626" media="(min-width: 500px)">
              <img :src="`https://picsum.photos/seed/imgtxt/500/500`" alt="Placeholder Image">
            </picture>

            <Drop
              width="200px"
              left="95%"
              top="90%" />
          </div>
        </div>
        <div class="col-lg-6">
          <div class="content">
            <span class="eyebrow">
              Sobre Prebel
            </span>

            <h2 class="title">
              Propósito
            </h2>

            <div class="title text">
              <p>
                Embellecemos vidas es nuestra inspiración para crear un espacio laboral humano, incluyente y enriquecedor para nuestros empleados.
              </p>
            </div>

            <Button>
              Conoce más
            </Button>
          </div>
        </div>
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
  @import "@scss/components/home/image-text";
</style>