<template>
  <Header :key="localeProperties.code" />
  <slot />
  <PreFooter />
  <Footer />
  <Loader />
</template>

<script setup>
const { localeProperties } = useI18n();
</script>