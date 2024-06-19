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
    'index': '#4D5461',
    'nosotros': '#EDEBE3',
    'servicios': '#EDEBE3',
    'servicios-slug': '#EDEBE3',
    'trabaja-con-nosotros': '#EDEBE3',
    'trabaja-con-nosotros-slug': '#EDEBE3',
    'linea-etica': '#EDEBE3',
    'sostenibilidad': '#EDEBE3',
    'legales-slug': '#EDEBE3',
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
    const fromPageName = from.name.split('__')[0];
    const toPageName = to.name.split('__')[0];

    if(toPageName === 'index' && fromPageName === 'index') {
      hide();
      window.location.hash = to.hash;
      return true;
    }

    loaderBg.value = colors[toPageName];
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
