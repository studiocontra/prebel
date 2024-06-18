<template>
  <div class="locale">
    <NuxtLink
      :to="switchLocalePath('es')"
      activeClass="active">
      Es
    </NuxtLink>
    <NuxtLink
      :to="switchLocalePath('en')"
      activeClass="active">
      En
    </NuxtLink>
  </div>
</template>

<script setup>
  const switchLocalePath = useSwitchLocalePath();
</script>

<style lang="scss" scoped>
  @import "@scss/components/lang-header";
</style>
