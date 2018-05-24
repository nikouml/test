export default {
  '0': {
    key: 0,
    title: '表单一',
    content: {
      '0': [
        {
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入用户名',
            style: {}
          },
          varName: 'username',
          label: '用户名',
          rules: [
            {required: true, message: '用户名必填'}
          ]
        },
        {
          control: {
            name: 'input',
            type: 'password',
            size: 'default',
            placeholder: '请输入密码',
            style: {}
          },
          varName: 'password',
          label: '密码',
          rules: [
            {required: true, message: '密码必填'}
          ]
        }
      ],
      '1': [
        {
          control: {
            name: 'DatePicker',
            format: 'YYYY-MM-DD',
            size: 'default',
            placeholder: '请选择时间',
            showTime: false
          },
          varName: 'date1',
          label: '日期',
          rules: [
            {required: true, message: '日期必填'}
          ]
        },
        {
          control: {
            name: 'select',
            size: 'default',
            placeholder: '选择信息',
            select: [
              {
                value: 'a',
                label: 'A'
              },
              {
                value: 'b',
                label: 'B'
              }
            ]
          },
          label: '下拉菜单',
          varName: 'abc',
          rules: [
            {required: true, message: '必填'}
          ],
          defaultValue: 'a'
        }
      ],
      '2': [
        {
          control: {
            name: 'checkBox',
            size: 'small',
            placeholder: '请输入信息',
            plainOptions: ['Apple', 'Pear', 'Orange', 'a', 'b', 'c', 'd', 'e', 'f'],
            defaultValue: ['Apple', 'Orange']
          },
          varName: 'fxk',
          label: '选择',
          rules: [
            {required: true, message: '必选'}
          ]
        },
        {
          key: 2,
          control: {
            name: 'radio',
            size: 'default',
            defaultValue: 'a',
            select: [
              {
                value: 'a',
                label: 'A'
              },
              {
                value: 'b',
                label: 'B'
              }
            ]
          },
          varName: 'usbjername',
          label: '姓名',
          rules: [
            {type: 'string', required: true, message: '类型为字符串'}
          ]
        }
      ],
      '3': [
        {
          control: {
            name: 'checkBox',
            size: 'small',
            placeholder: '请输入信息',
            plainOptions: ['Apple', 'Pear', 'Orange', 'a', 'b', 'c', 'd', 'e', 'f'],
            defaultValue: ['Apple', 'Orange']
          },
          varName: 'fxk',
          label: '选择',
          rules: [
            {required: true, message: '必选'}
          ]
        },
        {
          key: 2,
          control: {
            name: 'radio',
            size: 'default',
            defaultValue: 'a',
            select: [
              {
                value: 'a',
                label: 'A'
              },
              {
                value: 'b',
                label: 'B'
              }
            ]
          },
          varName: 'usbjername',
          label: '姓名',
          rules: [
            {type: 'string', required: true, message: '类型为字符串'}
          ]
        }
      ],
      length: 4
    }
  },
  '1': {
    key: 1,
    title: '表单二'
  },
  '2': {
    key: 2,
    title: '表单三'
  },
  submit: {
    text: '确认提交',
    type: 'primary',
    url: '/',
    method: 'post',
    cb: (err, data, message) => {
      if (err) {
        console.log(message, err)
        return message.error('发生错误')
      }
      console.log(data)
      message.success('保存成功')
    }
  },
  length: 3
}
