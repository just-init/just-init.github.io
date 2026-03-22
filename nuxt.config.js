import colors from 'vuetify/es5/util/colors'

export default {
  server: {
    host: '0', // default: localhost : https://debbie.codes/blog/nuxt-configure-server-to-see-site-on-mobile/
    port: 3001 // default: 3000
  },
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '딸깍공방',
    htmlAttrs: {
      lang: 'ko',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'viewport', content: 'height=device-height, initial-scale=1' },
      { hid: 'description', name: 'description', content: '딸깍 한 번, 일상이 달라지는 순간' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Gowun+Dodum&family=Noto+Sans+KR:wght@400;500;700&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0,0' },
    ],
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
    '@nuxtjs/tailwindcss',
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
          primary: "#1A1A1A",
          accent: "#374151",
          secondary: "#6B7280",
          info: "#1F2937",
          warning: "#D97706",
          error: "#DC2626",
          success: "#059669"
        },
        light: {
          primary: "#1A1A1A",
          accent: "#374151",
          secondary: "#6B7280",
          info: "#1F2937",
          warning: "#D97706",
          error: "#DC2626",
          success: "#059669"
        }
      }
    }
  },

  // Tailwind CSS configuration
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  generate: {
    crawler: false, // link href 에 html 도 파일 찾다가 실패해서 추가
    routes: [
      '/cook-flow',
      '/cook-flow/privacy',
      '/cook-flow/terms',
      '/cook-flow/delete-account',
      '/honey-sleep',
      '/honey-sleep/privacy',
      '/honey-sleep/terms',
      '/honey-sleep/delete-account',
    ]
  }
}
