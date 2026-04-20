<template>
  <div class="ry-root">
    <nav class="ry-nav">
      <nuxt-link to="/recipe-yap" class="ry-nav__back">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8L10 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        RecipeYap
      </nuxt-link>
      <div class="ry-lang">
        <button v-for="l in langs" :key="l.code" class="ry-lang__btn" :class="{ active: lang === l.code }" @click="setLang(l.code)">{{ l.label }}</button>
      </div>
    </nav>

    <div class="ry-legal">
      <h1 class="ry-legal__title">{{ t('title') }}</h1>
      <p class="ry-legal__date">{{ t('date') }}</p>

      <div class="ry-legal__body">

        <section class="ry-legal__section">
          <h2>{{ t('s1-title') }}</h2>
          <p>{{ t('s1-desc') }}</p>
        </section>

        <section class="ry-legal__section">
          <h2>{{ t('s2-title') }}</h2>
          <ul>
            <li>{{ t('s2-item1') }}</li>
            <li>{{ t('s2-item2') }}</li>
            <li>{{ t('s2-item3') }}</li>
          </ul>
        </section>

        <section class="ry-legal__section">
          <h2>{{ t('s3-title') }}</h2>
          <ul>
            <li>{{ t('s3-item1') }}</li>
            <li>{{ t('s3-item2') }}</li>
            <li>{{ t('s3-item3') }}</li>
          </ul>
        </section>

        <section class="ry-legal__section">
          <h2>{{ t('s4-title') }}</h2>
          <p>{{ t('s4-desc') }}</p>
        </section>

        <section class="ry-legal__section">
          <h2>{{ t('s5-title') }}</h2>
          <p>{{ t('s5-desc') }}</p>
        </section>

        <section class="ry-legal__section">
          <h2>{{ t('s6-title') }}</h2>
          <p>{{ t('s6-desc') }} <a href="mailto:justinit.service@gmail.com">justinit.service@gmail.com</a></p>
        </section>

      </div>
    </div>
  </div>
</template>

<script>
const messages = {
  ko: {
    'title': '이용약관',
    'date': '시행일: 2026년 3월 15일',
    's1-title': '1. 서비스 소개',
    's1-desc': '레시피얍은 요리 콘텐츠를 내 입맛에 맞는 레시피로 변환하고, 단계별 요리 가이드를 제공하는 모바일 애플리케이션입니다. 본 약관은 레시피얍 서비스 이용에 관한 조건을 정합니다.',
    's2-title': '2. 서비스 이용',
    's2-item1': '서비스는 만 4세 이상 이용 가능합니다.',
    's2-item2': '회원가입 후 레시피 저장 및 개인화 기능을 이용할 수 있습니다.',
    's2-item3': '서비스 내 AI 생성 레시피의 저작권은 이용자에게 귀속됩니다.',
    's3-title': '3. 금지 행위',
    's3-item1': '서비스의 정상적인 운영을 방해하는 행위',
    's3-item2': '타인의 계정을 도용하는 행위',
    's3-item3': '서비스를 통해 생성한 콘텐츠를 무단으로 상업적 목적에 이용하는 행위',
    's4-title': '4. 서비스 변경 및 중단',
    's4-desc': '운영상 또는 기술상 필요에 따라 서비스의 전부 또는 일부를 변경하거나 중단할 수 있습니다. 중요한 변경 사항은 앱 내 공지 또는 이메일로 안내합니다.',
    's5-title': '5. 면책조항',
    's5-desc': 'AI가 생성한 레시피는 참고용이며, 재료 알레르기 등 개인 건강 상태를 반드시 직접 확인하시기 바랍니다. 서비스는 레시피 정확성에 대한 법적 책임을 지지 않습니다.',
    's6-title': '6. 문의',
    's6-desc': '이메일:',
  },
  en: {
    'title': 'Terms of Service',
    'date': 'Effective: March 15, 2026',
    's1-title': '1. About the Service',
    's1-desc': 'RecipeYap is a mobile application that converts cooking content into personalized recipes and provides step-by-step cooking guides. These terms govern the use of the RecipeYap service.',
    's2-title': '2. Service Use',
    's2-item1': 'The service is available to users aged 4 and above.',
    's2-item2': 'Recipe saving and personalization features are available after registration.',
    's2-item3': 'Copyright of AI-generated recipes within the service belongs to the user.',
    's3-title': '3. Prohibited Activities',
    's3-item1': 'Interfering with the normal operation of the service',
    's3-item2': 'Unauthorized use of another person\'s account',
    's3-item3': 'Using content generated through the service for unauthorized commercial purposes',
    's4-title': '4. Service Changes and Suspension',
    's4-desc': 'The service may be modified or suspended in whole or in part as needed for operational or technical reasons. Significant changes will be communicated via in-app notice or email.',
    's5-title': '5. Disclaimer',
    's5-desc': 'AI-generated recipes are for reference only. Please verify ingredient allergies and personal health conditions yourself. The service assumes no legal responsibility for recipe accuracy.',
    's6-title': '6. Contact',
    's6-desc': 'Email:',
  },
  ja: {
    'title': '利用規約',
    'date': '施行日: 2026年3月15日',
    's1-title': '1. サービス紹介',
    's1-desc': 'レシピヤップは、料理コンテンツをお好みのレシピに変換し、ステップバイステップの料理ガイドを提供するモバイルアプリケーションです。本規約はレシピヤップサービスの利用に関する条件を定めます。',
    's2-title': '2. サービス利用',
    's2-item1': 'サービスは4歳以上の方がご利用いただけます。',
    's2-item2': '会員登録後、レシピ保存およびパーソナライズ機能をご利用いただけます。',
    's2-item3': 'サービス内のAI生成レシピの著作権は利用者に帰属します。',
    's3-title': '3. 禁止行為',
    's3-item1': 'サービスの正常な運営を妨害する行為',
    's3-item2': '他人のアカウントを不正使用する行為',
    's3-item3': 'サービスを通じて生成したコンテンツを無断で商業目的に利用する行為',
    's4-title': '4. サービスの変更および中断',
    's4-desc': '運営上または技術上の必要に応じて、サービスの全部または一部を変更・中断する場合があります。重要な変更はアプリ内のお知らせまたはメールにてご案内します。',
    's5-title': '5. 免責事項',
    's5-desc': 'AI生成レシピは参考用です。食材アレルギーなど個人の健康状態は必ずご自身でご確認ください。サービスはレシピの正確性について法的責任を負いません。',
    's6-title': '6. お問い合わせ',
    's6-desc': 'メール：',
  },
}

export default {
  name: 'RecipeYapTerms',
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
    },
  },
  mounted() {
    const params = new URLSearchParams(window.location.search)
    const urlLang = params.get('lang') || window.location.hash.replace('#', '')
    if (['ko', 'en', 'ja'].includes(urlLang)) {
      this.setLang(urlLang)
    }
  },
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
  display: flex;
  align-items: center;
  justify-content: space-between;
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

.ry-lang {
  display: flex;
  gap: 4px;
}
.ry-lang__btn {
  padding: 6px 14px;
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 999px;
  background: transparent;
  color: #6B6B6B;
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
  margin: 0 0 48px;
}

.ry-legal__body {
  display: flex;
  flex-direction: column;
  gap: 40px;
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
  margin: 0 0 10px;
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
.ry-legal__section a {
  color: #F97316;
  text-decoration: none;
}
.ry-legal__section a:hover { text-decoration: underline; }
</style>
