<template>
  <section>
    <h2>Name: {{ name }}</h2>
    <p>Role: {{ role }}</p>
    <button @click="toggleDetails">{{ visibleData ? 'Hide' : 'Show' }} Details</button>
    <div v-if="visibleData">
      <p>Phone: {{ phone }}</p>
      <p>Email: {{ email }}</p>
      <p>Team: {{ team }}</p>
      <button @click="joinBtn()">Join {{ enteredName }}</button>

      <!-- <p v-if="cLevel">Class Rank: {{ cLevel }}</p>
            <p v-if="graduate">Graduated</p> -->
    </div>
  </section>
</template>

<script>
import SearchMember from '../components/SearchMember.vue';
export default {
  components:{
    SearchMember,
  },
  data() {
    return {
      visibleData: false,
      pushedMembers: [],
    }
  },
  props: {
    id: Number,
    name: String,
    phone: String,
    email: String,
    role: String,
    team: String,
    enteredName: String,
    members: Array
  },
  component: {},
  methods: {
    toggleDetails() {
      this.visibleData = !this.visibleData
    },
    joinBtn(){
      
    }
  }
}
</script>

<style scoped>
section{
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: #242728;
  border-radius: 30px;
  width: 700px;
  margin: 40px 0;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border: 2px solid #f2576e;
}

button{
margin: 20px 0;
}
</style>
