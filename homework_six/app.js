const app = Vue.createApp({
data(){
    return{
        name: 'Abdul Sankoh',
        course: 'N320: First Vue Assignment',
        number: 3,
        movieList: [
        {
            id: 1,
            name: 'Halloween' 
        },
        {
            id: 2,
            name: 'Scream' 

        },
        {
            id: 3,
            name: 'American Psycho' 

        },
        {
            id: 4,
            name: 'Psycho' 
        }, 
        {
            id: 5,
            name: 'Friday the 13th'
        },
        {
            id: 6,
            name: 'Annabelle' 

        },
        {
            id: 7,
            name: 'Chucky' 

        }
        ],
       movie: "",
       newMovie: '',
       newMovieMsg: '',
       counter: 0
    }
},
methods: {
    getTodayDate(num){
        let today = new Date()
        today.setDate(today.getDate() + num);
        return today.toLocaleDateString();
    },
    movieMsg(){
        if(this.counter < this.movieList.length){
            this.movie=`My Favorite Horror Movie is ${this.movieList[this.counter].name}`
            this.counter++;
        }else{
            this.counter = 0;
        }
    },
    addtoList(){
       if(this.newMovie != ""){
           this.movieList.push({id: this.movieList, name: this.newMovie})
           this.newMovieMsg = `${this.newMovie} has been added to your list!`
           this.newMovie = '';
       } else{
        alert("Insert new movie!")
       }
    }
},
})



app.mount('#info')