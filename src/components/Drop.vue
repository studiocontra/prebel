<template>
  <div class="drop" style=""></div>
</template>

<script>
export default {
  name: 'WaterDrop',
  props: {
    width: String,
    height: String,
    top: String,
    left: String,
  }
}
</script>

<style lang="scss" scoped>
@import "@scss/components/drop";

.drop {
  max-width: v-bind(width);
  max-height: v-bind(height);
  top: v-bind(top);
  left: v-bind(left);
}
</style>