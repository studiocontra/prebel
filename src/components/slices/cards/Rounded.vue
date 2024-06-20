<template>
  <div class="section rounded-cards" :id="dataId">
    <div class="container container--narrow">
      <h2 class="title">
        {{ headline }}
      </h2>

      <div v-if="cards" class="row">
        <template v-for="(item, id) in cards" :key="id">
          <div class="col-sm-6 col-lg-4 col-xt-3">
            <div class="card card--rounded">
              <NuxtLinkLocale
                v-if="item.button_link"
                :to="`${printHref(item.button_link, item.target_scroll)}`"
              >
                <div class="card__image">
                  <prismic-image :field="item.image" />
                </div>

                <div class="card__content">
                  <h3 class="title title--sm">
                    {{ item.headline }}
                  </h3>
                </div>
              </NuxtLinkLocale>
            </div>
          </div>
        </template>

        <template v-if="allLabel && allLink">
          <div class="col-sm-6 col-lg-4 col-xt-3">
            <div class="see-all">
              <NuxtLinkLocale :to="`${route.path}/${allLink.uid}`">
                <h3 class="title title--sm">
                  {{ allLabel }}
                </h3>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 58 36"
                  fill="none"
                >
                  <path
                    stroke-linecap="round"
                    stroke-width="2.5"
                    d="M2 18.063h53.333M39.333 34.063l16.531-14.991a1 1 0 0 0 .013-1.47L39.333 2.063"
                  ></path>
                </svg>
              </NuxtLinkLocale>
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
    default: "",
  },
  allLabel: String,
  allLink: Object,
  cards: [Array, Boolean],
  headline: String,
});

const route = useRoute();

const printHref = (link, scroll = "") => {
  console.log(scroll);
  if (link["link_type"] === "web") return link.url;

  const isHome = link.type === "home" ? "" : link.uid ?? link.slug;
  const targetSection = scroll ? `#${scroll}` : "";
  return `/${isHome}${targetSection}`;
};
</script>

<style lang="scss" scoped>
@import "@scss/components/slices/cards/rounded";
</style>
