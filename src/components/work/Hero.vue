<template>
  <div class="hero hero--work">
    <Drop
      maxW="300px"
      :parallax="-12" />
    <div class="container">
      <div class="row align-center">
        <div class="col-lg-6">
          <h1>
            <div class="title">
              <p>
                En Prebel, estamos en busca de <strong>talento apasionado</strong> que comparta nuestra visión de crear productos cosméticos excepcionales que realcen la belleza y el bienestar.
              </p>
            </div>
          </h1>
        </div>
        <div class="col-lg-6">
          <div class="hero__image">
            <picture>
              <source :srcset="`https://picsum.photos/seed/sero-services/500/320`" media="(min-width: 768px)">
              <img :src="`https://picsum.photos/seed/sero-services/300/190`" alt="">
            </picture>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "@scss/components/hero";
  @import "@scss/components/work/hero";
</style>