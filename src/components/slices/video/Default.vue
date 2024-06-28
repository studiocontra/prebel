<template>
  <div class="video">
    <div class="container">
      <div class="v-content">
        <h3 v-if="headline" class="title">
          {{ headline }}
        </h3>
        <div class="v-iframe">
          <iframe width="560" height="315" :src="`https://www.youtube.com/embed/${youtubeId}`" :title="youtubeTitle"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  headline: String,
  youtubeId: String,
  youtubeTitle: String,
});
</script>

<style lang="scss" scoped>
@import "@scss/components/slices/video/default";
</style>
