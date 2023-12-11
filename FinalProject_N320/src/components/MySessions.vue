<template>
 <section v-show="addToSession">
        <h2>{{ title }}  </h2>
        <div class="div">
            <h5 >Presented By: {{ presenter }}</h5>
            <h5>{{ sDay }} at {{timeConversion(sTime) }}</h5>
        </div>
    </section>
</template>

    <script>
    import SessionData from '../components/SessionData.vue'
    export default {
    components:{
        SessionData
    },
    data(){
    return{

    }
    },
    props:{ 
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
    methods:{
        timeConversion(sTime){
      // let newDate = new Date(sTime)
      // console.log(newDate)
      // return (newDate.getHours() % 12) || 12;
      if (sTime > 12){
        return (sTime - 12) + `pm`
      }else{
        return sTime + `am`
      }
    },
    addToSession(){
      this.visibleData=!this.visibleData
      const pushedSession = this.sessions.filter(session => session.title.includes(
       this.title, this.presenter, this.sTime, this.sDay, this.added));

       this.$emit('my-sessions', pushedSession)
      console.log("Data: ", pushedSession)
      return pushedSession
      }
    }
}
    


    </script>

