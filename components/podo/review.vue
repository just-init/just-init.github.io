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
                "title": "스티커가 모여 큰 성취감을 줘요.",
                "text": "딸아이가 소변을 잘 가린 날은 스티커를 붙여, 아이에게 동기부여가 되도록 합니다. 스티커가 점점 모일수록 큰 성취감을 느낄 수 있어요.",
                "reviewedAt": "2023-05-11"
            }, {
                "key": "2",
                "rate": 5.0,
                "platform": "안드로이드",
                "title": "지인에게 내 스티커판을 공유할 수 있어요.",
                "text": "피아노 연습할 때 스티커를 붙이고 있어요. 언제 붙였는지 눈에 보이고, 스티커를 안 붙이는 친구에게 응원 메시지를 보낼 수 있어서 좋아요. 같이 피아노 배우는 친구와 선의의 경쟁이 되는 거 같아요.",
                "reviewedAt": "2023-05-15"
            }, {
                "key": "3",
                "rate": 5.0,
                "platform": "애플",
                "title": "정해진 시간에 알림을 줘요.",
                "text": "아침에 일찍 일어나기 어려웠는데, 매일 아침 8시에 알림을 추가하여, 스티커 붙이기가 쉬워요. 스티커가 쌓일수록 뿌듯하네요. ",
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