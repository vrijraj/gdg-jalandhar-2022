<template>
  <v-main class="py-md-8 py-0">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col md="11" lg="9">
          <p class="google-font mb-0" style="font-size: 35px; font-weight: 300">
            Our Events
          </p>
          <p>
            Google Developer Group Jalandhar is inspired by GTUG/GDG Family . We
            started our journey in Feb 2011. We try to engage student
            developers, fresh graduates and professionals through our hack
            events & meetups. The motive is to create a local ecosystem of
            programmers & hackers in and around Jalandhar. The technology
            awareness is main goal for first few years of the group.
          </p>

          <p class="mt-10">Upcoming Event</p>
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
                  <v-icon>mdi-calendar-month</v-icon> Jan 22, 2021 &nbsp;&nbsp;
                  <v-icon>mdi-clock-outline</v-icon> 5:00 PM Onwards
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Iusto animi omnis quam corrupti vitae, esse maiores quidem
                  pariatur ad eveniet dignissimos, vel, eligendi ab deleniti?
                  Voluptates enim sequi consequuntur dolorum?
                </p>
                <v-btn rounded depressed color="primary" class="mr-2"
                  >Register Now</v-btn
                >
                <v-btn rounded outlined depressed color="primary"
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
