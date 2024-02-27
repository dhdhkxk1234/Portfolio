import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import { mdiArrowDownThick } from '@mdi/js'


const myCustomLightTheme = {
  dark : false,
  colors : {
    primary: "#316ce8",
    accent: "#607df9",
    secondary: "#a73aeb",
    info: "#0164d3",
    warning: "#fec500",
    error: "#ff4d7e",
    success: "#2cdd9b"
  }
}
import YouTube from 'vue3-youtube'

export default defineNuxtPlugin((_nuxtApp) => {
  const vuetify = createVuetify({
    icons: {
      defaultSet: 'mdi', // This is already the default value - only for display purposes,
      aliases : {
        ...aliases,
        adthick : mdiArrowDownThick
      },
      sets: {
        mdi
      }
    },
    display: {
      mobileBreakpoint: 'sm',
    },
    theme: {
      defaultTheme: 'myCustomLightTheme',
      themes: {
        myCustomLightTheme
      }
    }
  });


  _nuxtApp.vueApp.component('you-tube', YouTube);
  _nuxtApp.vueApp.use(vuetify)
})