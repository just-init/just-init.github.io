<template>
  <v-main>
    <!-- TODO 에러 if 문 분기 처리 필요해보임 -->
    <Banner404 />
  </v-main>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Error',
  layout: "empty",
  props: {
    error: {
      type: Object,
      default: null
    },
    data() {
      return {
        pageNotFound: "404 Not Found",
        otherError: "An error occurred"
      };
    },
    // head() {
    //   const title =
    //     this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    //   return {
    //     title
    //   };
    // }
  },
})
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
