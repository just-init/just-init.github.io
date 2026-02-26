<template>
  <nav
    class="w-full py-5 px-6 md:px-12 flex justify-between items-center sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-text-light/5 dark:border-text-dark/5"
  >
    <nuxt-link to="/" class="flex items-center gap-3">
      <img v-if="!darkMode.value" alt="딸깍공방" class="w-9 h-9 object-contain rounded-lg" src="/brand-icon-light.png" />
      <img v-else alt="딸깍공방" class="w-9 h-9 object-contain rounded-lg" src="/brand-icon-dark.png" />
      <span class="font-display font-bold text-lg tracking-tighter">딸깍공방</span>
    </nuxt-link>

    <div class="hidden md:flex items-center gap-8 font-medium text-sm">
      <a class="hover:text-primary transition-colors" href="#apps">앱 목록</a>
      <a class="hover:text-primary transition-colors" href="#philosophy">소개</a>
      <button
        class="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
        @click="toggleDarkMode"
      >
        <span v-if="!darkMode.value" class="material-symbols-rounded">dark_mode</span>
        <span v-else class="material-symbols-rounded">light_mode</span>
      </button>
    </div>

    <div class="md:hidden flex items-center gap-2">
      <button
        class="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
        @click="toggleDarkMode"
      >
        <span v-if="!darkMode.value" class="material-symbols-rounded">dark_mode</span>
        <span v-else class="material-symbols-rounded">light_mode</span>
      </button>
      <button class="p-2" @click="mobileOpen = !mobileOpen">
        <span class="material-symbols-rounded">menu</span>
      </button>
    </div>

    <!-- Mobile menu -->
    <div
      v-if="mobileOpen"
      class="absolute top-full left-0 w-full bg-background-light dark:bg-background-dark border-b border-text-light/10 dark:border-text-dark/10 md:hidden flex flex-col items-center gap-4 py-6 font-medium text-sm"
    >
      <a class="hover:text-primary transition-colors" href="#apps" @click="mobileOpen = false">앱 목록</a>
      <a class="hover:text-primary transition-colors" href="#philosophy" @click="mobileOpen = false">소개</a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'LandingNav',
  inject: ['darkMode', 'toggleDarkMode'],
  data() {
    return { mobileOpen: false }
  },
}
</script>
