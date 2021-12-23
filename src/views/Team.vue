<template>
  <v-main class="py-md-8 py-0">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col md="11" lg="9">
            <p class="gdg-heading mb-0">Our Team</p>
            <p>Google is known all around the world. Everyone is 'googling', checking on 'maps' and communicating in 'gmail'. For simple users, they are services that just works, but not for us. Developers see much more: APIs, scalability issues, complex technology stacks. And that is what GDG is about.
            <br><br>
            Our goal is to organize space to connect the best industry experts with Indian audience to boost development of IT. And Our Team is:</p>

            <v-container fluid class="mx-0 px-0 pb-15 pb-5">
              <v-row>
                <v-col md="2" v-for="(item, index) in team" :key="index">
                  <teamDialoge :data="item"/>
                </v-col>
              </v-row>
            </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
  import teamData from '../assets/data/team.json'
  import teamDialoge from '../components/Team/TeamDialoge.vue'
  export default {
    name: 'Team',
    data:()=>({
      team:[]
    }),
    mounted(){
      this.team = teamData.sort((a,b)=>{
        return a.name >b.name?1:-1
      })
    },
    components: {
      teamDialoge
    },
  }
</script>
