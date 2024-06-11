<template>
  <header :class="headerStore.theme" ref="mainHeader">
    <div class="container">
      <div class="header__logo">
        <NuxtLink to="/">
          <img
            src="/logo-prebel-blue.svg"
            alt="Prebel Logo">
        </NuxtLink>
      </div>

      <transition name="fade">
        <Menu
          :class="[isMenuOpen && 'active', headerStore.theme]"
          @close-menu="toggleMenu" />
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
import { ref } from 'vue';
import { useHeaderStore } from '@/stores/header';

const headerStore = useHeaderStore();

const isMenuOpen = ref(false);
const mainHeader = ref(null);

function toggleMenu() {
  if(window.innerWidth <= 768) {
    isMenuOpen.value = !isMenuOpen.value;
  }
}

function setHeight() {
  const headerHeight = mainHeader.value.offsetHeight;
  document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
}

onMounted(() => {
  setHeight();
  window.addEventListener('resize', setHeight);
});

</script>

<style lang="scss" scoped>
  @import "@scss/components/header";
</style>