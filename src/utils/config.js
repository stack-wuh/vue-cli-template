import Vue from 'vue'
import '@/assets/style/base.scss'
import '@/assets/style/element/index.css'

import {
  Button,
  Table,
  TableColumn,
  Message,
  Input,
  Select,
  Form,
  FormItem,
  Pagination,
  Dialog,
  Loading,
} from 'element-ui'

Vue.use(Button)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Input)
Vue.use(Select)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Loading)

Vue.prototype.$ELEMENT = {size: 'small', zIndex: 999999}
Vue.prototype.$message = Message
