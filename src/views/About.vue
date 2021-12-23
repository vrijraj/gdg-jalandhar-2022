<template >
  <v-main class="py-md-8 py-0">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col md="11" lg="9" class="text-center">
          <v-img class="mt-md-n3 my-5 my-md-0" :src="require('@/assets/img/about.svg')" :lazy-src="require('@/assets/img/about.svg')" ></v-img>
          <p class="gdg-heading mb-0 ">
            Google Developers Group Jalandhar
          </p>
          <p class="google-font" style="color:#5f6368;font-size:19px">The Community of Developers, For Developers, By Developers</p>
          <p class="mt-5">
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

          <social-media community="GDG" class="mb-5" />

          <v-btn color="primary" href="https://gdg.community.dev/gdg-jalandhar/" target="_blank" depressed class="mr-3">Join us</v-btn>

          <br /><br />
          <p>Questions? Please contact gdgjalandhar@gmail.com</p>

          <v-divider class="mt-md-15 mt-8 mb-0 mb-md-5"></v-divider>

          <v-container fluid class="px-0 text-left my-md-15 my-3">
            <v-row
              justify="center"
              align="center"
              style="gradient: to bottom, red, blue"
            >
              <v-col md="8">
                <p
                  class="gdg-heading mb-0"
                >
                  Women Techmakers Jalandhar
                </p>
                <p>
                  A special community called Women Techmakers Jalandhar has been
                  founded for girls to bridge the gap between women who are
                  eager to lay their hands on the latest technology.
                  <br /><br />
                  Google’s Women Techmakers program provides visibility,
                  community, and resources for women in technology.
                </p>
                <social-media community="WTM" class="mb-5" />
                <v-btn rounded depressed class="mr-3" href="https://wtm.gdgjalandhar.com/" target="_blank" color="primary">WTM Jalandhar</v-btn>
                <v-btn rounded outlined href="https://www.womentechmakers.com/" target="_blank">More Info</v-btn>
              </v-col>
              <v-col md="4">
                <v-img
                  src="https://www.womentechmakers.com/static/assets/imgs/ambassadors/cards/card2-536.jpg"
                ></v-img>
              </v-col>
            </v-row>
          </v-container>
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
