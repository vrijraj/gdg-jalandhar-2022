<template>
  <v-container fluid class="px-0">
    <v-row justify="center" align="center">
      <v-col md="3" cols="12">
        <p class="gdg-heading mb-0">
          Our Community Events
        </p>
        <p>
          Our events are open to newbies, developers, managers, and
          organizations who are interested in Google's technologies or use them
          as part of their projects. 
        </p>
        <v-btn rounded outlined href="https://gdg.community.dev/gdg-jalandhar/" target="_blank">See Events</v-btn>
      </v-col>
      <v-col md="9" cols="12">
        <v-container fluid class="px-0">
          <v-row>
            <v-col md="4" cols="12" v-for="(item, index) in events" :key="index">
              <v-card class="mx-auto" outlined flat style="border-radius:12px">
                <v-img
                  class="white--text align-end"
                  height="180px"
                  :src="item.img"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.7)"
                >
                  <v-card-title class="google-font">{{ item.title }}</v-card-title>
                </v-img>
                <v-card-text class="text--primary">
                  <div>{{ item.desc }}</div>
                </v-card-text>
                <v-card-actions>
                  <v-btn color="orange" :href="item.link" target="_blank" text>More Info </v-btn>
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
        desc: "TechDrill is an initiative where we’ll train the community members by hosting 7-days trainings, twice in a month by providing training, opportunity to learn and resources to grow.",
        link:"https://techdrill.gdgjalandhar.com/"
      },
      {
        title: "Together We Rise",
        img: "https://wtm.gdgjalandhar.com/img/twrlarge.49e6fb9b.jpg",
        desc: "Together We Rise is a 6 months initiative where we’ll train the community members by hosting vertical meetup every month on the last Sunday of each month by providing training, opportunity to speak and resources to grow.",
        link:"http://wtm.gdgjalandhar.com/twr"
      },
      {
        title: "DevFest India",
        img: "https://raw.githubusercontent.com/DevFest-India/website-data-2021/main/DevFestIndia2021.png",
        desc: "DevFest India is the annual developer’s fest organized by Google Developers Group. Like 2020, this year too we have 50+ GDG Communities uniting together to bring before you DevFest India",
        link:"https://devfestindia.com/"
      },
    ],
    tech: ["Web", "Firebase", "Android", "Flutter", "Google Cloud Platform"],
  }),
  components: {},
};
</script>

<style>
</style>