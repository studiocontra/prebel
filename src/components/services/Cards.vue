<template>
  <div class="services-cards">
    <div class="container">
      <h2 class="eyebrow">
        Servicios
      </h2>

      <div class="row">
        <div class="col-sm-6 col-lg-4 col-xx-3">
          <div class="card">
            <div class="card__image">
              <img :src="`https://picsum.photos/seed/card/380/250`" alt="Placeholder Image">
            </div>

            <div class="card__content">
              <h3 class="title">
                Investigación y desarrollo
              </h3>

              <Button>
                Conoce más
              </Button>
            </div>
          </div>
        </div>

        <div class="col-sm-6 col-lg-4 col-xx-3">
          <div class="card">
            <div class="card__image">
              <img :src="`https://picsum.photos/seed/card2/380/250`" alt="Placeholder Image">
            </div>

            <div class="card__content">
              <h3 class="title">
                Revenue Management
              </h3>

              <Button>
                Conoce más
              </Button>
            </div>
          </div>
        </div>

        <div class="col-sm-6 col-lg-4 col-xx-3">
          <div class="card">
            <div class="card__image">
              <img :src="`https://picsum.photos/seed/card3/380/250`" alt="Placeholder Image">
            </div>

            <div class="card__content">
              <h3 class="title">
                Distribución Canal
              </h3>

              <Button>
                Conoce más
              </Button>
            </div>
          </div>
        </div>

        <div class="col-sm-6 col-lg-4 col-xx-3">
          <div class="card">
            <div class="card__image">
              <img :src="`https://picsum.photos/seed/card4/380/250`" alt="Placeholder Image">
            </div>

            <div class="card__content">
              <h3 class="title">
                Diseño
              </h3>

              <Button>
                Conoce más
              </Button>
            </div>
          </div>
        </div>

        <div class="col-sm-6 col-lg-4 col-xx-3">
          <div class="card">
            <div class="card__image">
              <img :src="`https://picsum.photos/seed/card5/380/250`" alt="Placeholder Image">
            </div>

            <div class="card__content">
              <h3 class="title">
                Compra
              </h3>

              <Button>
                Conoce más
              </Button>
            </div>
          </div>
        </div>

        <div class="col-sm-6 col-lg-4 col-xx-3">
          <div class="card">
            <div class="card__image">
              <img :src="`https://picsum.photos/seed/card6/380/250`" alt="Placeholder Image">
            </div>

            <div class="card__content">
              <h3 class="title">
                Producción
              </h3>

              <Button>
                Conoce más
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "@scss/components/services/cards";
</style>