<template>
  <div>
    <LandingNav />
    <LandingHero />
    <LandingApps />
    <LandingPhilosophy />
    <LandingFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  layout: 'landing',
})
</script>
