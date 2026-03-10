<template>
  <div class="min-h-screen bg-white dark:bg-gray-900">
    <div class="max-w-3xl mx-auto px-6 py-16">
      <nuxt-link to="/honey-sleep" class="text-indigo-600 dark:text-indigo-400 text-sm hover:underline mb-8 block">← 꿀잠</nuxt-link>
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">이용약관</h1>
      <p class="text-gray-500 dark:text-gray-400 text-sm mb-10">시행일: 2026년 3월 10일</p>

      <div class="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed space-y-8">

        <section>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">1. 서비스 소개</h2>
          <p>꿀잠은 수면 명상, 수면 사운드, 수면 이야기를 제공하는 모바일 애플리케이션입니다. 본 약관은 꿀잠 서비스 이용에 관한 조건을 정합니다.</p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">2. 서비스 이용</h2>
          <ul class="list-disc pl-5 space-y-1">
            <li>서비스는 만 4세 이상 이용 가능합니다.</li>
            <li>일부 콘텐츠는 프리미엄 구독이 필요합니다.</li>
            <li>서비스 내 콘텐츠의 저작권은 꿀잠에 귀속됩니다.</li>
          </ul>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">3. 구독 및 결제</h2>
          <ul class="list-disc pl-5 space-y-1">
            <li>구독은 월간(₩2,900) 또는 연간(₩19,900) 플랜으로 제공됩니다.</li>
            <li>연간 플랜은 7일 무료 체험 기간이 제공됩니다.</li>
            <li>구독은 기간 만료 전 취소하지 않으면 자동 갱신됩니다.</li>
            <li>결제는 Apple App Store 또는 Google Play를 통해 처리됩니다.</li>
            <li>환불은 각 스토어의 환불 정책을 따릅니다.</li>
          </ul>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">4. 금지 행위</h2>
          <ul class="list-disc pl-5 space-y-1">
            <li>서비스 내 콘텐츠의 무단 복제, 배포, 상업적 이용</li>
            <li>서비스의 정상적인 운영을 방해하는 행위</li>
            <li>타인의 계정을 도용하는 행위</li>
          </ul>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">5. 서비스 변경 및 중단</h2>
          <p>운영상 또는 기술상 필요에 따라 서비스의 전부 또는 일부를 변경하거나 중단할 수 있습니다. 중요한 변경 사항은 앱 내 공지 또는 이메일로 안내합니다.</p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">6. 면책조항</h2>
          <p>서비스는 수면 보조 콘텐츠를 제공하며, 의료적 진단이나 치료를 대체하지 않습니다. 수면 장애가 있는 경우 전문 의료기관을 방문하시기 바랍니다.</p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">7. 문의</h2>
          <p>이메일: justinit.service@gmail.com</p>
        </section>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HoneySleepTerms',
}
</script>
