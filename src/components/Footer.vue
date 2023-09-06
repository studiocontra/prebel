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
            <img src="/logo-prebel.svg" alt=" Prebel Logo">
          </div>

          <div class="footer__copy">
            <div class="text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisi neque, feugiat sit amet dolor id, sagittis aliquam eros. Aenean.
              </p>
            </div>
          </div>

          <div class="footer__address">
            <div class="text">
              <p>
                +57 604 36 56 000
                servicio.cliente@prebel.com.co
                Calle 10 N° 58-59, Medellín, Colombia
              </p>
            </div>
          </div>

          <div class="footer__menu">
            <ul>
              <li>
                <a href="#">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#">
                  Sostenibilidad
                </a>
              </li>
              <li>
                <a href="#">
                  Trabaja con nosotros
                </a>
              </li>
              <li>
                <a href="#">
                  Pagos
                </a>
              </li>
              <li>
                <a href="#">
                  Términos y condiciones
                </a>
              </li>
            </ul>
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