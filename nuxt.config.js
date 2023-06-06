import colors from 'vuetify/es5/util/colors'

export default {
  server: {
    port: 3001 // default: 3000
  },
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Just Init',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '저희는 당신의 삶을 좀 더 즐겁고 윤택해지길 바랍니다.' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/scss/style.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],
  
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: "#316ce8",
          accent: "#607df9",
          secondary: "#a73aeb",
          info: "#0164d3",
          warning: "#fec500",
          error: "#ff4d7e",
          success: "#2cdd9b"
        },
        light: {
          primary: "#316ce8",
          accent: "#607df9",
          secondary: "#a73aeb",
          info: "#0164d3",
          warning: "#fec500",
          error: "#ff4d7e",
          success: "#2cdd9b"
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  generate: {
    crawler: false // link href 에 html 도 파일 찾다가 실패해서 추가
  }
}
