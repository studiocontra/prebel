<template>
  <li class="menu-item">
    <NuxtLinkLocale
      :to="printHref(link)">
      {{ label }}
    </NuxtLinkLocale>

    <div v-if="children.length" class="submenu">
      <div class="container">
        <ul>
          <li
            v-for="(subItem, subId) in children"
            :key="subId"
            class="menu-item menu-item--sub">
            <NuxtLinkLocale
              :to="subItem.link.uid">
              {{ subItem.label }}
            </NuxtLinkLocale>
          </li>
        </ul>
      </div>
    </div>
  </li>
</template>

<script setup>
const { localeProperties } = useI18n();

const props = defineProps({
  label: String,
  link: Object,
  scroll: {
    type: String,
    default: ''
  },
  children: {
    type: [Array, Boolean],
    default: () => [],
  }
});

const printHref = ((link) => {
  if (link['link_type'] === 'web') return link.url;

  const isHome = (link.type === 'home') ? '' : link.uid ?? link.slug;
  const targetSection = (props.scroll) ? `#${props.scroll}` : '';
  return `/${isHome}${targetSection}`;
});
</script>


<style lang="scss" scoped>
@import "@scss/components/slices/menu-item";
</style>
