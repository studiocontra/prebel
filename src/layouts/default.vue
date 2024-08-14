<template>
  <Header :key="localeProperties.code" />
  <ContactModal :key="localeProperties.code" />
  <slot />
  <Footer :key="localeProperties.code" />
  <Loader />
</template>

<script setup>
const { localeProperties } = useI18n();
</script>
