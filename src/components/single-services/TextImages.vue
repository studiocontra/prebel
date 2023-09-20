<template>
  <div class="section text-images">
    <Drop
      maxW="290px"
      :parallax="5" />

    <div class="container">
      <div class="row align-center justify-between">
        <div class="col-md-7 col-lg-5">
          <div class="content">
            <span class="eyebrow">
              Noticias y updates
            </span>

            <h2 class="title">
              Prebel en la Feria de Cosmeticos
            </h2>

            <div class="text">
              <p>
                Durante la feria, PREBEL exhibió su amplia gama de productos cosméticos innovadores y de alta calidad, captando la atención de profesionales de la industria y visitantes por igual. El stand de la empresa presentó formulaciones vanguardistas, diseños atractivos de envases y una exhibición de sus últimos lanzamientos.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-5 col-lg-6">
          <div class="images">
            <div class="img img--1">
              <picture>
                <source :srcset="`https://picsum.photos/seed/services-imgtext/320/480`" media="(min-width: 576px)">
                <img :src="`https://picsum.photos/seed/services-imgtext/150/230`" alt="">
              </picture>
            </div>
            <div class="img img--2">
              <picture>
                <source :srcset="`https://picsum.photos/seed/services-imgtext2-/250/250`" media="(min-width: 768px)">
                <img :src="`https://picsum.photos/seed/services-imgtext2-/150/150`" alt="">
              </picture>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "@scss/components/single-services/text-images";
</style>