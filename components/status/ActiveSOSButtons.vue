<template>
    <v-layout wrap>
        <div class="active-sos-buttons-div">
            <v-flex sm12 xs12 md12 lg12>
                <material-stats-card
                    color="red"
                    icon="mdi-alert"
                    :title="$t('activesosbuttons.title')"
                    :value="`${active}/${total}`"
                    sub-icon="mdi-comment-text"
                    :sub-text="$t('activesosbuttons.subtext')"
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
            active: 15,
            total: 20,
        };
    },
};
</script>
<style lang="scss" >
</style>