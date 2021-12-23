<template>
  <v-container fluid class="ma-0 pa-0">
    <v-row justify="center" align="center">
      <v-col md="3">
        <p class="google-font mb-0" style="font-size: 35px; font-weight: 300">
          Our Community Events
        </p>
        <p>
          Our events are open to newbies, developers, managers, and
          organizations who are interested in Google's technologies or use them
          as part of their projects. 
        </p>
        <v-btn rounded outlined>See Events</v-btn>
      </v-col>
      <v-col md="9">
        <v-container fluid>
          <v-row>
            <v-col md="4" v-for="(item, index) in events" :key="index">
              <v-card class="mx-auto" outlined flat style="border-radius:12px">
                <v-img
                  class="white--text align-end"
                  height="200px"
                  :src="item.img"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                >
                  <v-card-title>{{ item.title }}</v-card-title>
                </v-img>
                <v-card-text class="text--primary">
                  <div>{{ item.desc }}</div>
                </v-card-text>
                <v-card-actions>
                  <v-btn color="orange" text> Share </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HomeEvent",
  data: () => ({
    events: [
      {
        title: "TechDrill",
        img: "https://raw.githubusercontent.com/GDG-Jalandhar/WebsiteData/master/TechDrill%20Main%20Cover.jpg",
        desc: "Meet local developers and technologists. All are welcome, including those with diverse backgrounds and from various companies and industries.",
      },
      {
        title: "TechDrill",
        img: "https://raw.githubusercontent.com/GDG-Jalandhar/WebsiteData/master/TechDrill%20Main%20Cover.jpg",
        desc: "Meet local developers and technologists. All are welcome, including those with diverse backgrounds and from various companies and industries.",
      },
      {
        title: "TechDrill",
        img: "https://raw.githubusercontent.com/GDG-Jalandhar/WebsiteData/master/TechDrill%20Main%20Cover.jpg",
        desc: "Meet local developers and technologists. All are welcome, including those with diverse backgrounds and from various companies and industries.",
      },
    ],
    tech: ["Web", "Firebase", "Android", "Flutter", "Google Cloud Platform"],
  }),
  components: {},
};
</script>

<style>
</style>