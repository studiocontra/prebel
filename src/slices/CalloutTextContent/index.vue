<script setup lang="ts">
import { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.CalloutTextContentSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>

<template>
  <CalloutText
    :headline="slice.primary.headline"
    :content="slice.primary.content"
    :items="slice.items"
   />
</template>
