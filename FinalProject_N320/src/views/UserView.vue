<template>
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
    @my-sessions="mySession"></session-data>
</template>

<script>
export default {
    data(){
        return{
            mySessions: [],
        }
    },
    props: {
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
        mySession(pushedSession){
            this.mySessions.push(pushedSession)
            return pushedSession
        }

    }

}
</script>

<style>

</style>