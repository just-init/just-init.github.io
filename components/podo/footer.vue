<!--<template>-->
<!--  &lt;!&ndash; -&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;-->
<!--        Start Footer-->
<!--  -&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45; &ndash;&gt;-->
<!--    <v-footer class="footer">-->
<!--        <v-container>-->
<!--            <v-row class="py-0 py-md-4">-->
<!--                <v-col cols="12" sm="12" md="12" lg="3" class="px-xs-0">-->
<!--                    <h4 class="font-weight-regular font-18">대표</h4>-->
<!--                    <p class="mt-4">이채은</p>-->
<!--                </v-col>-->
<!--                <v-col cols="12" sm="12" md="12" lg="3" class="px-xs-0">-->
<!--                    <h4 class="font-weight-regular font-18">사업자등록번호</h4>-->
<!--                    <p class="mt-4">601-31-69602</p>-->
<!--                </v-col>-->
<!--                <v-col cols="12" sm="12" md="12" lg="3" class="px-xs-0">-->
<!--                    <h4 class="font-weight-regular font-18">Phone</h4>-->
<!--                    <p class="mt-4 mb-0">Office : 0507 13036449</p>-->
<!--                </v-col>-->
<!--                <v-col cols="12" sm="12" md="12" lg="3" class="px-xs-0">-->
<!--                    <h4 class="font-weight-regular font-18">Email</h4>-->
<!--                    <p class="mt-4 mb-0">-->
<!--                        Office : justinit.service@gmail.com-->
<!--                    </p>-->
<!--                </v-col>-->
<!--            </v-row>-->
<!--            <div class="footer-bottom-bar font-14">-->
<!--                <div class="d-block d-md-flex align-center">-->
<!--                    <p>-->
<!--                        Copyright © Jaemi Lab. All rights reserved.-->
<!--                    </p>-->
<!--                    <div class="ml-auto">-->
<!--                        <div class="d-flex align-center">-->
<!--                            <a href="./terms" class="link px-4">디지털 컨텐츠 이용약관</a>-->
<!--                            <a href="./privacy" class="link px-4">개인정보 방침</a>-->
<!--                            <a href="./copyright" class="link px-4">Copyright</a>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </v-container>-->
<!--    </v-footer>-->
<!--  &lt;!&ndash; -&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;-->
<!--        End Footer-->
<!--  -&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45; &ndash;&gt;-->
<!--</template>-->

<template>
    <v-footer class="bg-dark">
        <v-container class="d-flex align-center">
            <v-btn variant="text"
                   elevation="0"
                   class="bg-dark"
                   href="/"

            >
                <v-img :src="require('@/assets/images/logo-header.png')" alt="logo"/>
            </v-btn>
            <div class="flex-grow-1"></div>
            <div>

            </div>
            <div class="d-flex flex-column align-end">
                <div class="d-flex flex-row">
                    <v-btn
                            v-for="link in links"
                            :key="link.text"
                            variant="plain"
                            elevation="0"
                            class="bg-dark theme--dark"
                            :href="link.url"
                    >
                        {{ link.text }}
                    </v-btn>
                </div>
                <span class="text-center mt-2 pr-4 sm1">
                    {{ name }} | {{ number }} | {{ email }}
                </span>
                <span class="text-center mt-2 align-self-end pr-4">
                    {{ copyRight }}
                </span>
            </div>
        </v-container>
    </v-footer>
</template>


<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    data() {
        return {
            "links": [{
                "text": "디지털 컨텐츠 이용약관",
                "url": "./terms.html"
            }, {
                "text": "개인정보 방침",
                "url": "./privacy.html"
                // }, {
                //     "text": "Copyright",
                //     "url": "./license.html"
            }],
            "name": "제이미 대표 이채은 ",
            "number": "사업자등록번호 601-31-69602",
            "email": "이메일 : justinit.service@gmail.com",
            "copyRight": "Copyright © Jaemi Lab. All rights reserved."
        }
    }

})
</script>