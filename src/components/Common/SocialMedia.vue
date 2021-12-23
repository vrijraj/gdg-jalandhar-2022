<template>
  <div>
    <v-btn icon v-for="(item, index) in community=='GDG'?socialMediaGDG:socialMediaWTM" :key="index" :href="item.link" target="_blank">
      <v-icon>{{item.icon}}</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
    name: "SocialMediaIcon",
    props:['community'],
    data:()=>({
        socialMediaGDG: [
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
        ],
        socialMediaWTM: [
            {
                "name": "Twitter",
                "link": "https://twitter.com/WTMJalandhar",
                "icon": "mdi-twitter"
            },
            {
                "name": "LinkedIn",
                "link": "https://www.linkedin.com/company/wtm-jalandhar/",
                "icon": "mdi-linkedin"
            },
            {
                "name": "Facebook",
                "link": "https://www.facebook.com/WTMJalandhar",
                "icon": "mdi-facebook"
            }
        ],
    })
};
</script>

<style>
</style>