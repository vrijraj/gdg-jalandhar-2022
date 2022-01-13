<template>
  <v-main class="py-md-8 py-0">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col md="11" lg="9">
          <v-container fluid>
            <v-row justify="start" align="start">
              <v-col md="5">
                <p class="gdg-heading mb-0">Page not found</p>
                <p style="font-size: 110%" class="mt-3 mb-0">
                  The requested URL was not found on this server.
                </p>
                <p>That’s all we know.</p>

                <v-btn rounded color="primary" depressed class="mr-3"
                  >Join GDG Jalandhar</v-btn
                >
              </v-col>
              <!-- <v-col md="3">
                <v-img
                  style="width:80%"
                  src="https://www.google.com/images/errors/robot.png"
                ></v-img>
              </v-col> -->
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import data from "../assets/data/FAQ.json";
export default {
  name: "About",
  data: () => ({
    faqsData: data,
  }),
  components: {},
};
</script>
