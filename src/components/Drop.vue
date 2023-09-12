<template>
  <div class="drop" ref="drop"></div>
</template>

<script>
export default {
  name: 'WaterDrop',
  props: {
    maxW: String,
  },
  mounted() {
    // document.addEventListener("mousemove", this.parallax);

    const drop  = this.$refs.drop;
    console.log(drop);
  },
  methods: {
    parallax(event) {
      const drop  = this.$refs.drop;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@scss/components/drop";

.drop {
  max-width: v-bind(maxW);
}
</style>