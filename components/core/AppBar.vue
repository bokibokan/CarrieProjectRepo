<template>
    <v-app-bar id="core-app-bar" absolute app color="transparent" flat height="88">
        <v-toolbar-title class="tertiary--text font-weight-light align-self-center">
            <v-btn v-if="responsive" dark icon @click.stop="onClick">
                <v-icon>mdi-view-list</v-icon>
            </v-btn>
        </v-toolbar-title>

        <v-spacer />

        <v-toolbar-items>
            <v-row align="center" class="mx-0">
                <v-btn class="mr-15" icon to="/">
                    <v-icon color="tertiary">mdi-view-dashboard</v-icon>
                </v-btn>
                <!-- button for the user currently logged in and logout button -->
                <div class="text-center account-btn">
                    <v-menu offset-y>
                        <template v-slot:activator="{ on }">
                            <div class="my-2">
                                <v-btn
                                    class="mr-15"
                                    v-on="on"
                                    color="tertiary"
                                    fab
                                    small
                                    dark
                                >
                                    <v-icon>mdi-account</v-icon>
                                </v-btn>
                            </div>
                        </template>
                        <v-list>
                            <v-list-item>
                                <div>
                                    <button>LOGOUT</button>
                                </div>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </div>
                <!-- button for language options  -->
                <div class="text-center">
                    <v-menu offset-y>
                        <template v-slot:activator="{ on }">
                            <v-btn small color="tertiary" dark v-on="on">Language</v-btn>
                        </template>
                        <v-list>
                            <v-list-item>
                                <div>
                                    <v-btn x-small color="white" @click="changeLanguage('en')">EN</v-btn>
                                    <v-btn x-small color="white" @click="changeLanguage('mk')">MK</v-btn>
                                </div>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </div>
            </v-row>
        </v-toolbar-items>
    </v-app-bar>
</template>

<script>
// Utilities
import { mapMutations } from 'vuex';

export default {
    data: () => ({
        notifications: [
            'Mike, John responded to your email',
            'You have 5 new tasks',
            "You're now a friend with Andrew",
            'Another Notification',
            'Another One',
        ],
        title: null,
        responsive: false,
    }),

    watch: {
        $route(val) {
            this.title = val.name;
        },
    },

    mounted() {
        this.onResponsiveInverted();
        window.addEventListener('resize', this.onResponsiveInverted);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.onResponsiveInverted);
    },
    computed: {
        name() {
            // this.$t("title") returns the value of our title attribute in our JSON file
            // The correct file is selected based on the locale value
            // If it was an object, we could access its attributes like so: this.$t("myObject").myAttribute
            return this.$t('name');
        },
    },
    methods: {
        ...mapMutations('app', ['setDrawer', 'toggleDrawer']),
        onClick() {
            this.setDrawer(!this.$store.state.app.drawer);
        },
        onResponsiveInverted() {
            if (window.innerWidth < 991) {
                this.responsive = true;
            } else {
                this.responsive = false;
            }
        },
        // function for chaning the language
        changeLanguage(lang) {
            // Change the i18n context object's locale
            // This makes it so the correct locale file is used
            this.$i18n.locale = lang;
        },
    },
};
</script>

<style>
/* Fix coming in v2.0.8 */
#core-app-bar {
    width: auto;
}

#core-app-bar a {
    text-decoration: none;
}
.mr-15 {
    margin-right: 15px;
}
</style>
