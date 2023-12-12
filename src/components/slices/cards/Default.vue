<template>
  <div class="services-cards">
    <div class="container">
      <h2 class="eyebrow">
        {{ headline }}
      </h2>

      <div
        v-if="cards"
        class="row space">
        <template v-for="(item, id) in cards" :key="id">
          <div class="col-sm-6 col-lg-4 col-xx-3">
            <div class="card">
              <div class="card__image">
                <prismic-image :field="item.image" />
              </div>

              <div class="card__content">
                <h3 class="title">
                  {{ item.headline }}
                </h3>

                <Button
                  v-if="item.button_link && item.button_label">
                  {{ item.button_label }}
                </Button>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  headline: String,
  cards: [Array, Boolean],
});
</script>

<style lang="scss" scoped>
  @import "@scss/components/services/cards";
</style>