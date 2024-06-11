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
  <HeroHomepage
    v-if="slice.variation == 'home'"
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    :headline="slice.primary.headline"
    :content="slice.primary.content"
    :bgImage="slice.primary.bg_image"
    :showForm="slice.primary.show_contact_form" />

  <HeroTextOnly
    v-if="slice.variation == 'text'"
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    :headline="slice.primary.headline"
    :content="slice.primary.content" />

  <HeroTextCta
    v-if="slice.variation == 'textCta'"
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    :headline="slice.primary.headline"
    :content="slice.primary.content"
    :buttonLabel="slice.primary.button_label"
    :buttonLink="slice.primary.button_link" />

  <HeroImageText
    v-if="slice.variation == 'default'"
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    :image="slice.primary.image"
    :imageStyle="slice.primary.image_style"
    :imageSize="slice.primary.image_size"
    :content="slice.primary.content" />
</template>
