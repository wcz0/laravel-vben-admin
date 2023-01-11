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
  import { defineComponent, computed, ref, unref } from 'vue'
  import { formSchema } from './admin.data'
  import { createAdmin, updateAdmin } from '/@/api/system/admin'

  import { BasicDrawer, useDrawerInner } from '/@/components/Drawer'
  import { BasicForm, useForm } from '/@/components/Form'
  import { useMessage } from '/@/hooks/web/useMessage'

  export default defineComponent({
    name: 'AdminDrawer',
    components: { BasicDrawer, BasicForm },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true)

      const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
        labelWidth: 100,
        schemas: formSchema,
        showActionButtonGroup: false,
        baseColProps: { lg: 12, md: 24 },
      })

      const [registerDrawer, { closeDrawer, setDrawerProps }] = useDrawerInner(async (data) => {
        resetFields()
        setDrawerProps({ confirmLoading: false })
        isUpdate.value = !!data?.isUpdate
        if (unref(isUpdate)) {
          setFieldsValue({
            ...data.record,
          })
        }
      })

      const getTitle = computed(() => (!unref(isUpdate) ? '新增权限' : '编辑权限'))

      async function handleSubmit() {
        try {
          const values = await validate()
          setDrawerProps({ confirmLoading: true })
          const { createMessage } = useMessage()
          if (unref(isUpdate)) {
            await updateAdmin(values).then(() => {
              createMessage.success('编辑成功')
            })
          } else {
            await createAdmin(values).then(() => {
              createMessage.success('新增成功')
            })
          }
          emit('success')
          closeDrawer()
        } finally {
          setDrawerProps({ confirmLoading: false })
        }
      }

      return {
        registerDrawer,
        registerForm,
        getTitle,
        handleSubmit,
      }
    },
  })
</script>
