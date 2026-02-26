<template>
  <section
    class="w-full px-6 md:px-12 py-32 max-w-5xl mx-auto text-center bg-black/[0.02] dark:bg-white/[0.03] rounded-3xl my-24"
  >
    <span class="material-symbols-rounded text-4xl text-primary mb-4">mail</span>
    <h2 class="font-display text-4xl font-bold mb-4 tracking-tight">소식 받아보기</h2>
    <p class="opacity-70 mb-8 dark:text-muted-dark">신규 앱 출시 소식과 개발 비하인드 스토리를 전해드립니다.</p>
    <form class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" @submit.prevent>
      <div
        class="flex flex-col sm:flex-row gap-2 p-1.5 bg-white dark:bg-surface-dark rounded-2xl shadow-premium border border-text-light/5 dark:border-border-dark"
      >
        <input
          class="flex-grow px-5 py-4 bg-transparent border-none focus:ring-0 outline-none text-base"
          placeholder="공방의 따뜻한 소식을 받아볼 이메일"
          type="email"
        />
        <button
          type="button"
          class="bg-primary text-white dark:text-background-dark px-8 py-4 rounded-xl font-bold hover:bg-primary-hover transition-all shadow-lg shadow-primary/10"
        >
          구독하기
        </button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: 'LandingNewsletter',
}
</script>
