<template>
  <section id="apps" class="w-full px-6 md:px-12 py-20 max-w-7xl mx-auto">
    <div class="flex items-end justify-between mb-12">
      <div>
        <h2 class="font-display text-4xl font-bold mb-2 tracking-tight text-text-light dark:text-text-dark">만든 앱들</h2>
        <p class="opacity-70 dark:text-muted-dark">정성을 담아 빚어낸 어플리케이션</p>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <a
        v-for="app in apps"
        :key="app.name"
        :href="app.link"
        class="rounded-2xl p-10 shadow-premium dark:shadow-premium-dark border border-black/[0.04] dark:border-border-dark hover:-translate-y-1 transition-all duration-500 group cursor-pointer hover:shadow-2xl no-underline"
        :class="isDark ? 'text-white' : 'text-text-light'"
        :style="{ background: isDark ? app.cardBgDark : app.cardBgLight }"
      >
        <img
          :src="app.icon"
          :alt="app.name"
          class="w-16 h-16 rounded-2xl mb-8 object-cover shadow-md ring-1 ring-black/[0.06]"
        />
        <h3
          class="font-display text-2xl tracking-tight font-bold mb-3 transition-colors"
        >
          {{ app.name }}
        </h3>
        <p class="text-base mb-8 leading-relaxed line-clamp-2 opacity-60 dark:opacity-80">
          {{ app.desc }}
        </p>
        <div class="flex gap-2">
          <span class="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider" :class="app.tagClass">
            {{ app.tag }}
          </span>
          <span
            class="px-3 py-1 rounded-full text-xs font-bold opacity-60 dark:opacity-80 uppercase tracking-wider"
            :class="isDark ? 'bg-white/10' : 'bg-text-light/5'"
          >
            {{ app.platform }}
          </span>
        </div>
      </a>

      <!-- Next project placeholder -->
      <div
        class="bg-surface-light dark:bg-surface-dark rounded-2xl p-10 shadow-premium dark:shadow-premium-dark border border-black/[0.04] dark:border-border-dark hover:-translate-y-1 transition-all duration-500 group cursor-pointer hover:shadow-2xl"
      >
        <div
          class="w-14 h-14 rounded-full bg-white dark:bg-white/5 shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
        >
          <span class="material-symbols-rounded text-primary">add</span>
        </div>
        <h3 class="font-display text-2xl tracking-tight font-bold mb-2 opacity-60 dark:text-text-dark">다음 프로젝트</h3>
        <p class="text-sm opacity-40 leading-relaxed dark:text-muted-dark">
          새로운 아이디어를<br />빚는 중입니다...
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LandingApps',
  inject: ['darkMode'],
  computed: {
    isDark() {
      return this.darkMode.value
    },
  },
  data() {
    return {
      apps: [
        {
          name: '내가만든트레이너',
          icon: '/app-icons/smart-workout-counter.png',
          desc: '나만의 운동 루틴을 만들고, 스마트하게 카운트하세요. AI가 함께하는 홈트레이닝 파트너.',
          tag: '건강',
          tagClass: 'bg-green-500/10 text-green-600 dark:text-green-400',
          platform: 'Android · iOS',
          link: '/smart-workout-counter',
          cardBgLight: 'linear-gradient(135deg, #f0ecf5 0%, #e8e0f0 100%)',
          cardBgDark: 'linear-gradient(135deg, #352e42 0%, #2d2838 100%)',
        },
        {
          name: 'JUST CLOCK',
          icon: '/app-icons/just-clock.png',
          desc: '심플하고 아름다운 시계. 당신의 데스크를 감성적으로 채워줄 미니멀 클락.',
          tag: '유틸리티',
          tagClass: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
          platform: 'Android · iOS',
          link: '/just-clock',
          cardBgLight: 'linear-gradient(135deg, #eeeafc 0%, #e4eeff 100%)',
          cardBgDark: 'linear-gradient(135deg, #2c2842 0%, #28304a 100%)',
        },
        {
          name: '바른생활',
          icon: '/app-icons/good-job.png',
          desc: '매일의 작은 습관이 큰 변화를 만듭니다. 바른 생활 습관을 기록하고 성장하세요.',
          tag: '생산성',
          tagClass: 'bg-purple-500/10 text-purple-600 dark:text-purple-400',
          platform: 'Android · iOS',
          link: '/good-job',
          cardBgLight: 'linear-gradient(135deg, #f5efe8 0%, #efe7de 100%)',
          cardBgDark: 'linear-gradient(135deg, #38302a 0%, #322c28 100%)',
        },
        {
          name: '결혼하는 마음',
          icon: '/app-icons/marriage-mind.png',
          desc: '결혼 준비의 모든 순간을 함께합니다. 따뜻한 마음으로 시작하는 웨딩 플래너.',
          tag: '라이프스타일',
          tagClass: 'bg-pink-500/10 text-pink-600 dark:text-pink-400',
          platform: 'Android · iOS',
          link: '/marriage-mind',
          cardBgLight: 'linear-gradient(135deg, #faf5f3 0%, #f3ece9 100%)',
          cardBgDark: 'linear-gradient(135deg, #362d2c 0%, #302828 100%)',
        },
        {
          name: '고양이 글방',
          icon: '/app-icons/cwr.png',
          desc: '고양이와 함께하는 아늑한 글쓰기 공간. 매일 조금씩, 나만의 이야기를 써보세요.',
          tag: '생산성',
          tagClass: 'bg-orange-500/10 text-orange-600 dark:text-orange-400',
          platform: 'Android · iOS',
          link: '/cwr',
          cardBgLight: 'linear-gradient(135deg, #f2ede8 0%, #eae4dc 100%)',
          cardBgDark: 'linear-gradient(135deg, #363230 0%, #302a28 100%)',
        },
        {
          name: '아기이름 연구소',
          icon: '/app-icons/your-name.png',
          desc: '소중한 아이의 이름, 정성껏 지어보세요. 한자 뜻풀이와 작명 도우미.',
          tag: '라이프스타일',
          tagClass: 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400',
          platform: 'Android · iOS',
          link: '/your_name',
          cardBgLight: 'linear-gradient(135deg, #f8f3e5 0%, #f0eadb 100%)',
          cardBgDark: 'linear-gradient(135deg, #353228 0%, #2e2c22 100%)',
        },
        {
          name: 'Still Left',
          icon: '/app-icons/still-left.png',
          desc: '소중한 날까지 남은 시간을 아름답게 보여줍니다. 디데이 카운터의 새로운 경험.',
          tag: '유틸리티',
          tagClass: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400',
          platform: 'Android · iOS',
          link: '/still_left',
          cardBgLight: 'linear-gradient(135deg, #edeaf5 0%, #e5e0f2 100%)',
          cardBgDark: 'linear-gradient(135deg, #2a2638 0%, #262232 100%)',
        },
        {
          name: 'Unsubmitted',
          icon: '/app-icons/unsubmitted.png',
          desc: '보내지 못한 마음을 글로 담아보세요. 나만의 비밀 편지함.',
          tag: '라이프스타일',
          tagClass: 'bg-red-500/10 text-red-600 dark:text-red-400',
          platform: 'Android · iOS',
          link: '/unsubmitted',
          cardBgLight: 'linear-gradient(135deg, #f8eeeb 0%, #f2e5e1 100%)',
          cardBgDark: 'linear-gradient(135deg, #3a2e2c 0%, #342828 100%)',
        },
      ],
    }
  },
}
</script>

<style scoped>
.no-underline {
  text-decoration: none;
}
</style>
