<template>
  <div class="mm-root">
    <!-- Soft color blooms -->
    <div class="mm-bloom mm-bloom--a" aria-hidden="true"></div>
    <div class="mm-bloom mm-bloom--b" aria-hidden="true"></div>
    <div class="mm-bloom mm-bloom--c" aria-hidden="true"></div>

    <!-- Nav -->
    <nav class="mm-nav">
      <nuxt-link to="/" class="mm-nav__back">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8L10 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        딸깍공방
      </nuxt-link>
    </nav>

    <!-- Hero -->
    <section class="mm-hero">
      <span class="mm-badge mm-fade-1">💍 결혼 성향 심리분석 서비스</span>
      <h1 class="mm-hero__title mm-fade-2">결혼 전에,<br><span class="mm-grad">서로의 마음</span>을 확인하세요</h1>
      <p class="mm-hero__sub mm-fade-3">
        80개의 질문에 답하고,<br class="mm-nl">
        상대방의 답변과 나란히 비교해보세요.<br>
        미뤄왔던 이야기를 꺼내기에<br class="mm-nl">
        가장 좋은 방법입니다.
      </p>
      <div class="mm-cta mm-fade-4">
        <a :href="appStore" class="mm-btn mm-btn--primary" target="_blank" rel="noopener">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
          App Store
        </a>
        <a :href="playStore" class="mm-btn mm-btn--ghost" target="_blank" rel="noopener">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.37.6 1.23 0 1.6l-14 8.5c-.66.5-1.6.03-1.6-.8z"/></svg>
          Google Play
        </a>
      </div>
    </section>

    <!-- Steps -->
    <section class="mm-steps reveal">
      <h2 class="mm-section-title">세 단계면 충분해요</h2>
      <div class="mm-steps__grid">
        <div class="mm-card mm-step">
          <span class="mm-step__no">01</span>
          <h3 class="mm-step__title">80문항을 풀어요</h3>
          <p class="mm-step__desc">
            결혼식부터 갈등, 애정까지<br class="mm-nl">
            주제별 문제지 총 80문항.<br>
            생각보다 답하기 쉽지 않은 질문들입니다.
          </p>
        </div>
        <div class="mm-card mm-step">
          <span class="mm-step__no">02</span>
          <h3 class="mm-step__title">상대방을 초대해요</h3>
          <p class="mm-step__desc">
            링크 하나로 연결.<br>
            두 사람 모두 제출하면<br class="mm-nl">
            서로의 답변이 문제지 위에 겹쳐 보입니다.
          </p>
        </div>
        <div class="mm-card mm-step">
          <span class="mm-step__no">03</span>
          <h3 class="mm-step__title">성향을 비교해요</h3>
          <p class="mm-step__desc">
            6가지 축으로 그려진 그래프에서<br class="mm-nl">
            우리가 어디서 다른지<br class="mm-nl">
            한눈에 확인하세요.
          </p>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="mm-features">

      <div class="mm-feature reveal">
        <div class="mm-feature__text">
          <span class="mm-feature__label" style="color:#F0779B">QUESTIONS</span>
          <h3 class="mm-feature__title">문제를 풀며<br>생각을 정리해요</h3>
          <p class="mm-feature__desc">
            “너에게 결혼은 어떤 의미야?”<br>
            막연했던 생각도 보기를 고르다 보면<br class="mm-nl">
            또렷해집니다.<br>
            정답이 없으니 편하게,<br class="mm-nl">
            0개도 N개도 고를 수 있어요.
          </p>
        </div>
        <div class="mm-shot"><img src="/marriage-mind/images/quiz.jpg" alt="문제 풀이 화면" /></div>
      </div>

      <div class="mm-feature mm-feature--reverse reveal">
        <div class="mm-feature__text">
          <span class="mm-feature__label" style="color:#5FD9B4">INVITE</span>
          <h3 class="mm-feature__title">상대방을 초대해<br>서로를 확인해요</h3>
          <p class="mm-feature__desc">
            두 사람의 체크 표시가<br class="mm-nl">
            같은 문제지 위에 나란히 놓입니다.<br>
            같은 곳을 보고 있었는지, 어디서 갈라지는지<br class="mm-nl">
            문항 단위로 보여드려요.
          </p>
        </div>
        <div class="mm-shot"><img src="/marriage-mind/images/compare.jpg" alt="상대방 답변 비교 화면" /></div>
      </div>

      <div class="mm-feature reveal">
        <div class="mm-feature__text">
          <span class="mm-feature__label" style="color:#8B7BF0">ANALYSIS</span>
          <h3 class="mm-feature__title">분석 결과로<br>성향을 비교해요</h3>
          <p class="mm-feature__desc">
            가정 · 전통 · 현실 · 원칙 · 자유 · 낭만.<br>
            여섯 개의 축으로 그려진 두 사람의 도형이<br class="mm-nl">
            얼마나 겹치는지 살펴보세요.<br>
            유형별 해설도 함께 드립니다.
          </p>
          <div class="mm-axis">
            <span v-for="axis in axes" :key="axis" class="mm-axis__chip">{{ axis }}</span>
          </div>
        </div>
        <div class="mm-shot"><img src="/marriage-mind/images/result.jpg" alt="성향 분석 결과 화면" /></div>
      </div>

      <div class="mm-feature mm-feature--reverse reveal">
        <div class="mm-feature__text">
          <span class="mm-feature__label" style="color:#F5A05A">TOPICS</span>
          <h3 class="mm-feature__title">주제별 문제지,<br>미뤄둔 대화들</h3>
          <p class="mm-feature__desc">
            결혼식 준비, 사소한 취향, 싸움의 방식,<br class="mm-nl">
            변하지 않을 애정까지.<br>
            언젠가는 해야 하지만 먼저 꺼내기 어려웠던 이야기를<br class="mm-nl">
            앱이 대신 물어봅니다.
          </p>
          <div class="mm-axis">
            <span v-for="topic in topics" :key="topic" class="mm-axis__chip">#{{ topic }}</span>
          </div>
        </div>
        <div class="mm-shot"><img src="/marriage-mind/images/home.jpg" alt="주제별 문제지 목록 화면" /></div>
      </div>

    </section>

    <!-- CTA Bottom -->
    <section class="mm-cta-bottom reveal">
      <h2 class="mm-cta-bottom__title">누구와 결혼하느냐만큼<br><span class="mm-grad">어떤 결혼을 하느냐</span>도 중요하니까</h2>
      <p class="mm-cta-bottom__sub">지금 시작해서, 조금 더 준비된 결혼으로.</p>
      <div class="mm-cta">
        <a :href="appStore" class="mm-btn mm-btn--primary" target="_blank" rel="noopener">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
          App Store
        </a>
        <a :href="playStore" class="mm-btn mm-btn--ghost" target="_blank" rel="noopener">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.37.6 1.23 0 1.6l-14 8.5c-.66.5-1.6.03-1.6-.8z"/></svg>
          Google Play
        </a>
      </div>
    </section>

    <!-- Footer -->
    <footer class="mm-footer">
      <span>© 2024 Just Init. All rights reserved.</span>
      <div class="mm-footer__links">
        <nuxt-link to="/marriage-mind/privacy">개인정보처리방침</nuxt-link>
        <span>·</span>
        <nuxt-link to="/marriage-mind/terms">이용약관</nuxt-link>
        <span>·</span>
        <a href="mailto:justinit.service@gmail.com">문의</a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'MarriageMindPage',
  data() {
    return {
      appStore: 'https://apps.apple.com/kr/app/id1529746697',
      playStore: 'https://play.google.com/store/apps/details?id=com.brenin.marriagemind',
      axes: ['가정', '전통', '현실', '원칙', '자유', '낭만'],
      topics: ['결혼식', '취향', '갈등', '애정'],
    }
  },
  head() {
    return {
      title: '결혼하는 마음 · 결혼 성향 심리분석',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '80문항으로 알아보는 우리 두 사람의 결혼 성향. 상대방을 초대해 답변을 비교하고 대화를 시작하세요.',
        },
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
.mm-root {
  position: relative;
  min-height: 100vh;
  background: #F4F5F7;
  color: #2E3040;
  font-family: 'Pretendard', 'Noto Sans KR', -apple-system, BlinkMacSystemFont, sans-serif;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
  /* 한글이 단어 중간에서 끊기지 않도록 */
  word-break: keep-all;
}

/* 구절 단위 줄바꿈: 좁은 화면에서는 자연스러운 흐름에 맡긴다 */
.mm-nl { display: none; }
@media (min-width: 861px) {
  .mm-nl { display: inline; }
}

/* ── Color blooms ─────────────────────────────────────── */
.mm-bloom {
  position: fixed;
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
  filter: blur(80px);
}
.mm-bloom--a {
  width: 620px; height: 620px;
  top: -160px; left: -120px;
  background: radial-gradient(circle, rgba(139,123,240,0.18) 0%, transparent 70%);
}
.mm-bloom--b {
  width: 520px; height: 520px;
  top: 40%; right: -140px;
  background: radial-gradient(circle, rgba(95,217,180,0.16) 0%, transparent 70%);
}
.mm-bloom--c {
  width: 560px; height: 560px;
  bottom: -120px; left: 40%;
  background: radial-gradient(circle, rgba(240,119,155,0.12) 0%, transparent 70%);
}

/* ── Nav ──────────────────────────────────────────────── */
.mm-nav {
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 20px 32px;
  background: rgba(244,245,247,0.82);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255,255,255,0.7);
}
.mm-nav__back {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #8A8FA3;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.2s;
}
.mm-nav__back:hover { color: #8B7BF0; }

/* ── Hero ─────────────────────────────────────────────── */
.mm-hero {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 24px;
  padding: 90px 24px 0;
}
.mm-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 22px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 700;
  color: #6F6A8F;
  background: #F4F5F7;
  box-shadow: 4px 4px 10px rgba(174,178,196,0.45), -4px -4px 10px #FFFFFF;
}
.mm-hero__title {
  font-size: clamp(2.2rem, 6.5vw, 4rem);
  font-weight: 800;
  line-height: 1.22;
  letter-spacing: -0.045em;
  margin: 0;
  color: #23253A;
}
.mm-grad {
  background: linear-gradient(100deg, #8B7BF0 0%, #5FD9B4 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.mm-hero__sub {
  font-size: clamp(0.95rem, 2.2vw, 1.12rem);
  font-weight: 400;
  line-height: 1.85;
  color: #7A7E92;
  margin: 0;
  max-width: 620px;
}

/* ── Buttons ──────────────────────────────────────────── */
.mm-cta {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 8px;
}
.mm-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  border-radius: 999px;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;
}
.mm-btn--primary {
  background: linear-gradient(100deg, #8B7BF0 0%, #6FC9E0 60%, #5FD9B4 100%);
  color: #FFFFFF;
  box-shadow: 0 10px 24px -8px rgba(139,123,240,0.65);
}
.mm-btn--primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 16px 30px -8px rgba(139,123,240,0.75);
}
.mm-btn--ghost {
  background: #F4F5F7;
  color: #4A4D63;
  box-shadow: 5px 5px 12px rgba(174,178,196,0.5), -5px -5px 12px #FFFFFF;
}
.mm-btn--ghost:hover {
  transform: translateY(-2px);
  color: #8B7BF0;
}

/* ── Hero art ─────────────────────────────────────────── */
/* ── Section title ────────────────────────────────────── */
.mm-section-title {
  font-size: clamp(1.6rem, 4vw, 2.3rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  color: #23253A;
  text-align: center;
  margin: 0 0 48px;
}

/* ── Neumorphic card ──────────────────────────────────── */
.mm-card {
  background: #F4F5F7;
  border-radius: 28px;
  padding: 34px 30px;
  box-shadow: 9px 9px 22px rgba(174,178,196,0.5), -9px -9px 22px #FFFFFF;
  transition: transform 0.3s, box-shadow 0.3s;
}
.mm-card:hover {
  transform: translateY(-6px);
  box-shadow: 12px 12px 28px rgba(174,178,196,0.55), -12px -12px 28px #FFFFFF;
}

/* ── Steps ────────────────────────────────────────────── */
.mm-steps {
  position: relative;
  z-index: 1;
  max-width: 1060px;
  margin: 0 auto;
  padding: 90px 32px 20px;
}
.mm-steps__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.mm-step__no {
  display: block;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.12em;
  margin-bottom: 14px;
  background: linear-gradient(100deg, #8B7BF0, #5FD9B4);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.mm-step__title {
  font-size: 19px;
  font-weight: 700;
  letter-spacing: -0.03em;
  color: #23253A;
  margin: 0 0 12px;
}
.mm-step__desc {
  font-size: 14.5px;
  line-height: 1.85;
  color: #7A7E92;
  margin: 0;
}

/* ── Features ─────────────────────────────────────────── */
.mm-features {
  position: relative;
  z-index: 1;
  max-width: 1060px;
  margin: 0 auto;
  padding: 80px 32px 40px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}
.mm-feature {
  display: grid;
  grid-template-columns: 1fr 0.85fr;
  gap: 48px;
  align-items: center;
}
.mm-feature--reverse { direction: rtl; }
.mm-feature--reverse > * { direction: ltr; }

.mm-feature__label {
  display: block;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.16em;
  margin-bottom: 14px;
}
.mm-feature__title {
  font-size: clamp(1.6rem, 3.2vw, 2.2rem);
  font-weight: 800;
  letter-spacing: -0.045em;
  line-height: 1.3;
  color: #23253A;
  margin: 0 0 18px;
}
.mm-feature__desc {
  font-size: 15.5px;
  line-height: 1.95;
  color: #7A7E92;
  margin: 0;
}

/* ── Chips ────────────────────────────────────────────── */
.mm-axis {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 22px;
}
.mm-axis__chip {
  padding: 7px 15px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 600;
  color: #6F6A8F;
  background: #F4F5F7;
  box-shadow: inset 3px 3px 7px rgba(174,178,196,0.5), inset -3px -3px 7px #FFFFFF;
}

/* ── Screenshot (top headline cropped away) ───────────── */
.mm-shot {
  position: relative;
  width: 100%;
  max-width: 340px;
  margin: 0 auto;
  aspect-ratio: 1242 / 1788;
  overflow: hidden;
}
.mm-shot img {
  display: block;
  width: 100%;
  height: auto;
  margin-top: -33.8%;
}

/* ── CTA Bottom ───────────────────────────────────────── */
.mm-cta-bottom {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 100px 32px;
}
.mm-cta-bottom__title {
  font-size: clamp(1.7rem, 4.4vw, 2.8rem);
  font-weight: 800;
  letter-spacing: -0.045em;
  line-height: 1.35;
  color: #23253A;
  margin: 0 0 16px;
}
.mm-cta-bottom__sub {
  font-size: 15.5px;
  color: #7A7E92;
  margin: 0 0 36px;
}

/* ── Footer ───────────────────────────────────────────── */
.mm-footer {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  padding: 28px 32px;
  border-top: 1px solid rgba(174,178,196,0.28);
  font-size: 12px;
  color: #9A9EB0;
}
.mm-footer__links {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}
.mm-footer__links a {
  color: #9A9EB0;
  text-decoration: none;
  transition: color 0.2s;
}
.mm-footer__links a:hover { color: #8B7BF0; }

/* ── Reveal & fade ────────────────────────────────────── */
.reveal {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.reveal.revealed {
  opacity: 1;
  transform: translateY(0);
}
.mm-fade-1 { animation: mmFadeUp 0.7s 0.05s both ease; }
.mm-fade-2 { animation: mmFadeUp 0.7s 0.2s both ease; }
.mm-fade-3 { animation: mmFadeUp 0.7s 0.35s both ease; }
.mm-fade-4 { animation: mmFadeUp 0.7s 0.5s both ease; }

@keyframes mmFadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ── Mobile ───────────────────────────────────────────── */
@media (max-width: 860px) {
  .mm-steps__grid { grid-template-columns: 1fr; }
  .mm-feature { grid-template-columns: 1fr; gap: 32px; }
  .mm-feature--reverse { direction: ltr; }
  .mm-feature__text { text-align: center; }
  .mm-axis { justify-content: center; }
  .mm-hero { padding-top: 60px; }
  .mm-steps { padding: 70px 20px 10px; }
  .mm-features { padding: 60px 20px 20px; gap: 64px; }
  .mm-shot { max-width: 290px; }
  .mm-footer { flex-direction: column; align-items: flex-start; }
}
</style>
