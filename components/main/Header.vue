<template>
  <div>
    <!-- -----------------------------------------------
          Start Header
    ----------------------------------------------- -->
    <v-app-bar app absolute class="app-header" flat elevate-on-scroll>
      <v-container class="py-0 fill-height">
        <!-- Logo -->
        <MainLogo />

        <v-spacer></v-spacer>
        <!-- <v-btn class="d-block d-md-none" text @click="toggleClass()">
          <v-app-bar-nav-icon class="white--text" />
        </v-btn> -->
        <!-- Desktop view Navigation -->
        <div class="navigation" v-bind:class="[isActive ? 'd-block' : '']" @click="isActive = !isActive">
          <ul class="navbar-nav">
            <li class="nav-item" text>
              <n-link class="nav-link" nuxt to="/just-clock"> Custom Components </n-link>
            </li>
            <li class="nav-item" text>
              <n-link class="nav-link" nuxt to="/homemade_trainer">
                Basic Components
              </n-link>
            </li>
            <li class="nav-item">
              <!-- login-regiter -->
              <v-btn color="white" nuxt target="_blank"
                href="https://www.wrappixel.com/templates/nextkit-nuxtjs-free-uikit/" elevation="0">
                Download Free
              </v-btn>
            </li>
          </ul>
        </div>
      </v-container>
    </v-app-bar>
    <!-- -----------------------------------------------
          End Header
    ----------------------------------------------- -->
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({

  data() {
    return {
      isActive: false
    };
  },
  // methods: {
  //   toggleClass: function (event) {
  //     this.isActive = !this.isActive;
  //   }
  // }
})
</script>
