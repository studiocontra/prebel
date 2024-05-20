<template>
  <div class="main-menu">
    <NuxtLink
      to="/"
      class="menu-link"
      @click="$emit('closeMenu')">
      End to End products
    </NuxtLink>

    <NuxtLink
      to="/sostenibilidad"
      class="menu-link"
      @click="$emit('closeMenu')">
      Nuestras Categorías
    </NuxtLink>

    <NuxtLink
      to="/servicios"
      class="menu-link"
      @click="$emit('closeMenu')">
      Tipos de Servicios
    </NuxtLink>

    <NuxtLink
      to="/nosotros"
      class="menu-link"
      @click="$emit('closeMenu')">
      Nuestra Compañía
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
  @import "@scss/components/menu";
</style>