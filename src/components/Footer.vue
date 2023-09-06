<template>
  <div class="wrap-footer">
    <PreFooter />

    <Drop
      class="footer__drop-1"
      top="50%"
      left="70%"
      width="300px" />
    <Drop
      class="footer__drop-2"
      top="70%"
      left="50%"
      width="180px" />

    <footer>
      <div class="container">
        <div class="footer__content">
          <div class="footer__logo">
            <img src="logo-prebel.svg" alt=" Prebel Logo">
          </div>

          <div class="footer__copy">
            <div class="text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisi neque, feugiat sit amet dolor id, sagittis aliquam eros. Aenean.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>


<script>
export default {
  name: 'MainFooter'
}
</script>

<style lang="scss" scoped>
  @import "@scss/components/footer";
</style>