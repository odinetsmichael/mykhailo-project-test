export default defineNuxtConfig({
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    '@/assets/scss/base.scss',
    '@/assets/scss/media.scss',
  ],
  modules: ['@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      Roboto: [300, 400, 500, 700], // веса на выбор
    },
    display: 'swap',
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/assets/scss/variables.scss" as *;
            @use "@/assets/scss/mixins.scss" as *;
          `,
        },
      },
    },
  },
})
