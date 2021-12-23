<template>
  <v-container fluid class="ma-0 pa-0 mt-8 mt-md-5" >
    <v-row justify="center" align="center">
      <v-col md="12" cols="12">
        <p class="gdg-heading mb-0">About Google Developers Group Jalandhar</p>
        <p>
         Google Developers Group Jalandhar is an initiative to concentrate the efforts of many developers in and around Punjab to learn, share, and get productive using the various Google products. It was formed in February 2011. A special community called Women Techmakers Jalandhar has been founded for girls to bridge the gap between women who are eager to lay their hands on the latest technology. 
        </p>
        <v-btn rounded outlined>Become a Member</v-btn>
      </v-col>
    </v-row>

    <v-row justify="center" align="center" class="my-10 pa-3" style="background:#F1F3F4;border-radius:25px">
        <v-col md="4" cols="12">
            <p class="gdg-subheading mb-0">What we do?</p>
            <p>Google Developer Groups (GDGs) are for developers who are interested in Google's developer technology.</p>
            <p>About different Google technologies</p>
            <v-chip class="mr-1 mb-2" small outlined rounded v-for="(item, index) in tech" :key="index">{{item}}</v-chip>
        </v-col>
        <v-col md="8" cols="12">
            <v-container fluid>
                <v-row>
                    <v-col md="4" cols="12" v-for="(item, index) in whatWeDo" :key="index">
                        <p class="google-font mb-0" style="font-size:25px;font-weight:300">{{item.title}}</p>
                        <p>{{item.desc}}</p>
                    </v-col>
                </v-row>
            </v-container>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
    name: "AboutGDGJalandhar",
    data:()=>({
        whatWeDo: [
            {
                "title":"Connect",
                "desc":"Meet local developers and technologists. All are welcome, including those with diverse backgrounds and from various companies and industries."
            },
            {
                "title":"Learn",
                "desc":"Learn about a range of technical topics and gain new skills through hands-on workshops, training, events, talks, and meet ups - both online and in-person."
            },
            {
                "title":"Grow",
                "desc":"Apply your knowledge and connections to build great products & advance your skills, career, and network. Give back to your community by helping others learn, too."
            }
        ],
        tech:["Web","Firebase","Android","Flutter", "Google Cloud Platform"]
    }),
    components:{
        
    }
};
</script>

<style>
</style>