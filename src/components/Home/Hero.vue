<template>
  <v-container fluid class="ma-0 pa-0">
    <v-row justify="center" align="center">
      
      <v-col md="8" class="order-2 order-md-1">
        <p class="mb-0 gdg-heading">The Community of Developers,</p>
        <p class="mb-0 gdg-heading">For Developers, By Developers</p>
        <p>
          Our mission is to empower our community members by enhancing their skills to speak about their learnings with hands-on practices and creating solution.
        </p>
        <social-media class="mb-5"/>
        
        <v-btn rounded color="primary" depressed class="mr-3">Join us</v-btn>
        <v-btn rounded color="primary" depressed outlined>Join us</v-btn>
      </v-col>
      <v-col md="4" class="text-center order-1 order-md-2">
        <v-img :src="require('@/assets/img/home.jpg')" style="border-radius:20px;width:100%;margin-left:auto;margin-right:auto"></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SocialMedia from '../Common/SocialMedia.vue'
export default {
    name: "HomeView",
    components:{
        SocialMedia
    }
};
</script>

<style>
</style>