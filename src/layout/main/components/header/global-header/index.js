import React, { PureComponent } from 'react'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import Debounce from 'lodash-decorators/debounce'
import { Link } from 'react-router-dom'

import RightContent from './right-content'
import styles from './index.module.less'

export default class GlobalHeader extends PureComponent {
  componentWillUnmount() {
    this.triggerResizeEvent.cancel()
  }
  /* eslint-disable*/
  @Debounce(600)
  triggerResizeEvent() {
    // eslint-disable-line
    const event = document.createEvent('HTMLEvents')
    event.initEvent('resize', true, false)
    window.dispatchEvent(event)
  }
  toggle = () => {
    const { collapsed, onCollapse } = this.props
    onCollapse(!collapsed)
    this.triggerResizeEvent()
  }
  render() {
    const { collapsed, isMobile, logo } = this.props

    const defaultRenderCollapsedButton = (collapsed?: boolean) =>
      collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />

    return (
      <div className={styles.header}>
        {isMobile && (
          <Link to="/" className={styles.logo} key="logo">
            <img src={logo} alt="logo" width="32" />
          </Link>
        )}
        <span className={styles.trigger} onClick={this.toggle}>
          {defaultRenderCollapsedButton(collapsed)}
        </span>
        <RightContent {...this.props} />
      </div>
    )
  }
}
