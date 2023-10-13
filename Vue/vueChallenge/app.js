const app = Vue.createApp({
    data(){
        return{
            title: "N320 Vue Challenge",
            name: "Abdul Sankoh",

        }
    },
    methods:{
        getTodayDate(){
            var today = new Date();
            today = today.toLocaleDateString();
            return today;
        }
    }
})

app.mount('article');