<template>
 <navigation-header></navigation-header> 
<RouterView :greeting="greeting" :who="who" :count="count" 
:myVue="myVue" :book="book"/>
</template>

<script>
// import {NavigationHeader} from '../src/components/NavigationHeader.vue';
export default {
//   components: {
//     NavigationHeader
// },
    data() {
        return {
            greeting: "Hello",
            who: "Vue",
            count: 1,
            myVue: "Vue.js",
            book: {
            id: 1,
            title: "Vue 3 Development"
      },
    }
},
provide: {
    project:{
        type: 'final',
        title: 'Conference Sessions Applications',
        dueDate: '12/08/2023',
        points: 150
      }
}
}
</script>


<style>
a.router-link-active{
    text-decoration: underline;
    color: red;
    font-size: large;
}
</style>
