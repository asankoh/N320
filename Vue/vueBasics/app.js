const app = Vue.createApp({
    data(){
        //Always returns an object
        return{
            courseGoalOne: 'Learn Advanced Javascript',
            courseGoalTwo: 'Learn Vue',
            vueLink: 'https://vuejs.org/',
            courseGoalThree: '<h4>Create an Application </h4>',
            counter: 10
        }
    },
    methods: {
        newGoal(){
            const rNum = Math.random();
           /* if(rNum < 0.5){
                return "Vue is awesome!"
            }else{
                return "Vue is ..."
            } */
            if(rNum < 0.2){
                return "Vue is awesome!"
            }else if(rNum>0.7){
                return "Vue is ..."
            }else{
               return this.courseGoalOne;
            }
        },
        add(){
            this.counter++;
        },
        addMore(num){
            this.counter+=num;
        }
    }
});



// doing this makes the section tag controlled by Vue;
app.mount('#myGoals');