<template>
  <div class="wrap-footer">
    <PreFooter />

    <Drop
      class="footer__drop-1"
      maxW="300px"
      :parallax="-7" />
    <Drop
      class="footer__drop-2"
      maxW="180px"
      :parallax="2" />

    <footer>
      <div class="container">
        <div class="footer__content">
          <NuxtLink to="/">
            <div class="footer__logo">
              <img src="/logo-prebel.svg" alt=" Prebel Logo">
            </div>
          </NuxtLink>

          <div class="footer__copy">
            <div class="text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisi neque, feugiat sit amet dolor id, sagittis aliquam eros. Aenean.
              </p>
            </div>
          </div>

          <div class="footer__social">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z"/></svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"/></svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M8 2H1l8.26 11.014L1.45 22H4.1l6.388-7.349L16 22h7l-8.608-11.478L21.8 2h-2.65l-5.986 6.886L8 2Zm9 18L5 4h2l12 16h-2Z"></path></svg>
          </div>

          <div class="footer__address">
            <div class="text">
              <p>
                +57 604 365 60 00
                <br />
                servicio.cliente@prebel.com.co
                <br />
                Calle 10 N° 58-59, Medellín, Colombia
              </p>
            </div>
          </div>

          <div class="footer__menu">
            <ul>
              <li>
                <NuxtLink to="/servicios">
                  Servicios
                </NuxtLink>
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

          <Lang class="footer__locale" />
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