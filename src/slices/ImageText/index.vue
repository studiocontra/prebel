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
  <ImageTextDefault
    v-if="slice.variation == 'default'"
    :id="slice.primary.data_id || slice.id"
    :data-id="slice.primary.data_id"
    :slides="slice.items" />

  <ImageTextWide
    v-if="slice.variation == 'imageWide'"
    :id="slice.primary.data_id || slice.id"
    :data-id="slice.primary.data_id"
    :slides="slice.items" />

  <imageTextTabs
    v-if="slice.variation == 'imageTextTabs'"
    :id="slice.primary.data_id || slice.id"
    :data-id="slice.primary.data_id"
    :eyebrow="slice.primary.eyebrow"
    :headline="slice.primary.headline"
    :slides="slice.items" />

  <ImageTextBox
    v-if="slice.variation == 'imageTextBox'"
    :id="slice.primary.data_id || slice.id"
    :data-id="slice.primary.data_id"
    :eyebrow="slice.primary.eyebrow"
    :headline="slice.primary.headline"
    :slides="slice.items" />
</template>
