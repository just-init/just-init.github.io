<template>
  <div class="min-h-screen bg-white dark:bg-gray-900">
    <div class="max-w-3xl mx-auto px-6 py-16">
      <nuxt-link to="/honey-sleep" class="text-indigo-600 dark:text-indigo-400 text-sm hover:underline mb-8 block">← HoneySleep</nuxt-link>
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">개인정보처리방침</h1>
      <p class="text-gray-500 dark:text-gray-400 text-sm mb-10">시행일: 2026년 3월 10일</p>

      <div class="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed space-y-8">

        <section>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">1. 개인정보의 처리 목적</h2>
          <p>HoneySleep(이하 '서비스')은 다음의 목적을 위해 개인정보를 처리합니다.</p>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>회원 가입 및 서비스 이용</li>
            <li>구독 결제 및 이용 내역 관리</li>
            <li>서비스 개선 및 고객 지원</li>
          </ul>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">2. 수집하는 개인정보 항목</h2>
          <ul class="list-disc pl-5 space-y-1">
            <li>이메일 주소 (소셜 로그인 시 제공되는 정보)</li>
            <li>구독 및 결제 정보 (Apple/Google 처리, 서비스는 영수증 정보만 수신)</li>
            <li>서비스 이용 기록 (재생 기록, 수면 루틴 설정)</li>
          </ul>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">3. 개인정보의 보유 및 이용 기간</h2>
          <p>회원 탈퇴 시 또는 수집 목적 달성 후 즉시 파기합니다. 단, 관계 법령에 따라 보존이 필요한 경우 해당 기간 동안 보관합니다.</p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">4. 개인정보의 제3자 제공</h2>
          <p>서비스는 이용자의 개인정보를 원칙적으로 제3자에게 제공하지 않습니다. 단, 아래의 경우는 예외입니다.</p>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>법령의 규정에 따르거나 수사 목적으로 법령에 정해진 절차에 따라 요청이 있는 경우</li>
          </ul>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">5. 개인정보 처리의 위탁</h2>
          <ul class="list-disc pl-5 space-y-1">
            <li>Firebase (Google): 인증 및 데이터 저장 — 미국</li>
            <li>Apple App Store / Google Play: 결제 처리</li>
            <li>Cloudflare: 콘텐츠 전송</li>
          </ul>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">6. 이용자의 권리</h2>
          <p>이용자는 언제든지 자신의 개인정보 조회, 수정, 삭제를 요청할 수 있습니다. 계정 및 데이터 삭제 요청은 <nuxt-link to="/honey-sleep/delete-account" class="text-indigo-600 dark:text-indigo-400 hover:underline">여기</nuxt-link>에서 신청하세요.</p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">7. 개인정보 보호책임자</h2>
          <p>이메일: justinit.service@gmail.com</p>
        </section>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HoneySleepPrivacy',
}
</script>
