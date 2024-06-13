<template>
  <div class="section text-block text-block--scroll">
    <div class="container">
      <h3
        role="heading"
        v-if="eyebrow"
        class="eyebrow">
        {{ eyebrow }}
      </h3>

      <div class="wrap-effect" ref="divWrapper">
        <!-- <PrismicRichText
          v-if="content"
          :field="content"
          class="title hidden"
          :class="textAlign" /> -->

        <PrismicRichText
          v-if="content"
          :field="content"
          ref="divContent"
          class="title title--base"
          :class="textAlign" />

        <div class="title mask mask-0"></div>
        <div class="title mask mask-1"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted  } from 'vue';
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger,TextPlugin);

const props = defineProps({
  eyebrow: String,
  content: Object,
  textAlign: String,
});

const divWrapper = ref(null);
const divContent = ref(null);

onMounted(() => {
  const contentHeight = divContent.value.$el.scrollHeight;
  divWrapper.value.style.height = `${contentHeight}px`;


  const scrollTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.text-block--scroll',
      start: 'top 70%',
      end: '+=120%',
      scrub: 1,
    }
  });

  for (let index = 0; index < props.content.length; index++) {
    const element = props.content[index];

    scrollTl.to(`.mask-${index}`, {
      text: {
        value: element.text,
        delimiter: " ",
      },
    });
  }
})
</script>

<style lang="scss" scoped>
  @import "@scss/components/slices/text-block/scroll";
</style>