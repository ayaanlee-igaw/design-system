import './assets/main.css'
import 'element-plus/dist/index.css'
import './styles/styles.scss';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import InfoCircle from "@/icons/InfoCircle.vue";
import SuccessCircle from "@/icons/SuccessCircle.vue";
import DangerCircle from "@/icons/DangerCircle.vue";
import WarningCircle from "@/icons/WarningCircle.vue";


const app = createApp(App)

app.use(createPinia())
app.use(ElementPlus)
app.use(router)
// @ts-ignore
app.use('InfoCircle', SuccessCircle)
// @ts-ignore
app.use('InfoCircle', WarningCircle)
// @ts-ignore
app.use('InfoCircle', InfoCircle)
// @ts-ignore
app.use('InfoCircle', DangerCircle)

app.mount('#app')
