<template>
  <v-container
    fluid
    class="ma-0 pa-0"
    style="border: 1px solid black; border-radius: 12px;background: #4984F2"
  >
    <v-row
      justify="center"
      align="center"
      class="pa-5 px-10"
      style="gradient: to bottom, red, blue"
    >
      <v-col md="8">
        <p class="google-font mb-0" style="font-size: 35px; font-weight: 300">
          Women Techmakers Jalandhar
        </p>
        <p>
          A special community called Women Techmakers Jalandhar has been founded
          for girls to bridge the gap between women who are eager to lay their
          hands on the latest technology.
          <br /><br />
          Google’s Women Techmakers program provides visibility, community, and
          resources for women in technology.
        </p>
        <v-btn rounded outlined>See Events</v-btn>
      </v-col>
      <v-col md="4">
        <v-img
          src="https://www.womentechmakers.com/static/assets/imgs/ambassadors/cards/card2-536.jpg"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HomeEvent",
  data: () => ({}),
  components: {},
};
</script>

<style>
</style>