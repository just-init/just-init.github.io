<template>
  <div class="hs-root">
    <!-- Noise overlay -->
    <div class="hs-noise" aria-hidden="true"></div>

    <!-- Glow orbs -->
    <div class="hs-orb hs-orb--hero" aria-hidden="true"></div>
    <div class="hs-orb hs-orb--mid" aria-hidden="true"></div>
    <div class="hs-orb hs-orb--bottom" aria-hidden="true"></div>

    <!-- Nav -->
    <nav class="hs-nav">
      <nuxt-link to="/" class="hs-nav__back">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8L10 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        딸깍공방
      </nuxt-link>
    </nav>

    <!-- Hero -->
    <section class="hs-hero">
      <div class="hs-hero__inner">
        <span class="hs-badge hs-fade-1">🍯 잠 못 드는 밤을 위한 수면 앱</span>
        <h1 class="hs-hero__title hs-fade-2">잠들지 못하는 밤,<br><span class="hs-gold">꿀잠</span>이 함께합니다</h1>
        <p class="hs-hero__sub hs-fade-3">수면 명상, 사운드, 이야기까지<br>잠드는 데 필요한 모든 것</p>
        <div class="hs-hero__cta hs-fade-4">
          <a href="https://apps.apple.com/app/id6740052737" class="hs-btn hs-btn--primary" target="_blank" rel="noopener">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            App Store
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.brenin.honeysleep" class="hs-btn hs-btn--ghost" target="_blank" rel="noopener">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.37.6 1.23 0 1.6l-14 8.5c-.66.5-1.6.03-1.6-.8z"/></svg>
            Google Play
          </a>
        </div>
        <div class="hs-scroll-hint hs-fade-5" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 4v12M10 16l-4-4M10 16l4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="hs-features">

      <!-- 1. 수면 루틴 -->
      <div class="hs-feature reveal">
        <div class="hs-feature__text">
          <span class="hs-feature__label" style="color:#FBBF24">SLEEP ROUTINE</span>
          <h3 class="hs-feature__title">내 몸의 수면 리듬 만들기</h3>
          <p class="hs-feature__desc">취침 알림과 기상 알림으로 규칙적인 수면 루틴을 형성하세요. 매일 같은 시간에 자면 몸이 달라집니다.</p>
        </div>
        <div class="hs-feature__phone" style="--accent:#FBBF24">
          <div class="hs-phone-frame">
            <div class="hs-phone-screen" style="background:linear-gradient(160deg,#1f1a0e 0%,#0F1118 100%)">
              <div class="hs-screen-content">
                <div class="hs-screen-icon" style="background:rgba(251,191,36,0.12);color:#FBBF24">⏰</div>
                <div class="hs-screen-title" style="color:#FBBF24">수면 루틴</div>
                <div class="hs-screen-sub">취침 · 기상 알림</div>
                <div class="hs-routine-times">
                  <div class="hs-routine-time">
                    <span class="hs-routine-label">취침</span>
                    <span class="hs-routine-val">11:30 PM</span>
                  </div>
                  <div class="hs-routine-divider"></div>
                  <div class="hs-routine-time">
                    <span class="hs-routine-label">기상</span>
                    <span class="hs-routine-val">07:00 AM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 2. 마음 비우기 -->
      <div class="hs-feature hs-feature--reverse reveal">
        <div class="hs-feature__text">
          <span class="hs-feature__label" style="color:#94A3B8">MIND DUMP</span>
          <h3 class="hs-feature__title">걱정은 여기 두고 주무세요</h3>
          <p class="hs-feature__desc">잠들기 전 머릿속을 가득 채운 걱정과 생각을 글로 꺼내놓으세요. 쓰고 나면 한결 가벼워집니다.</p>
        </div>
        <div class="hs-feature__phone" style="--accent:#94A3B8">
          <div class="hs-phone-frame">
            <div class="hs-phone-screen" style="background:linear-gradient(160deg,#14161e 0%,#0F1118 100%)">
              <div class="hs-screen-content">
                <div class="hs-screen-icon" style="background:rgba(148,163,184,0.12);color:#94A3B8">✍️</div>
                <div class="hs-screen-title" style="color:#94A3B8">마음 비우기</div>
                <div class="hs-screen-sub">저널링 · 마음 정리</div>
                <div class="hs-journal-lines">
                  <div class="hs-journal-line" style="width:85%"></div>
                  <div class="hs-journal-line" style="width:70%"></div>
                  <div class="hs-journal-line" style="width:90%"></div>
                  <div class="hs-journal-line" style="width:60%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 3. 수면 이야기 -->
      <div class="hs-feature reveal">
        <div class="hs-feature__text">
          <span class="hs-feature__label" style="color:#F9A8D4">SLEEP STORIES</span>
          <h3 class="hs-feature__title">듣다 보면 어느새 잠들어요</h3>
          <p class="hs-feature__desc">전문 성우가 읽어주는 포근한 이야기. 숲속 산책, 달빛 바다, 별빛 열차 — 이야기 속을 떠돌다 꿈속으로 넘어갑니다.</p>
        </div>
        <div class="hs-feature__phone" style="--accent:#F9A8D4">
          <div class="hs-phone-frame">
            <div class="hs-phone-screen" style="background:linear-gradient(160deg,#1f1320 0%,#0F1118 100%)">
              <div class="hs-screen-content">
                <div class="hs-screen-icon" style="background:rgba(249,168,212,0.12);color:#F9A8D4">📖</div>
                <div class="hs-screen-title" style="color:#F9A8D4">수면 이야기</div>
                <div class="hs-screen-sub">성우 낭독 · 22편</div>
                <div class="hs-story-list">
                  <span>안개 낀 숲속 산책</span>
                  <span>달빛 아래 파도 소리</span>
                  <span>은하수 열차 여행</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 4. 수면 명상 -->
      <div class="hs-feature hs-feature--reverse reveal">
        <div class="hs-feature__text">
          <span class="hs-feature__label" style="color:#A78BFA">SLEEP MEDITATION</span>
          <h3 class="hs-feature__title">뇌가 직접 쉬는 10분</h3>
          <p class="hs-feature__desc">억지로 잠들려 하지 않아도 돼요. 신경과학 기반 NSDR 기법이 몸과 뇌를 자연스럽게 이완 상태로 이끌어드립니다. 10~30분이면 충분합니다.</p>
        </div>
        <div class="hs-feature__phone" style="--accent:#A78BFA">
          <div class="hs-phone-frame">
            <div class="hs-phone-screen" style="background:linear-gradient(160deg,#1e1730 0%,#0F1118 100%)">
              <div class="hs-screen-content">
                <div class="hs-screen-icon" style="background:rgba(167,139,250,0.15);color:#A78BFA">🧘</div>
                <div class="hs-screen-title" style="color:#A78BFA">수면 명상</div>
                <div class="hs-screen-sub">NSDR · 깊은 이완</div>
                <div class="hs-screen-tags">
                  <span>10분</span><span>20분</span><span>30분</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 5. 수면 사운드 -->
      <div class="hs-feature reveal">
        <div class="hs-feature__text">
          <span class="hs-feature__label" style="color:#6EE7B7">SLEEP SOUNDS</span>
          <h3 class="hs-feature__title">17가지 자연의 소리</h3>
          <p class="hs-feature__desc">빗소리, 파도, 모닥불, 바이노럴 비트. 오늘 밤 기분에 맞는 소리를 골라 나만의 수면 환경을 만드세요. 소리가 잠을 데려옵니다.</p>
        </div>
        <div class="hs-feature__phone" style="--accent:#6EE7B7">
          <div class="hs-phone-frame">
            <div class="hs-phone-screen" style="background:linear-gradient(160deg,#0e1f1a 0%,#0F1118 100%)">
              <div class="hs-screen-content">
                <div class="hs-screen-icon" style="background:rgba(110,231,183,0.12);color:#6EE7B7">🎵</div>
                <div class="hs-screen-title" style="color:#6EE7B7">수면 사운드</div>
                <div class="hs-screen-sub">자연음 · 바이노럴</div>
                <div class="hs-sound-grid">
                  <span>🌧️</span><span>🌊</span><span>🔥</span><span>🌿</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>


    <!-- CTA Bottom -->
    <section class="hs-cta-bottom reveal">
      <div class="hs-cta-bottom__glow" aria-hidden="true"></div>
      <h2 class="hs-cta-bottom__title">오늘 밤은 꿀잠 자세요</h2>
      <p class="hs-cta-bottom__sub">첫 7일은 무료. 언제든 취소 가능.</p>
      <div class="hs-hero__cta">
        <a href="https://apps.apple.com/app/id6740052737" class="hs-btn hs-btn--primary" target="_blank" rel="noopener">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
          App Store
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.brenin.honeysleep" class="hs-btn hs-btn--ghost" target="_blank" rel="noopener">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.37.6 1.23 0 1.6l-14 8.5c-.66.5-1.6.03-1.6-.8z"/></svg>
          Google Play
        </a>
      </div>
    </section>

    <!-- Footer -->
    <footer class="hs-footer">
      <span>© 2026 딸깍공방</span>
      <div class="hs-footer__links">
        <nuxt-link to="/honey-sleep/privacy">개인정보처리방침</nuxt-link>
        <span>·</span>
        <nuxt-link to="/honey-sleep/terms">이용약관</nuxt-link>
        <span>·</span>
        <nuxt-link to="/honey-sleep/delete-account">계정 삭제</nuxt-link>
        <span>·</span>
        <a href="mailto:justinit.service@gmail.com">문의</a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HoneySleepPage',
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
/* ── Reset & Base ─────────────────────────────────────── */
.hs-root {
  position: relative;
  min-height: 100vh;
  background: #0F1118;
  color: #F0ECE4;
  font-family: 'Noto Sans KR', -apple-system, BlinkMacSystemFont, sans-serif;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

/* ── Noise ────────────────────────────────────────────── */
.hs-noise {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  opacity: 0.025;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 128px 128px;
}

/* ── Orbs ─────────────────────────────────────────────── */
.hs-orb {
  position: fixed;
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
}
.hs-orb--hero {
  width: 700px; height: 700px;
  top: -200px; left: 50%;
  transform: translateX(-50%);
  background: radial-gradient(circle, rgba(245,197,66,0.07) 0%, transparent 70%);
  filter: blur(60px);
}
.hs-orb--mid {
  width: 500px; height: 500px;
  top: 60%; right: -100px;
  background: radial-gradient(circle, rgba(167,139,250,0.06) 0%, transparent 70%);
  filter: blur(80px);
}
.hs-orb--bottom {
  width: 600px; height: 600px;
  bottom: 0; left: 50%;
  transform: translateX(-50%);
  background: radial-gradient(circle, rgba(245,197,66,0.06) 0%, transparent 70%);
  filter: blur(80px);
}

/* ── Nav ──────────────────────────────────────────────── */
.hs-nav {
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 20px 32px;
  background: rgba(15,17,24,0.8);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255,255,255,0.04);
}
.hs-nav__back {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #A09882;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.2s;
}
.hs-nav__back:hover { color: #F5C542; }

/* ── Hero ─────────────────────────────────────────────── */
.hs-hero {
  position: relative;
  z-index: 1;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 24px;
  text-align: center;
}
.hs-hero__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  max-width: 680px;
}
.hs-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 20px;
  border: 1px solid rgba(245,197,66,0.25);
  border-radius: 999px;
  font-size: 13px;
  font-weight: 600;
  color: #F5C542;
  background: rgba(245,197,66,0.06);
  letter-spacing: 0.02em;
  animation: hsPulse 2.4s ease-in-out infinite;
}
.hs-hero__title {
  font-size: clamp(2.4rem, 7vw, 4.5rem);
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -2px;
  color: #F0ECE4;
  margin: 0;
}
.hs-gold { color: #F5C542; }
.hs-hero__sub {
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  font-weight: 300;
  line-height: 1.7;
  color: #A09882;
  margin: 0;
}

/* ── CTA Buttons ──────────────────────────────────────── */
.hs-hero__cta {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 8px;
}
.hs-btn {
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
.hs-btn--primary {
  background: #F5C542;
  color: #0F1118;
  box-shadow: 0 4px 24px rgba(245,197,66,0.2);
}
.hs-btn--primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(245,197,66,0.35);
}
.hs-btn--ghost {
  background: transparent;
  color: #F0ECE4;
  border: 1px solid rgba(255,255,255,0.15);
}
.hs-btn--ghost:hover {
  transform: translateY(-2px);
  border-color: rgba(255,255,255,0.3);
  background: rgba(255,255,255,0.04);
}

/* ── Scroll hint ──────────────────────────────────────── */
.hs-scroll-hint {
  color: rgba(160,152,130,0.4);
  animation: hsBounce 1.8s ease-in-out infinite;
  margin-top: 16px;
}

/* ── Features ─────────────────────────────────────────── */
.hs-features {
  position: relative;
  z-index: 1;
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 32px 80px;
  display: flex;
  flex-direction: column;
  gap: 120px;
}
.hs-feature {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
}
.hs-feature--reverse { direction: rtl; }
.hs-feature--reverse > * { direction: ltr; }

.hs-feature__label {
  display: block;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 16px;
}
.hs-feature__title {
  font-size: clamp(1.8rem, 3.5vw, 2.6rem);
  font-weight: 900;
  letter-spacing: -1.5px;
  line-height: 1.15;
  color: #F0ECE4;
  margin: 0 0 20px;
}
.hs-feature__desc {
  font-size: 16px;
  font-weight: 300;
  line-height: 1.8;
  color: #A09882;
  margin: 0;
}

/* ── Phone Frame ──────────────────────────────────────── */
.hs-feature__phone {
  display: flex;
  justify-content: center;
}
.hs-phone-frame {
  width: 240px;
  border-radius: 36px;
  padding: 12px;
  background: #1A1D26;
  border: 1px solid rgba(255,255,255,0.08);
  box-shadow:
    0 0 0 1px rgba(255,255,255,0.04),
    0 32px 64px rgba(0,0,0,0.5),
    0 0 60px -10px color-mix(in srgb, var(--accent, #F5C542) 20%, transparent);
  transition: transform 0.3s, box-shadow 0.3s;
}
.hs-phone-frame:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow:
    0 0 0 1px rgba(255,255,255,0.08),
    0 48px 80px rgba(0,0,0,0.6),
    0 0 80px -5px color-mix(in srgb, var(--accent, #F5C542) 30%, transparent);
}
.hs-phone-screen {
  border-radius: 26px;
  height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.hs-screen-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 24px;
  text-align: center;
  width: 100%;
}
.hs-screen-icon {
  width: 56px; height: 56px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  margin-bottom: 4px;
}
.hs-screen-title {
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.5px;
}
.hs-screen-sub {
  font-size: 11px;
  color: #7A7060;
  font-weight: 400;
}
.hs-screen-tags {
  display: flex;
  gap: 6px;
  margin-top: 8px;
}
.hs-screen-tags span {
  padding: 5px 12px;
  border-radius: 999px;
  background: rgba(255,255,255,0.06);
  font-size: 11px;
  color: #A09882;
}
.hs-sound-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  margin-top: 8px;
  width: 100%;
}
.hs-sound-grid span {
  background: rgba(255,255,255,0.05);
  border-radius: 10px;
  font-size: 20px;
  padding: 10px 0;
  text-align: center;
}
.hs-story-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 8px;
  width: 100%;
}
.hs-story-list span {
  background: rgba(255,255,255,0.05);
  border-radius: 8px;
  font-size: 10px;
  color: #A09882;
  padding: 7px 10px;
  text-align: left;
}
.hs-routine-times {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 12px;
}
.hs-routine-time {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}
.hs-routine-label { font-size: 10px; color: #7A7060; }
.hs-routine-val { font-size: 16px; font-weight: 700; color: #FBBF24; }
.hs-routine-divider { width: 1px; height: 36px; background: rgba(255,255,255,0.1); }
.hs-journal-lines {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 12px;
  width: 100%;
}
.hs-journal-line {
  height: 8px;
  border-radius: 4px;
  background: rgba(148,163,184,0.15);
}

/* ── Stats ────────────────────────────────────────────── */
.hs-stats {
  position: relative;
  z-index: 1;
  margin: 0 32px 80px;
  border-radius: 24px;
  background: #1A1D26;
  border: 1px solid rgba(255,255,255,0.06);
  padding: 48px;
}
.hs-stats__inner {
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 800px;
  margin: 0 auto;
}
.hs-stat { text-align: center; }
.hs-stat__num {
  font-size: clamp(2rem, 5vw, 3.2rem);
  font-weight: 900;
  letter-spacing: -2px;
  color: #F5C542;
  line-height: 1;
  margin-bottom: 10px;
}
.hs-stat__label {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #7A7060;
}
.hs-stat__divider {
  width: 1px;
  height: 48px;
  background: rgba(255,255,255,0.08);
}

/* ── CTA Bottom ───────────────────────────────────────── */
.hs-cta-bottom {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 100px 32px;
  overflow: hidden;
}
.hs-cta-bottom__glow {
  position: absolute;
  width: 500px; height: 500px;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  background: radial-gradient(circle, rgba(245,197,66,0.1) 0%, transparent 70%);
  filter: blur(60px);
  pointer-events: none;
}
.hs-cta-bottom__title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 900;
  letter-spacing: -2px;
  color: #F0ECE4;
  margin: 0 0 16px;
}
.hs-cta-bottom__sub {
  font-size: 16px;
  color: #A09882;
  margin: 0 0 40px;
}

/* ── Footer ───────────────────────────────────────────── */
.hs-footer {
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
  color: #7A7060;
}
.hs-footer__links {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}
.hs-footer__links a {
  color: #7A7060;
  text-decoration: none;
  transition: color 0.2s;
}
.hs-footer__links a:hover { color: #F5C542; }

/* ── Scroll Reveal ────────────────────────────────────── */
.reveal {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.reveal.revealed {
  opacity: 1;
  transform: translateY(0);
}

/* ── Hero fade-in ─────────────────────────────────────── */
.hs-fade-1 { animation: hsFadeUp 0.7s 0.1s both ease; }
.hs-fade-2 { animation: hsFadeUp 0.7s 0.25s both ease; }
.hs-fade-3 { animation: hsFadeUp 0.7s 0.4s both ease; }
.hs-fade-4 { animation: hsFadeUp 0.7s 0.55s both ease; }
.hs-fade-5 { animation: hsFadeUp 0.7s 0.7s both ease; }

/* ── Keyframes ────────────────────────────────────────── */
@keyframes hsFadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes hsPulse {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.65; }
}
@keyframes hsBounce {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(6px); }
}

/* ── Mobile ───────────────────────────────────────────── */
@media (max-width: 768px) {
  .hs-features { padding: 24px 20px 60px; gap: 80px; }
  .hs-feature { grid-template-columns: 1fr; gap: 40px; }
  .hs-feature--reverse { direction: ltr; }
  .hs-phone-frame { width: 200px; }
  .hs-phone-screen { height: 340px; }
  .hs-stats { margin: 0 16px 60px; padding: 32px 20px; }
  .hs-stats__inner { flex-direction: column; gap: 32px; }
  .hs-stat__divider { width: 48px; height: 1px; }
  .hs-hero__cta { flex-direction: column; align-items: center; }
  .hs-footer { flex-direction: column; align-items: flex-start; }
  .hs-features { gap: 64px; }
  .hs-feature__title { letter-spacing: -1px; }
}
</style>
