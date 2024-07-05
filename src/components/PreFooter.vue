<template>
  <div class="wrap-pre-footer">
    <picture>
      <source srcset="/pre-footer.png" media="(min-width: 1200px)">
      <source srcset="/pre-footer-md.png" media="(min-width: 600px)">
      <img src="/pre-footer-sm.png" alt="Placeholder Image">
    </picture>

    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="pre-footer__content">
            <h3 class="title title--lg">
              {{ formData.headline }}
            </h3>

            <div class="text">
              <p>
                {{ formData.description }}
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="wrap-form">
            <form action="" @submit="submitForm">
              <div class="form-field">
                <label
                  class="eyebrow"
                  for="">
                  {{ formData.inputs[0].name }}
                </label>

                <input
                  class="form-input"
                  type="text"
                  :placeholder="formData.inputs[0].name"
                  v-model="state.name">

                  <span class="error" v-if="showError('name')">
                    {{ $t('footer form.name.error') }}
                  </span>
              </div>

              <div class="form-field">
                <label
                  class="eyebrow"
                  for="">
                  {{ formData.inputs[0].mail }}
                </label>

                <input
                  class="form-input"
                  type="email"
                  :placeholder="formData.inputs[0].mail"
                  v-model="state.email">

                <span class="error" v-if="showError('email')">
                  <template v-if="v$.email.$errors[0].$validator == 'required'">
                    {{ $t('footer form.email.error') }}
                  </template>
                  <template v-if="v$.email.$errors[0].$validator == 'email'">
                    {{ $t('footer form.email.error-email') }}
                  </template>
                </span>
              </div>

              <div class="form-field">
                <label
                  class="eyebrow"
                  for="">
                  {{ formData.inputs[0].phone }}
                </label>

                <input
                  class="form-input"
                  type="number"
                  :placeholder="formData.inputs[0].phone"
                  v-model="state.phone">

                <span class="error" v-if="showError('phone')">
                  {{ $t('footer form.phone.error') }}
                </span>
              </div>

              <div class="form-field">
                <label
                  class="eyebrow"
                  for="">
                  {{ formData.inputs[0].occupation }}
                </label>

                <input
                  class="form-input"
                  type="text"
                  :placeholder="formData.inputs[0].occupation"
                  v-model="state.occupation">

                <span class="error" v-if="showError('occupation')">
                </span>
              </div>

              <div class="form-field">
                <label
                  class="eyebrow"
                  for="">
                  {{ formData.inputs[0].attach_file }}
                </label>

                <input
                  class="form-input"
                  type="file"
                  :placeholder="formData.inputs[0].attach_file"
                  v-on="state.attach_file">

                <span class="error" v-if="showError('attach_file')">
                </span>
              </div>

              <button type="submit" class="submit">
                <span>
                  {{ $t('footer form.submit') }}

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
</template>


<script setup>
import { reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

const { client } = usePrismic();
const { localeProperties } = useI18n();
const { value: { iso, code } } = localeProperties;

const { data } = await useAsyncData("[form]", () =>
  client.getSingle("form", { lang: iso })
);

const formData = data.value.data

// Form validations
const state = reactive({
  name: '',
  email: '',
  phone: '',
  occupation: '',
  attach_file: [],
});

const rules = {
  name: { required },
  email: { required, email },
  phone: { required },
  occupation: { required },
  attach_file: { required }
};

const v$ = useVuelidate(rules, state, { $autoDirty: true });

async function submitForm(e) {
  e.preventDefault();
  const isFormCorrect = await v$.value.$validate();
  // you can show some extra alert to the user or just leave the each field to show it's `$errors`.
  if (!isFormCorrect) return
  // actually submit form
}

function showError(name) {
  return v$.value[name].$errors.length > 0;
};

</script>

<style lang="scss" scoped>
  @import "@scss/components/pre-footer";
</style>