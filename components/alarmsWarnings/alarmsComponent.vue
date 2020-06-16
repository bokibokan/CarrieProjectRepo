<template>
    <div class="warningsDiv">
        <material-card color="red" :title="$t('alarms.title')" :text="$t('alarms.text')">
            <v-data-table
                :headers="headers"
                :items="items"
                :items-per-page="5"
                item-key="id"
                show-expand
                single-expand
            >
                <template slot="headerCell" slot-scope="{ header }">
                    <span
                        class="font-weight-light text-warning text--darken-3"
                        v-text="header.text"
                    />
                </template>
                <!-- dropdowns for the alarms in the component -->
                <template v-slot:expanded-item="{ headers }">
                    <td :colspan="headers.length">Some extra details</td>
                </template>
            </v-data-table>
        </material-card>
    </div>
</template>

<script>
import moment from 'moment';

export default {
    layout: 'dashboard',
    middleware: 'authentication',
    components: {},
    data() {
        return {
            items: [
                {
                    id: 1,
                    time: moment(Date()).format('DD.MM.YY HH:mm'),
                    name: 'Bojan',
                    lastname: 'Gorgievski',
                    event: 'Alarm',
                },
                {
                    id: 2,
                    time: moment(Date()).format('DD.MM.YY HH:mm'),
                    name: 'Bojan',
                    lastname: 'Gorgievski',
                    event: 'Alarm',
                },
                {
                    id: 3,
                    time: moment(Date()).format('DD.MM.YY HH:mm'),
                    name: 'Bojan',
                    lastname: 'Gorgievski',
                    event: 'Alarm',
                },
                {
                    id: 4,
                    time: moment(Date()).format('DD.MM.YY HH:mm'),
                    name: 'Bojan',
                    lastname: 'Gorgievski',
                    event: 'Sos button pushed',
                },
                {
                    id: 5,
                    time: moment(Date()).format('DD.MM.YY HH:mm'),
                    name: 'Bojan',
                    lastname: 'Gorgievski',
                    event: 'Sos button pushed',
                },
                {
                    id: 6,
                    time: moment(Date()).format('DD.MM.YY HH:mm'),
                    name: 'Bojan',
                    lastname: 'Gorgievski',
                    event: 'Alarm',
                },
            ],
            tabs: 0,
            list: {
                0: false,
                1: false,
                2: false,
            },
        };
    },
    computed: {
        title() {
            // this.$t("title") returns the value of our title attribute in our JSON file
            // The correct file is selected based on the locale value
            // If it was an object, we could access its attributes like so: this.$t("myObject").myAttribute
            return this.$t("alarms.headings.name").headers.text
            
        },
           headers() {
            return [
                {
                    text: this.$t('alarms.headers.time'),
                    sortable: false,
                    value: 'id',
                },
                {
                    sortable: false,
                    text: this.$t('alarms.headers.name'),
                    value: 'name',
                },
                {
                    sortable: false,
                    text: this.$t('alarms.headers.lastname'),
                    value: 'lastname',
                },
                {
                    sortable: false,
                    text: this.$t('alarms.headers.event'),
                    value: 'event',
                },
            ];
        },
    },
    methods: {
        complete(index) {
            this.list[index] = !this.list[index];
        },
    },
    mounted() {},
};
</script>


<style lang="scss">
// .warningsDiv {
//     margin-bottom: 15%;
// }
</style>
