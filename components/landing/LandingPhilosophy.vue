<template>
  <section
    id="philosophy"
    class="w-full bg-surface-light dark:bg-surface-dark py-32 px-6 md:px-12 relative overflow-hidden"
  >
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
      <div class="w-full lg:w-1/2 relative">
        <div class="absolute -top-6 -left-6 w-full h-full border-2 border-primary/20 rounded-3xl"></div>
        <img
          alt="딸깍공방 작업 공간"
          class="relative rounded-3xl shadow-2xl w-full object-cover h-[320px] lg:h-[420px] hover:scale-[1.02] transition-transform duration-700"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuByVgUp3gwD4uLqYWyOxMXr9_22Wig63dDIeTozUV46LBgZ-Hhpum-0kT2UcgPHYWFhXf6txM-Db5nQNWnIdEMlevzdBTn2krBnadcJP_YcHPQt0ik16MlGL5-DXH9mg2-vpaJ9K2nZEb1SXtTOsMdVnWMOUQ93_Z8bL0fE0SCDvob_TLUs6SHqiam_LV75mWd-QioVXabcESJh09Ko1tnwysPiXlk85S9IoX0d4YJ7pq4DAoZVXL5_dLJHX_w6orBSrpWZiiDQYqs"
        />
      </div>
      <div class="w-full lg:w-1/2">
        <div class="inline-flex items-center gap-3 mb-8">
          <div class="w-8 h-[2px] bg-primary"></div>
          <span class="text-primary font-bold tracking-widest text-sm uppercase">Our Philosophy</span>
        </div>
        <h2
          class="font-display text-5xl md:text-6xl font-bold mb-16 leading-[1.1] tracking-tight text-text-light dark:text-text-dark"
        >
          마음을 전하는<br />따뜻한 공방
        </h2>
        <div class="space-y-6 text-lg leading-relaxed opacity-60 mb-12">
          <p class="dark:text-muted-dark">
            우리는 차가운 코드 속에 따뜻한 감성을 불어넣습니다.<br />
            화려한 기능보다는 사용자의 마음에 닿는 작은 배려를 소중히 여깁니다.
          </p>
          <p class="dark:text-muted-dark">
            딸깍공방은 한 명의 개발자와 한 명의 기획자가 운영하는 작은 스튜디오입니다.<br />
            우리의 앱이 당신의 일상에 작은 쉼표가 되기를 바랍니다.
          </p>
        </div>
        <div class="flex gap-12 pt-8 border-t border-text-light/10 dark:border-border-dark">
          <div>
            <div class="text-5xl font-bold text-primary mb-2 font-display tracking-tighter">8+</div>
            <div class="text-xs font-bold opacity-40 dark:opacity-60 uppercase tracking-widest dark:text-muted-dark">출시된 앱</div>
          </div>
          <div class="w-[1px] h-12 bg-text-light/10 dark:bg-text-dark/10"></div>
          <div>
            <div class="text-5xl font-bold text-primary mb-2 font-display tracking-tighter">10k+</div>
            <div class="text-xs font-bold opacity-40 dark:opacity-60 uppercase tracking-widest dark:text-muted-dark">누적 다운로드</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LandingPhilosophy',
}
</script>
