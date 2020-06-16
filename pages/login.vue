<template>
    <div>
        <v-col cols="12" md="12">
            <v-text-field label="Email" class="purple-input" v-model="email" />
        </v-col>
        <v-col cols="12" md="12">
            <v-text-field label="Address" class="purple-input" v-model="password" />
        </v-col>
        <v-btn @click="addUser()">Add user</v-btn>
    </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';

export default {
    middleware: 'storeobject',
    data() {
        const userdata = {
            name: 'Bojan',
            surname: 'Gjorgjievski',
            email: 'adsasdadsa@gmail.com',
            address: { city: 'Skopje', state: 'Gjorce', zip_code: '1060' },
        };
        return {
            userdata,
        };
    },
    computed: {
        ...mapState(['userData']),
        index() {
            console.log(userData);
            return this.$store.state.user.userData;
        },
    },
    methods: {
        ...mapMutations(['user/add']),
        // addUser() {
        //     // this.$store.commit('usersmodule/add', this.userdata);
        //     this.$store.commit('add', this.userdata);
        // },

        addUser() {
            this.$store.commit('user/add',this.userdata)
            // this.add(this.userdata);
            // console.log(this.userdata);
        },
    },
};
</script>
