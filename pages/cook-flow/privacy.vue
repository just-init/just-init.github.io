<template>
  <div class="cf-root">
    <nav class="cf-nav">
      <nuxt-link to="/cook-flow" class="cf-nav__back">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8L10 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        CookFlow
      </nuxt-link>
      <div class="cf-lang">
        <button v-for="l in langs" :key="l.code" class="cf-lang__btn" :class="{ active: lang === l.code }" @click="setLang(l.code)">{{ l.label }}</button>
      </div>
    </nav>

    <div class="cf-legal">
      <h1 class="cf-legal__title">{{ t('title') }}</h1>
      <p class="cf-legal__date">{{ t('date') }}</p>

      <div class="cf-legal__body">

        <section class="cf-legal__section">
          <h2>{{ t('s1-title') }}</h2>
          <p>{{ t('s1-desc') }}</p>
          <ul>
            <li>{{ t('s1-item1') }}</li>
            <li>{{ t('s1-item2') }}</li>
            <li>{{ t('s1-item3') }}</li>
          </ul>
        </section>

        <section class="cf-legal__section">
          <h2>{{ t('s2-title') }}</h2>
          <ul>
            <li>{{ t('s2-item1') }}</li>
            <li>{{ t('s2-item2') }}</li>
            <li>{{ t('s2-item3') }}</li>
          </ul>
        </section>

        <section class="cf-legal__section">
          <h2>{{ t('s3-title') }}</h2>
          <p>{{ t('s3-desc') }}</p>
        </section>

        <section class="cf-legal__section">
          <h2>{{ t('s4-title') }}</h2>
          <p>{{ t('s4-desc') }}</p>
        </section>

        <section class="cf-legal__section">
          <h2>{{ t('s5-title') }}</h2>
          <ul>
            <li>{{ t('s5-item1') }}</li>
          </ul>
        </section>

        <section class="cf-legal__section">
          <h2>{{ t('s6-title') }}</h2>
          <p>{{ t('s6-desc') }}</p>
        </section>

        <section class="cf-legal__section">
          <h2>{{ t('s7-title') }}</h2>
          <p>{{ t('s7-desc') }} <a href="mailto:justinit.service@gmail.com">justinit.service@gmail.com</a></p>
        </section>

        <section class="cf-legal__section">
          <h2>{{ t('s8-title') }}</h2>
          <p>{{ t('s8-desc') }}</p>
        </section>

      </div>
    </div>
  </div>
</template>

<script>
const messages = {
  ko: {
    'title': '개인정보처리방침',
    'date': '시행일: 2026년 3월 15일',
    's1-title': '1. 개인정보의 처리 목적',
    's1-desc': 'CookFlow(이하 \'서비스\')는 다음의 목적을 위해 개인정보를 처리합니다.',
    's1-item1': '회원 가입 및 서비스 이용',
    's1-item2': '레시피 저장 및 개인화 서비스 제공',
    's1-item3': '서비스 개선 및 고객 지원',
    's2-title': '2. 수집하는 개인정보 항목',
    's2-item1': '이메일 주소 (회원가입 시 입력)',
    's2-item2': '닉네임 (온보딩 시 설정)',
    's2-item3': '서비스 이용 기록 (저장한 레시피, 최근 본 레시피)',
    's3-title': '3. 개인정보의 보유 및 이용 기간',
    's3-desc': '회원 탈퇴 시 또는 수집·이용 목적 달성 후 지체 없이 파기합니다. 단, 관련 법령에 따라 일정 기간 보존이 필요한 경우 해당 기간 동안 보관합니다.',
    's4-title': '4. 개인정보의 제3자 제공',
    's4-desc': '서비스는 이용자의 개인정보를 원칙적으로 제3자에게 제공하지 않습니다. 다만, 이용자의 동의가 있거나 법령에 따라 요구되는 경우 예외적으로 제공할 수 있습니다.',
    's5-title': '5. 개인정보 처리 위탁',
    's5-item1': 'Firebase (Google): 인증, 데이터 저장, 클라우드 서비스',
    's6-title': '6. 이용자의 권리',
    's6-desc': '이용자는 언제든지 자신의 개인정보를 조회, 수정, 삭제 요청할 수 있습니다. 계정 삭제는 앱 내 설정 또는 이메일 요청을 통해 처리됩니다.',
    's7-title': '7. 개인정보 보호책임자',
    's7-desc': '이메일:',
    's8-title': '8. 개인정보처리방침 변경',
    's8-desc': '이 방침은 시행일로부터 적용되며, 변경 시 앱 내 공지 또는 이메일을 통해 안내합니다.',
  },
  en: {
    'title': 'Privacy Policy',
    'date': 'Effective: March 15, 2026',
    's1-title': '1. Purpose of Processing Personal Information',
    's1-desc': 'CookFlow (hereinafter "Service") processes personal information for the following purposes.',
    's1-item1': 'Account registration and service use',
    's1-item2': 'Recipe storage and personalized service',
    's1-item3': 'Service improvement and customer support',
    's2-title': '2. Personal Information Collected',
    's2-item1': 'Email address (entered during registration)',
    's2-item2': 'Nickname (set during onboarding)',
    's2-item3': 'Service usage records (saved recipes, recently viewed recipes)',
    's3-title': '3. Retention and Use Period',
    's3-desc': 'Personal information is destroyed without delay upon account deletion or when the purpose of collection has been fulfilled. However, if retention is required by applicable law, data will be kept for the required period.',
    's4-title': '4. Disclosure to Third Parties',
    's4-desc': 'The Service does not, in principle, disclose personal information to third parties. Exceptions may apply when the user has consented or when required by law.',
    's5-title': '5. Outsourced Processing',
    's5-item1': 'Firebase (Google): Authentication, data storage, cloud services',
    's6-title': '6. User Rights',
    's6-desc': 'Users may view, modify, or request deletion of their personal information at any time. Account deletion can be processed through in-app settings or by email request.',
    's7-title': '7. Data Protection Officer',
    's7-desc': 'Email:',
    's8-title': '8. Changes to This Policy',
    's8-desc': 'This policy is effective from the date above and any changes will be communicated via in-app notice or email.',
  },
  ja: {
    'title': 'プライバシーポリシー',
    'date': '施行日: 2026年3月15日',
    's1-title': '1. 個人情報の処理目的',
    's1-desc': 'CookFlow（以下「サービス」）は、以下の目的で個人情報を処理します。',
    's1-item1': '会員登録およびサービス利用',
    's1-item2': 'レシピ保存およびパーソナライズサービスの提供',
    's1-item3': 'サービス改善およびカスタマーサポート',
    's2-title': '2. 収集する個人情報の項目',
    's2-item1': 'メールアドレス（会員登録時に入力）',
    's2-item2': 'ニックネーム（オンボーディング時に設定）',
    's2-item3': 'サービス利用記録（保存したレシピ、最近閲覧したレシピ）',
    's3-title': '3. 個人情報の保有および利用期間',
    's3-desc': '会員退会時または収集・利用目的の達成後、遅滞なく廃棄します。ただし、関連法令により一定期間保存が必要な場合は、当該期間中保管します。',
    's4-title': '4. 個人情報の第三者提供',
    's4-desc': 'サービスは、原則として利用者の個人情報を第三者に提供しません。ただし、利用者の同意がある場合、または法令により求められる場合は例外的に提供することがあります。',
    's5-title': '5. 個人情報の処理委託',
    's5-item1': 'Firebase（Google）：認証、データ保存、クラウドサービス',
    's6-title': '6. 利用者の権利',
    's6-desc': '利用者はいつでも自身の個人情報の閲覧、修正、削除を要請できます。アカウント削除はアプリ内の設定またはメールにて処理されます。',
    's7-title': '7. 個人情報保護責任者',
    's7-desc': 'メール：',
    's8-title': '8. プライバシーポリシーの変更',
    's8-desc': '本ポリシーは施行日より適用され、変更がある場合はアプリ内のお知らせまたはメールにてご案内します。',
  },
}

export default {
  name: 'CookFlowPrivacy',
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
  display: flex;
  align-items: center;
  justify-content: space-between;
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

.cf-lang {
  display: flex;
  gap: 4px;
}
.cf-lang__btn {
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
.cf-lang__btn:hover {
  border-color: #F97316;
  color: #F97316;
}
.cf-lang__btn.active {
  background: #F97316;
  border-color: #F97316;
  color: #fff;
}

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
