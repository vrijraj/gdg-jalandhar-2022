<template>
  <v-main class="py-md-8 py-0">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col md="11" lg="9">
          <p class="google-font mb-0" style="font-size: 35px; font-weight: 300">
            Page not found
          </p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, sint. Sit aut eum soluta maiores, nemo recusandae illo quas earum, laborum possimus nobis necessitatibus cupiditate molestiae, expedita animi beatae sed.</p>

          <v-btn rounded color="primary" depressed class="mr-3">Join us</v-btn>
          
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
