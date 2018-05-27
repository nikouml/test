export default {
  columns: [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href='javascript:;'>{text}</a>
  }, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age'
  }, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address'
  }, {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <a href='javascript:;'>Action 一 {record.name}</a>
      </span>
    )
  }],
  data: [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park'
  }, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park'
  }, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park'
  }],
  bordered: true,
  size: 'default',
  selectedRowKeys: ['1', '2']
}
