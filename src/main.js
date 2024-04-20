import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vue3GoogleLogin from 'vue3-google-login'

const CLIENT_ID = '985359202343-loevv2lc6150bn0i0mi534sttm8kipef.apps.googleusercontent.com'
const app = createApp(App)

app.use(router)
app.use(vue3GoogleLogin), {
    clientId: CLIENT_ID,

}
app.mount('#app')
