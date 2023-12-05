<template>
    <section>
        <h1>Home</h1>
        <h2>{{ title }}</h2>
        <h2>{{ desc }}</h2>


    </section>
</template>

<script>
export default {
    data(){
        return{
        }
    },
    props: {
    title: String,
    desc: String,
    presenter: String,
    tags: String,
    sTime: Number,
    sDay: String,
    added: Boolean
    },
    methods:{

    }
}
</script>

<style>

</style>