const app = Vue.createApp({
    data(){
        //Always returns an object
        return{
            courseGoalOne: 'Learn Advanced Javascript',
            courseGoalTwo: 'Learn Vue',
            vueLink: 'https://vuejs.org/',
            courseGoalThree: '<h4>Create an Application </h4>',
            counter: 10,
            name: ''
        }
    },
    computed: {
        fullName(){
            if(this.name == ""){
                return ""
            }else{
                return this.name+ "" + "Myers"
            }
        },
        nameData(){
            //Length of fullname
            let nameValue = [];
            let nameLength = this.fullName;
            nameValue.push(nameLength.length);

            //Middle Character
            let middle = nameLength.charAt(Math.floor(nameLength.length/2))
            nameValue.push(middle)
            return nameValue;
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
        },
        remove(){
            this.counter--
        },
        setName(event){
            this.name=event.target.value;
        },
        resetName(){
            this.name = ""
            
        },
        submitForm(){
            alert("Form Submitted!")
        },
        consoleMe(){
            console.log("Space Bar CLicked!!")
        }
    }
});



// doing this makes the section tag controlled by Vue;
app.mount('#myGoals');