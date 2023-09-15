<template>
  <div class="hero hero--services">
    <Drop
      maxW="170px"
      :parallax="-12" />
    <div class="container">
      <div class="row align-center">
        <div class="col-lg-6">
          <h1>
            <div class="title">
              <p>
                Nuestro laboratorio cosmético se dedica a la <strong>investigación y desarrollo</strong> de productos innovadores que realzan la belleza natural
              </p>
            </div>
          </h1>
        </div>
        <div class="col-lg-6">
          <div class="hero__image">
            <picture>
              <source :srcset="`https://picsum.photos/seed/hero-single-services/720/450`" media="(min-width: 992px)">
              <source :srcset="`https://picsum.photos/seed/hero-single-services/850/630`" media="(min-width: 768px)">
              <source :srcset="`https://picsum.photos/seed/hero-single-services/450/330`" media="(min-width: 450px)">
              <img :src="`https://picsum.photos/seed/hero-single-services/350/200`" alt="">
            </picture>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "@scss/components/hero";
  @import "@scss/components/single-services/hero";
</style>