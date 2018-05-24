export default {
  '0': {
    key: 0,
    title: '表单',
    /**
     * 表单的内容
     * type: 控件的类型
     * placeholder: 占位标识
     * varName: 对应的变量名
     * defaultValue: 默认值
     * label: 标签
     * customVerify: 自定义校验，返回对象，传入的值为输入的值或者控件的值
     * 对象中status可以是Boolean类型，status为true表示验证通过，false表示不通过，也可以为字符串'success', 'warning', 'error', 'validating'
     * message为不通过显示的信息
     */
    content: {
      0: [
        {
          key: 0,
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入信息',
            defaultValue: '',
            style: {}
          },
          varName: 'username',
          label: '姓名',
          rules: [
            {type: 'string', required: true, message: '类型为字符串'}
          ]
        },
        {
          key: 1,
          control: {
            name: 'DatePicker',
            format: 'YYYY-MM-DD HH:mm:ss',
            size: 'default',
            placeholder: '请输入信息',
            showTime: true
          },
          varName: 'date',
          label: '日期',
          rules: [
            {required: true, message: '日期必填'}
          ]
        }
      ],
      1: [
        {
          key: 0,
          control: {
            name: 'MonthPicker',
            size: 'default',
            placeholder: '请输入信息',
            format: 'YYYY-MM'
          },
          varName: 'time',
          label: '时间',
          rules: [
            {required: true, message: '时间必填'}
          ]
        },
        {
          key: 1,
          control: {
            name: 'RangePicker',
            size: 'small',
            placeholder: '请输入信息',
            showTime: true,
            format: 'YYYY-MM-DD HH:mm:ss',
            defaultValue: ''
          },
          varName: 'range',
          label: '时间1',
          rules: [
            {required: true, message: '类型为字符串'}
          ]
        },
        {
          key: 2,
          control: {
            name: 'radio',
            size: 'default',
            placeholder: '请输入信息',
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
          varName: 'username',
          label: '姓名',
          rules: [
            {type: 'string', required: true, message: '类型为字符串'}
          ]
        }
      ],
      2: [
        {
          key: 0,
          control: {
            name: 'select',
            size: 'default',
            placeholder: '请输入信息',
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
          varName: 'tjhbime',
          label: '选择',
          rules: [
            {required: true, message: '必填'}
          ]
        },
        {
          key: 1,
          control: {
            name: 'checkBox',
            size: 'small',
            placeholder: '请输入信息',
            plainOptions: ['Apple', 'Pear', 'Orange'],
            defaultValue: ['Apple', 'Orange']
          },
          varName: 'rangneaa',
          label: '时间1',
          rules: [
            {required: true, message: '必选'}
          ]
        },
        {
          key: 2,
          control: {
            name: 'radio',
            size: 'default',
            placeholder: '请输入信息',
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
      length: 3
    }
  },
  '1': {
    key: 1,
    title: '表单2',
    /**
     * 表单的内容
     * type: 控件的类型
     * placeholder: 占位标识
     * varName: 对应的变量名
     * defaultValue: 默认值
     * label: 标签
     * customVerify: 自定义校验，返回对象，传入的值为输入的值或者控件的值
     * 对象中status可以是Boolean类型，status为true表示验证通过，false表示不通过，也可以为字符串'success', 'warning', 'error', 'validating'
     * message为不通过显示的信息
     */
    content: {
      0: [
        {
          key: 0,
          control: {
            name: 'input',
            type: 'text',
            size: 'default',
            placeholder: '请输入信息',
            defaultValue: '',
            style: {}
          },
          varName: 'userfsdaname',
          label: '姓名',
          rules: [
            {type: 'string', required: true, message: '类型为字符串'}
          ]
        },
        {
          key: 1,
          control: {
            name: 'DatePicker',
            format: 'YYYY-MM-DD HH:mm:ss',
            size: 'default',
            placeholder: '请输入信息',
            showTime: true
          },
          varName: 'daklte',
          label: '日期',
          rules: [
            {required: true, message: '日期必填'}
          ]
        }
      ],
      1: [
        {
          key: 0,
          control: {
            name: 'MonthPicker',
            size: 'default',
            placeholder: '请输入信息',
            format: 'YYYY-MM'
          },
          varName: 'timgngfase',
          label: '时间',
          rules: [
            {required: true, message: '时间必填'}
          ]
        },
        {
          key: 1,
          control: {
            name: 'RangePicker',
            size: 'small',
            placeholder: '请输入信息',
            showTime: true,
            format: 'YYYY-MM-DD HH:mm:ss',
            defaultValue: ''
          },
          varName: 'ravfdnge',
          label: '时间1',
          rules: [
            {required: true, message: '类型为字符串'}
          ]
        },
        {
          key: 2,
          control: {
            name: 'radio',
            size: 'default',
            placeholder: '请输入信息',
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
          varName: 'usernamerewq',
          label: '姓名',
          rules: [
            {type: 'string', required: true, message: '类型为字符串'}
          ]
        }
      ],
      2: [
        {
          key: 0,
          control: {
            name: 'select',
            size: 'default',
            placeholder: '请输入信息',
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
          varName: 'timegs',
          label: '选择',
          rules: [
            {required: true, message: '必填'}
          ]
        },
        {
          key: 1,
          control: {
            name: 'checkBox',
            size: 'small',
            placeholder: '请输入信息',
            plainOptions: ['Apple', 'Pear', 'Orange'],
            defaultValue: ['Apple', 'Orange']
          },
          varName: 'rangeaafasd',
          label: '时间1',
          rules: [
            {required: true, message: '必选'}
          ]
        },
        {
          key: 2,
          control: {
            name: 'radio',
            size: 'default',
            placeholder: '请输入信息',
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
          varName: 'usernameffa',
          label: '姓名',
          rules: [
            {type: 'string', required: true, message: '类型为字符串'}
          ]
        }
      ],
      length: 3
    }
  },
  submit: {
    text: '提交',
    size: 'default',
    type: 'primary',
    style: {},
    url: '/',
    method: 'post',
    cb: (err, data, message) => {
      if (err) {
        return message.error('发生错误')
      }
      console.log(data)
    }
  },
  length: 2
}
