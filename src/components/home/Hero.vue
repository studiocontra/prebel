<template>
  <div class="hero hero--home">
    <Drop
      maxW="380px"
      :parallax="-15" />
    <div class="container">
      <div class="row lg-reverse align-bottom">
        <div class="col-lg-6">
          <span class="title title--xl">
            {{ greeting }}
          </span>
        </div>
        <div class="col-lg-6">
          <h1>
            <prismic-rich-text
              :field="content"
              class="title" />
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  content: Object,
  greeting: String,
});
</script>

<style lang="scss" scoped>
  @import "@scss/components/hero";
  @import "@scss/components/home/hero";
</style>