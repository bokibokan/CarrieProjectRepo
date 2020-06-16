<template>
    <div class="warningsDiv">
        <material-card
            color="orange"
            :title="$t('warnings.title')"
            :text="$t('warnings.text')"
        >
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
                <!-- dropdowns for the warnings in the component -->
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
                    event: 'Low Battery',
                },
                {
                    id: 2,
                    time: moment(Date()).format('DD.MM.YY HH:mm'),
                    name: 'Bojan',
                    lastname: 'Gorgievski',
                    event: 'Unresponsive button',
                },
                {
                    id: 3,
                    time: moment(Date()).format('DD.MM.YY HH:mm'),
                    name: 'Bojan',
                    lastname: 'Gorgievski',
                    event: 'Low Battery',
                },
                {
                    id: 4,
                    time: moment(Date()).format('DD.MM.YY HH:mm'),
                    name: 'Bojan',
                    lastname: 'Gorgievski',
                    event: 'Battery Full',
                },
                {
                    id: 5,
                    time: moment(Date()).format('DD.MM.YY HH:mm'),
                    name: 'Bojan',
                    lastname: 'Gorgievski',
                    event: 'Battery Full',
                },
                {
                    id: 6,
                    time: moment(Date()).format('DD.MM.YY HH:mm'),
                    name: 'Bojan',
                    lastname: 'Gorgievski',
                    event: 'Unresponsive button',
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
                    text: this.$t('warnings.headers.time'),
                    sortable: false,
                    value: 'id',
                },
                {
                    sortable: false,
                    text: this.$t('warnings.headers.name'),
                    value: 'name',
                },
                {
                    sortable: false,
                    text: this.$t('warnings.headers.lastname'),
                    value: 'lastname',
                },
                {
                    sortable: false,
                    text: this.$t('warnings.headers.event'),
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
