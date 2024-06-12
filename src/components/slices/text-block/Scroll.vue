<template>
  <div class="section text-block text-block--scroll">
    <div class="container">
      <h3
        role="heading"
        v-if="eyebrow"
        class="eyebrow">
        {{ eyebrow }}
      </h3>

      <PrismicRichText
        v-if="content"
        :field="content"
        class="title"
        :class="textAlign" />

      <div class="mask"></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  eyebrow: String,
  content: Object,
  textAlign: String,
});

// gsap.to('.mask', {
//   duration: 1,
//   text: {
//     value: props.content[0].text,
//     newClass: "class2",
//     delimiter: " ",
//   },
// });
</script>

<style lang="scss" scoped>
  @import "@scss/components/slices/text-block/scroll";
</style>