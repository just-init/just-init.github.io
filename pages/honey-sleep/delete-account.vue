<template>
  <div class="min-h-screen bg-white dark:bg-gray-900">
    <div class="max-w-3xl mx-auto px-6 py-16">
      <nuxt-link to="/honey-sleep" class="text-indigo-600 dark:text-indigo-400 text-sm hover:underline mb-8 block">← HoneySleep</nuxt-link>
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">계정 및 데이터 삭제 요청</h1>
      <p class="text-gray-500 dark:text-gray-400 text-sm mb-10">시행일: 2026년 3월 10일</p>

      <div class="text-gray-700 dark:text-gray-300 leading-relaxed space-y-6">
        <p>HoneySleep 계정 및 개인 데이터 삭제를 원하시면 아래 이메일로 요청해 주세요.</p>

        <div class="bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl p-6 border border-indigo-100 dark:border-indigo-800">
          <p class="font-semibold text-gray-900 dark:text-white mb-1">삭제 요청 이메일</p>
          <a href="mailto:justinit.service@gmail.com?subject=[HoneySleep] 계정 삭제 요청"
             class="text-indigo-600 dark:text-indigo-400 hover:underline">
            justinit.service@gmail.com
          </a>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">제목: [HoneySleep] 계정 삭제 요청</p>
        </div>

        <div>
          <p class="font-semibold text-gray-900 dark:text-white mb-2">삭제되는 데이터</p>
          <ul class="list-disc pl-5 space-y-1 text-sm">
            <li>계정 정보 (이메일)</li>
            <li>수면 루틴 설정</li>
            <li>재생 기록</li>
            <li>구독 정보 (결제 내역은 Apple/Google에서 별도 관리)</li>
          </ul>
        </div>

        <div>
          <p class="font-semibold text-gray-900 dark:text-white mb-2">처리 기간</p>
          <p class="text-sm">요청 접수 후 영업일 기준 7일 이내 처리됩니다.</p>
        </div>

        <div>
          <p class="font-semibold text-gray-900 dark:text-white mb-2">유의사항</p>
          <ul class="list-disc pl-5 space-y-1 text-sm">
            <li>삭제 후 데이터는 복구되지 않습니다.</li>
            <li>진행 중인 구독은 각 스토어에서 별도로 취소해 주세요.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HoneySleepDeleteAccount',
}
</script>
