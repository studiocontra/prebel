<template>
  <header :class="[
    headerStore.theme,
    {
      'scrolled': isScrolled
    }]" ref="mainHeader">
    <div class="container">
      <div class="header__logo">
        <NuxtLink to="/">
          <PrismicImage :field="headerData.logo" />
        </NuxtLink>
      </div>

      <transition name="fade">
        <div
          class="main-menu"
          :class="[isMenuOpen && 'active', headerStore.theme]"
          @close-menu="toggleMenu">
          <nav v-if="headerData.slices">
            <ul>
              <SliceZone
                :slices="headerData.slices"
                :components="{
                  menu_item: MenuItem,
                }" />
            </ul>
          </nav>
        </div>
      </transition>

      <div
        class="header__hamburger"
        :class="{'header__hamburger--active': isMenuOpen}"
        @click="toggleMenu">
        <div class="dot dot--circle"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot dot--circle"></div>
      </div>
    </div>
  </header>
</template>

<script setup>
const { client } = usePrismic();
const { localeProperties } = useI18n();
const { value: { iso, code } } = localeProperties;

import { ref } from 'vue';
import { useHeaderStore } from '@/stores/header';

const headerStore = useHeaderStore();
const mainHeader = ref(null);

/**
 * Get menu items
 */
 const { data } = await useAsyncData("[mainNav]", () =>
  client.getSingle("main_nav", {lang: iso})
);

const headerData = data.value.data;

// Import your slices
import MenuItem from '@/slices/MenuItem'
console.log(headerData);

/**
 * Toggle mobile menu
 */
const isMenuOpen = ref(false);

function toggleMenu() {
  if(window.innerWidth <= 768) {
    isMenuOpen.value = !isMenuOpen.value;
  }
}

const headerHeight = ref(90);
function setHeight() {
  headerHeight.value = mainHeader.value.offsetHeight;
  document.documentElement.style.setProperty('--header-height', `${headerHeight.value}px`);
}

/**
 * Toggle Active onScroll
 */
const isScrolled = ref(false);
function watchScroll() {
  (window.scrollY > headerHeight.value * 2) ? isScrolled.value = true : isScrolled.value = false;
}

onMounted(() => {
  setHeight();
  window.addEventListener('resize', setHeight);
  window.addEventListener('scroll', watchScroll);
});

</script>

<style lang="scss" scoped>
  @import "@scss/components/header";
</style>