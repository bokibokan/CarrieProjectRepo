<template>
    <v-container fill-height fluid grid-list-xl>
        <v-layout wrap>
            <!-- alarms and warnings component -->
            <v-flex md12 sm12 lg12>
                <alarms />
            </v-flex>
            <v-flex md12 sm12 lg12>
                <warnings />
            </v-flex>
            <!-- alarms and warnings component -->
        </v-layout>
    </v-container>
</template>

<script>
import warnings from '~/components/alarmsWarnings/warningsComponent';
import alarms from '~/components/alarmsWarnings/alarmsComponent';
export default {
    layout: 'dashboard',
    components: {
        alarms,
        warnings,
    },
};
</script>
