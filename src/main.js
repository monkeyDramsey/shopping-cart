import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import 'buefy/dist/css/buefy.css'

const app = createApp(App)
const pinia = createPinia()

app.use(Buefy)

app.use(pinia)
// app.use(createPinia())
app.use(router)

app.mount('#app')
