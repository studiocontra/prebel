<template>
  <div class="main-menu">
    <NuxtLink
      to="/nosotros"
      class="menu-link"
      @click="$emit('closeMenu')">
      Quiénes somos
    </NuxtLink>

    <NuxtLink
      to="/servicios"
      class="menu-link"
      @click="$emit('closeMenu')">
      Nuestros Servicios
    </NuxtLink>

    <NuxtLink
      to="/sostenibilidad"
      class="menu-link"
      @click="$emit('closeMenu')">
      Tipos de Soluciones
    </NuxtLink>

    <NuxtLink
      to="/nosotros"
      class="menu-link"
      @click="$emit('closeMenu')">
      Categorías
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
  @import "@scss/components/menu";
</style>