<template>
  <div>
    <v-btn icon v-for="(item, index) in socialMedia" :key="index" :href="item.link" target="_blank">
      <v-icon>{{item.icon}}</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
    name: "SocialMediaIcon",
    data:()=>({
        socialMedia: [
            {
                "name": "Twitter",
                "link": "https://twitter.com/gdgjalandhar",
                "icon": "mdi-twitter"
            },
            {
                "name": "LinkedIn",
                "link": "https://www.linkedin.com/company/18048778",
                "icon": "mdi-linkedin"
            },
            {
                "name": "Instagram",
                "link": "https://www.instagram.com/gdgjalandhar/",
                "icon": "mdi-instagram"
            },
            {
                "name": "Facebook",
                "link": "https://www.facebook.com/gdgjalandhar",
                "icon": "mdi-facebook"
            },
            {
                "name": "YouTube",
                "link": "https://www.youtube.com/c/gdgjalandhar",
                "icon": "mdi-youtube"
            }
        ]
    })
};
</script>

<style>
</style>