<template>
    <h1>Props & Slots Page</h1>
  <div>
  <props-one :greeting="greeting" 
  :who="who" :myVue="myVue" 
  msg="Props are awesome">
    </props-one>    
<props-two v-bind="book"></props-two>
</div> 

<div>
  <slot-one>
    <h2>This is from App.vue</h2>
    <template v-slot:greeting>{{ greeting }}</template>
    <template #person>Harrison Ford</template>
  </slot-one>
</div>

<div>
  <!-- <slot-two>
    <ul v-if="pastStudents.length!=0">
      <li v-for="s in pastStudents" :key = "s.sName">
      {{ s.sName }}</li>
    </ul>
  </slot-two> -->
  <div>
    <project-data></project-data>
  </div>
</div> 
</template>
<script>
import ProjectData from '../components/ProjectData.vue'
export default {
    components: {
      ProjectData
    },
    props: ['greeting', 'who', 'count', 'myVue', 'book']
}

</script>