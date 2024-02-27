// https://nuxt.com/docs/api/configuration/nuxt-config

import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "~/assets/scss/style.scss"
  ],
  build: {
    transpile: ['vuetify'],
  },
  sourcemap: {
    server: false,
    client: false
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  modules: [
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) =>
        // @ts-ignore
        config.plugins.push(
          vuetify({ autoImport: true })
        )
      )
    }
  ],
  app : {
    head : {
      link : [
        {
          href : "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css",
          rel: 'stylesheet',
          type : 'text/css',
          crossorigin : "anonymous"
        },
      ]
    }
  }
})
