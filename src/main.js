import './assets/main.css'

import { createApp } from 'vue'
import BooReading from './BookReading.vue'

const app = createApp(app)

app.use(router)

createApp(BooReading).mount('#app')
