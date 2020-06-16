<template>
    <!-- map -->
    <v-layout wrap>
        <v-flex md12 sm12 lg12>
            <no-ssr>
                <l-map class="map" ref="map" :zoom="13" :center="[41.99646, 21.43141]">
                    <l-tile-layer
                        url="https://stamen-tiles.a.ssl.fastly.net/terrain-lines/{z}/{x}/{y}.png"
                        attribution="Map tiles by <a href='http://stamen.com'>Stamen Design</a>, under <a href='http://creativecommons.org/licenses/by/3.0'>CC BY 3.0</a>. Data by <a href='http://openstreetmap.org'>OpenStreetMap</a>, under <a href='http://www.openstreetmap.org/copyright'>ODbL</a>."
                    ></l-tile-layer>
                    <l-marker :lat-lng="[41.99646, 21.43141]" @click="dialog=true"></l-marker>
                    <l-marker :lat-lng="[41.987, 21.428]"></l-marker>
                    <l-marker :lat-lng="[41.977, 21.418]"></l-marker>
                    <l-marker :lat-lng="[41.957, 21.488]"></l-marker>
                </l-map>
            </no-ssr>
        </v-flex>

        <v-dialog v-model="dialog" max-width="290">
            <v-card>
                <v-card-title class="headline">Title</v-card-title>

                <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn color="green darken-1" text @click="dialog = false">Disagree</v-btn>

                    <v-btn color="green darken-1" text @click="dialog = false">Agree</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-layout>
    <!-- map -->
</template>

<script>
export default {
    layout: 'dashboard',
    mounted() {
        this.$nextTick(() => {
            this.$refs.map.mapObject.dragging.disable();
            this.$refs.map.mapObject.scrollWheelZoom.disable();
            this.$refs.map.mapObject.doubleClickZoom.disable();
            this.$refs.map.mapObject.touchZoom.disable();
        });
    },
    data() {
        return {
            dialog: false,
        };
    },
};
</script>

<style lang="scss">
.map {
    max-width: 100%;
    min-height: 80vh;
    z-index: 0;
}
</style>
