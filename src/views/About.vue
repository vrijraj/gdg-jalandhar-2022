<template>
  <v-main>
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col md="11" lg="9">
          <p class="google-font mb-0" style="font-size: 35px; font-weight: 300">
            About Google Developers Group Jalandhar
          </p>
          <p>
            Google Developer Group Jalandhar is inspired by GTUG/GDG Family . We
            started our journey in Feb 2011. We try to engage student
            developers, fresh graduates and professionals through our hack
            events & meetups. The motive is to create a local ecosystem of
            programmers & hackers in and around Jalandhar. The technology
            awareness is main goal for first few years of the group.
            <br /><br />
            To put it in a nutshell, we are a community that organizes tech
            talks, workshops, bootcamps, Google flagship events where
            programmers meet to discuss and work with several Google developer
            resources and products.
          </p>

          <social-media class="mb-5" />

          <v-btn color="primary" depressed class="mr-3">Join us</v-btn>
          <v-btn color="primary" depressed outlined>Join us</v-btn>

          <br><br>
          <p>Questions? Please contact gdgjalandhar@gmail.com</p>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import SocialMedia from "../components/Common/SocialMedia.vue";
export default {
  name: "About",
  data: () => ({}),
  components: {
    SocialMedia,
  },
};
</script>
