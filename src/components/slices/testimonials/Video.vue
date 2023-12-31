<template>
  <div class="testimonials testimonials--video">
    <div class="container">
      <h2 v-if="eyebrow" class="eyebrow">
        {{ eyebrow }}
      </h2>
      <h3 class="title">
        {{ headline }}
      </h3>

      <div
        v-if="items"
        class="row space">
        <template v-for="(item, id) in items" :key="id">
          <div class="col-sm-6 col-lg-4 col-xx-3">
            <div class="card">
              <div
                class="card__image"
                :class="item.video_link && 'backdrop'"
                @click="item.video_link && openModal(id)">
                <prismic-image :field="item.preview" />

                <div
                  v-if="item.video_link"
                  class="card__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path  d="M234.49 111.07L90.41 22.94A20 20 0 0 0 60 39.87v176.26a20 20 0 0 0 30.41 16.93l144.08-88.13a19.82 19.82 0 0 0 0-33.86ZM84 208.85V47.15L216.16 128Z"/></svg>
                </div>
              </div>

              <div class="card__content">
                <h3 class="text">
                  {{ item.name }}
                </h3>

                <span class="text">
                  {{ item.title }}
                </span>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>

  <template v-for="(item, id) in items" :key="id">
    <Modal
      v-if="item.video_link"
      :id="`modal-video-${id}`"
      :class="{'active': activeModal === id}"
      @close-modal="closeModal()">
      <div class="wrap-video">
        <iframe
          :data-src="`https://www.youtube.com/embed/${getVideoId(item.video_link)}?autoplay=1`"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          frameborder="0"></iframe>
      </div>
    </Modal>
  </template>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  eyebrow: String,
  headline: String,
  items: [Array, Boolean],
});

const activeModal = ref(null);

function openModal(id) {
  activeModal.value = id;

  setTimeout(() => {
    const activeFrame = document.querySelector('.modal.active iframe');
    console.log(activeFrame);

    activeFrame.src = activeFrame.dataset['src'];
  }, 100);
}

function closeModal() {
  const activeFrame = document.querySelector('.modal.active iframe');

  activeFrame.src = '';

  activeModal.value = null;
}

function getVideoId(url) {
  if(!url) return;

  if(url.includes('vimeo')) {
    return vimeoId(url)
  }
  if(url.includes('youtu')) {
    return youtubeId(url);
  }
}

function youtubeId(url) {
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  return (match && match[7].length == 11) ? match[7] : false;
}

function vimeoId(url) {
  var regExp = /^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/;
  var match = url.match(regExp);

  return (match) ? match[5] : false;
}
</script>

<style lang="scss" scoped>
  @import "@scss/components/slices/testimonials/video";
</style>