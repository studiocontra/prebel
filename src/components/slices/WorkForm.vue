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
                  <input type="text" :placeholder="$t('work form.name.placeholder')">
                </div>
                <div class="form-field">
                  <label
                    class="eyebrow"
                    for="">
                    {{ $t('work form.email.label') }}
                  </label>
                  <input type="text" :placeholder="$t('work form.email.placeholder')">
                </div>
                <div class="form-field">
                  <label
                    class="eyebrow"
                    for="">
                    {{ $t('work form.ubicacion.label') }}
                  </label>
                  <input type="text" :placeholder="$t('work form.ubicacion.placeholder')">
                </div>
                <div class="form-field">
                  <label
                    class="eyebrow"
                    for="">
                    {{ $t('work form.area.label') }}
                  </label>
                  <input type="text" :placeholder="$t('work form.area.placeholder')">
                </div>
                <div class="form-field">
                  <span class="eyebrow">
                    {{ $t('work form.cv.label') }}
                  </span>
                  <label for="">
                    {{ $t('work form.cv.button label') }}
                  </label>
                  <input
                    type="file"
                    accept=".jpg, .jpeg, .png, .pdf, .docx">
                </div>

                <Button theme="dark">
                    {{ $t('work form.submit') }}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  headline1: String,
  headline2: String,
  formEyebrow: String
});
</script>

<style lang="scss" scoped>
  @import "@scss/components/slices/work-form";
</style>