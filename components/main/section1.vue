<template>
    <div class="banner-wrapper">
        <v-container>
            <!-- -----------------------------------------------
              Start Banner
          ----------------------------------------------- -->
            <v-row justify="center">
                <v-col cols="12" md="7" lg="6" class="d-flex align-center">
                    <div class="text-center text-md-left">
                        <h1 class="banner-title font-weight-bold white--text">
                            안녕하세요. Just Init 입니다.
                        </h1>
                        <h4 class="banner-subtitle white--text font-weight-regular">
                            당신이 할 수 있거나 할 수 있다고 꿈꾸는 그 일을 지금 당장 시작하라.
                        </h4>
                        <div class="mt-16 pt-2">
                            <v-btn v-for="item in items" :key="item.title" nuxt large :href="item.url"
                                class="btn-custom-md mr-1 mb-1" outlined color="white" elevation="0">
                                {{ item.title }}
                            </v-btn>
                        </div>
                    </div>
                </v-col>
                <v-col cols="12" md="5" lg="6">
                    <v-img :src="require('@/assets/images/banner-img.png')" alt="banner" />
                </v-col>
            </v-row>

            <!-- -----------------------------------------------
              End Banner
          ----------------------------------------------- -->
        </v-container>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data() {
        return {
            items: [
                { url: '/podo', title: "진지한 포도" },
                { url: '/smart-workout-counter', title: "내가만든트레이너" },
                { url: '/just-clock', title: "JUST-CLOCK" },
                { url: '/good-job', title: "바른생활" },
                { url: "/cwr", title: "고양이 글방" }
            ]
        }
    }
})
</script>