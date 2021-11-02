import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  create,
  NButton,
  NForm,
  NFormItem,
  NInput

} from 'naive-ui'

const naive = create({ // 创建naiveui按需引入的对象
  components: [NButton, NForm, NInput, NFormItem]
})

const app = createApp(App)
app.use(store)
app.use(naive)
app.use(router)

app.mount('#app')
