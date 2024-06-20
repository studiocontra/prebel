<template>
  <Header :key="localeProperties.code" />
  <ContactModal />
  <slot />
  <Footer />
  <Loader />
</template>

<script setup>
const { localeProperties } = useI18n();
</script>
