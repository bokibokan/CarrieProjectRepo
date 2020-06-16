<template>
    <v-container fill-height fluid grid-list-xl>
        <v-layout wrap>
            <v-flex md8 sm8 lg10>
                <!-- leaflet map component -->
                <leaflet-map />
                <!-- leaflet map component -->
            </v-flex>
            <!-- sos button component next to map -->
            <v-flex md4 sm4 lg2>
                <sos-buttons />
                <team-members />
                <daily-alarms />
                <daily-warnings />
            </v-flex>
            <!-- sos button component next to map -->

            <!-- alarms and warnings component -->
            <v-flex md8 sm8 lg6>
                <alarms />
            </v-flex>
            <v-flex md8 sm8 lg6>
                <warnings />
            </v-flex>
            <!-- alarms and warnings component -->
        </v-layout>
    </v-container>
</template>

<script>
import leafletMap from '~/components/leafletMap/leaflet';
import warnings from '~/components/alarmsWarnings/warningsComponent';
import alarms from '~/components/alarmsWarnings/alarmsComponent';
import sosButtons from '~/components/status/ActiveSOSButtons';
import teamMembers from '~/components/status/ActiveTeamMembers';
import dailyAlarms from '~/components/status/dailyAlarms';
import dailyWarnings from '~/components/status/dailyWarnings';
export default {
    layout: 'dashboard',
    components: {
        leafletMap,
        alarms,
        warnings,
        sosButtons,
        teamMembers,
        dailyAlarms,
        dailyWarnings
    },
};
</script>
