<template>
  <div class="min-h-screen bg-white dark:bg-gray-900">
    <div class="max-w-3xl mx-auto px-6 py-16">
      <nuxt-link to="/nukkikok" class="text-pink-700 dark:text-pink-300 text-sm hover:underline mb-8 block">← 누끼콕</nuxt-link>
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">개인정보처리방침</h1>
      <p class="text-gray-500 dark:text-gray-400 text-sm mb-10">시행일: 2026년 10월 4일</p>

      <div class="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed space-y-8">

        <p>딸깍공방(이하 '운영자')은 누끼콕(이하 '서비스') 이용자의 개인정보를 소중히 여기며, 「개인정보 보호법」 등 관련 법령을 지킵니다. 이 방침은 서비스가 어떤 정보를 왜 처리하는지, 이용자가 어떤 권리를 가지는지 알려드립니다.</p>

        <section class="rounded-xl border border-pink-200 bg-pink-50 dark:bg-gray-800 dark:border-gray-700 p-5">
          <h2 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">사진은 기기 밖으로 나가지 않습니다</h2>
          <p>스티커를 만들기 위해 고른 사진과 그 결과물은 <strong>모두 이용자의 기기 안에서만 처리</strong>됩니다. 피사체 추출, 얼굴 인식(머리카락 다듬기), 영역 보정은 기기에 내장된 기능과 앱에 포함된 모델로 동작하며, 운영자는 이 사진을 서버로 전송하거나 수집하지 않습니다.</p>
          <p class="mt-2">'이전 작업 계속하기'를 위해 마지막으로 자른 사진이 앱 내부 저장공간에 보관되며, 앱을 삭제하면 함께 지워집니다.</p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">1. 처리하는 개인정보 항목과 목적</h2>
          <div class="overflow-x-auto">
            <table class="w-full text-sm border-collapse">
              <thead>
                <tr class="border-b border-gray-200 dark:border-gray-700 text-left">
                  <th class="py-2 pr-4 font-semibold">구분</th>
                  <th class="py-2 pr-4 font-semibold">항목</th>
                  <th class="py-2 font-semibold">목적</th>
                </tr>
              </thead>
              <tbody class="align-top">
                <tr class="border-b border-gray-100 dark:border-gray-800">
                  <td class="py-2 pr-4 whitespace-nowrap">로그인 (선택)</td>
                  <td class="py-2 pr-4">이메일 주소, 이름(소셜 계정이 제공하는 경우), 계정 고유 식별자</td>
                  <td class="py-2">구매 내역을 계정에 연결해 재설치·기기 변경 후에도 유지, 문의 응대</td>
                </tr>
                <tr class="border-b border-gray-100 dark:border-gray-800">
                  <td class="py-2 pr-4 whitespace-nowrap">유료 상품 구매</td>
                  <td class="py-2 pr-4">상품 ID, 구매 일시, 구매 토큰 등 구매 확인 정보</td>
                  <td class="py-2">구매 확인 및 워터마크 해제·저장권 제공, 구매 복원</td>
                </tr>
                <tr class="border-b border-gray-100 dark:border-gray-800">
                  <td class="py-2 pr-4 whitespace-nowrap">문의</td>
                  <td class="py-2 pr-4">문의 내용, 이용자가 직접 첨부한 사진·파일, 계정 식별자, 앱 버전·기기 정보</td>
                  <td class="py-2">문의 확인 및 답변</td>
                </tr>
                <tr class="border-b border-gray-100 dark:border-gray-800">
                  <td class="py-2 pr-4 whitespace-nowrap">광고</td>
                  <td class="py-2 pr-4">광고 식별자(Android 광고 ID / iOS IDFA, 허용한 경우), 기기·앱 정보, IP 주소</td>
                  <td class="py-2">보상형 광고 제공(광고 시청 시 워터마크 1회 해제), 광고 성과 측정, 부정 사용 방지</td>
                </tr>
                <tr>
                  <td class="py-2 pr-4 whitespace-nowrap">이용 통계</td>
                  <td class="py-2 pr-4">앱 인스턴스 ID, 화면 조회, 스티커 저장·구매 시도 등 이용 이벤트, 기기·OS 정보, 대략적 위치(국가·지역)</td>
                  <td class="py-2">서비스 개선 및 오류 파악</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="mt-3">결제는 Google Play 또는 Apple App Store가 처리하며, 운영자는 카드 번호 등 결제 수단 정보를 받지 않습니다.</p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">2. 보유 및 이용 기간</h2>
          <ul class="list-disc pl-5 space-y-1">
            <li>계정 정보: 계정 삭제 시까지. 삭제 요청을 받으면 지체 없이 파기합니다.</li>
            <li>문의 내용과 첨부 파일: 문의 처리 후 3년 (「전자상거래 등에서의 소비자보호에 관한 법률」에 따른 소비자 불만·분쟁 처리 기록)</li>
            <li>구매 기록: 5년 (같은 법률에 따른 대금 결제 및 재화 공급 기록)</li>
            <li>이용 통계: 수집일로부터 최대 14개월</li>
          </ul>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">3. 개인정보의 제3자 제공</h2>
          <p>운영자는 이용자의 개인정보를 제3자에게 제공하지 않습니다. 다만 법령에 근거가 있거나 수사기관이 법령에 정한 절차에 따라 요청하는 경우는 예외로 합니다.</p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">4. 처리 위탁 및 국외 이전</h2>
          <p>서비스 운영을 위해 아래 업체에 개인정보 처리를 맡기고 있으며, 이 과정에서 정보가 국외에 저장될 수 있습니다. 정보는 서비스 이용 시 네트워크를 통해 전송되며, 위 2항의 기간 또는 위탁 계약 종료 시까지 보관됩니다.</p>
          <div class="overflow-x-auto mt-3">
            <table class="w-full text-sm border-collapse">
              <thead>
                <tr class="border-b border-gray-200 dark:border-gray-700 text-left">
                  <th class="py-2 pr-4 font-semibold">받는 자 (국가)</th>
                  <th class="py-2 pr-4 font-semibold">맡기는 일</th>
                  <th class="py-2 font-semibold">항목</th>
                </tr>
              </thead>
              <tbody class="align-top">
                <tr class="border-b border-gray-100 dark:border-gray-800">
                  <td class="py-2 pr-4">Google LLC (미국)</td>
                  <td class="py-2 pr-4">Firebase 로그인·데이터 저장, Firebase Analytics 이용 통계, AdMob 광고, Google Play 결제</td>
                  <td class="py-2">계정 정보, 문의 내용, 구매 확인 정보, 이용 이벤트, 광고 식별자, 기기 정보</td>
                </tr>
                <tr class="border-b border-gray-100 dark:border-gray-800">
                  <td class="py-2 pr-4">Apple Inc. (미국)</td>
                  <td class="py-2 pr-4">Apple 로그인, App Store 결제</td>
                  <td class="py-2">계정 정보, 구매 확인 정보</td>
                </tr>
                <tr class="border-b border-gray-100 dark:border-gray-800">
                  <td class="py-2 pr-4">Cloudflare, Inc. (미국)</td>
                  <td class="py-2 pr-4">문의 첨부 파일 저장 및 전송</td>
                  <td class="py-2">문의 첨부 사진·파일</td>
                </tr>
                <tr>
                  <td class="py-2 pr-4">Discord Inc. (미국)</td>
                  <td class="py-2 pr-4">새 문의 접수 알림 (운영자 확인용)</td>
                  <td class="py-2">문의 번호, 문의 내용</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="mt-3">국외 이전을 원하지 않으면 로그인·문의 기능을 쓰지 않거나 아래 연락처로 삭제를 요청할 수 있습니다. 다만 이 경우 구매 내역 연동과 문의 답변을 받을 수 없습니다.</p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">5. 광고 식별자와 맞춤형 광고</h2>
          <ul class="list-disc pl-5 space-y-1">
            <li>Android: 설정 &gt; 개인정보 보호 &gt; 광고에서 광고 ID를 재설정하거나 삭제할 수 있습니다.</li>
            <li>iOS: 설정 &gt; 개인정보 보호 및 보안 &gt; 추적에서 앱의 추적 허용 여부를 바꿀 수 있습니다.</li>
          </ul>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">6. 이용자의 권리와 행사 방법</h2>
          <p>이용자는 언제든지 자신의 개인정보 열람, 정정, 삭제, 처리 정지를 요청할 수 있습니다. 계정과 관련 데이터의 삭제는 <nuxt-link to="/nukkikok/delete-account" class="text-pink-700 dark:text-pink-300 hover:underline">계정 삭제 요청 페이지</nuxt-link>의 안내에 따라 신청해 주시면 확인 후 지체 없이 처리합니다. 법령에 따라 보관해야 하는 정보는 해당 기간이 지난 뒤 파기합니다.</p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">7. 아동의 개인정보</h2>
          <p>서비스는 만 14세 미만 아동의 계정 생성을 목적으로 하지 않습니다. 만 14세 미만 아동의 개인정보가 법정대리인 동의 없이 수집된 사실을 알게 되면 즉시 삭제합니다. 이용자가 스티커로 만드는 아이 사진은 위에서 설명한 대로 기기 안에서만 처리됩니다.</p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">8. 개인정보의 파기</h2>
          <p>보유 기간이 끝나거나 처리 목적을 달성한 개인정보는 지체 없이 파기합니다. 전자 파일은 복구할 수 없는 방법으로 삭제합니다.</p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">9. 안전성 확보 조치</h2>
          <p>전송 구간 암호화(HTTPS), 접근 권한 최소화, 로그인한 이용자 본인만 자신의 문의에 접근할 수 있도록 하는 접근 통제를 적용하고 있습니다.</p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">10. 개인정보 보호책임자</h2>
          <ul class="list-none space-y-1">
            <li>운영자: 딸깍공방</li>
            <li>이메일: <a href="mailto:justinit.service@gmail.com" class="text-pink-700 dark:text-pink-300 hover:underline">justinit.service@gmail.com</a></li>
          </ul>
          <p class="mt-3">개인정보 침해에 대한 신고나 상담은 개인정보침해신고센터(privacy.kisa.or.kr, 국번 없이 118) 또는 개인정보분쟁조정위원회(www.kopico.go.kr, 1833-6972)에 문의할 수 있습니다.</p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">11. 방침의 변경</h2>
          <p>이 방침이 바뀌면 시행 7일 전부터 이 페이지와 앱을 통해 알려드립니다.</p>
        </section>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NukkiKokPrivacy',
  head() {
    return { title: '개인정보처리방침 - 누끼콕' }
  },
}
</script>
