<template>
  <div class="nk-root">
    <!-- Nav -->
    <nav class="nk-nav">
      <nuxt-link to="/" class="nk-nav__back">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8L10 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        딸깍공방
      </nuxt-link>
    </nav>

    <!-- Hero -->
    <section class="nk-hero">
      <div class="nk-hero__text">
        <span class="nk-badge nk-fade-1">✦ 사진 스티커 만들기</span>
        <h1 class="nk-hero__title nk-fade-2">사진 속 그 아이만,<br><span class="nk-pink-mark">콕!</span></h1>
        <p class="nk-hero__sub nk-fade-3">우리 아기, 강아지, 고양이, 최애까지.<br>누끼콕이 자동으로 누끼를 따서 스티커로 만들어 드려요.</p>
        <div class="nk-hero__cta nk-fade-4">
          <span class="nk-btn nk-btn--primary" aria-disabled="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.37.6 1.23 0 1.6l-14 8.5c-.66.5-1.6.03-1.6-.8z"/></svg>
            Google Play 출시 준비 중
          </span>
        </div>
      </div>
      <div class="nk-hero__visual nk-fade-3">
        <div class="nk-checker nk-hero__card">
          <img src="/nukkikok/sticker.webp" alt="배경이 지워진 아기 사진 스티커" class="nk-hero__sticker" />
        </div>
      </div>
    </section>

    <!-- Steps -->
    <section class="nk-section">
      <div class="nk-section__head reveal">
        <span class="nk-label">HOW IT WORKS</span>
        <h2 class="nk-section__title">사진 한 장이면 충분해요</h2>
      </div>
      <ol class="nk-steps">
        <li class="nk-step reveal">
          <div class="nk-step__img nk-step__img--photo">
            <img src="/nukkikok/original.webp" alt="원본 사진" loading="lazy" />
          </div>
          <span class="nk-step__num">1</span>
          <h3 class="nk-step__title">사진 고르기</h3>
          <p class="nk-step__desc">앨범에서 사진을 고르고, 필요하면 자르고 돌려요.</p>
        </li>
        <li class="nk-step reveal">
          <div class="nk-step__img nk-checker">
            <img src="/nukkikok/auto.webp" alt="자동으로 추출된 결과" loading="lazy" />
          </div>
          <span class="nk-step__num">2</span>
          <h3 class="nk-step__title">자동으로 콕</h3>
          <p class="nk-step__desc">사진 속 주인공을 알아서 찾아 배경을 지워요.</p>
        </li>
        <li class="nk-step reveal">
          <div class="nk-step__img nk-checker">
            <img src="/nukkikok/sticker.webp" alt="필요 없는 부분을 뺀 완성 스티커" loading="lazy" />
          </div>
          <span class="nk-step__num">3</span>
          <h3 class="nk-step__title">쓱 다듬으면 완성</h3>
          <p class="nk-step__desc">빼고 싶은 곳에 선을 그으면 경계까지 깔끔하게 빠져요.</p>
        </li>
      </ol>
    </section>

    <!-- Features -->
    <section class="nk-section">
      <div class="nk-section__head reveal">
        <span class="nk-label">FEATURES</span>
        <h2 class="nk-section__title">작은 부분까지 꼼꼼하게</h2>
      </div>
      <div class="nk-features">
        <div class="nk-feature reveal">
          <span class="nk-feature__icon">✍️</span>
          <h3 class="nk-feature__title">선 한 번이면 경계까지</h3>
          <p class="nk-feature__desc">더하거나 빼고 싶은 물체에 선을 그으면, 그 물체를 경계까지 찾아 한 번에 반영해요. 붓으로 직접 칠할 수도 있어요.</p>
        </div>
        <div class="nk-feature reveal">
          <span class="nk-feature__icon">🔍</span>
          <h3 class="nk-feature__title">확대하면 더 정밀하게</h3>
          <p class="nk-feature__desc">확대한 부분만 다시 분석해서 목, 귀 옆처럼 작은 곳도 놓치지 않아요.</p>
        </div>
        <div class="nk-feature reveal">
          <span class="nk-feature__icon">💇</span>
          <h3 class="nk-feature__title">머리카락 다듬기</h3>
          <p class="nk-feature__desc">얼굴을 알아보고 머리카락 경계를 자연스럽게 정리해요. 윤곽과 테두리도 부드럽게 다듬을 수 있어요.</p>
        </div>
        <div class="nk-feature nk-feature--accent reveal">
          <span class="nk-feature__icon">🔒</span>
          <h3 class="nk-feature__title">사진은 내 폰 안에서만</h3>
          <p class="nk-feature__desc">모든 사진 처리는 기기 안에서 이뤄져요. 사진을 서버로 보내지 않으니 아이 사진도 안심하고 쓰세요.</p>
        </div>
      </div>
    </section>

    <!-- CTA Bottom -->
    <section class="nk-cta reveal">
      <h2 class="nk-cta__title">곧 만나요</h2>
      <p class="nk-cta__sub">누끼콕은 2026년 11월 Google Play에 먼저 출시할 예정이에요.</p>
    </section>

    <!-- Footer -->
    <footer class="nk-footer">
      <span>© 2026 딸깍공방</span>
      <div class="nk-footer__links">
        <nuxt-link to="/nukkikok/privacy">개인정보처리방침</nuxt-link>
        <span>·</span>
        <nuxt-link to="/nukkikok/terms">이용약관</nuxt-link>
        <span>·</span>
        <nuxt-link to="/nukkikok/delete-account">계정 삭제</nuxt-link>
        <span>·</span>
        <a href="mailto:justinit.service@gmail.com">문의</a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'NukkiKokPage',
  head() {
    return {
      title: '누끼콕 - 아기·반려동물·최애 사진 스티커 만들기',
      meta: [
        { hid: 'description', name: 'description', content: '사진 속 우리 아기, 강아지, 고양이, 최애만 콕! 자동으로 누끼 따서 나만의 스티커로 만들어요.' },
      ],
    }
  },
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
/* ── Base ─────────────────────────────────────────────── */
.nk-root {
  --ink: #111111;
  --ink-soft: #55534F;
  --ink-mute: #8A8781;
  --paper: #FFFFFF;
  --cream: #FBFAF7;
  --checker: #E9E7E2;
  --line: #ECEAE5;
  --pink: #FFC2D1;
  --pink-deep: #C2406A;

  min-height: 100vh;
  background: var(--paper);
  color: var(--ink);
  font-family: 'Pretendard', 'Noto Sans KR', -apple-system, BlinkMacSystemFont, sans-serif;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

/* 투명 배경을 뜻하는 바둑판 (앱 아이콘과 같은 색) */
.nk-checker {
  background-color: var(--cream);
  background-image:
    linear-gradient(45deg, var(--checker) 25%, transparent 25%),
    linear-gradient(-45deg, var(--checker) 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, var(--checker) 75%),
    linear-gradient(-45deg, transparent 75%, var(--checker) 75%);
  background-size: 24px 24px;
  background-position: 0 0, 0 12px, 12px -12px, -12px 0;
}

/* ── Nav ──────────────────────────────────────────────── */
.nk-nav {
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 18px 32px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--line);
}
.nk-nav__back {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--ink-soft);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.2s;
}
.nk-nav__back:hover { color: var(--ink); }

/* ── Hero ─────────────────────────────────────────────── */
.nk-hero {
  max-width: 1100px;
  margin: 0 auto;
  padding: 88px 32px 96px;
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: 56px;
  align-items: center;
}
.nk-hero__text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
}
.nk-badge {
  display: inline-flex;
  padding: 7px 16px;
  border-radius: 999px;
  background: var(--pink);
  color: var(--ink);
  font-size: 13px;
  font-weight: 700;
}
.nk-hero__title {
  font-size: clamp(2.5rem, 6.4vw, 4.4rem);
  font-weight: 800;
  line-height: 1.12;
  letter-spacing: -0.04em;
  margin: 0;
}
.nk-pink-mark {
  background: linear-gradient(transparent 58%, var(--pink) 58%, var(--pink) 92%, transparent 92%);
  padding: 0 4px;
}
.nk-hero__sub {
  font-size: clamp(1rem, 2.2vw, 1.15rem);
  line-height: 1.75;
  color: var(--ink-soft);
  margin: 0;
}
.nk-hero__cta { margin-top: 8px; }
.nk-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 26px;
  border-radius: 999px;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
}
.nk-btn--primary {
  background: var(--ink);
  color: #fff;
}
.nk-btn[aria-disabled='true'] { cursor: default; }

.nk-hero__visual {
  display: flex;
  justify-content: center;
}
.nk-hero__card {
  width: min(100%, 420px);
  aspect-ratio: 4 / 5;
  border-radius: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 28px;
  border: 1px solid var(--line);
  transform: rotate(2deg);
}
.nk-hero__sticker {
  display: block;
  width: 100%;
  height: auto;
  filter: drop-shadow(0 14px 22px rgba(17, 17, 17, 0.18));
  transform: rotate(-5deg);
  animation: nkFloat 4s ease-in-out infinite;
}

/* ── Sections ─────────────────────────────────────────── */
.nk-section {
  max-width: 1100px;
  margin: 0 auto;
  padding: 56px 32px;
}
.nk-section__head { margin-bottom: 40px; }
.nk-label {
  display: block;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.15em;
  color: var(--pink-deep);
  margin-bottom: 12px;
}
.nk-section__title {
  font-size: clamp(1.7rem, 3.6vw, 2.4rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  margin: 0;
}

/* ── Steps ────────────────────────────────────────────── */
.nk-steps {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.nk-step { position: relative; }
.nk-step__img {
  aspect-ratio: 3 / 4;
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid var(--line);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}
.nk-step__img img {
  display: block;
  max-width: 84%;
  max-height: 84%;
  object-fit: contain;
}
.nk-step__img--photo img {
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.nk-step__num {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--ink);
  color: #fff;
  font-size: 13px;
  font-weight: 700;
  margin-bottom: 12px;
}
.nk-step__title {
  font-size: 19px;
  font-weight: 700;
  margin: 0 0 6px;
}
.nk-step__desc {
  font-size: 15px;
  line-height: 1.65;
  color: var(--ink-soft);
  margin: 0;
}

/* ── Features ─────────────────────────────────────────── */
.nk-features {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
.nk-feature {
  padding: 28px;
  border-radius: 24px;
  background: var(--cream);
  border: 1px solid var(--line);
}
.nk-feature--accent {
  background: #FFF4F7;
  border-color: var(--pink);
}
.nk-feature__icon {
  display: block;
  font-size: 26px;
  margin-bottom: 14px;
}
.nk-feature__title {
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 8px;
}
.nk-feature__desc {
  font-size: 15px;
  line-height: 1.7;
  color: var(--ink-soft);
  margin: 0;
}

/* ── CTA ──────────────────────────────────────────────── */
.nk-cta {
  max-width: 1100px;
  margin: 40px auto 0;
  padding: 80px 32px 96px;
  text-align: center;
}
.nk-cta__title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  margin: 0 0 12px;
}
.nk-cta__sub {
  font-size: 16px;
  color: var(--ink-soft);
  margin: 0;
}

/* ── Footer ───────────────────────────────────────────── */
.nk-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  padding: 28px 32px;
  border-top: 1px solid var(--line);
  font-size: 12px;
  color: var(--ink-mute);
}
.nk-footer__links {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}
.nk-footer__links a {
  color: var(--ink-mute);
  text-decoration: none;
  transition: color 0.2s;
}
.nk-footer__links a:hover { color: var(--pink-deep); }

/* ── Motion ───────────────────────────────────────────── */
.reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.reveal.revealed {
  opacity: 1;
  transform: translateY(0);
}
.nk-fade-1 { animation: nkFadeUp 0.7s 0.1s both ease; }
.nk-fade-2 { animation: nkFadeUp 0.7s 0.25s both ease; }
.nk-fade-3 { animation: nkFadeUp 0.7s 0.4s both ease; }
.nk-fade-4 { animation: nkFadeUp 0.7s 0.55s both ease; }

@keyframes nkFadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes nkFloat {
  0%, 100% { transform: rotate(-5deg) translateY(0); }
  50%      { transform: rotate(-5deg) translateY(-10px); }
}
@media (prefers-reduced-motion: reduce) {
  .nk-hero__sticker,
  .nk-fade-1, .nk-fade-2, .nk-fade-3, .nk-fade-4 { animation: none; }
  .reveal { opacity: 1; transform: none; transition: none; }
}

/* ── Mobile ───────────────────────────────────────────── */
@media (max-width: 768px) {
  .nk-nav { padding: 16px 20px; }
  .nk-hero {
    grid-template-columns: 1fr;
    padding: 48px 20px 64px;
    gap: 48px;
  }
  .nk-hero__card { width: min(100%, 340px); }
  .nk-section { padding: 40px 20px; }
  .nk-steps { grid-template-columns: 1fr; gap: 40px; }
  .nk-step__img { max-width: 360px; }
  .nk-features { grid-template-columns: 1fr; }
  .nk-cta { padding: 56px 20px 72px; }
  .nk-footer { flex-direction: column; align-items: flex-start; padding: 24px 20px; }
}
</style>
