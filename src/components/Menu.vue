<template>
  <div class="wrap-main-menu">
    <div class="container">
      <div class="menu__box">
        <div class="container">
          <div class="main-menu">
            <NuxtLink
              to="/"
              class="title menu-link"
              @click="$emit('closeMenu')">
              Home
            </NuxtLink>

            <NuxtLink
              to="/servicios"
              class="title menu-link"
              @click="$emit('closeMenu')">
              Servicios
            </NuxtLink>

            <NuxtLink
              to="/sostenibilidad"
              class="title menu-link"
              @click="$emit('closeMenu')">
              Sostenibilidad
            </NuxtLink>

            <NuxtLink
              to="/nosotros"
              class="title menu-link"
              @click="$emit('closeMenu')">
              Nosotros
            </NuxtLink>

            <NuxtLink
              to="/trabaja-con-nosotros"
              class="title menu-link"
              @click="$emit('closeMenu')">
              Trabaja con Nosotros
            </NuxtLink>
          </div>

          <div class="legal-menu">
            <a
              href=""
              class="menu-link"
              @click="$emit('closeMenu')">
              Pagos
            </a>

            <NuxtLink
              to="/linea-etica"
              class="menu-link"
              @click="$emit('closeMenu')">
              Línea ética
            </NuxtLink>

            <NuxtLink
              to="/"
              class="menu-link"
              @click="$emit('closeMenu')">
              Términos y Condiciones
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "@scss/components/menu";
</style>