<template>
  <div class="report">
    <div class="container">
      <div class="report__box">
        <div class="row justify-between">
          <div class="col-lg-5 col-xl-4">
            <p class="title">
              {{ headline }}
            </p>
          </div>

          <div class="col-lg-5">
            <prismic-rich-text
              :field="content"
              class="text" />

            <div class="ctas">
              <Button theme="dark">
                Reportar
              </Button>
              <Button theme="dark">
                Ver código de ética
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  headline: String,
  content: Object,
});
</script>

<style lang="scss" scoped>
  @import "@scss/components/etics/report";
</style>