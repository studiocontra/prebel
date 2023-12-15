<template>
  <div
    class="modal modal--video"
    aria-hidden="true">
    <div class="modal__content">
      <div class="modal__close" @click="emit('closeModal');">
        close
      </div>
      <div class="modal__body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['closeModal'])

onMounted(() => {
  document.addEventListener('keyup', (e) => {
    if (e.keyCode === 27) emit('closeModal');
  });
})
</script>


<style lang="scss" scoped>
  @import "@scss/components/modal";
</style>
