export const useHeaderStore = defineStore('header', () => {
  const theme = ref('dark')

  function setTheme(value) {
    theme.value = value;
  }

  return { theme, setTheme }
})