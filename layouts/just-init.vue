<template>
    <v-app>
        <MainHeader />
        <!--v-if="$route.name!=='login'"-->
        <v-main>
            <nuxt />
        </v-main>
        <MainFooter />
    </v-app>
</template>