<template>
  <div :class="{ dark: isDark }">
    <div
      class="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark font-body transition-colors duration-300 min-h-screen flex flex-col paper-texture"
    >
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingLayout',
  data() {
    return {
      isDark: false,
    }
  },
  watch: {
    isDark: {
      immediate: false,
      handler(val) {
        document.body.style.backgroundColor = val ? '#121212' : '#FAF8F5'
        const favicon = document.querySelector('link[rel="icon"]')
        if (favicon) favicon.href = val ? '/brand-icon-dark.png' : '/brand-icon-light.png'
      },
    },
  },
  mounted() {
    const saved = localStorage.getItem('landing-dark-mode')
    if (saved !== null) {
      this.isDark = saved === 'true'
    } else {
      this.isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    document.body.style.backgroundColor = this.isDark ? '#121212' : '#FAF8F5'
    const favicon = document.querySelector('link[rel="icon"]')
    if (favicon) favicon.href = this.isDark ? '/brand-icon-dark.png' : '/brand-icon-light.png'
  },
  beforeDestroy() {
    document.body.style.backgroundColor = ''
  },
  provide() {
    const darkMode = {}
    Object.defineProperty(darkMode, 'value', {
      enumerable: true,
      get: () => this.isDark,
    })
    return {
      darkMode,
      toggleDarkMode: this.toggleDarkMode,
    }
  },
  methods: {
    toggleDarkMode() {
      this.isDark = !this.isDark
      localStorage.setItem('landing-dark-mode', String(this.isDark))
    },
  },
}
</script>
