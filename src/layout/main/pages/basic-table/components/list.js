import React, { PureComponent } from 'react'
import { Table } from 'antd'
import styles from './list.module.less'

class List extends PureComponent {
  render() {
    const { columns, ...tableProps } = this.props

    return (
      <Table
        {...tableProps}
        pagination={{
          ...tableProps.pagination,
          showTotal: total => `Total ${total} Items`,
        }}
        bordered
        scroll={{ x: true }}
        className={styles.table}
        columns={columns}
        simple
        rowKey={record => record.id}
      />
    )
  }
}

export default List
