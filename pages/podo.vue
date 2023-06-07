<template>
  <div>
    <PodoSection1 />
    <PodoSection2 />
    <PodoReview />
    <PodoFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    head: {
        title: '진지한 포도',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '목표달성을 위한 칭찬스티커 앱' },
            { name: 'format-detection', content: 'telephone=no' },
            { name: 'keywords', content: '칭찬스티커,피아노연습,' },
            { property: 'og:image', content: '/podo/meta-image.png' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
})
</script>
