<template>
  <v-dialog v-model="dialog" width="800" scrollable>
    <template v-slot:activator="{ on, attrs }">
      <div
        class="mx-auto text-center py-5 ma-1 fill-height"
        v-on="on"
        v-ripple
        v-bind="attrs"
        style="cursor: pointer; border-radius: 12px;background:#fafafa"
      >
        <v-avatar size="120">
          <v-img
            :src="require('@/assets/img/team/' + data.image)"
            :lazy-src="require('@/assets/img/team/' + data.image)"
          ></v-img>
        </v-avatar>
        <p class="mt-3 mb-0 google-font mb-0" style="font-size: 110%">
          {{ data.name }}
        </p>
        <!-- <SocialMediaDetails
          class="pl-0 ml-0 mb-2 mt-2"
          :socialInfo="data.social"
        /> -->
      </div>
    </template>
    <v-card class="white" v-if="dialog" style="border-radius: 12px">
      <v-card-text class="pa-0">
        <v-container fluid class="">
          <!-- style="border-bottom: 1px solid #e0e0e0" -->
          <v-row class="my-2">
            <v-col md="12" cols="12" class="px-md-8 px-3">
              <v-list class="pa-0 ma-0">
                <v-list-item class="pa-0 ma-0">
                  <v-list-item-avatar size="60">
                    <v-img
                      :src="require('@/assets/img/team/' + data.image)"
                      :lazy-src="require('@/assets/img/team/' + data.image)"
                      :alt="data.name"
                    ></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title
                      class="google-font mb-0"
                      style="font-size: 200%; font-weight: 600"
                      >{{ data.name }}</v-list-item-title
                    >
                    <v-list-item-subtitle
                      class="google-font mb-0 mt-1"
                      style="font-size: 110%; font-weight: 500; color: black"
                      >
                        {{ data.company.designation }} | 
                        <span v-if="data.company.extra.length">{{ data.company.extra }} </span>
                      </v-list-item-subtitle
                    >
                    
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
          <v-row>
            <v-col md="12" cols="12" class="px-md-8 px-5">
              <p class="google-font mb-0" style="font-size: 110%; color: black">
                <b>Bio</b>
              </p>
              <p class="google-font" style="font-size: 120%; color: black">
                {{ data.bio }}
              </p>

              <SocialMediaDetails
                class="pl-0 ml-0 mb-2"
                :socialInfo="data.social"
              />
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <!-- <v-divider></v-divider> -->

      <v-card-actions class="white">
        <v-spacer></v-spacer>
        <v-btn
          aria-label="close"
          class="px-5"
          color="black"
          text
          @click="dialog = false"
          >Close</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import SocialMediaDetails from "../Common/teamSocialMedia.vue";
export default {
  name: "teamDetails",
  components: {
    SocialMediaDetails,
  },
  props: ["data"],
  data: () => ({
    dialog: false,
  }),
};
</script>