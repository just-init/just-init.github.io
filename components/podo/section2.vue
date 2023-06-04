<template>
    <section id="section2">
        <v-container fluid>
            <v-row align="center" justify="center">
                <v-col cols="10">
                    <v-row align="center" justify="center">
                        <h2 class="font-weight-light text-pre-line">
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
            text: "어렸을적 포도스티커를 붙여 보신 적이 있나요?\n내적 동기를 부여하는게 조금 어렵게 느껴진다면,\n스티커를 붙여 보면서 성취감을 느껴보세요.\n\n점차 채워지는 스티커판이 직관적으로 눈에 들어와,\n자신감과 자아존중감을 높일 수 있습니다.",
        }
    }
})
</script>

<style scoped>
#section2 {
    background-color: #7B4C87;
    height: 600px;
}

#section2 .container,
#section2 .row {
    height: 100%;
}
</style>