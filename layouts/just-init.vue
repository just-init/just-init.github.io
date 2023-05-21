<template>
    <v-app dark>
        <MainHeader />
        <!--v-if="$route.name!=='login'"-->
        <v-main>
            <nuxt />
        </v-main>
        <MainFooter />
    </v-app>
</template>