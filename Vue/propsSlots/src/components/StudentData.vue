<template>
<div>
    <h2> {{sName}}</h2>
    <p>{{ isEnrolled }} </p>
    <button @click="toggleDetails">{{ visibleData ? "Hide" : "Show" }} Details</button>
    <button @click="toggleEnrollment(sName)">Toggle Enrollment</button>
    <div v-if="visibleData">
        <h2>Student Details</h2>
        <p>Age: {{ sAge }}</p>
        <p>Major: {{ major }}</p>
        <p v-if="cLevel">Class Rank: {{ cLevel }}</p>
        <p v-if="graduate">Graduated</p>
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
    /*students: [
    {
        sName: 'Bob Backlin',
        sAge: 22,
        major: 'Web Development',
        cLevel: 3,
        graduate: false
    },
    {
        sName: 'Jack Manman',
        sAge: 25,
        major: 'Music',
        cLevel: 1,
        graduate: true
    }
    ]*/
  //  props:['sName', 'sAge', 'major', 'cLevel', 'graduate']
  props: {
    sName: String,
    sAge: Number,
    major: {
        type: String,
        required: true
    },
    cLevel: {
        type: Number,
        validator: function(value){
        return (value>0 && value<=4)
        }
    },
    graduate: Boolean,
    isEnrolled: Boolean
  },
  methods:{
    toggleDetails(){
        this.visibleData=!this.visibleData
    },
    toggleEnrollment(value){
        this.$emit('toggle-enrollment', value)
    }
  }
  
}
</script>