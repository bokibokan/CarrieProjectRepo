<template>
    <v-layout wrap>
        <div class="daily-alarms">
            <v-flex sm12 xs12 md12 lg12>
                <material-stats-card
                    color="red"
                    icon="mdi-alert-box"
                    :title="$t('dailyalarms.title')"
                    :value="`${active}/${total}`"
                    sub-icon="mdi-comment-text"
                    :sub-text="$t('dailyalarms.subtext')"
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