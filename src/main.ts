import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  create,
  NButton,
  NForm,
  NFormItem,
  NInput,
  NMessageProvider
} from 'naive-ui'
import { Request } from '@/utils/request'

const naive = create({ // 创建naiveui按需引入的对象
  components: [NButton, NForm, NInput, NFormItem, NMessageProvider]
})

const app = createApp(App)
app.use(store)
app.use(naive)
app.use(router)
Request.init()

app.mount('#app')
