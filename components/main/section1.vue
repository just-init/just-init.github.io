<template>
    <div class="banner-wrapper">
        <v-container>
            <v-row justify="center">
                <v-col cols="12" lg="8" class="text-center">
                    <h1 class="banner-title font-weight-bold">
                        딸깍공방
                    </h1>
                    <h4 class="banner-subtitle">
                        딸깍 한 번, 일상이 달라지는 순간
                    </h4>
                    <div class="app-grid mt-12">
                        <a
                            v-for="item in items"
                            :key="item.title"
                            :href="item.url"
                            class="app-card"
                        >
                            <span class="app-card-title">{{ item.title }}</span>
                            <span class="app-card-arrow">&rarr;</span>
                        </a>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data() {
        return {
            items: [
                { url: '/smart-workout-counter', title: "내가만든트레이너" },
                { url: '/just-clock', title: "JUST-CLOCK" },
                { url: '/good-job', title: "바른생활" },
                { url: '/marriage-mind', title: "결혼하는 마음" },
                { url: "/cwr", title: "고양이 글방" },
                { url: "/your_name", title: "아기이름 연구소" },
                { url: "/still_left", title: "Still Left" },
                { url: "/unsubmitted", title: "Unsubmitted" }
            ]
        }
    }
})
</script>

<style lang="scss" scoped>
.app-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    max-width: 560px;
    margin-left: auto;
    margin-right: auto;
}

.app-card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 20px;
    border: 1px solid #E5E7EB;
    border-radius: 12px;
    text-decoration: none;
    color: #1A1A1A;
    transition: all 0.2s ease;
    background: #ffffff;

    &:hover {
        border-color: #1A1A1A;
        background: #F9FAFB;
    }
}

.app-card-title {
    font-size: 15px;
    font-weight: 500;
}

.app-card-arrow {
    font-size: 16px;
    color: #9CA3AF;
    transition: color 0.2s ease;

    .app-card:hover & {
        color: #1A1A1A;
    }
}

@media (max-width: 576px) {
    .app-grid {
        grid-template-columns: 1fr;
    }
}
</style>