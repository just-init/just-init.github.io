<template>
    <section id="section3">
        <v-container fluid>
            <v-row align="center" justify="center">
                <v-col cols="10">
                    <v-row align="center" justify="center">
                        <h3 class="font-weight-light text-pre-line light-font">
                            {{ text }}
                        </h3>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    data() {
        return {
            text: "진지한 포도가 함께라면\n목표 달성에 좀 더 쉽게 다가갈 수 있어요.\n\n" +
                "- 핸드폰만 있으면\n언제 어디서든\n스티커를 붙일 수 있어요.\n\n" +
                "- 알림 설정을 통해\n매번 까먹지 않도록 알려줘요.\n\n" +
                "- 다른 사람에게 내 포도를 볼 수 있도록 하여,\n 서로 동기부여가 됩니다.\n\n" +
                "- 포도 외에 다양한 과일이 있어, \n목표에 맞게 스티커 개수를 조정할 수 있어요.",
        }
    }
})
</script>

<style scoped>
#section3 {
    background-color: #7B4C87;

    //background-color: #B192B5;
    height: 100vh;
}

#section3 .container,
#section3 .row {
    height: 100%;
}
</style>