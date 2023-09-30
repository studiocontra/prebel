<template>
  <header>
    <div class="container">
      <div class="header__logo">
        <NuxtLink to="/">
          <img src="/logo-prebel.svg" alt="Prebel Logo">
          <img src="/logo-prebel-mobile.svg" class="logo-mobile" alt="Prebel Logo">
        </NuxtLink>
      </div>

      <div class="header__cta">
        <Button :arrow="false" theme="clear">
          Contacto
        </Button>
      </div>

      <div
        class="header__hamburger"
        :class="{'header__hamburger--active': isMenuOpen}"
        @click="toggleMenu">
        <div class="hamburger">
          <div class="hamburger__inner"></div>
        </div>
      </div>
    </div>

    <transition name="fade">
      <Menu
        v-if="isMenuOpen"
        @close-menu="toggleMenu" />
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<style lang="scss" scoped>
  @import "@scss/components/header";
</style>