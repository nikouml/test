import {Component} from 'react'
import {Table} from 'antd'
import './index.less'

export default class MyTable extends Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
    loading: false
  }
  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys)
    this.setState({ selectedRowKeys })
  }
  componentDidMount () {
    const {selectedRowKeys = []} = this.props.config || {}
    this.setState({selectedRowKeys})
  }
  render () {
    const {columns = [], data = [], size = 'default', bordered = false} = this.props.config || {}
    const {selectedRowKeys} = this.state
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange
    }
    return (
      <div className='myTable'>
        <Table columns={columns} dataSource={data} rowSelection={rowSelection || {}} size={size} bordered={bordered} />
      </div>
    )
  }
}
