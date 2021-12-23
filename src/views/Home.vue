<template>
  <v-main class="py-md-8 py-0">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col md="11" lg="9">
          <Hero/>
          <AboutGDGJalandhar class="my-md-10 py-md-10"/>
          <HomeEvent class="mb-md-15 mt-n5"/>
          <AboutWTMJalandhar class="mb-md-15 "/>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
  import Hero from '../components/Home/Hero.vue'
  import AboutGDGJalandhar from '../components/Home/AboutGDGJalandhar.vue'
  import HomeEvent from '../components/Home/HomeEvents.vue'
  import AboutWTMJalandhar from '../components/Home/AboutWTMJalandhar.vue'
  export default {
    name: 'Home',
    components: {
      Hero,
      AboutGDGJalandhar,
      HomeEvent,
      AboutWTMJalandhar
    },
  }
</script>
