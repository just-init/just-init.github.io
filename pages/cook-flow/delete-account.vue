<template>
  <div class="cf-root">
    <nav class="cf-nav">
      <nuxt-link to="/cook-flow" class="cf-nav__back">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8L10 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        CookFlow
      </nuxt-link>
    </nav>

    <div class="cf-legal">
      <h1 class="cf-legal__title">계정 및 데이터 삭제 요청</h1>
      <p class="cf-legal__date">시행일: 2026년 3월 15일</p>

      <div class="cf-legal__body">

        <p class="cf-legal__intro">CookFlow 계정 및 개인 데이터 삭제를 원하시면 아래 이메일로 요청해 주세요.</p>

        <div class="cf-card">
          <p class="cf-card__label">삭제 요청 이메일</p>
          <a href="mailto:justinit.service@gmail.com?subject=[CookFlow] 계정 삭제 요청" class="cf-card__email">
            justinit.service@gmail.com
          </a>
          <p class="cf-card__hint">제목: [CookFlow] 계정 삭제 요청</p>
        </div>

        <section class="cf-legal__section">
          <h2>삭제되는 데이터</h2>
          <ul>
            <li>계정 정보 (이메일, 닉네임)</li>
            <li>저장한 레시피 및 생성한 레시피</li>
            <li>서비스 이용 기록</li>
          </ul>
        </section>

        <section class="cf-legal__section">
          <h2>처리 기간</h2>
          <p>요청 접수 후 영업일 기준 7일 이내 처리됩니다.</p>
        </section>

        <section class="cf-legal__section">
          <h2>유의사항</h2>
          <ul>
            <li>삭제 후 데이터는 복구되지 않습니다.</li>
            <li>삭제된 레시피는 되돌릴 수 없으니 미리 백업해 두세요.</li>
          </ul>
        </section>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CookFlowDeleteAccount',
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
  margin: 0 0 40px;
}
.cf-legal__intro {
  font-size: 15px;
  line-height: 1.8;
  color: #9A9A9A;
  margin: 0 0 32px;
}

.cf-card {
  background: rgba(249,115,22,0.07);
  border: 1px solid rgba(249,115,22,0.2);
  border-radius: 16px;
  padding: 24px 28px;
  margin-bottom: 40px;
}
.cf-card__label {
  font-size: 13px;
  font-weight: 700;
  color: #F0EDE8;
  margin: 0 0 6px;
}
.cf-card__email {
  display: block;
  font-size: 16px;
  font-weight: 600;
  color: #F97316;
  text-decoration: none;
  margin-bottom: 6px;
}
.cf-card__email:hover { text-decoration: underline; }
.cf-card__hint {
  font-size: 12px;
  color: #6B6B6B;
  margin: 0;
}

.cf-legal__body {
  display: flex;
  flex-direction: column;
  gap: 32px;
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
  margin: 0;
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
</style>
