<template>
  <div class="ry-root">
    <div class="ry-noise" aria-hidden="true"></div>
    <div class="ry-orb ry-orb--hero" aria-hidden="true"></div>
    <div class="ry-orb ry-orb--mid" aria-hidden="true"></div>
    <div class="ry-orb ry-orb--bottom" aria-hidden="true"></div>

    <!-- Nav -->
    <nav class="ry-nav">
      <nuxt-link to="/" class="ry-nav__back">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8L10 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        {{ t('nav-brand') }}
      </nuxt-link>
      <div class="ry-lang">
        <button v-for="l in langs" :key="l.code" class="ry-lang__btn" :class="{ active: lang === l.code }" @click="setLang(l.code)">{{ l.label }}</button>
      </div>
    </nav>

    <!-- Hero -->
    <section class="ry-hero">
      <div class="ry-hero__inner">
        <span class="ry-badge ry-fade-1">🍳 {{ t('hero-badge') }}</span>
        <h1 class="ry-hero__title ry-fade-2" v-html="t('hero-title')"></h1>
        <p class="ry-hero__sub ry-fade-3" v-html="t('hero-sub')"></p>
        <div class="ry-hero__cta ry-fade-4">
          <a href="https://apps.apple.com/app/id6760963826" class="ry-btn ry-btn--primary" target="_blank" rel="noopener">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            App Store
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.brenin.cookflow" class="ry-btn ry-btn--ghost" target="_blank" rel="noopener">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.37.6 1.23 0 1.6l-14 8.5c-.66.5-1.6.03-1.6-.8z"/></svg>
            Google Play
          </a>
        </div>
        <div class="ry-scroll-hint ry-fade-5" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 4v12M10 16l-4-4M10 16l4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="ry-features">

      <!-- 1. AI 레시피 생성 -->
      <div class="ry-feature reveal">
        <div class="ry-feature__text">
          <span class="ry-feature__label" style="color:#F97316">AI RECIPE</span>
          <h3 class="ry-feature__title" v-html="t('f1-title')"></h3>
          <p class="ry-feature__desc">{{ t('f1-desc') }}</p>
        </div>
        <div class="ry-feature__card">
          <div class="ry-phone ry-phone--orange">
            <div class="ry-phone__screen">
              <img :src="`/cook-flow/${lang}/04.png`" :alt="t('f1-alt')" />
            </div>
          </div>
        </div>
      </div>

      <!-- 2. 단계별 요리 가이드 -->
      <div class="ry-feature ry-feature--reverse reveal">
        <div class="ry-feature__text">
          <span class="ry-feature__label" style="color:#34D399">STEP-BY-STEP GUIDE</span>
          <h3 class="ry-feature__title" v-html="t('f2-title')"></h3>
          <p class="ry-feature__desc">{{ t('f2-desc') }}</p>
        </div>
        <div class="ry-feature__card">
          <div class="ry-phone ry-phone--green">
            <div class="ry-phone__screen">
              <img :src="`/cook-flow/${lang}/02.png`" :alt="t('f2-alt')" />
            </div>
          </div>
        </div>
      </div>

      <!-- 3. 재료·영양정보 -->
      <div class="ry-feature reveal">
        <div class="ry-feature__text">
          <span class="ry-feature__label" style="color:#60A5FA">NUTRITION</span>
          <h3 class="ry-feature__title" v-html="t('f3-title')"></h3>
          <p class="ry-feature__desc">{{ t('f3-desc') }}</p>
        </div>
        <div class="ry-feature__card">
          <div class="ry-phone ry-phone--blue">
            <div class="ry-phone__screen">
              <img :src="`/cook-flow/${lang}/01.png`" :alt="t('f3-alt')" />
            </div>
          </div>
        </div>
      </div>

      <!-- 4. 내 레시피 관리 -->
      <div class="ry-feature ry-feature--reverse reveal">
        <div class="ry-feature__text">
          <span class="ry-feature__label" style="color:#A78BFA">MY RECIPES</span>
          <h3 class="ry-feature__title" v-html="t('f4-title')"></h3>
          <p class="ry-feature__desc">{{ t('f4-desc') }}</p>
        </div>
        <div class="ry-feature__card">
          <div class="ry-phone ry-phone--purple">
            <div class="ry-phone__screen">
              <img :src="`/cook-flow/${lang}/03.png`" :alt="t('f4-alt')" />
            </div>
          </div>
        </div>
      </div>

    </section>

    <!-- CTA Bottom -->
    <section class="ry-cta-bottom reveal">
      <div class="ry-cta-bottom__glow" aria-hidden="true"></div>
      <h2 class="ry-cta-bottom__title">{{ t('cta-title') }}</h2>
      <p class="ry-cta-bottom__sub">{{ t('cta-sub') }}</p>
      <!-- TODO: App Store 링크를 실제 앱 출시 후 교체 -->
      <div class="ry-hero__cta">
        <a href="https://apps.apple.com/app/id6760963826" class="ry-btn ry-btn--primary" target="_blank" rel="noopener">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
          App Store
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.brenin.cookflow" class="ry-btn ry-btn--ghost" target="_blank" rel="noopener">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.37.6 1.23 0 1.6l-14 8.5c-.66.5-1.6.03-1.6-.8z"/></svg>
          Google Play
        </a>
      </div>
    </section>

    <!-- Footer -->
    <footer class="ry-footer">
      <span>{{ t('footer-copy') }}</span>
      <div class="ry-footer__links">
        <nuxt-link to="/recipe-yap/privacy">{{ t('footer-privacy') }}</nuxt-link>
        <span>·</span>
        <nuxt-link to="/recipe-yap/terms">{{ t('footer-terms') }}</nuxt-link>
        <span>·</span>
        <nuxt-link to="/recipe-yap/delete-account">{{ t('footer-delete') }}</nuxt-link>
        <span>·</span>
        <a href="mailto:justinit.service@gmail.com">{{ t('footer-contact') }}</a>
      </div>
    </footer>
  </div>
</template>

<script>
const messages = {
  ko: {
    'nav-brand': '딸깍공방',
    'hero-badge': '요리 영상을 내 레시피로',
    'hero-title': '링크 하나로<br>레시피 완성',
    'hero-sub': '요리 영상 링크를 붙여넣으면 AI가 재료와 조리 단계를 자동으로 정리해 드려요.<br>단계별 요리 가이드로 쉽게 따라하세요.',
    'f1-title': '링크를 붙여넣으면<br>AI가 레시피를 만들어요',
    'f1-desc': '유튜브 요리 영상, 블로그 포스트 — 어떤 링크든 OK. AI가 재료, 조리법, 영양정보까지 자동 추출합니다. 요리 영상을 앞뒤로 돌려가며 따라할 필요가 없어요.',
    'f1-alt': 'AI 레시피 생성 화면',
    'f2-title': '단계별 가이드로<br>쉽게 따라해요',
    'f2-desc': '한 화면에 한 동작. 정확한 계량과 조리 순서를 한 눈에 확인하세요. 요리 초보도 쉽게 따라할 수 있습니다.',
    'f2-alt': '단계별 요리 가이드 화면',
    'f3-title': '재료부터 영양정보까지<br>한눈에 확인',
    'f3-desc': '칼로리, 탄수화물, 단백질, 지방을 AI가 자동으로 계산해요. 재료와 영양정보를 한 화면에서 깔끔하게 확인하세요.',
    'f3-alt': '재료 및 영양정보 화면',
    'f4-title': '내 레시피를<br>한곳에 모아',
    'f4-desc': '직접 만든 레시피, AI로 생성한 레시피를 한곳에 모아 언제든 꺼내보세요. 태그와 검색으로 원하는 레시피를 바로 찾을 수 있어요.',
    'f4-alt': '내 레시피 목록 화면',
    'cta-title': '무료로 시작하세요',
    'cta-sub': '매월 AI 레시피 생성 3회 무료. Pro 구독으로 무제한 AI 생성과 영양정보 분석을 이용하세요.',
    'footer-copy': '© 2026 딸깍공방',
    'footer-privacy': '개인정보처리방침',
    'footer-terms': '이용약관',
    'footer-delete': '계정 삭제',
    'footer-contact': '문의',
  },
  en: {
    'nav-brand': 'RecipeYap',
    'hero-badge': 'Turn cooking videos into recipes',
    'hero-title': 'One link,<br>recipe done',
    'hero-sub': 'Paste a cooking video link and AI automatically organizes ingredients and cooking steps.<br>Follow along easily with step-by-step guides.',
    'f1-title': 'Paste a link,<br>AI creates the recipe',
    'f1-desc': 'YouTube cooking videos, blog posts — any link works. AI automatically extracts ingredients, instructions, and nutrition info. No more scrubbing back and forth through videos.',
    'f1-alt': 'AI recipe generation screen',
    'f2-title': 'Step-by-step guide,<br>easy to follow',
    'f2-desc': 'One action per screen. Check exact measurements and cooking order at a glance. Even beginners can follow along easily.',
    'f2-alt': 'Step-by-step cooking guide screen',
    'f3-title': 'Ingredients to nutrition,<br>all at a glance',
    'f3-desc': 'AI automatically calculates calories, carbs, protein, and fat. View ingredients and nutrition info cleanly on one screen.',
    'f3-alt': 'Ingredients and nutrition info screen',
    'f4-title': 'All your recipes<br>in one place',
    'f4-desc': 'Keep your hand-crafted and AI-generated recipes together. Find any recipe instantly with tags and search.',
    'f4-alt': 'My recipes list screen',
    'cta-title': 'Start for free',
    'cta-sub': '3 free AI recipe generations per month. Go Pro for unlimited AI generation and nutrition analysis.',
    'footer-copy': '© 2026 RecipeYap',
    'footer-privacy': 'Privacy Policy',
    'footer-terms': 'Terms of Service',
    'footer-delete': 'Delete Account',
    'footer-contact': 'Contact',
  },
  ja: {
    'nav-brand': 'レシピヤップ',
    'hero-badge': '料理動画をマイレシピに',
    'hero-title': 'リンクひとつで<br>レシピ完成',
    'hero-sub': '料理動画のリンクを貼るだけで、AIが材料と調理手順を自動で整理します。<br>ステップバイステップガイドで簡単に作れます。',
    'f1-title': 'リンクを貼るだけで<br>AIがレシピを作成',
    'f1-desc': 'YouTube料理動画、ブログ記事 — どんなリンクでもOK。AIが材料、調理法、栄養情報まで自動抽出します。動画を巻き戻す必要はもうありません。',
    'f1-alt': 'AIレシピ生成画面',
    'f2-title': 'ステップガイドで<br>簡単に作れる',
    'f2-desc': '1画面に1動作。正確な計量と調理手順をひと目で確認。料理初心者でも簡単に作れます。',
    'f2-alt': 'ステップバイステップ料理ガイド画面',
    'f3-title': '材料から栄養情報まで<br>ひと目で確認',
    'f3-desc': 'カロリー、炭水化物、タンパク質、脂質をAIが自動計算。材料と栄養情報を1画面でスッキリ確認できます。',
    'f3-alt': '材料・栄養情報画面',
    'f4-title': 'マイレシピを<br>ひとつにまとめて',
    'f4-desc': '自作レシピもAI生成レシピもまとめて管理。タグと検索で欲しいレシピをすぐに見つけられます。',
    'f4-alt': 'マイレシピ一覧画面',
    'cta-title': '無料で始めよう',
    'cta-sub': '毎月AIレシピ生成3回無料。Proプランで無制限のAI生成と栄養分析をご利用ください。',
    'footer-copy': '© 2026 レシピヤップ',
    'footer-privacy': 'プライバシーポリシー',
    'footer-terms': '利用規約',
    'footer-delete': 'アカウント削除',
    'footer-contact': 'お問い合わせ',
  },
}

export default {
  name: 'RecipeYapPage',
  data() {
    return {
      lang: 'ko',
      langs: [
        { code: 'ko', label: 'KR' },
        { code: 'en', label: 'EN' },
        { code: 'ja', label: 'JP' },
      ],
    }
  },
  methods: {
    t(key) {
      return (messages[this.lang] && messages[this.lang][key]) || messages.ko[key] || key
    },
    setLang(code) {
      this.lang = code
      if (typeof document !== 'undefined') {
        document.documentElement.lang = code
      }
    },
  },
  mounted() {
    // detect lang from URL query or hash
    const params = new URLSearchParams(window.location.search)
    const urlLang = params.get('lang') || window.location.hash.replace('#', '')
    if (['ko', 'en', 'ja'].includes(urlLang)) {
      this.setLang(urlLang)
    }

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
.ry-root {
  position: relative;
  min-height: 100vh;
  background: #FFFFFF;
  color: #212121;
  font-family: 'Noto Sans KR', -apple-system, BlinkMacSystemFont, sans-serif;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

/* ── Noise ──────────────────────────────────────────────── */
.ry-noise {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  opacity: 0.018;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 128px 128px;
}

/* ── Orbs ───────────────────────────────────────────────── */
.ry-orb {
  position: fixed;
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
}
.ry-orb--hero {
  width: 700px; height: 700px;
  top: -200px; left: 50%;
  transform: translateX(-50%);
  background: radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 70%);
  filter: blur(80px);
}
.ry-orb--mid {
  width: 500px; height: 500px;
  top: 60%; right: -100px;
  background: radial-gradient(circle, rgba(249,115,22,0.04) 0%, transparent 70%);
  filter: blur(80px);
}
.ry-orb--bottom {
  width: 600px; height: 600px;
  bottom: 0; left: 50%;
  transform: translateX(-50%);
  background: radial-gradient(circle, rgba(249,115,22,0.05) 0%, transparent 70%);
  filter: blur(80px);
}

/* ── Nav ────────────────────────────────────────────────── */
.ry-nav {
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 20px 32px;
  background: rgba(255,255,255,0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(0,0,0,0.06);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.ry-nav__back {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #999;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.2s;
}
.ry-nav__back:hover { color: #F97316; }

.ry-lang {
  display: flex;
  gap: 4px;
}
.ry-lang__btn {
  padding: 6px 14px;
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 999px;
  background: transparent;
  color: #999;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}
.ry-lang__btn:hover {
  border-color: #F97316;
  color: #F97316;
}
.ry-lang__btn.active {
  background: #F97316;
  border-color: #F97316;
  color: #fff;
}

/* ── Hero ───────────────────────────────────────────────── */
.ry-hero {
  position: relative;
  z-index: 1;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 24px;
  text-align: center;
}
.ry-hero__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  max-width: 700px;
}
.ry-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 20px;
  border: 1px solid rgba(249,115,22,0.2);
  border-radius: 999px;
  font-size: 13px;
  font-weight: 600;
  color: #E8650F;
  background: rgba(249,115,22,0.06);
  letter-spacing: 0.02em;
  animation: cfPulse 2.4s ease-in-out infinite;
}
.ry-hero__title {
  font-size: clamp(2.4rem, 7vw, 4.5rem);
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -2px;
  color: #212121;
  margin: 0;
}
.ry-hero__sub {
  font-size: clamp(1rem, 2.5vw, 1.15rem);
  font-weight: 300;
  line-height: 1.8;
  color: #757575;
  margin: 0;
}

/* ── CTA Buttons ─────────────────────────────────────────── */
.ry-hero__cta {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 8px;
}
.ry-btn {
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
.ry-btn--primary {
  background: #F97316;
  color: #fff;
  box-shadow: 0 4px 24px rgba(249,115,22,0.2);
}
.ry-btn--primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(249,115,22,0.35);
}
.ry-btn--ghost {
  background: transparent;
  color: #424242;
  border: 1px solid rgba(0,0,0,0.12);
}
.ry-btn--ghost:hover {
  transform: translateY(-2px);
  border-color: rgba(0,0,0,0.25);
  background: rgba(0,0,0,0.02);
}

/* ── Scroll hint ─────────────────────────────────────────── */
.ry-scroll-hint {
  color: rgba(0,0,0,0.15);
  animation: cfBounce 1.8s ease-in-out infinite;
  margin-top: 16px;
}

/* ── Features ────────────────────────────────────────────── */
.ry-features {
  position: relative;
  z-index: 1;
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 32px 80px;
  display: flex;
  flex-direction: column;
  gap: 120px;
}
.ry-feature {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
}
.ry-feature--reverse { direction: rtl; }
.ry-feature--reverse > * { direction: ltr; }

.ry-feature__label {
  display: block;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 16px;
}
.ry-feature__title {
  font-size: clamp(1.8rem, 3.5vw, 2.6rem);
  font-weight: 900;
  letter-spacing: -1.5px;
  line-height: 1.15;
  color: #212121;
  margin: 0 0 20px;
}
.ry-feature__desc {
  font-size: 16px;
  font-weight: 300;
  line-height: 1.8;
  color: #757575;
  margin: 0;
}

/* ── Feature Card ────────────────────────────────────────── */
.ry-feature__card {
  display: flex;
  justify-content: center;
}

/* ── Phone Frame ────────────────────────────────────────── */
.ry-phone {
  width: 272px;
  padding: 10px 10px 14px;
  border-radius: 36px;
  transition: transform 0.3s, box-shadow 0.3s;
}
.ry-phone:hover {
  transform: translateY(-8px);
}
.ry-phone__screen {
  border-radius: 26px;
  overflow: hidden;
  background: #fff;
}
.ry-phone__screen img {
  display: block;
  width: 100%;
  height: auto;
}

/* ── Phone color (warm cream, matches app aesthetic) ─────── */
.ry-phone--orange,
.ry-phone--green,
.ry-phone--blue,
.ry-phone--purple {
  background: #FFF3EE;
  box-shadow:
    0 20px 40px rgba(107,94,75,0.12),
    0 6px 12px rgba(0,0,0,0.04),
    inset 1px 1px 2px rgba(255,255,255,1),
    inset -1px -1px 2px rgba(162,138,116,0.12);
}
.ry-phone--orange:hover,
.ry-phone--green:hover,
.ry-phone--blue:hover,
.ry-phone--purple:hover {
  box-shadow:
    0 32px 56px rgba(107,94,75,0.16),
    0 10px 20px rgba(0,0,0,0.06),
    inset 1px 1px 2px rgba(255,255,255,1),
    inset -1px -1px 2px rgba(162,138,116,0.15);
}

/* ── CTA Bottom ──────────────────────────────────────────── */
.ry-cta-bottom {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 100px 32px;
  overflow: hidden;
}
.ry-cta-bottom__glow {
  position: absolute;
  width: 500px; height: 500px;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  background: radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 70%);
  filter: blur(60px);
  pointer-events: none;
}
.ry-cta-bottom__title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 900;
  letter-spacing: -2px;
  color: #212121;
  margin: 0 0 16px;
}
.ry-cta-bottom__sub {
  font-size: 16px;
  color: #757575;
  margin: 0 0 40px;
}

/* ── Footer ──────────────────────────────────────────────── */
.ry-footer {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  padding: 28px 32px;
  border-top: 1px solid rgba(0,0,0,0.06);
  font-size: 12px;
  color: #BDBDBD;
}
.ry-footer__links {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}
.ry-footer__links a {
  color: #BDBDBD;
  text-decoration: none;
  transition: color 0.2s;
}
.ry-footer__links a:hover { color: #F97316; }

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
.ry-fade-1 { animation: cfFadeUp 0.7s 0.1s both ease; }
.ry-fade-2 { animation: cfFadeUp 0.7s 0.25s both ease; }
.ry-fade-3 { animation: cfFadeUp 0.7s 0.4s both ease; }
.ry-fade-4 { animation: cfFadeUp 0.7s 0.55s both ease; }
.ry-fade-5 { animation: cfFadeUp 0.7s 0.7s both ease; }

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
  .ry-features { padding: 24px 20px 60px; gap: 80px; }
  .ry-feature { grid-template-columns: 1fr; gap: 40px; }
  .ry-feature--reverse { direction: ltr; }
  .ry-phone { width: 240px; padding: 8px 8px 12px; border-radius: 32px; }
  .ry-phone__screen { border-radius: 24px; }
  .ry-hero__cta { flex-direction: column; align-items: center; }
  .ry-footer { flex-direction: column; align-items: flex-start; }
}
</style>
