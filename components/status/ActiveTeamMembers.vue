<template>
    <v-layout wrap>
        <div class="active-sos-buttons-div">
            <v-flex sm12 xs12 md12 lg12>
                <material-stats-card
                    color="green"
                    icon="mdi-account"
                    :title="$t('activeteammembers.title')"
                    :value="`${active}`"
                    sub-icon="mdi-comment-text"
                     :sub-text="$t('activeteammembers.subtext')"
                />
            </v-flex>
        </div>
    </v-layout>
</template>

<script>
import axios from 'axios';
export default {
    layout: 'dashboard',
    middleware: 'authentication',
    components: {},
    data() {
        return {
            active: 13,
        };
    },
};
</script>
<style lang="scss" >
</style>