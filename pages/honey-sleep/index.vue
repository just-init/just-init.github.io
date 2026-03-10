<template>
  <div class="min-h-screen bg-white dark:bg-gray-900">
    <div class="max-w-3xl mx-auto px-6 py-16">
      <div class="flex items-center gap-4 mb-8">
        <img src="/app-icons/honey-sleep.png" alt="꿀잠" class="w-16 h-16 rounded-2xl shadow-md" />
        <div>
          <h1 class="text-3xl font-bold text-gray-900 dark:text-white">꿀잠</h1>
          <p class="text-gray-500 dark:text-gray-400">수면 명상 · 사운드 · 이야기</p>
        </div>
      </div>
      <p class="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-12">
        잠들지 못하는 밤을 위한 수면 앱. 수면 명상, 수면 사운드, 수면 이야기로 깊고 편안한 잠에 빠져보세요.
      </p>
      <div class="flex flex-col gap-4">
        <nuxt-link to="/honey-sleep/privacy" class="text-indigo-600 dark:text-indigo-400 hover:underline">개인정보처리방침</nuxt-link>
        <nuxt-link to="/honey-sleep/terms" class="text-indigo-600 dark:text-indigo-400 hover:underline">이용약관</nuxt-link>
        <nuxt-link to="/honey-sleep/delete-account" class="text-indigo-600 dark:text-indigo-400 hover:underline">계정 및 데이터 삭제 요청</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HoneySleepPage',
}
</script>
