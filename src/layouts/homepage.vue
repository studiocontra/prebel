<template>
  <Header :key="localeProperties.code" />
  <slot />
  <Footer />
  <Loader />
</template>

<script setup>
const { localeProperties } = useI18n();
</script>
