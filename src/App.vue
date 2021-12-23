<template>
  <v-app>
    <AppToolbar />
    
    <v-main class="px-0 mx-0">
      <v-slide-y-reverse-transition>
        <v-container
          fluid
          class="text-center my-0 text-sm-center white--text"
              style="background:#484A52"
        >
          <v-row align="center" justify="center">
            <v-col
              md="12"
              lg="12"
              xl="12"
              
            >
              <p class="py-0 google-font mb-0">
                <span class="mr-md-3" style="font-size:85%"
                  >TechDrill is an initiative where we’ll train the community members by hosting 7-days trainings, twice in a month by providing training, opportunity to learn and resources to grow.</span
                >
                <br class="d-block d-sm-none" />
                <router-link
                  class=""
                  to="https://vrijraj.xyz"
                  style="color: white"
                  >See More</router-link
                >
              </p>
            </v-col>
          </v-row>
        </v-container>
      </v-slide-y-reverse-transition>
      <v-slide-y-reverse-transition>
        <router-view v-show="show" />
      </v-slide-y-reverse-transition>
    </v-main>
    <AppFooter/>
  </v-app>
</template>

<script>
import AppToolbar from "../src/components/Core/Toolbar.vue";
import AppFooter from "../src/components/Core/Footer.vue"
export default {
  name: "App",
  components: {
    AppToolbar,
    AppFooter
  },
  data: () => ({
    //
  }),
  created() {
    this.show = true;
  },
};
</script>
