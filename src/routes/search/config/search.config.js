import api from '../../../config/api'
export default {
  search: [
    {
      name: 'input',
      type: 'text',
      size: 'default',
      placeholder: '请输入信息',
      defaultValue: '',
      style: {},
      varName: 'id',
      range: 'like',
      like: [true, false]
    },
    {
      name: 'select',
      size: 'default',
      style: {},
      placeholder: '请输入信息',
      select: [
        {
          value: 'max:50',
          label: '50'
        },
        {
          value: 'max:100',
          label: '100'
        }
      ],
      varName: 'sqybm',
      range: '=',
      like: [true, false]
    },
    {
      name: 'searchSelect',
      size: 'default',
      placeholder: '请输入信息',
      selectSearch: {url: 'http://192.168.1.5:3000/xialalie/test', method: 'get'},
      varName: 'sqybm',
      range: '=',
      like: [true, false]
    }
  ],
  button: {
    text: '查询',
    type: 'primary',
    url: `${api.basePath}/qiye`,
    method: 'get',
    cb: (err, data, message) => {
      if (!err) {
        console.log(data)
      } else {
        message.error('发生错误')
      }
    }
  }
}
