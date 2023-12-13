<template>

<h4>0 Sessions Displayed.</h4>
<h1>My Sessions: </h1>

<session-data v-for="session in mySessions"
    :key ="session.id"
    :title="session.title"
    :desc="session.desc"
    :presenter="session.presenter"
    :tags="session.tags"
    :sTime="session.sTime"
    :sDay="session.sDay"
    :added="session.added"
    @add-sessions="addSession"
    ></session-data>
</template>

<script>
export default {
    data(){
        return{
            mySessions: []
        }
    },
    props: {
    mySessions: Array,
    sessions: Array,
    id: Number,
    title: String,
    desc: String,
    presenter: String,
    tags: Array,
    sTime: Number,
    sDay: String,
    added: Boolean,
    },
    methods: {
//     addSession(pushedSession){
//     pushedSession = this.sessions.filter(session => session.title.includes(
//     this.title, this.sTime, this.sDay));
//     this.pushedSession.push(this.mySessions)
//     console.log("Add Session:")
//   }
//     }
    },
    // computed: {
    //     sessionAmount(){
    //     return this.sessions.length
    //   }
    // }
}
</script>

<style>

</style>