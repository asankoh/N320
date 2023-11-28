<template>
    <form @submit.prevent="submitData">
    <label for="">Team Name</label>
    <input type="text" 
    v-model="enteredName">
    <br>
    <label>Select Role:</label>
    <br>
    <label>Designer</label>
    <input type="radio" name="radioBtn" id="">
    <label>Developer</label>
    <input type="radio" name="radioBtn" id="">
    <label>UI/UX</label>
    <input type="radio" name="radioBtn" id="">
    <!-- <input type="radio" v-model="enteredGrad" name="graduate" value="true"> -->
    <br>
    <button>Add</button>
</form>
</template>

<script>
export default {
    data(){
        return{
            enteredName: "",
        }
    },
    emits: ['search-member'],
    methods:{
        submitData(){
            this.$emit('search-member',this.enteredName)
        }
    }
}
</script>

<style>


form{
    width: 500px;
    height: 150px;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
    margin: 20px;
}
</style>