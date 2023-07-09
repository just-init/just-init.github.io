<template>
    <section id="section2">
        <v-container fluid class="overflow-hidden">
            <v-row align="end" justify="center">
                <v-col>
                    <div class="text-center">
                        <h4 class="font-weight-light text-pre-line dark-font">
                            {{ text }}
                        </h4>
                    </div>
                    <div id="reaction-img">
                        <v-img :src="require('@/assets/images/reaction3.png')" alt="reaction"/>
                    </div>
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
            text: "스티커 붙이기를 매번 깜박하시나요?\n\n" +
                "진지한 포도와 함께라면\n" +
                "스티커 붙이기가 더 즐거워질 거예요.\n" +
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
    background-color: #eeeeee;
    color: #333333;
    height: 100vh;
    overflow: hidden;
}

#reaction-img {
    overflow: hidden;
    margin: 0 auto;
    //max-width: 600px;
}

#section2 .container,
#section2 .row {
    height: 100vh;
}
</style>