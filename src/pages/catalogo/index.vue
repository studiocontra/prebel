<template>
  <HeroTextOnly headline="Catálogo" size="small"></HeroTextOnly>

  <div class="wrap-cards">
    <div class="container container--narrow">
      <h2 class="title">
        {{ headline }}
      </h2>

      <div v-if="cats" class="row">
        <template v-for="(item, id) in cats" :key="id">
          <div class="col-6 col-lg-4 col-xt-3">
            <div class="card card--rounded">
              <NuxtLinkLocale
                v-if="item.button_link"
                :to="item.button_link"
              >
                <div class="card__image">
                  <img :src="item.image" :alt="item.headline">
                </div>

                <div class="card__content">
                  <h3 class="title title--sm">
                    {{ item.headline }}
                  </h3>
                </div>
              </NuxtLinkLocale>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHeaderStore } from "@/stores/header";

const cats = [
  {
    headline: 'Skin care',
    image: '/catalogo/skin-care.jpg',
    button_link: '/catalogo/categorias?cat=974'
  },
  {
    headline: 'Hair care',
    image: '/catalogo/hair-care.jpg',
    button_link: '/catalogo/categorias?cat=973'
  },
  {
    headline: 'Color cosmetics',
    image: '/catalogo/color-cosmetics.jpg',
    button_link: '/catalogo/categorias?cat=975'
  },
  {
    headline: 'Fragancias',
    image: '/catalogo/fragancias.jpg',
    button_link: '/catalogo/categorias?cat=977'
  },
  {
    headline: 'Body care',
    image: '/catalogo/body-care.jpg',
    button_link: '/catalogo/categorias?cat=976'
  },
  {
    headline: 'Sun care',
    image: '/catalogo/sun-care.jpg',
    button_link: '/catalogo/categorias?cat=981'
  }
]

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
@import "@scss/pages/catalogo/index";
</style>
