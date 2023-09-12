<template>
  <div class="wrap-pre-footer">
    <picture>
      <source srcset="/pre-footer.png" media="(min-width: 1200px)">
      <source srcset="/pre-footer-md.png" media="(min-width: 600px)">
      <img src="/pre-footer-sm.png" alt="Placeholder Image">
    </picture>

    <div class="container">
      <div class="pre-footer__content">
        <h3 class="title title--lg">
          Trabaja con nosotros
        </h3>

        <div class="text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisi neque, feugiat sit amet dolor id, sagittis aliquam eros. Aenean.
          </p>
        </div>

        <Button theme="light">
          Conoce más
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  @import "@scss/components/pre-footer";
</style>