<template>
  <div class="hero hero--home">
    <div class="container">
      <div class="row justify-center">
        <div class="col-md-11 col-lg-10">
          <h1 class="title title--xl">
            <div class="hidden" data-row="1">
              <span data-item="1">
                Growing&nbsp;
                <div class="media media--mobile" data-item="2"></div>
                the ecosystem
              </span>
              <div class="media" data-item="2"></div>
            </div>
            <div class="hidden" data-row="2">
              <div class="media" data-item="3"></div>
              <span data-item="4">of</span>
              <div class="media" data-item="5"></div>
            </div>
            <div class="hidden" data-row="3">
              <div class="media" data-item="6"></div>
              <span data-item="7">beauty care.</span>
            </div>
          </h1>
          <PrismicRichText
            :field="content"
            class="text" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  content: Object,
});

onMounted(() => {
  document.querySelectorAll("[data-row]").forEach((row, index) => {
    setTimeout(() => {
      row.classList.remove('hidden');
    }, 500 * (index + 1));
  })
});
</script>

<style lang="scss" scoped>
  @import "@scss/components/hero";
  @import "@scss/components/slices/hero/homepage";
</style>