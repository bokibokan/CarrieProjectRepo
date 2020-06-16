<template>
    <v-layout wrap>
        <div class="daily-alarms">
            <v-flex sm12 xs12 md12 lg12>
                <material-stats-card
                    color="yellow"
                    icon="mdi-hazard-lights"
                    :title="$t('dailywarnings.title')"
                    :value="`${active}/${total}`"
                    sub-icon="mdi-comment-text"
                    :sub-text="$t('dailywarnings.subtext')"
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