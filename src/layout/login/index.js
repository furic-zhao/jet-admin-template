import React, { Suspense, Fragment } from 'react'
import { Redirect, Route, Switch, Link } from 'react-router-dom'
import { CopyrightCircleOutlined } from '@ant-design/icons'
import GlobalFooter from './components/global-footer'
import styles from './index.module.less'
import logo from '@/assets/logo.svg'

import routes from './routes'
import LoadingPage from '@/components/loading-page'
/**
 * 注册布局页脚导航
 */
const links = [
  // {
  //   key: 'help',
  //   title: '帮助',
  //   href: '',
  // },
  // {
  //   key: 'privacy',
  //   title: '隐私',
  //   href: '',
  // },
  // {
  //   key: 'terms',
  //   title: '条款',
  //   href: '',
  // },
]

const copyright = (
  <Fragment>
    Copyright <CopyrightCircleOutlined /> 2020 chanjet-fe
  </Fragment>
)

export default class LoginLayout extends React.PureComponent {
  render() {
    return (
      <Fragment>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.top}>
              <div className={styles.header}>
                <Link to="/">
                  <img alt="logo" className={styles.logo} src={logo} />
                  <span className={styles.title}>cjet-admin</span>
                </Link>
              </div>
              <div className={styles.desc}>零配置即用的中后台应用解决方案</div>
            </div>
            <Suspense fallback={<LoadingPage />}>
              <Switch>
                {routes.map((route, idx) => {
                  return route.component ? (
                    <Route
                      key={idx}
                      path={route.path}
                      exact={route.exact}
                      name={route.name}
                      render={props => (
                        <route.component {...props} />
                      )} />
                  ) : (null)
                })}
                <Redirect from="/user" to="/user/login" />
              </Switch>
            </Suspense>
          </div>
          <GlobalFooter links={links} copyright={copyright} />
        </div>
      </Fragment>
    )
  }
}
