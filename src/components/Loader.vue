<template>
  <transition name="fade">
    <div
      v-if="isLoading"
      class="loader"
      :style="{background: loaderBg}"></div>
  </transition>
</template>

<script setup>
  import { onBeforeUnmount, ref } from 'vue';

  const nuxtApp = useNuxtApp();
  const router = useRouter();

  // Loader State
  const isLoading = ref(false);
  const loaderBg = ref(false);

  const colors = {
    'index': '#4278FA',
    'nosotros': '#4D5461',
    'servicios': '#4D5445',
    'servicios-slug': '#4D5445',
    'trabaja-con-nosotros': '#4D5445',
    'trabaja-con-nosotros-slug': '#4D5445',
    'linea-etica': '#4D5461',
    'sostenibilidad': '#4D5445',
    'legales-slug': '#4D5461',
  };

  function hide() {
    if (import.meta.client) {
      isLoading.value = false
    }
  }

  router.onError(() => {
    hide()
  });

  router.beforeResolve((to, from) => {
    const pageName = to.name.split('__')[0];
    loaderBg.value = colors[pageName];
    isLoading.value = true;
  });

  router.afterEach((_to, _from, failure) => {
    if (failure) {
      hide()
    }
  });

  const unsubPage = nuxtApp.hook('page:finish', hide);
  const unsubError = nuxtApp.hook('vue:error', hide);

  onBeforeUnmount(() => {
    unsubPage()
    unsubError()
  });
</script>

<style lang="scss" scoped>
  /* we will explain what these classes do next! */
  .fade-enter-active {
    transition: opacity 0.1s ease;
  }
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  .loader {
    @include fullAbs;
    position: fixed;
    z-index: 10;
  }
</style>
