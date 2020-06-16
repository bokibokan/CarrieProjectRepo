<template>
    <div class="sos-button-div">
        <v-container fill-height fluid grid-list-lg>
            <v-layout wrap>
                <v-flex md12 sm12 lg12>
                    <template>
                        <v-data-table
                            :headers="headers"
                            :items="data"
                            :page.sync="page"
                            :items-per-page="itemsPerPage"
                            hide-default-footer
                            class="elevation-1 sos-button-table"
                            @page-count="pageCount = $event"
                        ></v-data-table>
                    </template>

                    <div class="text-center pt-2">
                        <v-pagination v-model="page" :length="pageCount"></v-pagination>
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import axios from 'axios';
import { mapState } from 'vuex';
export default {
    layout: 'dashboard',
    async asyncData() {
        const { data } = await axios.get(`https://my-json-server.typicode.com/bokibokan/ProjectCarrieForms/data`);
        return {
            page: 1,
            pageCount: 0,
            itemsPerPage: 10,
            // headers: [
            //     // { text: 'ID', value: 'id' },
            //     { text: 'Name', value: 'name' },
            //     { text: 'Surname', value: 'surname' },
            //     { text: 'SOS Button Status', value: 'sosbuttonid' },
            //     { text: 'Age', value: 'age' },
            //     { text: 'Gender', value: 'gender' },
            //     { text: 'City', value: 'city' },
            //     { text: 'State', value: 'state' },
            //     { text: 'Zip', value: 'zip' },
            //     { text: 'Telephone', value: 'telephone' },
            // ],
            data,
        };
    },
    computed: {
        headers() {
            return [
                {
                    text: this.$t('users.headers.id'),
                    sortable: false,
                    value: 'id',
                },
                {  text: this.$t('users.headers.name'), value: 'name' },
                {  text: this.$t('users.headers.surname'), value: 'surname' },
                {  text: this.$t('users.headers.sosbuttonid'), value: 'sosbuttonid' },
                {  text: this.$t('users.headers.age'), value: 'age' },
                {  text: this.$t('users.headers.gender'), value: 'gender' },
                {  text: this.$t('users.headers.city'), value: 'city' },
                {  text: this.$t('users.headers.state'), value: 'state' },
                {  text: this.$t('users.headers.zip'), value: 'zip' },
                {  text: this.$t('users.headers.telephone'), value: 'telephone' },
            ];
        },
    },

    mounted() {},
};
</script>

<style lang="scss">
.sos-button-table {
    margin-bottom: 5%;
}
</style>