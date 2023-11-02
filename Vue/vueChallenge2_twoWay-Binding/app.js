const app = Vue.createApp({
    methods: {
        getTodayDate(){
            let today = new Date()
            today = today.toLocaleDateString();
            return today;
        }
    }

});

app.component('message-input', {
    template: `
    <input type="text" v-model="message" />
    <p>{{message}}</p>
    
    <input type="text" @blur="displayText" ref="disRef" />
    <p>{{refText}}</p>`,
    data(){
        return{
            message: "",
            refText: ''
        }
        },
        watch: {
            message(newVal, oldVal){
                console.log(`Old Value: ${oldVal}`)
                console.log(`New Value: ${newVal}`)
    
            }
        },
        methods:{
            displayText(){
                this.refText = this.$refs.disRef.value
            }
        }
    })

app.mount('#content')
