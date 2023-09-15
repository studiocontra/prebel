<template>
  <header>
    <div class="container">
      <NuxtLink to="/">
        <div class="header__logo">
          <img src="/logo-prebel.svg" alt="Prebel Logo">
          <img src="/logo-prebel-mobile.svg" class="logo-mobile" alt="Prebel Logo">
        </div>
      </NuxtLink>

      <div class="header__cta">
        <Button :arrow="false" theme="clear">
          Contacto
        </Button>
      </div>

      <div class="header__hamburger">
        <div class="hamburger">
          <div class="hamburger__inner"></div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MainHeader'
}
</script>

<style lang="scss" scoped>
  @import "@scss/components/header";
</style>