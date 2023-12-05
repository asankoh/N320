<template>
    <form @submit.prevent="submitData">
    <label for="">Team Name</label>
    <input type="text" 
     v-model="enteredName">
    <br>
    <label>Select Role:</label>
    <br>
    <label>Designer</label>
    <input type="radio" v-model='radioSelect' name="radio" value="designer">
    <label>Developer</label>
    <input type="radio"   v-model='radioSelect' name="radio">
    <label>UI/UX</label>
    <input type="radio"  v-model='radioSelect'  name="radio">
    <br>
    <button>Search Members</button>
    <h1>{{ radioSelect }}</h1>
</form>
</template>

<script>
export default {
    data(){
        return{
            enteredName: "",
            memberRole: "",
            radioSelect: null
        }
    },
    methods:{
        submitData(){
            this.$emit('search-member',this.enteredName, this.memberRole)
        }
    }
}
</script>

<style>
form{
    width: 600px;
    height: 200px;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
}

input{
  margin: 15px;
}

button{
  margin-top: 20px;
}






</style>