<template>
  <v-main class="py-md-8 py-0">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col md="11" lg="9">
          <Hero class=""/>
          <AboutGDGJalandhar class="my-9 mb-5"/>
          <HomeEvent class="pb-10 "/>
          <AboutWTMJalandhar class="mt-md-8 mb-10"/>
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
