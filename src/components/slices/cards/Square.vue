<template>
  <div class="section work-cards" :id="dataId">
    <div class="container">
      <h2 v-if="headline" class="eyebrow">
        {{ headline }}
      </h2>

      <div v-if="cards" class="row">
        <template v-for="(item, id) in cards" :key="id">
          <div class="col-md-6">
            <div class="card card--rounded">
              <h3 class="title title--sm">
                {{ item.headline }}
              </h3>
              <NuxtLink v-if="item.button_link" :to="item.button_link.uid">
                <picture class="card__picture">
                  <prismic-image :field="item.image" />
                </picture>
              </NuxtLink>
              <p>{{ item.description }}</p>
              <NuxtLink v-if="item.button_link && item.button_label" :to="`${item.button_link.uid}`">
                <Button class="btn--gray">
                  {{ item.button_label }}
                </Button>
              </NuxtLink>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  dataId: {
    type: String,
    default: ''
  },
  headline: String,
  cards: [Array, Boolean],
});
</script>

<style lang="scss" scoped>
@import "@scss/components/slices/cards/square";
</style>