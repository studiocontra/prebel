<template>
  <div class="banner">
    <div class="container">
      <div class="b-content">
        <Drop maxW="230px" :parallax="-12" />
        <div class="wrapper">
          <span role="heading" v-if="eyebrow" class="eyebrow">
            {{ eyebrow }}
          </span>

          <h3 v-if="headline" class="title">
            {{ headline }}
          </h3>

          <p v-if="description" class="text">
            {{ description }}
          </p>

          <NuxtLink v-if="buttonLink && buttonLabel" :to="`${buttonLink.uid}`">
            <Button class="btn--light">
              {{ buttonLabel }}
            </Button>
          </NuxtLink>
        </div>
        <Drop maxW="230px" :parallax="12" />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  eyebrow: String,
  headline: String,
  description: String,
  buttonLabel: String,
  buttonLink: Object,
});
</script>

<style lang="scss" scoped>
@import "@scss/components/slices/banner-cta/default";
</style>
