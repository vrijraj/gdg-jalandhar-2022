<template>
  <v-main class="py-md-8 py-0">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col md="11" lg="9">
          <p class="gdg-heading mb-0">
            Our Events
          </p>
          <p>
            Our events are open to newbies, developers, managers, and organizations who are interested in Google's technologies or use them as part of their projects.
          </p>


          <p class="mt-10">Upcoming Event</p>
          <v-container fluid >
            <v-row justify="start" align="start">
              <v-col md="4" class="pa-7" cols="12" style="background: #f1f3f4; border-radius: 12px">
                <p
                  class="google-font mb-0"
                  style="font-size: 25px; font-weight: 300"
                >
                    DevCreate Hackathon 2.0
                </p>
                <p class="mt-2">
                  <v-icon>mdi-calendar-month</v-icon> Dec 3 & 4, 2022 &nbsp;&nbsp;
                  <v-icon>mdi-clock-outline</v-icon> 08:00 AM (IST)
                </p>
                <p>
                  A platform for the techies to showcase their skills and knowledge to build something fruitful out of it. This hackathon is open to all Indian science, technology and engineering students pursuing undergraduate, postgraduate and doctoral degrees. </p>
                <!-- <v-btn rounded depressed color="primary" class="mr-2"
                  >Register Now</v-btn
                > -->
                <v-btn rounded outlined depressed color="primary" href="https://hackathon.gdgjalandhar.com" target="_blank"
                  >Register Now</v-btn
                >
              </v-col>
            </v-row>
          </v-container>

          <p class="mt-10">Our Initiative</p>
          <v-container fluid style="background: #f1f3f4; border-radius: 12px">
            <v-row class="pa-4">
              <v-col md="8" cols="12">
                <p
                  class="google-font mb-0"
                  style="font-size: 25px; font-weight: 300"
                >
                  TechDrill By GDG WTM Jalandhar
                </p>
                <p class="mt-2">
                  <v-icon>mdi-calendar-month</v-icon> Twice in a Month &nbsp;&nbsp;
                  <v-icon>mdi-clock-outline</v-icon> 7:00 PM Onwards
                </p>
                <p>
                  TechDrill is an initiative where we’ll train the community members by hosting 7-days trainings, twice in a month by providing training, opportunity to learn and resources to grow.
                </p>
                <!-- <v-btn rounded depressed color="primary" class="mr-2"
                  >Register Now</v-btn
                > -->
                <v-btn rounded outlined depressed color="primary" href="https://bit.ly/io22-jalandhar-event" target="_blank"
                  >More Info</v-btn
                >
              </v-col>
              <v-col md="4"> </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "About",
  data: () => ({}),
  components: {},
};
</script>
