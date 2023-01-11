<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate"> 新增角色 </a-button>
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'clarity:note-edit-line',
              onClick: handleEdit.bind(null, record),
            },
            {
              icon: 'ant-design:delete-outlined',
              color: 'error',
              popConfirm: {
                title: '是否确认删除',
                confirm: handleDelete.bind(null, record),
              },
            },
          ]"
        />
      </template>
    </BasicTable>
    <AdminDrawer @register="registerDrawer" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import { BasicTable, useTable, TableAction } from '/@/components/Table'
  import AdminDrawer from './AdminDrawer.vue'
  import { delAdmin, getAdminListPage } from '/@/api/system/admin'
  import { columns, searchFormSchema } from './admin.data'
  import { useMessage } from '/@/hooks/web/useMessage'
  import { useDrawer } from '/@/components/Drawer'

  export default defineComponent({
    name: 'AdminManagement',
    components: { BasicTable, TableAction, AdminDrawer },
    setup() {
      const [registerDrawer, { openDrawer }] = useDrawer()
      const [registerTable, { reload }] = useTable({
        title: '后台用户列表',
        api: getAdminListPage,
        columns,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
        },
        useSearchForm: true,
        showTableSetting: true,
        bordered: true,
        showIndexColumn: false,
        actionColumn: {
          width: 80,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
          fixed: undefined,
        },
      })
      const { createMessage } = useMessage()

      function handleCreate() {
        openDrawer(true, {
          isUpdate: false,
        })
      }
      function handleEdit(record: Recordable) {
        openDrawer(true, {
          record,
          isUpdate: true,
        })
      }
      function handleDelete(record: Recordable) {
        delAdmin(record.id).then(() => {
          createMessage.success('删除成功')
          reload()
        })
      }
      function handleSuccess() {
        reload()
      }
      return {
        registerTable,
        registerDrawer,
        handleCreate,
        handleEdit,
        handleDelete,
        handleSuccess,
      }
    },
  })
</script>
<style lang=""></style>
