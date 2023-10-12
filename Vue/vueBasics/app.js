const app = Vue.createApp({
    data(){
        //Always returns an object
        return{
            courseGoalOne: 'Learn Advanced Javascript',
            courseGoalTwo: 'Learn Vue'
            
        }
    }
});



// doing this makes the section tag controlled by Vue;
app.mount('#myGoals');