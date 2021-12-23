<template>
  <v-footer
    height="auto"
    style="background: #fafafa; border-top: 1px solid #e0e0e0"
  >
    <v-container fluid class="px-0 mx-0">
      <v-row align="center" justify="center">
        <v-col md="11" lg="9">
          <!-- <v-divider></v-divider> -->
          <v-fab-transition>
            <v-btn
              aria-label="FAB Button"
              style="margin-top: -7px; margin-right: 12%"
              color="white"
              absolute
              top
              right
              fab
              @click="toTop"
            >
              <v-icon>mdi-chevron-up</v-icon>
            </v-btn>
          </v-fab-transition>
          <SocialMedia community="GDG" class="mb-2 mt-n2" />
          <v-divider></v-divider>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col md="11" lg="9" class="my-0">
          <v-container fluid class="my-0 py-0 px-0">
            <v-row>
              <v-col md="3">
                <p
                  class="google-font mb-2"
                  style="font-size: 140%; font-weight: 300"
                >
                  <b>About</b>
                </p>
                <div v-for="(item, i) in aboutLinks" :key="i">
                  <a
                    :href="item.link"
                    rel="noreferrer"
                    class="google-font my-3"
                    target="_blank"
                    style="
                      text-decoration: none;
                      font-size: 100%;
                      color: #3e4551;
                    "
                    >{{ item.name }}</a
                  ><br />
                </div>
              </v-col>
              <v-col md="3">
                <p
                  class="google-font mb-2"
                  style="font-size: 140%; font-weight: 300"
                >
                  <b>Resources</b>
                </p>
                <div v-for="(item, i) in Resources" :key="i">
                  <a
                    :href="item.link"
                    rel="noreferrer"
                    class="google-font my-3"
                    target="_blank"
                    style="
                      text-decoration: none;
                      font-size: 100%;
                      color: #3e4551;
                    "
                    >{{ item.name }}</a
                  ><br />
                </div>
              </v-col>
              <v-col md="3">
                <p
                  class="google-font mb-2"
                  style="font-size: 140%; font-weight: 300"
                >
                  <b>Developer Console</b>
                </p>
                <div v-for="(item, i) in DevConsole" :key="i">
                  <a
                    :href="item.link"
                    rel="noreferrer"
                    class="google-font my-3"
                    target="_blank"
                    style="
                      text-decoration: none;
                      font-size: 100%;
                      color: #3e4551;
                    "
                    >{{ item.name }}</a
                  ><br />
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col md="11" lg="9" class="my-0">
          <v-divider class="mb-4"></v-divider>
          <span class="google-font mr-5" style="font-size: 22px;color:#5f6368">
            Google Developers Group Jalandhar
          </span>
          <div class="float-md-right mt-2">
            <!-- <br class="hidden-md-and-up" /> -->
            <router-link
              to="/code-of-conduct"
              target="_blank"
              rel="noreferrer"
              class="grey--text text--darken-3 mr-4 google-font"
              style="text-decoration: none"
              >Code of Conducts</router-link
            >
            <br class="hidden-md-and-up" />
            <a
              href="https://gdg.community.dev/participation-terms/"
              target="_blank"
              rel="noreferrer"
              class="grey--text text--darken-3 mr-4 google-font"
              style="text-decoration: none"
              >Terms & Conditions</a
            >
            <br class="hidden-md-and-up" />

            <a
              href="https://developers.google.com/community-guidelines"
              target="_blank"
              rel="noreferrer"
              class="grey--text text--darken-3 mr-4 google-font"
              style="text-decoration: none"
              >Community Guidelines</a
            >
            <br class="hidden-md-and-up" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
import SocialMedia from "../Common/SocialMedia.vue";
export default {
  data: () => ({
    aboutLinks: [
      {
        name: "GDG Jalandhar",
        link: "https://gdg.community.dev/gdg-jalandhar/",
      },
      {
        name: "Google Developers Groups",
        link: "https://developers.google.com/programs/community/gdg/",
      },
      {
        name: "Women Techmakers",
        link: "https://www.womentechmakers.com/",
      },
    ],
    Resources: [
      {
        name: "Become a Sponsor",
        link: "mailto:gdgjalandhar@gmail.com?subject=[Become a Sponsor] Your Name",
      },
      {
        name: "Call for Speakers",
        link: "mailto:gdgjalandhar@gmail.com?subject=[Call for Speakers] Your Name",
      },
      {
        name: "Media Kit",
        link: "https://www.womentechmakers.com/",
      },
    ],
    DevConsole: [
      {
        name: "Google API Console",
        link: "https://console.developers.google.com/",
      },
      {
        name: "GCP Console",
        link: "https://console.cloud.google.com/",
      },
      {
        name: "Google Play Console",
        link: "https://play.google.com/console/",
      },
      {
        name: "Firebase Console",
        link: "https://console.firebase.google.com/",
      },
    ],
  }),
  components: {
    SocialMedia,
  },
  methods: {
    toTop() {
      this.$vuetify.goTo(0);
    },
  },
};
</script>

<style>
</style>