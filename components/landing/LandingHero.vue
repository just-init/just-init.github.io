<template>
  <header class="w-full px-6 md:px-12 py-24 md:py-40 flex flex-col items-center text-center relative">
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/5 blur-[120px] -z-10 rounded-full"
    ></div>
    <h1
      class="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] mb-12 max-w-5xl text-text-light dark:text-text-dark tracking-tighter"
    >
      생각을
      <span class="text-primary inline-block whitespace-nowrap hand-drawn-underline">딸깍</span>,
      <br class="hidden md:block" />앱으로 만드는 공방
    </h1>
    <p
      class="text-xl md:text-2xl font-light opacity-70 max-w-2xl mb-12 leading-relaxed tracking-tight dark:text-muted-dark"
    >
      일상의 작은 불편함을 따뜻한 기술로 해결합니다.<br class="hidden sm:block" />
      손으로 빚은 듯한 정성스러운 앱들을 만나보세요.
    </p>
  </header>
</template>

<script>
export default {
  name: 'LandingHero',
}
</script>
