<template>
  <v-container
    fluid
    class="px-0 py-n3"
    style="border: 1px solid #e0e0e0; border-radius: 12px"
  >
    <v-row justify="center" align="center" class="px-5 px-md-10 pb-0">
      <v-col md="8" sm="8" cols="12" class="order-2 order-md-1">
        <p class="gdg-heading mb-0">Women Techmakers Jalandhar</p>
        <p>
          A special community called Women Techmakers Jalandhar has been founded
          for girls to bridge the gap between women who are eager to lay their
          hands on the latest technology.
          <br /><br />
          Google’s Women Techmakers program provides visibility, community, and
          resources for women in technology.
        </p>
        <social-media community="WTM" class="mb-5" />
        <v-btn
          rounded
          depressed
          class="mr-3"
          href="https://wtm.gdgjalandhar.com/"
          target="_blank"
          color="primary"
          >WTM Jalandhar</v-btn
        >
        <v-btn
          rounded
          outlined
          href="https://www.womentechmakers.com/"
          target="_blank"
          >More Info</v-btn
        >
      </v-col>
      <v-col md="4" sm="4" cols="12" class="order-1 order-md-2">
        <v-img :src="require('@/assets/img/wtm.png')"></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SocialMedia from "../Common/SocialMedia.vue";
export default {
  name: "HomeEvent",
  data: () => ({}),
  components: {SocialMedia},
};
</script>

<style>
</style>