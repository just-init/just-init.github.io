<template>
  <footer
    class="w-full bg-background-light dark:bg-background-dark pt-24 pb-12 px-6 md:px-12 mt-auto border-t border-black/[0.03] dark:border-white/[0.03]"
  >
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
      <div>
        <div class="flex items-center gap-2 mb-4">
          <span class="font-display font-bold text-lg">딸깍공방</span>
        </div>
        <p class="text-sm opacity-60 leading-relaxed dark:text-muted-dark">
          마음을 담아 앱을 빚습니다.<br />
          대표: 최정심<br />
          사업자등록번호: 524-44-01023
        </p>
      </div>

      <div>
        <h4 class="font-bold mb-4 text-sm uppercase tracking-wider opacity-50 dark:text-muted-dark">SITEMAP</h4>
        <ul class="space-y-2 text-sm opacity-70">
          <li><nuxt-link class="hover:text-primary transition-colors dark:text-muted-dark" to="/">홈</nuxt-link></li>
          <li><a class="hover:text-primary transition-colors dark:text-muted-dark" href="#apps">앱 목록</a></li>
          <li><a class="hover:text-primary transition-colors dark:text-muted-dark" href="#philosophy">공방 소개</a></li>
        </ul>
      </div>

      <div>
        <h4 class="font-bold mb-4 text-sm uppercase tracking-wider opacity-50 dark:text-muted-dark">LEGAL</h4>
        <ul class="space-y-2 text-sm opacity-70">
          <li>
            <nuxt-link class="hover:text-primary transition-colors dark:text-muted-dark" to="/privacy"
              >개인정보처리방침</nuxt-link
            >
          </li>
          <li>
            <nuxt-link class="hover:text-primary transition-colors dark:text-muted-dark" to="/terms"
              >이용약관</nuxt-link
            >
          </li>
        </ul>
      </div>

      <div>
        <h4 class="font-bold mb-4 text-sm uppercase tracking-wider opacity-50 dark:text-muted-dark">CONTACT</h4>
        <ul class="space-y-2 text-sm opacity-70">
          <li class="dark:text-muted-dark">justinit.service@gmail.com</li>
          <li class="dark:text-muted-dark">010 6822 9802</li>
        </ul>
      </div>
    </div>

    <div
      class="max-w-7xl mx-auto pt-8 border-t border-text-light/10 dark:border-text-dark/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs opacity-50 gap-4"
    >
      <p class="dark:text-muted-dark">&copy; 2024 Just Init. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'LandingFooter',
}
</script>
