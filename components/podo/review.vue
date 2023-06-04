<template>
    <div>
        <div class="testimonial-component mini-spacer bg-extra-light">
            <v-container>
                <!-- -----------------------------------------------
                    Start Testimonial Text
                ----------------------------------------------- -->
                <!--                <v-row justify="center">-->
                <!--                    <v-col cols="12" sm="10" md="9" lg="7">-->
                <!--                        <div class="text-center">-->
                <!--                            <h2 class="section-title font-weight-medium">-->
                <!--                                사용자분들이 주신 피드백입니다.-->
                <!--                            </h2>-->
                <!--                            <p>-->
                <!--                                직접 사용해보시면, 더 많은 -->
                <!--                                You can relay on our amazing features list and also our customer-->
                <!--                                services will be great experience for you without doubt and in-->
                <!--                                no-time-->
                <!--                            </p>-->
                <!--                        </div>-->
                <!--                    </v-col>-->
                <!--                </v-row>-->

                <!-- -----------------------------------------------
                    End Testimonial Text
                ----------------------------------------------- -->
                <!-- -----------------------------------------------
                    Start Testimonial
                ----------------------------------------------- -->
                <v-row class="mt-13" justify="center">
                    <v-col
                            v-for="review in reviews"
                            :key="review.key"
                            cols="12" md="6" lg="4"
                    >
                        <v-card class="testimonial-card card-shadow">
                            <v-card-text class="d-flex flex-column height-fix">
                                <div class="d-flex font-13">
                                    <a class="error--text">
                                        <i class="mdi mdi-star"></i
                                        ></a>
                                    <a class="error--text">
                                        <i class="mdi mdi-star"></i
                                        ></a>
                                    <a class="error--text">
                                        <i class="mdi mdi-star"></i
                                        ></a>
                                    <a class="error--text">
                                        <i class="mdi mdi-star"></i
                                        ></a>
                                    <a class="error--text">
                                        <i class="mdi mdi-star"></i
                                        ></a>
                                </div>
                                <p>{{ review.title }}</p>
                                <p class="font-weight-light flex-grow-1">
                                    {{ review.text }}
                                </p>
                                <span class="align-self-end font-weight-light">{{ review.reviewedAt }}</span>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>

                <!-- -----------------------------------------------
                    End Testimonial
                ----------------------------------------------- -->
            </v-container>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    data() {
        return {

            reviews: [{
                "key": "1",
                "rate": 5.0,
                "platform": "애플",
                "title": "칭찬스티커 어플중에 디자인이 제일 맘에 들어요",
                "text": "아기자기 하구 정말 내가 꾸며나가는 느낌..!\n" +
                    "개발자님 여유가 되신다면 다른 후기들처럼 칭찬스티커 개수 커스텀 할 수 있게 해주시구, 과일 종류도 여러가지이면 더 예쁠것 같아요 ♥️\n" +
                    "과일 속살 스티커 하나씩 채운다는게 이렇게 즐거웠던건지 이번에 깨닫네용\n" +
                    "수박 씨 스티커, 나무 한그루 스티커 등등 •• 다양한 업데이트 기다리겠습니다 !!",
                "reviewedAt": "2023-05-11"
            }, {
                "key": "2",
                "rate": 5.0,
                "platform": "안드로이드",
                "title": "스티커 하나 눌러야한다는 생각으로 하루종일 보냈네요",
                "text": "app으로 칭찬스티커를 붙일수있어서 좋아요 ! 원하는 시간에 알림도 울리니 한번더 목표를 상기시킬수있으니 좋습니다 ㅎㅎ 스티커 하나 눌러야한다는 생각으로 하루종일 보냈네요 !",
                "reviewedAt": "2023-05-15"
            }, {
                "key": "3",
                "rate": 5.0,
                "platform": "애플",
                "title": "목표 관리하기 좋아요!!",
                "text": "디자인도 깔끔하고 귀욤귀욤한게 목표 관히할 때 쓰기 좋은 어플이에요!",
                "reviewedAt": "2023-03-11"
            }]
        }
    }

})
</script>
<style scoped>
.height-fix {
    height: 360px;
}
</style>