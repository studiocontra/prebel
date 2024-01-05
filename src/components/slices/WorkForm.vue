<template>
  <div class="section work-form">
    <div class="work-form__headline">
      <div class="container">
        <div class="row justify-center">
          <div class="col-lg-10 col-xx-8">
            <h2
              v-if="headline1"
              class="title">
              {{ headline1 }}
            </h2>
            <h2
              v-if="headline2"
              class="title">
              {{ headline2 }}
            </h2>
          </div>
        </div>
      </div>
    </div>


    <div class="work-form__form">
      <div class="container">
        <div class="row justify-center">
          <div class="col-sm-11 col-lg-8 col-xx-6">
            <h3
              v-if="formEyebrow"
              class="eyebrow">
              {{ formEyebrow }}
            </h3>

            <div class="wrap-form">
              <form action="">
                <div class="form-field">
                  <label
                    class="eyebrow"
                    for="">
                    {{ $t('work form.name.label') }}
                  </label>

                  <input
                    class="form-input"
                    type="text"
                    :placeholder="$t('work form.name.placeholder')"
                    v-model="state.name">
                </div>

                <div class="form-field">
                  <label
                    class="eyebrow"
                    for="">
                    {{ $t('work form.email.label') }}
                  </label>

                  <input
                    class="form-input"
                    type="email"
                    :placeholder="$t('work form.email.placeholder')"
                    v-model="state.email">
                </div>

                <div class="form-field">
                  <label
                    class="eyebrow"
                    for="">
                    {{ $t('work form.ubicacion.label') }}
                  </label>

                  <div class="warp-select">
                    <select
                      class="form-input"
                      v-model="state.location">
                      <option value="" selected disabled>
                        {{ $t('work form.ubicacion.placeholder') }}
                      </option>
                      <option value="1">
                        1
                      </option>
                    </select>
                  </div>
                </div>

                <div class="form-field">
                  <label
                    class="eyebrow"
                    for="">
                    {{ $t('work form.area.label') }}
                  </label>

                  <div class="wrap-select">
                    <select
                      class="form-input"
                      v-model="state.area">
                      <option value="" selected disabled>
                        {{ $t('work form.area.placeholder') }}
                      </option>
                      <option value="1">
                        1
                      </option>
                    </select>
                  </div>
                </div>

                <div class="form-field">
                  <label class="eyebrow">
                    {{ $t('work form.cv.label') }}
                  </label>

                  <div class="wrap-upload">
                    <input
                      type="file"
                      accept=".jpg, .jpeg, .png, .pdf, .docx">
                  </div>
                </div>

                <input type="hidden" name="page" :value="page">

                <button type="submit" class="submit">
                  <span>
                    {{ $t('work form.submit') }}

                    <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.7496 5.25455L12.9417 5.25455L12.1063 4.40414L8.54706 0.781163C8.50822 0.741625 8.50821 0.678258 8.54704 0.638706C8.58688 0.598117 8.65228 0.598116 8.69213 0.638706L13.2348 5.2661C13.2781 5.31506 13.2777 5.38843 13.2356 5.43643L8.69334 10.0634C8.65347 10.104 8.58803 10.104 8.54816 10.0634L8.19136 10.4137L8.54816 10.0634C8.50931 10.0238 8.50932 9.96043 8.54817 9.92086L12.1058 6.29793L12.9408 5.4476L11.749 5.4476L0.596627 5.4476C0.543317 5.4476 0.500098 5.40439 0.500098 5.35107C0.500098 5.29776 0.543316 5.25454 0.596626 5.25454L11.7496 5.25455Z" />
                    </svg>
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

const props = defineProps({
  headline1: String,
  headline2: String,
  formEyebrow: String,
  page: String
});

// Form validations
const state = reactive({
  name: '',
  email: '',
  location: '',
  area: ''
});

const rules = {
  name: { required },
  email: { required, email },
  location: { required },
  area: { required }
};

const v$ = useVuelidate(rules, state);

</script>

<style lang="scss" scoped>
  @import "@scss/components/slices/work-form";
</style>