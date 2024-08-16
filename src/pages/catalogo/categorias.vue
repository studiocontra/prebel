<template>
  <div class="hero hero--services">
    <Drop
      maxW="300px"
      :parallax="-12" />
    <div class="container">
      <div class="row align-center justify-between">
        <div class="col-lg-5">
          <h1 class="title">
            {{ cats[thisCat].headline }}
          </h1>
        </div>
        <div class="col-lg-7">
          <div class="hero__image">
            <img :src="cats[thisCat].image" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="wrap-products">
    <div class="container">
      <div class="row">
        <template v-for="item in products">
          <div class="col-xs-6 col-sm-4 col-md-3 col-xl-2">
            <div class="card">
              <div class="card__image">
                <img :src="item.SkuImageUrl" :alt="item.ProductName">
              </div>

              <div class="card__content">
                <h3 class="title title--xs">
                  {{ item.ProductName }}
                </h3>

                <NuxtLinkLocale
                  :to="`/catalogo/producto?id=${item.ProductId}&sku=${item.SkuId}&cat=${thisCat}`"
                  class="btn">
                  <Button :arrow="false">
                    Ver Producto
                  </Button>
                </NuxtLinkLocale>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const route = useRoute();

import { useHeaderStore } from "@/stores/header";


const thisCat = route.query.cat;
const products = ref(null);

try {
  const { data } = await useFetch(`https://prebel.vtexcommercestable.com.br/api/catalog/pvt/collection/${thisCat}/products`,
    {
      params: {page: 1, pageSize: 50},
      headers: {
        'X-VTEX-API-AppToken': 'UYVICURKJVZYIZHFDZJCKYMSHGPGLYNGZAABYFCCFLNESBHHDQRWXKGBCMXPDNKUURCLEUKBCTNAITBKTROODKEYMYOITRBRWQXJGQKIQQQVLRMRUDENSOEZARHGJNSN',
        'X-VTEX-API-AppKey': 'vtexappkey-prebel-ACDPRA',
        Cookie: 'janus_sid=8bf268b1-a429-4534-bb4e-b671bacef0db'
      }
    }
  );

  products.value = data.value.Data
} catch (error) {
  onMounted(() => {
    window.location.reload();
    return;
  });
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
onMounted(() =>
  headerStore.setTheme('light')
);

/** SEO */
useSeoMeta({
  title: 'Catalogo',
});
</script>

<style lang="scss" scoped>
@import "@scss/pages/catalogo/categorias";
</style>