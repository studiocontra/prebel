<template>
  <div class="locale" :class="{'locale--footer': props.type === 'footer'}">
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
  const props = defineProps({
    type: {
      type: String,
      default: 'header'
    }
  })
  const switchLocalePath = useSwitchLocalePath();
</script>

<style lang="scss" scoped>
  @import "@scss/components/lang";
</style>
