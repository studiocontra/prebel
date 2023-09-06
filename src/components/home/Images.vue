<template>
  <div class="section home__images">
    <div class="container">
      <div class="images">
        <div class="img img--square">
          <picture>
            <source :srcset="`https://picsum.photos/seed/images/500/600`" media="(min-width: 576px)">
            <source :srcset="`https://picsum.photos/seed/images/350/400`" media="(max-width: 576px)">
            <img :src="`https://picsum.photos/seed/images/500/600`" alt="">
          </picture>
        </div>

        <div class="img img--pill">
          <picture>
            <source :srcset="`https://picsum.photos/seed/images2/600/300`" media="(min-width: 768px)">
            <source :srcset="`https://picsum.photos/seed/images2/300/150`" media="(max-width: 768px)">
            <img :src="`https://picsum.photos/seed/images2/600/300`" alt="">
          </picture>
        </div>

        <div class="shape shape--1"></div>

        <div class="shape shape--2"></div>

        <div class="img img--rectangle">
          <picture>
            <source :srcset="`https://picsum.photos/seed/images3/500/250`" media="(min-width: 768px)">
            <source :srcset="`https://picsum.photos/seed/images3/250/125`" media="(max-width: 768px)">
            <img :src="`https://picsum.photos/seed/images3/500/250`" alt="">
          </picture>
        </div>

        <Drop
          class="drop--1"
          width="270px"
          height="270px"
          top="50%"
          left="50%" />

        <Drop
          class="drop--2"
          width="150px"
          height="155px"
          top="75%"
          left="40%" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>


<style lang="scss" scoped>
  @import "@scss/components/home/images";
</style>