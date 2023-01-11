<template>
  <BasicDrawer
    v-bind="$attrs"
    @register="registerDrawer"
    showFooter
    :title="getTitle"
    width="50%"
    @ok="handleSubmit"
  >
    <BasicForm @register="registerForm" />
  </BasicDrawer>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue'
  import { BasicForm, useForm } from '/@/components/Form/index'
  import { formSchema } from './permission.data'
  import { BasicDrawer, useDrawerInner } from '/@/components/Drawer'

  import { createPermission, getPermissionTree, updatePermission } from '/@/api/system/permission'
  import { useMessage } from '/@/hooks/web/useMessage'

  export default defineComponent({
    name: 'PermissionDrawer',
    components: { BasicDrawer, BasicForm },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true)

      const [registerForm, { resetFields, setFieldsValue, updateSchema, validate }] = useForm({
        labelWidth: 100,
        schemas: formSchema,
        showActionButtonGroup: false,
        baseColProps: { lg: 12, md: 24 },
      })

      const [registerDrawer, { setDrawerProps, closeDrawer }] = useDrawerInner(async (data) => {
        resetFields()
        setDrawerProps({ confirmLoading: false })
        isUpdate.value = !!data?.isUpdate
        if (unref(isUpdate)) {
          setFieldsValue({
            ...data.record,
          })
        }
        const treeData = await getPermissionTree()
        updateSchema({
          field: 'parent_id',
          componentProps: { treeData },
        })
      })

      const getTitle = computed(() => (!unref(isUpdate) ? '新增权限' : '编辑权限'))

      async function handleSubmit() {
        try {
          const values = await validate()
          setDrawerProps({ confirmLoading: true })
          const { createMessage } = useMessage()
          if (unref(isUpdate)) {
            await updatePermission(values).then(() => {
              createMessage.success('更新成功')
            })
          } else {
            await createPermission(values).then(() => {
              createMessage.success('创建成功')
            })
          }
          closeDrawer()
          emit('success')
        } finally {
          setDrawerProps({ confirmLoading: false })
        }
      }

      return { registerDrawer, registerForm, getTitle, handleSubmit }
    },
  })
</script>
