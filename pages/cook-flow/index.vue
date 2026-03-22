<template>
  <div class="cf-root">
    <div class="cf-noise" aria-hidden="true"></div>
    <div class="cf-orb cf-orb--hero" aria-hidden="true"></div>
    <div class="cf-orb cf-orb--mid" aria-hidden="true"></div>
    <div class="cf-orb cf-orb--bottom" aria-hidden="true"></div>

    <!-- Nav -->
    <nav class="cf-nav">
      <nuxt-link to="/" class="cf-nav__back">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8L10 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        딸깍공방
      </nuxt-link>
    </nav>

    <!-- Hero -->
    <section class="cf-hero">
      <div class="cf-hero__inner">
        <span class="cf-badge cf-fade-1">🍳 요리 콘텐츠를 내 레시피로</span>
        <h1 class="cf-hero__title cf-fade-2">
          동영상 앞뒤로<br>
          돌려가며 따라하셨나요?
        </h1>
        <p class="cf-hero__sub cf-fade-3">
          어떤 콘텐츠든 내 입맛에 맞는 레시피로 바꿔드립니다.<br>
          단계별 가이드로 요리 초보도 한 눈에 이해돼요.
        </p>
        <!-- TODO: App Store 링크를 실제 앱 출시 후 교체 -->
        <div class="cf-hero__cta cf-fade-4">
          <a href="https://apps.apple.com/app/id0000000000" class="cf-btn cf-btn--primary" target="_blank" rel="noopener">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            App Store
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.brenin.cookflow" class="cf-btn cf-btn--ghost" target="_blank" rel="noopener">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.37.6 1.23 0 1.6l-14 8.5c-.66.5-1.6.03-1.6-.8z"/></svg>
            Google Play
          </a>
        </div>
        <div class="cf-scroll-hint cf-fade-5" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 4v12M10 16l-4-4M10 16l4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="cf-features">

      <!-- 1. AI 레시피 생성 -->
      <div class="cf-feature reveal">
        <div class="cf-feature__text">
          <span class="cf-feature__label" style="color:#F97316">AI RECIPE</span>
          <h3 class="cf-feature__title">콘텐츠를 붙여넣으면<br>내 레시피로 완성</h3>
          <p class="cf-feature__desc">영상 링크나 텍스트를 붙여넣으면 AI가 재료와 조리 단계를 자동으로 정리해 드려요. 더 이상 앞뒤로 돌려가며 받아쓸 필요 없어요.</p>
        </div>
        <div class="cf-feature__card">
          <img src="/cook-flow/ss5.png" alt="AI 레시피 생성 화면" class="cf-screenshot" />
        </div>
      </div>

      <!-- 2. 단계별 요리 가이드 -->
      <div class="cf-feature cf-feature--reverse reveal">
        <div class="cf-feature__text">
          <span class="cf-feature__label" style="color:#34D399">COOKING GUIDE</span>
          <h3 class="cf-feature__title">한 문장씩 읽어가며<br>따라하던 건 그만</h3>
          <p class="cf-feature__desc">한 번에 하나의 단계만 보여드려요. 한 눈에 이해되도록 재료와 조리방법을 심플하게 보여드려요. 필요한 내용만 읽으세요.</p>
        </div>
        <div class="cf-feature__card">
          <img src="/cook-flow/ss3.png" alt="레시피 상세 화면" class="cf-screenshot" />
        </div>
      </div>

    </section>

    <!-- CTA Bottom -->
    <section class="cf-cta-bottom reveal">
      <div class="cf-cta-bottom__glow" aria-hidden="true"></div>
      <h2 class="cf-cta-bottom__title">오늘 요리는 CookFlow와 함께</h2>
      <p class="cf-cta-bottom__sub">콘텐츠는 CookFlow가 내 레시피로 바꿔드립니다.</p>
      <!-- TODO: App Store 링크를 실제 앱 출시 후 교체 -->
      <div class="cf-hero__cta">
        <a href="https://apps.apple.com/app/id0000000000" class="cf-btn cf-btn--primary" target="_blank" rel="noopener">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
          App Store
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.brenin.cookflow" class="cf-btn cf-btn--ghost" target="_blank" rel="noopener">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.37.6 1.23 0 1.6l-14 8.5c-.66.5-1.6.03-1.6-.8z"/></svg>
          Google Play
        </a>
      </div>
    </section>

    <!-- Footer -->
    <footer class="cf-footer">
      <span>© 2026 딸깍공방</span>
      <div class="cf-footer__links">
        <nuxt-link to="/cook-flow/privacy">개인정보처리방침</nuxt-link>
        <span>·</span>
        <nuxt-link to="/cook-flow/terms">이용약관</nuxt-link>
        <span>·</span>
        <nuxt-link to="/cook-flow/delete-account">계정 삭제</nuxt-link>
        <span>·</span>
        <a href="mailto:justinit.service@gmail.com">문의</a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'CookFlowPage',
  mounted() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
  },
}
</script>

<style scoped>
/* ── Base ───────────────────────────────────────────────── */
.cf-root {
  position: relative;
  min-height: 100vh;
  background: #0E0F14;
  color: #F0EDE8;
  font-family: 'Noto Sans KR', -apple-system, BlinkMacSystemFont, sans-serif;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

/* ── Noise ──────────────────────────────────────────────── */
.cf-noise {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  opacity: 0.025;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 128px 128px;
}

/* ── Orbs ───────────────────────────────────────────────── */
.cf-orb {
  position: fixed;
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
}
.cf-orb--hero {
  width: 700px; height: 700px;
  top: -200px; left: 50%;
  transform: translateX(-50%);
  background: radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%);
  filter: blur(60px);
}
.cf-orb--mid {
  width: 500px; height: 500px;
  top: 60%; right: -100px;
  background: radial-gradient(circle, rgba(167,139,250,0.06) 0%, transparent 70%);
  filter: blur(80px);
}
.cf-orb--bottom {
  width: 600px; height: 600px;
  bottom: 0; left: 50%;
  transform: translateX(-50%);
  background: radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 70%);
  filter: blur(80px);
}

/* ── Nav ────────────────────────────────────────────────── */
.cf-nav {
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 20px 32px;
  background: rgba(14,15,20,0.8);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255,255,255,0.04);
}
.cf-nav__back {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #9A9A9A;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.2s;
}
.cf-nav__back:hover { color: #F97316; }

/* ── Hero ───────────────────────────────────────────────── */
.cf-hero {
  position: relative;
  z-index: 1;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 24px;
  text-align: center;
}
.cf-hero__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  max-width: 700px;
}
.cf-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 20px;
  border: 1px solid rgba(249,115,22,0.25);
  border-radius: 999px;
  font-size: 13px;
  font-weight: 600;
  color: #F97316;
  background: rgba(249,115,22,0.06);
  letter-spacing: 0.02em;
  animation: cfPulse 2.4s ease-in-out infinite;
}
.cf-hero__title {
  font-size: clamp(2.4rem, 7vw, 4.5rem);
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -2px;
  color: #F0EDE8;
  margin: 0;
}
.cf-hero__sub {
  font-size: clamp(1rem, 2.5vw, 1.15rem);
  font-weight: 300;
  line-height: 1.8;
  color: #9A9A9A;
  margin: 0;
}

/* ── CTA Buttons ─────────────────────────────────────────── */
.cf-hero__cta {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 8px;
}
.cf-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  border-radius: 999px;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
  border: none;
}
.cf-btn--primary {
  background: #F97316;
  color: #0E0F14;
  box-shadow: 0 4px 24px rgba(249,115,22,0.25);
}
.cf-btn--primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(249,115,22,0.4);
}
.cf-btn--ghost {
  background: transparent;
  color: #F0EDE8;
  border: 1px solid rgba(255,255,255,0.15);
}
.cf-btn--ghost:hover {
  transform: translateY(-2px);
  border-color: rgba(255,255,255,0.3);
  background: rgba(255,255,255,0.04);
}

/* ── Scroll hint ─────────────────────────────────────────── */
.cf-scroll-hint {
  color: rgba(154,154,154,0.4);
  animation: cfBounce 1.8s ease-in-out infinite;
  margin-top: 16px;
}

/* ── Features ────────────────────────────────────────────── */
.cf-features {
  position: relative;
  z-index: 1;
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 32px 80px;
  display: flex;
  flex-direction: column;
  gap: 120px;
}
.cf-feature {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
}
.cf-feature--reverse { direction: rtl; }
.cf-feature--reverse > * { direction: ltr; }

.cf-feature__label {
  display: block;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 16px;
}
.cf-feature__title {
  font-size: clamp(1.8rem, 3.5vw, 2.6rem);
  font-weight: 900;
  letter-spacing: -1.5px;
  line-height: 1.15;
  color: #F0EDE8;
  margin: 0 0 20px;
}
.cf-feature__desc {
  font-size: 16px;
  font-weight: 300;
  line-height: 1.8;
  color: #9A9A9A;
  margin: 0;
}

/* ── Feature Card ────────────────────────────────────────── */
.cf-feature__card {
  display: flex;
  justify-content: center;
}
.cf-screenshot {
  width: 260px;
  border-radius: 28px;
  box-shadow: 0 32px 64px rgba(0,0,0,0.4);
  transition: transform 0.3s, box-shadow 0.3s;
}
.cf-screenshot:hover {
  transform: translateY(-8px);
  box-shadow: 0 48px 80px rgba(0,0,0,0.5);
}

/* ── CTA Bottom ──────────────────────────────────────────── */
.cf-cta-bottom {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 100px 32px;
  overflow: hidden;
}
.cf-cta-bottom__glow {
  position: absolute;
  width: 500px; height: 500px;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  background: radial-gradient(circle, rgba(249,115,22,0.1) 0%, transparent 70%);
  filter: blur(60px);
  pointer-events: none;
}
.cf-cta-bottom__title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 900;
  letter-spacing: -2px;
  color: #F0EDE8;
  margin: 0 0 16px;
}
.cf-cta-bottom__sub {
  font-size: 16px;
  color: #9A9A9A;
  margin: 0 0 40px;
}

/* ── Footer ──────────────────────────────────────────────── */
.cf-footer {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  padding: 28px 32px;
  border-top: 1px solid rgba(255,255,255,0.05);
  font-size: 12px;
  color: #5A5A5A;
}
.cf-footer__links {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}
.cf-footer__links a {
  color: #5A5A5A;
  text-decoration: none;
  transition: color 0.2s;
}
.cf-footer__links a:hover { color: #F97316; }

/* ── Scroll Reveal ───────────────────────────────────────── */
.reveal {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.reveal.revealed {
  opacity: 1;
  transform: translateY(0);
}

/* ── Hero fade-in ────────────────────────────────────────── */
.cf-fade-1 { animation: cfFadeUp 0.7s 0.1s both ease; }
.cf-fade-2 { animation: cfFadeUp 0.7s 0.25s both ease; }
.cf-fade-3 { animation: cfFadeUp 0.7s 0.4s both ease; }
.cf-fade-4 { animation: cfFadeUp 0.7s 0.55s both ease; }
.cf-fade-5 { animation: cfFadeUp 0.7s 0.7s both ease; }

@keyframes cfFadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes cfPulse {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.65; }
}
@keyframes cfBounce {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(6px); }
}

/* ── Mobile ──────────────────────────────────────────────── */
@media (max-width: 768px) {
  .cf-features { padding: 24px 20px 60px; gap: 80px; }
  .cf-feature { grid-template-columns: 1fr; gap: 40px; }
  .cf-feature--reverse { direction: ltr; }
  .cf-hero__cta { flex-direction: column; align-items: center; }
  .cf-footer { flex-direction: column; align-items: flex-start; }
}
</style>
