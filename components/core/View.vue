<template>
    <v-content class="background">
        <div id="core-view">
            <v-fade-transition mode="out-in">
                <nuxt></nuxt>
            </v-fade-transition>
        </div>
    </v-content>
</template>

<script>
export default {
    name: 'CoreView',

    metaInfo() {
        return {
            title: 'Vue Material Dashboard by CreativeTim',
        };
    },
};
</script>

<style>
.background {
    background-color: #dddddd;
}
</style>
