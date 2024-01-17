<template>
  <div
    class="drop"
    :data-parallax="parallax"
    ref="drop"></div>
</template>

<script setup>
import { ref, onMounted, getCurrentInstance } from 'vue'
const drop = ref(null);

const props = defineProps({
  maxW: String,
  parallax: {
    type: Number,
    default: 0
  },
  workspace: {
    type: String,
    default: ''
  },
});


const {vnode: {
  scopeId: thisHash
}} = getCurrentInstance();


onMounted(() => {
  if(props.parallax !== 0) {
    const workspace = (props.workspace !== '') ? drop.value.closest(props.workspace) : drop.value.parentElement;

    workspace.addEventListener("mousemove", addParallax);
  }
});

function addParallax(event) {
  const movement = drop.value.dataset['parallax'] / 200;

  const _w = window.innerWidth / 4;
  const _h = window.innerHeight / 4;
  drop.value.style.transform = `translate(${(event.clientX - _w) * movement}%, ${(event.clientY - _h) * movement}%)`;
}

</script>

<style lang="scss" scoped>
@import "@scss/components/drop";

.drop {
  max-width: v-bind(maxW);
}
</style>