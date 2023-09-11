export default defineNuxtConfig({
  app: {
    baseURL: '',
    buildAssetsDir: 'assets',
  },
  // https://github.com/nuxt-themes/alpine
  extends: '@nuxt-themes/alpine',

  modules: [
    // https://github.com/nuxt-modules/plausible
    '@nuxtjs/plausible',
    // https://github.com/nuxt/devtools
    '@nuxt/devtools'
  ],
  css: [
    '@/node_modules/lite-youtube-embed/src/lite-yt-embed.css'
  ],
  plugins: [ {src: '@/plugins/youtube.client.js', ssr: false} ]  
})
