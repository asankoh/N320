<template>
  <button v-if="activeFilter" @click="clearFilter()" class="clearBtn">Clear Filter</button>
  <section>
        <h2>{{ title }} <button class="addBtn" @click="addSession(title, sDay, sTime)">{{ visibleData  ? "Added" : "Add" }}</button> </h2>
        <div class="div">
            <h5 class="presenterClass" @click="filterPresenter(presenter)">Presented By: <span>{{ presenter }}</span></h5>
            <h5>{{ sDay }} at {{timeConversion(sTime) }}</h5>
        </div>
        <p>{{ desc }}</p>
        <p  @click="filterTags(tags)">{{ tags.join(' , ') }} </p>
    </section>
</template>

<script>
export default {
    data(){
        return{
          visibleData: false,
          activeFilter: false
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
    addSession(title, sDay, sTime){
    // this.pushedSession.push(this.mySessions)
      this.visibleData=!this.visibleData
      this.$emit('add-sessions', title, sDay, sTime)
      // console.log("Data: ", pushedSession)
      // return pushedSession
      },
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
    filterPresenter(presenter) {
    // const presenterFilter = this.sessions.filter(session => session.presenter.includes(this.presenter));
    // console.log(presenterFilter)
    this.activeFilter=!this.activeFilter
    this.$emit('presenter-filter', presenter, this.activeFilter)
    },
    clearFilter(){
      this.activeFilter=!this.activeFilter
      this.$emit('clear-filter')
    },
  
  filterTags() {
    const tagFilter = this.sessions.filter(session => session.tags.includes(this.tags))
    console.log(tagFilter);
    return tagFilter
  }
  },
  computed: {
   
  }
}
</script>

<style>
section{
    display: block;
    justify-content: center;
    align-items: center;
    max-width: 90%;
    height: 275px;
    background-color: #fafeff;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    border-radius: 10px;
    padding: 10px;
    margin: 50px auto;
}

section h2{
    color: #223a2b;
}


section .presenterClass{
    cursor: pointer;
    width: fit-content;
}


section .addBtn{
    background-color: #223a2b;
    width: 90px;
    height: 35px;
    border-radius: 20px;
    float: right;
    margin-right: 20px;
    color: #fafeff;
    cursor: pointer;
}

.addBtn:hover{
  transition: 0.5s ease-in;
  box-shadow: inset 7.0em 0 0 0 #9ccbae;
}

.clearBtn{
  position: absolute;
  top: 100px;
  right: 100px;
  background-color: #960019;
  width: 90px;
  height: 35px;
  border-radius: 20px;
  color: #fafeff;
  cursor: pointer;
}

.clearBtn:hover{
  transition: 1.0s ease;
  transform: scale(1.1);
}
</style>