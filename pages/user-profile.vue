<template>
    <v-container fill-height fluid>
        <v-row justify="center">
            <v-col cols="12" md="8">
                <material-card
                    color="green"
                    :title="$t('userprofile.title')"
                    :text="$t('userprofile.text')"
                >
                    <v-form>
                        <v-container class="py-0">
                            <v-row>
                                <v-col cols="12" md="6">
                                    <v-text-field
                                        :label="$t('userprofile.label.firstname')"
                                        class="purple-input"
                                    />
                                </v-col>

                                <v-col cols="12" md="6">
                                    <v-text-field
                                        :label="$t('userprofile.label.lastname')"
                                        class="purple-input"
                                    />
                                </v-col>

                                <v-col cols="12" md="4">
                                    <v-radio-group v-model="radios" :mandatory="false">
                                        <v-row>
                                            <v-col cols="12" md="6">
                                                <v-radio
                                                    :label="$t('userprofile.label.male')"
                                                    value="male"
                                                ></v-radio>
                                            </v-col>
                                            <v-col cols="12" md="6">
                                                <v-radio
                                                    :label="$t('userprofile.label.female')"
                                                    value="female"
                                                ></v-radio>
                                            </v-col>
                                        </v-row>
                                    </v-radio-group>
                                </v-col>

                                <v-col cols="12" md="4">
                                    <v-text-field
                                        class="purple-input"
                                        :label="$t('userprofile.label.username')"
                                    />
                                </v-col>

                                <v-col cols="12" md="4">
                                    <v-text-field
                                        :label="$t('userprofile.label.phonenumber')"
                                        class="purple-input"
                                    />
                                </v-col>

                                <v-col cols="12">
                                    <v-text-field
                                        :label="$t('userprofile.label.аddress')"
                                        class="purple-input"
                                    />
                                </v-col>

                                <v-col cols="12" md="4">
                                    <v-text-field
                                        :label="$t('userprofile.label.city')"
                                        class="purple-input"
                                    />
                                </v-col>

                                <v-col cols="12" md="4">
                                    <v-text-field
                                        :label="$t('userprofile.label.state')"
                                        class="purple-input"
                                    />
                                </v-col>

                                <v-col cols="12" md="4">
                                    <v-text-field
                                        class="purple-input"
                                        :label="$t('userprofile.label.postalcode')"
                                        type="number"
                                    />
                                </v-col>

                                <v-col cols="12">
                                    <v-textarea
                                        class="purple-input"
                                        :label="$t('userprofile.label.condition')"
                                    />
                                </v-col>

                                <v-col cols="12" class="text-right">
                                    <v-btn color="success">{{this.$t('userprofile.adduserbutton')}}</v-btn>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-form>
                </material-card>
            </v-col>
            <!-- <v-col cols="12" md="4">
                <material-card class="v-card-profile">
                    <v-avatar slot="offset" class="mx-auto d-block elevation-6" size="130">
                        <img
                            src="https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg"
                        />
                    </v-avatar>
                    <v-card-text class="text-center">
                        <h6 class="overline mb-3">CEO / CO-FOUNDER</h6>

                        <h4 class="font-weight-light">Alec Thompson</h4>

                        <p class="font-weight-light">
                            Don't be scared of the truth because we need to restart the human foundation in truth And I
                            love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...
                        </p>

                        <v-btn color="success">Follow</v-btn>
                    </v-card-text>
                </material-card>
            </v-col>-->
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {};
    },
    computed: {
        title() {
            // this.$t("title") returns the value of our title attribute in our JSON file
            // The correct file is selected based on the locale value
            // If it was an object, we could access its attributes like so: this.$t("myObject").myAttribute
            return this.$t('userprofile.userprofilebutton');
        },
    },
};
</script>
