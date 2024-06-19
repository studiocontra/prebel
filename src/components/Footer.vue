<template>
  <div class="wrap-footer">
    <footer>
      <div class="container">
        <div class="footer__content">
          <div class="footer__col footer__text">
            <NuxtLink to="/">
              <div class="footer__logo">
                <img src="/logo-prebel.svg" alt=" Prebel Logo">
              </div>
            </NuxtLink>

            <div class="footer__copy">
              <PrismicRichText
                :field="footerData.footer_description"
                class="text" />
            </div>

            <div class="footer__social">
              <template v-for="(social, id) in footerData.footer_social" :key="id">
                <PrismicLink :field="social.link">
                  <svg
                    v-if="social.icon === 'facebook'"
                    xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z"/></svg>
                  <svg
                    v-else-if="social.icon === 'x'"
                    xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M8 2H1l8.26 11.014L1.45 22H4.1l6.388-7.349L16 22h7l-8.608-11.478L21.8 2h-2.65l-5.986 6.886L8 2Zm9 18L5 4h2l12 16h-2Z"></path></svg>
                  <svg
                    v-else-if="social.icon === 'instagram'"
                    xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"/></svg>
                  <svg
                    v-else-if="social.icon === 'linkedin'"
                    xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"/></svg>
                  <svg
                    v-else-if="social.icon === 'youtube'"
                    xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M23 9.71a8.5 8.5 0 0 0-.91-4.13a2.92 2.92 0 0 0-1.72-1A78.36 78.36 0 0 0 12 4.27a78.45 78.45 0 0 0-8.34.3a2.87 2.87 0 0 0-1.46.74c-.9.83-1 2.25-1.1 3.45a48.29 48.29 0 0 0 0 6.48a9.55 9.55 0 0 0 .3 2a3.14 3.14 0 0 0 .71 1.36a2.86 2.86 0 0 0 1.49.78a45.18 45.18 0 0 0 6.5.33c3.5.05 6.57 0 10.2-.28a2.88 2.88 0 0 0 1.53-.78a2.49 2.49 0 0 0 .61-1a10.58 10.58 0 0 0 .52-3.4c.04-.56.04-3.94.04-4.54M9.74 14.85V8.66l5.92 3.11c-1.66.92-3.85 1.96-5.92 3.08"/></svg>
                  <svg
                    v-else-if="social.icon === 'vimeo'"
                    xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M22 7.42c-.09 1.95-1.45 4.62-4.08 8.02C15.2 19 12.9 20.75 11 20.75c-1.15 0-2.14-1.08-2.95-3.25c-.55-1.96-1.05-3.94-1.61-5.92c-.6-2.16-1.24-3.24-1.94-3.24c-.14 0-.66.32-1.56.95L2 8.07c1-.87 1.96-1.74 2.92-2.61c1.32-1.14 2.31-1.74 2.96-1.8c1.56-.16 2.52.92 2.88 3.2c.39 2.47.66 4 .81 4.6c.43 2.04.93 3.04 1.48 3.04c.42 0 1.05-.64 1.89-1.97q1.26-1.98 1.35-3.03q.18-1.71-1.35-1.71c-.48 0-.97.11-1.48.33c.98-3.23 2.86-4.8 5.63-4.71c2.06.06 3.03 1.4 2.91 4.01"/></svg>
                </PrismicLink>
              </template>
            </div>
          </div>

          <div class="footer__col footer__menu">
            <ul>
              <template v-for="(menuItem, id) in footerData.footer_menu" :key="id">
                <li>
                  <NuxtLink :to="menuItem.link.uid">
                    {{ menuItem.label }}
                  </NuxtLink>
                </li>
              </template>
            </ul>
          </div>

          <div class="footer__col">
            <div class="footer__contact">
              <template v-for="(item, id) in footerData.footer_contact" :key="id">
                <div class="text">
                  <h4 class="text">
                    {{ item.headline }}
                  </h4>

                  <PrismicRichText
                    :field="item.content"
                    class="text text--sm" />
                </div>
              </template>
            </div>
          </div>

          <div class="footer__col">
            <template v-for="(item, id) in footerData.footer_locations" :key="id">
              <div class="footer__address">
                <div class="text">
                  <h4 class="text">
                    {{ item.name }}
                  </h4>

                  <PrismicRichText
                    :field="item.address"
                    class="text text--sm" />
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </footer>

    <div class="footer__copyright">
      <div class="container">
        <div class="line"></div>
        <ul>
          <template v-for="(copyrightItem, id) in footerData.footer_copyright" :key="id">
            <li>
              <NuxtLink :to="copyrightItem.link.uid">
                {{ copyrightItem.label }}
              </NuxtLink>
            </li>
          </template>
        </ul>

        <Lang type="footer" class="footer__locale" />
      </div>
    </div>
  </div>
</template>


<script setup>
const { client } = usePrismic();
const { localeProperties } = useI18n();
const { value: { iso, code } } = localeProperties;

const { data } = await useAsyncData("[footer]", () =>
  client.getSingle("footer", {lang: iso})
);

const footerData = data.value?.data;
</script>

<style lang="scss" scoped>
  @import "@scss/components/footer";
</style>