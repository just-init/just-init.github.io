<template>
  <div>
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
  name: 'IndexPage',
})
</script>
<style>
.navbar {
    border-bottom: 1px solid #E5E9EF;
}

section {
	padding-top: 60px;
}

.hero {
  min-height: 400px;
  position: relative;
  z-index: 10;
  text-align: center;
  padding-top: 60px; }
  @media (max-width: 991px) {
    .hero {
      min-height: 280px; } }

/* FOOTER */
.footer {
	margin-top: 100px;
  font-size: 13px;
  color: #59626D; }

.footer__inner {
  border-top: 1px solid #D5DCE5;
  padding: 30px 0; }

.footer__item:not(:last-child) {
  border-bottom: 1px solid #D5DCE5;
  padding-bottom: 15px;
  margin-bottom: 20px; }

.footer__email-input {
  min-width: 250px; }
  @media (max-width: 767px) {
    .footer__email-input {
      min-width: 0; } }

@media (max-width: 767px) {
  .footer__sub-nav {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center; } }

.footer__sub-nav li {
  padding-left: .75rem;
  padding-right: .75rem; }
  .footer__sub-nav li:first-child {
    padding-left: 0; }
  .footer__sub-nav li a {
    font-size: 13px;
    display: block;
    color: #59626D;
    padding: .5rem 0; }
    .footer__sub-nav li a:hover, .footer__sub-nav li a:focus {
      color: #424951; }
</style>