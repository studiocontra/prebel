<template>
  <div class="services-clients">
    <div class="container">
      <div class="clients__headline">
        <h2 class="eyebrow">
          Nuestras marcas y clientes
        </h2>

        <h3 class="title">
          Nuestros Clientes
        </h3>

        <div class="text">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam corrupti laborum corporis sequi placeat, praesentium vel optio architecto sint alias ipsa culpa voluptates accusantium dolor beatae aliquid tempore iusto repellendus voluptatibus blanditiis necessitatibus neque sit. Placeat minus itaque quia dolores?
          </p>
        </div>
      </div>


      <div class="row justify-center">
        <template v-for="(logo, id) in 12" :key="id">
          <div class="col-6 col-sm-4 col-md-3 col-lg-2 col-xt-1">
            <div class="single-logo">
              <img src="/logo-test.png" alt="Placeholder Image">
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "@scss/components/services/clients";
</style>