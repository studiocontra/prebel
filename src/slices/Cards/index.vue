<script setup lang="ts">
// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<template>
  <CardsDefault
    v-if="slice.variation == 'default'"
    :id="slice.primary.data_id || slice.id"
    :headline="slice.primary.headline"
    :cards="slice.items" />

  <CardsLargeImage
    v-if="slice.variation == 'largeImage'"
    :id="slice.primary.data_id || slice.id"
    :headline="slice.primary.headline"
    :cards="slice.items" />

  <CardsRounded
    v-if="slice.variation == 'rounded'"
    :id="slice.primary.data_id || slice.id"
    :headline="slice.primary.headline"
    :allLink="slice.primary.see_all_link"
    :allLabel="slice.primary.see_all_label"
    :cards="slice.items" />

    <CardsSquare
    v-if="slice.variation == 'square'"
    :id="slice.primary.data_id || slice.id"
    :headline="slice.primary.headline"
    :jobs="slice.primary.jobs"
    :cards="slice.items"
    :textNotFoundJobs="slice.primary.text_not_found_jobs" />
</template>
