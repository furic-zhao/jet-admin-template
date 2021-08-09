
import React from 'react'
import ReactDOM from 'react-dom'
import { ConfigProvider } from 'antd'
import { Provider } from 'mobx-react'
import store from '@/store'
import './icons'

// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale-provider/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'
import App from './app'
import './index.less'

moment.locale('zh-cn')

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <Provider { ...store }>
      <App />
    </Provider>
  </ConfigProvider>,
  document.getElementById('root')
)

