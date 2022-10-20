<template>
  <v-app>
    <AppToolbar />
    
    <v-main class="px-0 mx-0">
    <!--
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
                <span class="mr-md-1" style="font-size:85%"> 
                  Checkout the new Event: <b>DevFest Jalandhar 2022</b>
                </span>
                <!-- <br class="d-block d-sm-none" /> -->
                <a
                  class="ml-1"
                  href="https://devfest.gdgjalandhar.com/"
                  style="color: white;font-size:85%"
                  target="_blank"
                  >See More</a
                >
              </p>
            </v-col>
          </v-row>
        </v-container>
      </v-slide-y-reverse-transition>
      -->
      <v-slide-y-reverse-transition>
        <router-view v-show="show" />
      </v-slide-y-reverse-transition>
    </v-main>
    <AppFooter class="hidden-sm-and-down" />
    <AppDrawer/>
    <AppBottomNavBar class="hidden-md-and-up"/>
  </v-app>
</template>

<script>
import AppToolbar from "../src/components/Core/Toolbar.vue";
import AppFooter from "../src/components/Core/Footer.vue"
import AppDrawer from "../src/components/Core/Drawer.vue"
import AppBottomNavBar from "../src/components/Core/BottomNav.vue"
export default {
  name: "App",
  components: {
    AppToolbar,
    AppFooter,
    AppDrawer,
    AppBottomNavBar
  },
  data: () => ({
    //
    registration: null,
  }),
  created() {
    this.show = true;

    // Listen for swUpdated event and display refresh snackbar as required.
    document.addEventListener('swUpdated', this.showRefreshUI, { once: true });
    // Refresh all open app tabs when a new service worker is installed.
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (this.refreshing) return;
        this.refreshing = true;
      window.location.reload();
    });
  },
  methods:{
    showRefreshUI(e) {
      this.registration = e.detail;
      // this.snackBtnText = 'Refresh';
      // this.snackWithBtnText = 'New version available!';
      // this.snackWithButtons = true;
      this.refreshApp()
    },
    refreshApp() {
      // this.snackWithButtons = false;
        if (!this.registration || !this.registration.waiting) { return; }
        this.registration.waiting.postMessage('skipWaiting');
      }
  }
};
</script>
