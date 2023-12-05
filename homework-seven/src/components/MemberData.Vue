<template>
    <div>
        <h2>Name: {{ name }}</h2>
        <p>Role: {{ role }}</p>
        <button @click="toggleDetails">{{ visibleData ? "Hide" : "Show" }} Details</button>
        <div v-if="visibleData">
            <p>Phone: {{ phone }}</p>
            <p>Email: {{ email }}</p>
            <p>Team: {{ team }}</p>
            <button v-if="!team" @click="joinTeam()">Join {{ enteredName }}</button>

            <!-- <p v-if="cLevel">Class Rank: {{ cLevel }}</p>
            <p v-if="graduate">Graduated</p> -->
        </div>
    </div>
    
    </template>
    
    <script>
    export default{
        data(){
            return{
                visibleData: false,
            }
        },
      props: {
        name: String,
        phone: String,
        email: String,
        role: String,
        team: String,
      },
      component: {
      },
      methods:{
        toggleDetails(){
            this.visibleData=!this.visibleData
        },
        joinTeam(){
          this.$emit('join-team', this.name. this.enteredName)
        }
      }
      
    }
    </script>


<style>


</style>