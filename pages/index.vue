<template>
  <div>
    <MainHeader />
    <MainSection1 />
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container"><a href="" class="navbar-brand">Just Init</a>
      </div>
    </nav>
    <div class="hero">
      <div class="container text-center">
        <div class="row">
          <div class="col-lg-10 mx-auto">
            <h2>Just Init</h2>
            <div class="lead mb-5"> 안녕하세요. Just Init 입니다.</div>
            <div class="lead mb-5"> 출시중인앱 : 바른생활, 결혼하는 마음, 고양이 글방, JUST CLOCK, 내가만든트레이너, 진지한포도</div>
            <div>저희는 당신의 삶을 좀 더 즐겁고 윤택해지길 바랍니다.</div>
            <div>문의사항은 아래 메일로 편히 연락주세요.</div>
            <div>대표 문의 메일 : justinit.service@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage'
})
</script>
