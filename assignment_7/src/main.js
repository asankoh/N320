import SearchMember from './components/SearchMember.vue';
import MemberData from './components/MemberData.vue';
import NavigationHeader from './components/NavigationHeader.vue';
import router from './router';


import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.component('member-data', MemberData)
app.component('search-member', SearchMember)
app.component('navigation-header', NavigationHeader)

app.use(router)
app.mount('#app')
