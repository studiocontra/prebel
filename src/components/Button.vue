<template>
  <div class="btn" :class="`btn--${theme}`">
    <span>
      <slot></slot>

      <template v-if="arrow">
        <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.7496 5.25455L12.9417 5.25455L12.1063 4.40414L8.54706 0.781163C8.50822 0.741625 8.50821 0.678258 8.54704 0.638706C8.58688 0.598117 8.65228 0.598116 8.69213 0.638706L13.2348 5.2661C13.2781 5.31506 13.2777 5.38843 13.2356 5.43643L8.69334 10.0634C8.65347 10.104 8.58803 10.104 8.54816 10.0634L8.19136 10.4137L8.54816 10.0634C8.50931 10.0238 8.50932 9.96043 8.54817 9.92086L12.1058 6.29793L12.9408 5.4476L11.749 5.4476L0.596627 5.4476C0.543317 5.4476 0.500098 5.40439 0.500098 5.35107C0.500098 5.29776 0.543316 5.25454 0.596626 5.25454L11.7496 5.25455Z" />
        </svg>
      </template>
    </span>
  </div>
</template>

<script>
export default {
  name: 'MainButton',
  props: {
    theme: {
      type: String,
      default: 'default'
    },
    arrow: {
      type: Boolean,
      default: true,
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@scss/components/button";
</style>
