// Code generated by Slice Machine. DO NOT EDIT.

import { defineAsyncComponent } from "vue";
import { defineSliceZoneComponents } from "@prismicio/vue";

export const components = defineSliceZoneComponents({
  accordion: defineAsyncComponent(() => import("./Accordion/index.vue")),
  callout_text_content: defineAsyncComponent(
    () => import("./CalloutTextContent/index.vue"),
  ),
  cards: defineAsyncComponent(() => import("./Cards/index.vue")),
  image_text: defineAsyncComponent(() => import("./ImageText/index.vue")),
  image_text_box: defineAsyncComponent(
    () => import("./ImageTextBox/index.vue"),
  ),
  image_text_carousel: defineAsyncComponent(
    () => import("./ImageTextCarousel/index.vue"),
  ),
  images_grid: defineAsyncComponent(() => import("./ImagesGrid/index.vue")),
  our_clients: defineAsyncComponent(() => import("./ClientLogos/index.vue")),
  page_hero: defineAsyncComponent(() => import("./PageHero/index.vue")),
  services_slider: defineAsyncComponent(
    () => import("./ServicesSlider/index.vue"),
  ),
  testimonials: defineAsyncComponent(() => import("./Testimonials/index.vue")),
  text_block: defineAsyncComponent(() => import("./TextBlock/index.vue")),
  text_images_shapes: defineAsyncComponent(
    () => import("./TextImagesShape/index.vue"),
  ),
});
