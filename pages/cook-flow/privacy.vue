<template>
  <div class="cf-root">
    <nav class="cf-nav">
      <nuxt-link to="/cook-flow" class="cf-nav__back">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8L10 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        CookFlow
      </nuxt-link>
    </nav>

    <div class="cf-legal">
      <h1 class="cf-legal__title">개인정보처리방침</h1>
      <p class="cf-legal__date">시행일: 2026년 3월 15일</p>

      <div class="cf-legal__body">

        <section class="cf-legal__section">
          <h2>1. 개인정보의 처리 목적</h2>
          <p>CookFlow(이하 '서비스')는 다음의 목적을 위해 개인정보를 처리합니다.</p>
          <ul>
            <li>회원 가입 및 서비스 이용</li>
            <li>레시피 저장 및 개인화 서비스 제공</li>
            <li>서비스 개선 및 고객 지원</li>
          </ul>
        </section>

        <section class="cf-legal__section">
          <h2>2. 수집하는 개인정보 항목</h2>
          <ul>
            <li>이메일 주소 (회원가입 시 입력)</li>
            <li>닉네임 (온보딩 시 설정)</li>
            <li>서비스 이용 기록 (저장한 레시피, 최근 본 레시피)</li>
          </ul>
        </section>

        <section class="cf-legal__section">
          <h2>3. 개인정보의 보유 및 이용 기간</h2>
          <p>회원 탈퇴 시 또는 수집·이용 목적 달성 후 지체 없이 파기합니다. 단, 관련 법령에 따라 일정 기간 보존이 필요한 경우 해당 기간 동안 보관합니다.</p>
        </section>

        <section class="cf-legal__section">
          <h2>4. 개인정보의 제3자 제공</h2>
          <p>서비스는 이용자의 개인정보를 원칙적으로 제3자에게 제공하지 않습니다. 다만, 이용자의 동의가 있거나 법령에 따라 요구되는 경우 예외적으로 제공할 수 있습니다.</p>
        </section>

        <section class="cf-legal__section">
          <h2>5. 개인정보 처리 위탁</h2>
          <ul>
            <li>Firebase (Google): 인증, 데이터 저장, 클라우드 서비스</li>
          </ul>
        </section>

        <section class="cf-legal__section">
          <h2>6. 이용자의 권리</h2>
          <p>이용자는 언제든지 자신의 개인정보를 조회, 수정, 삭제 요청할 수 있습니다. 계정 삭제는 앱 내 설정 또는 이메일 요청을 통해 처리됩니다.</p>
        </section>

        <section class="cf-legal__section">
          <h2>7. 개인정보 보호책임자</h2>
          <p>이메일: <a href="mailto:justinit.service@gmail.com">justinit.service@gmail.com</a></p>
        </section>

        <section class="cf-legal__section">
          <h2>8. 개인정보처리방침 변경</h2>
          <p>이 방침은 시행일로부터 적용되며, 변경 시 앱 내 공지 또는 이메일을 통해 안내합니다.</p>
        </section>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CookFlowPrivacy',
}
</script>

<style scoped>
.cf-root {
  min-height: 100vh;
  background: #0E0F14;
  color: #F0EDE8;
  font-family: 'Noto Sans KR', -apple-system, BlinkMacSystemFont, sans-serif;
  -webkit-font-smoothing: antialiased;
}

.cf-nav {
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 20px 32px;
  background: rgba(14,15,20,0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255,255,255,0.05);
}
.cf-nav__back {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #F97316;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  transition: opacity 0.2s;
}
.cf-nav__back:hover { opacity: 0.75; }

.cf-legal {
  max-width: 720px;
  margin: 0 auto;
  padding: 64px 32px 100px;
}
.cf-legal__title {
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: -1px;
  color: #F0EDE8;
  margin: 0 0 8px;
}
.cf-legal__date {
  font-size: 13px;
  color: #6B6B6B;
  margin: 0 0 48px;
}

.cf-legal__body {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.cf-legal__section h2 {
  font-size: 1rem;
  font-weight: 700;
  color: #F0EDE8;
  margin: 0 0 12px;
}
.cf-legal__section p {
  font-size: 15px;
  line-height: 1.8;
  color: #9A9A9A;
  margin: 0 0 10px;
}
.cf-legal__section ul {
  list-style: disc;
  padding-left: 20px;
  margin: 8px 0 0;
}
.cf-legal__section ul li {
  font-size: 15px;
  line-height: 1.8;
  color: #9A9A9A;
}
.cf-legal__section a {
  color: #F97316;
  text-decoration: none;
}
.cf-legal__section a:hover { text-decoration: underline; }
</style>
