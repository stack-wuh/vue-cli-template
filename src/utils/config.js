import Vue from 'vue'
import '@/assets/style/base.scss'
import '@/assets/style/element/index.css'
import '@/assets/style/element.scss'

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
  Menu,
  Submenu,
  MenuItem,
  Breadcrumb,
  BreadcrumbItem,
  Switch,
  Upload
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
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Loading)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Switch)
Vue.use(Upload)

Vue.prototype.$ELEMENT = {size: 'small', zIndex: 999999}
Vue.prototype.$message = Message

window.uploadPath = process.env.VUE_APP_BASE_URL
