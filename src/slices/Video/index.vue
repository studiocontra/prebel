<script setup lang="ts">
import { type Content } from "@prismicio/client";

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
  <VideoDefault 
    v-if="slice.variation == 'default'"
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    :headline="slice.primary.headline"
    :youtubeId="slice.primary.youtube_id"
    :youtube-title="slice.primary.youtube_video_title"
  />
</template>
