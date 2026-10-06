<template>
  <div class="min-h-screen bg-white dark:bg-gray-900">
    <div class="max-w-3xl mx-auto px-6 py-16">
      <nuxt-link to="/nukkikok" class="text-pink-700 dark:text-pink-300 text-sm hover:underline mb-8 block">← 누끼콕</nuxt-link>
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">계정 및 데이터 삭제 요청</h1>
      <p class="text-gray-500 dark:text-gray-400 text-sm mb-10">시행일: 2026년 10월 5일</p>

      <div class="text-gray-700 dark:text-gray-300 leading-relaxed space-y-6">
        <p>누끼콕 계정은 앱에서 바로 삭제할 수 있어요. 앱을 쓸 수 없다면 이메일로 요청해 주세요.</p>

        <div class="bg-pink-50 dark:bg-gray-800 rounded-2xl p-6 border border-pink-200 dark:border-gray-700">
          <p class="font-semibold text-gray-900 dark:text-white mb-1">앱에서 삭제하기</p>
          <p class="text-sm">누끼콕 앱 → <strong>내 정보</strong> → <strong>계정 삭제</strong></p>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">로그인한 지 오래됐다면 본인 확인을 위해 한 번 더 로그인해야 할 수 있어요.</p>
        </div>

        <div class="rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
          <p class="font-semibold text-gray-900 dark:text-white mb-1">이메일로 요청하기</p>
          <a href="mailto:justinit.service@gmail.com?subject=[누끼콕] 계정 삭제 요청"
             class="text-pink-700 dark:text-pink-300 hover:underline">
            justinit.service@gmail.com
          </a>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">제목: [누끼콕] 계정 삭제 요청</p>
          <p class="text-sm text-gray-500 dark:text-gray-400">본문: 로그인 방식(Google, Apple 또는 카카오)과 계정 이메일</p>
        </div>

        <div>
          <p class="font-semibold text-gray-900 dark:text-white mb-2">바로 삭제되는 데이터</p>
          <ul class="list-disc pl-5 space-y-1 text-sm">
            <li>로그인 계정 (이메일, 이름·닉네임)</li>
            <li>카카오로 로그인했다면 카카오 계정과 누끼콕의 연결도 끊어요.</li>
          </ul>
        </div>

        <div>
          <p class="font-semibold text-gray-900 dark:text-white mb-2">법령에 따라 보관하는 데이터</p>
          <p class="text-sm mb-2">「전자상거래 등에서의 소비자보호에 관한 법률」에 따라 아래 정보는 다른 정보와 분리해 정해진 기간 동안 보관한 뒤 파기합니다. 이 기간에는 법령에서 정한 목적과 구매 관련 문의 응대 외에는 쓰지 않습니다.</p>
          <ul class="list-disc pl-5 space-y-1 text-sm">
            <li>회원·구매 기록 (계정 식별자, 로그인 방식, 가입·삭제 일시, 구매 상태): 5년</li>
            <li>문의 내용과 첨부 사진·동영상 (소비자 불만·분쟁 처리 기록): 3년</li>
          </ul>
        </div>

        <div>
          <p class="font-semibold text-gray-900 dark:text-white mb-2">처리 기간</p>
          <p class="text-sm">앱에서 삭제하면 바로 처리돼요. 이메일 요청은 접수 후 영업일 기준 7일 이내에 처리하고, 결과를 이메일로 알려드립니다.</p>
        </div>

        <div>
          <p class="font-semibold text-gray-900 dark:text-white mb-2">유의사항</p>
          <ul class="list-disc pl-5 space-y-1 text-sm">
            <li>삭제한 데이터는 복구할 수 없습니다.</li>
            <li>남아 있는 저장권은 계정과 함께 사라지며 환불되지 않습니다. 필요하면 삭제 요청 전에 사용하거나 환불을 요청해 주세요.</li>
            <li>워터마크 평생 해제는 Google Play 또는 App Store 구매 기록에 남아 있어, 같은 스토어 계정으로 다시 복원할 수 있습니다.</li>
            <li>스토어 결제 내역은 Google·Apple이 따로 관리하며, 운영자가 지울 수 없습니다.</li>
            <li>사진과 작업 중인 내용은 처음부터 기기 안에만 저장됩니다. 앱을 삭제하면 함께 지워지며, 앨범에 저장한 스티커는 사진 앱에서 직접 지워 주세요.</li>
          </ul>
        </div>

        <div>
          <p class="font-semibold text-gray-900 dark:text-white mb-2">계정 없이 쓰셨다면</p>
          <p class="text-sm">로그인하지 않았다면 운영자가 보관하는 계정 정보가 없습니다. 앱을 삭제하면 기기에 남은 데이터가 모두 지워집니다. 광고 식별자와 이용 통계는 기기 설정에서 광고 ID를 재설정하거나 삭제해 관리할 수 있습니다.</p>
        </div>

        <p class="text-sm text-gray-500 dark:text-gray-400">자세한 내용은 <nuxt-link to="/nukkikok/privacy" class="text-pink-700 dark:text-pink-300 hover:underline">개인정보처리방침</nuxt-link>을 참고해 주세요.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NukkiKokDeleteAccount',
  head() {
    return { title: '계정 삭제 요청 - 누끼콕' }
  },
}
</script>
