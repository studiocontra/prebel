<template>
  <li class="menu-item">
    <NuxtLink
      :to="link.uid">
      {{ label }}
    </NuxtLink>

    <div v-if="children.length" class="submenu">
      <div class="container">
        <ul>
          <li
            v-for="(subItem, subId) in children"
            :key="subId"
            class="menu-item menu-item--sub">
            <NuxtLink
              :to="subItem.link.uid">
              {{ subItem.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </li>
</template>

<script setup>
const props = defineProps({
  label: String,
  link: Object,
  children: {
    type: [Array, Boolean],
    default: () => [],
  }
});
</script>


<style lang="scss" scoped>
@import "@scss/components/slices/menu-item";
</style>
