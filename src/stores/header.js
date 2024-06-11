export const useHeaderStore = defineStore('header', () => {
  const theme = ref('white')

  function setTheme(value) {
    theme.value = value;
  }

  return { theme, setTheme }
})