<template>
  <div class="cf-root">
    <nav class="cf-nav">
      <nuxt-link to="/cook-flow" class="cf-nav__back">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8L10 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        CookFlow
      </nuxt-link>
    </nav>

    <div class="cf-legal">
      <h1 class="cf-legal__title">이용약관</h1>
      <p class="cf-legal__date">시행일: 2026년 3월 15일</p>

      <div class="cf-legal__body">

        <section class="cf-legal__section">
          <h2>1. 서비스 소개</h2>
          <p>CookFlow는 요리 콘텐츠를 내 입맛에 맞는 레시피로 변환하고, 단계별 요리 가이드를 제공하는 모바일 애플리케이션입니다. 본 약관은 CookFlow 서비스 이용에 관한 조건을 정합니다.</p>
        </section>

        <section class="cf-legal__section">
          <h2>2. 서비스 이용</h2>
          <ul>
            <li>서비스는 만 4세 이상 이용 가능합니다.</li>
            <li>회원가입 후 레시피 저장 및 개인화 기능을 이용할 수 있습니다.</li>
            <li>서비스 내 AI 생성 레시피의 저작권은 이용자에게 귀속됩니다.</li>
          </ul>
        </section>

        <section class="cf-legal__section">
          <h2>3. 금지 행위</h2>
          <ul>
            <li>서비스의 정상적인 운영을 방해하는 행위</li>
            <li>타인의 계정을 도용하는 행위</li>
            <li>서비스를 통해 생성한 콘텐츠를 무단으로 상업적 목적에 이용하는 행위</li>
          </ul>
        </section>

        <section class="cf-legal__section">
          <h2>4. 서비스 변경 및 중단</h2>
          <p>운영상 또는 기술상 필요에 따라 서비스의 전부 또는 일부를 변경하거나 중단할 수 있습니다. 중요한 변경 사항은 앱 내 공지 또는 이메일로 안내합니다.</p>
        </section>

        <section class="cf-legal__section">
          <h2>5. 면책조항</h2>
          <p>AI가 생성한 레시피는 참고용이며, 재료 알레르기 등 개인 건강 상태를 반드시 직접 확인하시기 바랍니다. 서비스는 레시피 정확성에 대한 법적 책임을 지지 않습니다.</p>
        </section>

        <section class="cf-legal__section">
          <h2>6. 문의</h2>
          <p>이메일: <a href="mailto:justinit.service@gmail.com">justinit.service@gmail.com</a></p>
        </section>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CookFlowTerms',
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
