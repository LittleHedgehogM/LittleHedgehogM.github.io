import './assets/main.css'

import { createApp } from 'vue'

import App from './App.vue'

console.log('Vue app is mounting...')
const app = createApp(App)

app.mount('#app')
