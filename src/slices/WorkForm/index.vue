<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.WorkFormSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<template>
  <WorkForm
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    :headline1="slice.primary.headline_1"
    :headline2="slice.primary.headline_2"
    :formEyebrow="slice.primary.form_eyebrow"
    :page="context" />
</template>
