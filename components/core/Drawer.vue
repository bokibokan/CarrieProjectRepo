<template>
    <v-navigation-drawer
        id="app-drawer"
        v-model="inputValue"
        app
        color="grey darken-2"
        dark
        floating
        mobile-break-point="991"
        persistent
        width="260"
        class="blue lighten-3"
    >
        <template v-slot:img="attrs">
            <v-img v-bind="attrs" gradient="to top, rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)" />
        </template>

        <v-list-item two-line>
            <v-list-item-avatar color="white">
                <v-img src="/carrielogo.png" height="34" contain />
            </v-list-item-avatar>

            <v-list-item-title class="title">Project Carrie</v-list-item-title>
        </v-list-item>

        <v-divider class="mx-3 mb-3" />

        <v-list nav>
            <!-- Bug in Vuetify for first child of v-list not receiving proper border-radius -->
            <div />

            <v-list-item
                v-for="(link, i) in links"
                :key="i"
                :to="link.to"
                active-class="primary white--text"
            >
                <v-list-item-action>
                    <v-icon>{{ link.icon }}</v-icon>
                </v-list-item-action>

                <v-list-item-title v-text="link.text" />
            </v-list-item>
        </v-list>

        <template v-slot:append>
            <v-list nav>
                <v-list-item to="#">
                    <v-list-item-action>
                        <v-icon>mdi-package-up</v-icon>
                    </v-list-item-action>

                    <v-list-item-title class="font-weight-light">Something else</v-list-item-title>
                </v-list-item>
            </v-list>
        </template>
    </v-navigation-drawer>
</template>

<script>
// Utilities
import { mapMutations, mapState } from 'vuex';

export default {
    props: {
        opened: {
            type: Boolean,
            default: false,
        },
    },
    data: () => ({
        links: [
            {
                to: '/',
                icon: 'mdi-view-dashboard',
                text: 'Dashboard',
            },
            {
                to: '/history',
                icon: 'mdi-clipboard-alert-outline',
                text: 'All previous events',
            },
            {
                to: '/users',
                icon: 'mdi-account-multiple',
                text: 'Users list',
            },
            {
                to: '/user-profile',
                icon: 'mdi-account-plus',
                text: 'Add User Profile',
            },
            {
                to: '/table-list',
                icon: 'mdi-account-plus',
                text: 'TEST',
            },
             {
                to: '/reports',
                icon: 'mdi-account-multiple',
                text: 'Reports page',
            },
        ],
    }),

    computed: {
        ...mapState('app', ['image', 'color']),
        inputValue: {
            get() {
                return this.$store.state.app.drawer;
            },
            set(val) {
                this.setDrawer(val);
            },
        },
    },

    methods: {
        ...mapMutations('app', ['setDrawer', 'toggleDrawer']),
    },
};
</script>
