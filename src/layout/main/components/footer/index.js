import React, { Fragment } from 'react'
import { Layout } from 'antd'
import { CopyrightCircleOutlined } from '@ant-design/icons'
import GlobalFooter from './global-footer'

const { Footer } = Layout
const FooterView = () => (
  <Footer style={{ padding: 0 }}>
    <GlobalFooter
      links={[
        // {
        //   key: '塞伯坦CYB-CLI',
        //   title: '塞伯坦CYB-CLI',
        //   href: 'https://github.com/jd-cyb/cyb-cli',
        //   blankTarget: true,
        // },
        // {
        //   key: 'github',
        //   title: <Icon type="github" />,
        //   href: 'https://github.com/jd-cyb/cyb-ant-design',
        //   blankTarget: true,
        // }
      ]}
      copyright={
        <Fragment>
          Copyright <CopyrightCircleOutlined /> 2019 chanjet-fe
        </Fragment>
      }
    />
  </Footer>
)
export default FooterView
