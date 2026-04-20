<template>
  <div class="ry-root">
    <nav class="ry-nav">
      <nuxt-link to="/recipe-yap" class="ry-nav__back">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8L10 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        RecipeYap
      </nuxt-link>
    </nav>

    <div class="ry-legal">
      <h1 class="ry-legal__title">계정 및 데이터 삭제 요청</h1>
      <p class="ry-legal__date">시행일: 2026년 3월 15일</p>

      <div class="ry-legal__body">

        <p class="ry-legal__intro">레시피얍 계정 및 개인 데이터 삭제를 원하시면 아래 이메일로 요청해 주세요.</p>

        <div class="ry-card">
          <p class="ry-card__label">삭제 요청 이메일</p>
          <a href="mailto:justinit.service@gmail.com?subject=[레시피얍] 계정 삭제 요청" class="ry-card__email">
            justinit.service@gmail.com
          </a>
          <p class="ry-card__hint">제목: [레시피얍] 계정 삭제 요청</p>
        </div>

        <section class="ry-legal__section">
          <h2>삭제되는 데이터</h2>
          <ul>
            <li>계정 정보 (이메일, 닉네임)</li>
            <li>저장한 레시피 및 생성한 레시피</li>
            <li>서비스 이용 기록</li>
          </ul>
        </section>

        <section class="ry-legal__section">
          <h2>처리 기간</h2>
          <p>요청 접수 후 영업일 기준 7일 이내 처리됩니다.</p>
        </section>

        <section class="ry-legal__section">
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
  name: 'RecipeYapDeleteAccount',
}
</script>

<style scoped>
.ry-root {
  min-height: 100vh;
  background: #0E0F14;
  color: #F0EDE8;
  font-family: 'Noto Sans KR', -apple-system, BlinkMacSystemFont, sans-serif;
  -webkit-font-smoothing: antialiased;
}

.ry-nav {
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 20px 32px;
  background: rgba(14,15,20,0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255,255,255,0.05);
}
.ry-nav__back {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #F97316;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  transition: opacity 0.2s;
}
.ry-nav__back:hover { opacity: 0.75; }

.ry-legal {
  max-width: 720px;
  margin: 0 auto;
  padding: 64px 32px 100px;
}
.ry-legal__title {
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: -1px;
  color: #F0EDE8;
  margin: 0 0 8px;
}
.ry-legal__date {
  font-size: 13px;
  color: #6B6B6B;
  margin: 0 0 40px;
}
.ry-legal__intro {
  font-size: 15px;
  line-height: 1.8;
  color: #9A9A9A;
  margin: 0 0 32px;
}

.ry-card {
  background: rgba(249,115,22,0.07);
  border: 1px solid rgba(249,115,22,0.2);
  border-radius: 16px;
  padding: 24px 28px;
  margin-bottom: 40px;
}
.ry-card__label {
  font-size: 13px;
  font-weight: 700;
  color: #F0EDE8;
  margin: 0 0 6px;
}
.ry-card__email {
  display: block;
  font-size: 16px;
  font-weight: 600;
  color: #F97316;
  text-decoration: none;
  margin-bottom: 6px;
}
.ry-card__email:hover { text-decoration: underline; }
.ry-card__hint {
  font-size: 12px;
  color: #6B6B6B;
  margin: 0;
}

.ry-legal__body {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.ry-legal__section h2 {
  font-size: 1rem;
  font-weight: 700;
  color: #F0EDE8;
  margin: 0 0 12px;
}
.ry-legal__section p {
  font-size: 15px;
  line-height: 1.8;
  color: #9A9A9A;
  margin: 0;
}
.ry-legal__section ul {
  list-style: disc;
  padding-left: 20px;
  margin: 8px 0 0;
}
.ry-legal__section ul li {
  font-size: 15px;
  line-height: 1.8;
  color: #9A9A9A;
}
</style>
