<template>
    <section id="section2">
        <v-container fluid>
            <v-row align="center" justify="center">
                <v-col cols="10">
                    <v-row align="center" justify="center">
                        <h2 class="font-weight-light text-pre-line light-font">
                            {{ text }}
                        </h2>
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
            text: "스티커 붙이기를 매번 깜박하시나요?\n" +
                "진지한 포도와 함께라면 스티커 붙이기가 더 즐거워질 거예요.\n" +
                "\n" +
                "지인을 초대하여 서로의 포도를 볼 수 있고, \n" +
                "응원 메시지도 보낼 수 있어요.\n" +
                "\n" +
                "스티커를 붙 일 동기가 더 강해집니다.",
        }
    }
})
</script>

<style scoped>
#section2 {
    background-color: #7B4C87;
    height: 100vh;
}

#section2 .container,
#section2 .row {
    height: 100%;
}
</style>