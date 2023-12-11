import Navigation from './components/Navigation.vue';
import SessionData from './components/SessionData.vue';
import MySessions from './components/MySessions.vue';
import router from './router';


import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.component('navigation', Navigation)
app.component('session-data', SessionData)
app.component('my-sessions', MySessions);


app.use(router)
app.mount("#app")
