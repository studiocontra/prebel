<template>
  <div class="wrap-product" v-if="productData">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="product__image">
            <Swiper
              class="swiper"
              :loop="true"
              :slidesPerView="1">
              <SwiperSlide v-for="(item, id) in productMedia" :key="id">
                <img :src="`https://prebel.vteximg.com.br/arquivos/ids/${item.ArchiveId}`" :alt="`${productData.Name} - ${id}`">
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div class="col-md-6">
          <div class="product__breadcrumb">
            <NuxtLinkLocale
              to="/catalogo"
              class="btn">
              Home
            </NuxtLinkLocale>
            /
            <a href="#" class="link" @click.prevent="this.$router.go(-1)">
              {{cats[cat].headline}}
            </a>
          </div>
          <div class="product__data">
            <h1 class="title">
              {{ productData.Name }}
            </h1>

            <div class="text">
              <p v-html="productData.Description"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

const route = useRoute();

import { useHeaderStore } from "@/stores/header";


const {id, sku, cat} = route.query;
const productData = ref(null);
const productMedia = ref(null);


const { data: dataRes, error: dataError } = await useFetch(`https://prebel.vtexcommercestable.com.br/api/catalog/pvt/product/${id}/`,
  {
    headers: {
      'X-VTEX-API-AppToken': 'UYVICURKJVZYIZHFDZJCKYMSHGPGLYNGZAABYFCCFLNESBHHDQRWXKGBCMXPDNKUURCLEUKBCTNAITBKTROODKEYMYOITRBRWQXJGQKIQQQVLRMRUDENSOEZARHGJNSN',
      'X-VTEX-API-AppKey': 'vtexappkey-prebel-ACDPRA',
      Cookie: 'janus_sid=8bf268b1-a429-4534-bb4e-b671bacef0db'
    }
  }
);

const { data: mediaRes, error: mediaError } = await useFetch(`https://prebel.vtexcommercestable.com.br/api/catalog/pvt/stockkeepingunit/${sku}/file`,
  {
    headers: {
      'X-VTEX-API-AppToken': 'UYVICURKJVZYIZHFDZJCKYMSHGPGLYNGZAABYFCCFLNESBHHDQRWXKGBCMXPDNKUURCLEUKBCTNAITBKTROODKEYMYOITRBRWQXJGQKIQQQVLRMRUDENSOEZARHGJNSN',
      'X-VTEX-API-AppKey': 'vtexappkey-prebel-ACDPRA',
      Cookie: 'janus_sid=8bf268b1-a429-4534-bb4e-b671bacef0db'
    }
  }
);

productData.value = dataRes.value;
productMedia.value = mediaRes.value;

if(dataError.value || mediaError.value) {
  reloadNuxtApp();
}


const cats = {
   974: {
    headline: 'Skin care',
    image: '/catalogo/skin-care.jpg'
  },
   973: {
    headline: 'Hair care',
    image: '/catalogo/hair-care.jpg'
  },
   975: {
    headline: 'Color cosmetics',
    image: '/catalogo/color-cosmetics.jpg'
  },
   977: {
    headline: 'Fragancias',
    image: '/catalogo/fragancias.jpg'
  },
   976: {
    headline: 'Body care',
    image: '/catalogo/body-care.jpg'
  },
   981: {
    headline: 'Sun care',
    image: '/catalogo/sun-care.jpg'
  }
};


const headerStore = useHeaderStore();
onMounted(() => {
  headerStore.setTheme('dark');

  setTimeout(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, 1000);
});

/** SEO */
useSeoMeta({
  title: `Prebel Catalogo | ${productData.value.Name}`,
  description: productData.value.MetaTagDescription
});
</script>

<style lang="scss" scoped>
@import "@scss/pages/catalogo/producto";
</style>
