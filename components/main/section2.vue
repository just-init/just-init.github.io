<template>
    <div>
        <div class="mini-spacer">
            <v-container>
                <!-- -----------------------------------------------
            Start Contact Form
        ----------------------------------------------- -->
                <v-row justify="center">
                    <v-col cols="12" sm="10" md="12" lg="8">
                        <div>
                            <h4 class="font-weight-medium contact-title mt-0">
                                About JUST INIT
                            </h4>
                            <h5 class="font-weight-medium contact-title mt-0">
                                시작이 반이다
                            </h5>
                            <div>
                                <p class="mb-12">
                                    Just Init 은 생각속에 있던 것들을 현실로 이끄는 첫단계 그 순간을 의미합니다.
                                </p>
                                <p>
                                    때로는 시작이 어렵고 도전적일 수 있습니다.
                                </p>
                                <p>
                                    불확실한 실패의 가능성이 우리를 위협할 수 있습니다.
                                </p>
                                <p>
                                    그러나 시작은 우리에게 새로운 기회를 제공하고,
                                </p>
                                <p class="mb-12">
                                    실패하더라도 경험을 통해 성장할 수 있습니다.
                                </p>
                                <p>
                                    새로운 자신을 발견하고 싶다면,
                                </p>
                                <p>
                                    저희의 앱을 통해 하루하루 더 나은 삶을 시작해보세요.
                                </p>
                            </div>
                        </div>
                    </v-col>
                </v-row>
                <!-- -----------------------------------------------
            End Contact Form
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
            name: "대표 문의 메일",
            email: "justinit.service@gmail.com",
        }
    }
})
</script>