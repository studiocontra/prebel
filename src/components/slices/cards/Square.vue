<template>
  <div class="section work-cards" :id="dataId">
    <div class="container">
      <h2 v-if="headline" class="eyebrow">
        {{ headline }}
      </h2>

      <div v-if="cards" class="row">
        <template v-for="(item, id) in cards" :key="id">
          <div class="col-md-6">
            <div class="card card--rounded">
              <h3 class="title title--sm">
                {{ item.headline }}
              </h3>
                <picture class="card__picture">
                  <prismic-image :field="item.image" />
                </picture>
              <p>{{ item.description }}</p>
              <button class="btn btn--gray" @click="filterJobs(item.categoria)">
                {{ item.button_label }}
              </button>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>

  <div class="modal" :data-show="isShowModal">
    <div class="modal-content">
      <button @click="closeModal" class="modal-close">
        <span class="close">&times;</span>
      </button>
      <table v-if="filteredJobs.length !== 0">
        <tr>
          <th>Categoria</th>
          <th>Cargo</th>
          <th>Descripcion</th>
        </tr>

        <tr v-for="(item, id, index) in filteredJobs" :key="id">
          <td>{{ item.categoria }}</td>
          <td>{{ item.cargo }}</td>
          <td>{{ item.description }}</td>
        </tr>
      </table>
      <div v-else>
        <p>{{ textNotFoundJobs }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  dataId: {
    type: String,
    default: ''
  },
  jobs: [Array, Boolean],
  headline: String,
  cards: [Array, Boolean],
  textNotFoundJobs: String
});

const jobs = ref(props.jobs)
const filteredJobs = ref([])
const isShowModal = ref(false)

function filterJobs(categoria) {
  filteredJobs.value = jobs.value.filter(item => item.categoria === categoria)
  isShowModal.value = true
}

function closeModal() {
  isShowModal.value = false
}

</script>

<style lang="scss" scoped>
@import "@scss/components/slices/cards/square";
@import "@scss/components/button.scss";
</style>