<template>
  <form @submit.prevent="submitData">
    <label for="">Team Name</label>
    <input type="text" v-model="enteredName" />
    <br />
    <label>Select Role:</label>
    <br />
    <label>Designer</label>
    <input type="radio" v-model="radioSelect" name="radio" value="Designer" />
    <label>Developer</label>
    <input type="radio" v-model="radioSelect" name="radio" value="Developer" />
    <label>UI/UX</label>
    <input type="radio" v-model="radioSelect" name="radio" value="UI/UX" />
    <br />
    <button>Search Members</button>
  </form>
  <h1>{{ radioSelect }}</h1>
</template>

<script>
export default {
  data() {
    return {
      enteredName: '',
      radioSelect: null
    };
  },
  props: {
    members: Array
  },
  methods: {
    submitData() {
      this.$emit('search-member', this.radioSelect, this.enteredName);
    }
  }
};
</script>

<style>
form {
  width: 600px;
  height: 200px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

input {
  margin: 20px;
}

button {
  border-radius: 20px;
  width: 110px;
  height: 40px;
  background-color:#f2576e;
  cursor: pointer;
}

button:hover{
  background-color: white;
  transition: 1s ease-in-out;
}
</style>
