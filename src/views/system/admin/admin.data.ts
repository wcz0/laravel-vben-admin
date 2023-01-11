import { h } from 'vue'
import { Tag } from 'ant-design-vue'
import { BasicColumn, FormSchema } from '/@/components/Table'

export const columns: BasicColumn[] = [
  {
    title: '用户名',
    dataIndex: 'username',
    width: 100,
  },
  {
    title: '名字',
    dataIndex: 'name',
    width: 100,
  },
  {
    title: '性别',
    dataIndex: 'gender',
    width: 50,
    customRender: ({ record }) => {
      const gender = record.gender
      let text, color: string
      switch (gender) {
        case 1:
          text = '男'
          color = 'blue'
          break
        case 2:
          text = '女'
          color = 'pink'
          break
        default:
          text = '未知'
          color = 'white'
          break
      }
      return h(Tag, { color: color }, () => text)
    },
  },
  {
    title: '电话',
    dataIndex: 'phone',
    width: 100,
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    width: 100,
  },
  {
    title: '创建时间',
    dataIndex: 'created_at',
    width: 100,
  },
]

export const searchFormSchema: FormSchema[] = [
  {
    field: 'username',
    label: '用户名',
    component: 'Input',
    colProps: { span: 5 },
  },
  {
    field: 'name',
    label: '名字',
    component: 'Input',
    colProps: { span: 5 },
  },
  {
    field: 'phone',
    label: '电话',
    component: 'Input',
    colProps: { span: 5 },
  },
  {
    field: 'gender',
    label: '性别',
    component: 'Select',
    componentProps: {
      options: [
        { label: '未知', value: '0' },
        { label: '男', value: 1 },
        { label: '女', value: 2 },
      ],
    },
  },
]

export const formSchema: FormSchema[] = [
  {
    field: 'id',
    label: 'ID',
    component: 'Input',
    show: false,
  },
  {
    field: 'username',
    label: '用户名',
    component: 'Input',
    required: true,
  },
  {
    field: 'password',
    label: '密码',
    component: 'InputPassword',
    required: ({ values }) => (values.id ? false : true),
  },
  {
    field: 'name',
    label: '名字',
    component: 'Input',
  },
  // TODO: 上传组件
  // {
  //   field: 'avatar',
  //   label: '头像',
  //   component: 'Upload',
  // },
  {
    field: 'phone',
    label: '电话',
    component: 'Input',
  },
  {
    field: 'gender',
    label: '性别',
    component: 'RadioButtonGroup',
    defaultValue: 0,
    componentProps: {
      options: [
        { label: '未知', value: 0 },
        { label: '男', value: 1 },
        { label: '女', value: 2 },
      ],
    },
  },
  {
    field: 'email',
    label: '邮箱',
    component: 'Input',
  },
  {
    field: 'email_status',
    label: '邮箱状态',
    component: 'RadioButtonGroup',
    defaultValue: 0,
    componentProps: {
      options: [
        { label: '未验证', value: 0 },
        { label: '已验证', value: 1 },
      ],
    },
  },
  {
    field: 'birthday',
    label: '生日',
    component: 'DatePicker',
  },
  {
    field: 'last_ip',
    label: '最后登录IP',
    component: 'Input',
  },
  {
    field: 'last_time',
    label: '最后登录时间',
    component: 'DatePicker',
  },
  // TODO: 角色多选
  // {
  //   field: 'roles',
  //   label: '角色',
  //   component: 'ApiSelect',
  //   componentProps: {
  //     FieldNames: {
  //       label: 'name',
  //       key: 'id',
  //       value: 'value',
  //     }
  // }
]
