<template>
  <div class="drop" style=""></div>
</template>

<script>
export default {
  name: 'WaterDrop',
  props: {
    maxW: String,
  },
  mounted() {
    // document.addEventListener("mousemove", this.parallax);
  },
  methods: {
    parallax(event) {
      this.querySelectorAll(".parallax-wrap span").forEach((shift) => {
        const position = shift.getAttribute("value");
        const x = (window.innerWidth - event.pageX * position) / 90;
        const y = (window.innerHeight - event.pageY * position) / 90;

        shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
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