<template>
  <header :class="[
    headerStore.theme,
    {
      scrolled: isScrolled,
    },
  ]" ref="mainHeader">
    <div class="container">
      <div class="header__logo">
        <NuxtLink to="/">
          <PrismicImage :field="headerData.logo" />
        </NuxtLink>
      </div>

      <Transition name="slide-fade">
        <div v-if="isMenuOpen" class="main-menu" :class="headerStore.theme" @close-menu="toggleMenu">
          <nav v-if="headerData.slices">
            <ul>
              <SliceZone :slices="headerData.slices" :components="{
    menu_item: MenuItem,
  }" />
            </ul>
          </nav>
        </div>
      </Transition>

      <LangHeader class='lang-header' />

      <div class="header__hamburger" :class="{ 'header__hamburger--active': isMenuOpen }" @click="toggleMenu">
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
const {
  value: { iso, code },
} = localeProperties;

import { ref } from "vue";
import { useHeaderStore } from "@/stores/header";

const headerStore = useHeaderStore();
const mainHeader = ref(null);

/**
 * Get menu items
 */
const { data } = await useAsyncData("[mainNav]", () =>
  client.getSingle("main_nav", { lang: iso })
);

const headerData = data.value.data;

// Import your slices
import MenuItem from "@/slices/MenuItem";

/**
 * Toggle mobile menu
 */
const isMenuOpen = ref(false);

function toggleMenu() {
  if (window.innerWidth <= 1400) {
    isMenuOpen.value = !isMenuOpen.value;
  }
}

function showDesktop() {
  if (window.innerWidth < 1400) {
    isMenuOpen.value = false;
  } else {
    isMenuOpen.value = true;
  }
}


/**
 * Set Menu height as css var
 */
const headerHeight = ref(90);
function setHeight() {
  headerHeight.value = mainHeader.value.offsetHeight;
  document.documentElement.style.setProperty(
    "--header-height",
    `${headerHeight.value}px`
  );
}

/**
 * Toggle Active onScroll
 */
const isScrolled = ref(false);
function watchScroll() {
  window.scrollY > headerHeight.value * 2
    ? (isScrolled.value = true)
    : (isScrolled.value = false);
}

onMounted(() => {
  setHeight();
  showDesktop();
  window.addEventListener("resize", showDesktop);
  window.addEventListener("resize", setHeight);

  watchScroll();
  window.addEventListener("scroll", watchScroll);
});
</script>

<style lang="scss" scoped>
@import "@scss/components/header";
</style>
