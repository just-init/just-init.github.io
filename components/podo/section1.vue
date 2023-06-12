<template>
    <section id="section1">
        <div id="image-background1">
            <v-container fluid>
                <v-row align="center" justify="center">
                    <v-col cols="10">
                        <v-row align="center" justify="center">

                            <v-col cols="12" sm="6" class="white--text text-left">
                                <h1 class="font-weight-light display-2 mb-2  light-font ">{{ title }}</h1>
                                <h1 class="font-weight-light  light-font">
                                    {{ subTitle }}
                                </h1>
                                <h2 class="font-weight-light text-pre-line mb-8 light-font">
                                    {{ subTitle2 }}
                                </h2>
                                <v-row>
                                    <v-btn rounded outlined
                                           href="https://apps.apple.com/kr/app/%EC%A7%84%EC%A7%80%ED%95%9C%ED%8F%AC%EB%8F%84/id1642885949"
                                           target="_blank"
                                           large color="white" class="mt-4 mr-2">
                                        <v-icon class="mr-2">
                                            mdi-apple
                                        </v-icon>
                                        App Store
                                    </v-btn>
                                    <v-btn rounded outlined
                                           href="https://play.google.com/store/apps/details?id=com.dsdc.podo&pli=1"
                                           target="_blank"
                                           large color="white" class="mt-4">
                                        <img src="~/assets/images/google-play-logo.svg" class="mr-2" width="16px"
                                             alt=""/>
                                        Google Play
                                    </v-btn>
                                </v-row>
                            </v-col>
                            <v-col sm="6" class="hidden-xs-only">
                                <img src="~/assets/images/podo-screen1.png" class="d-block ml-auto mr-auto"
                                     width="512px"
                                     alt=""/>
                                <!--                            <v-img src="/_nuxt/assets/images/podo-screen1.png" class="d-block ml-auto mr-auto" max-width="512px" />-->
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    data() {
        return {
            title: "진지한포도",
            subTitle: "목표달성을 위한 칭찬스티커 앱",
            subTitle2: "진지한 포도를 사용해보세요!\n지인과 함께 서로 응원하다보면,\n쉽게 목표에 다가가게 됩니다."
        }
    }
})
</script>

<style scoped>
#section1 {
    height: 100vh;
}

#image-background1 {
    background-image: url("~@/assets/images/podo-background.jpg");
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 100vh;
}

#section1 .container,
#section1 .row {
//height: 300px; height: 100%;
}
</style>