import { createApp } from 'vue'
import './assets/style.css'
import App from './App.vue'
import naive from 'naive-ui'
import router from './router'

import { createPinia } from 'pinia'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(naive)

app.mount('#app')
