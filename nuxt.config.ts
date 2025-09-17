export default defineNuxtConfig({
  css: ['bootstrap/dist/css/bootstrap.min.css', '@/assets/scss/base.scss','@/assets/scss/media.scss'],
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
