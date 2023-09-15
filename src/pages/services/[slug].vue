<template>
  <main class="single-services">
    <SingleServicesHero />
    <HomeNews :slides="1" />
    <SingleServicesTextImages />
    <ServicesClients />
  </main>
</template>

<style lang="scss" scoped>
  @import "@scss/pages/single-services";
</style>