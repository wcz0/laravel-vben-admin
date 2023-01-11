import { AdminListGetResultModel, AdminPageParams, AdminParams } from './model/adminModel'
import { defHttp } from '/@/utils/http/axios'
enum Api {
  AdminList = 'system/admin/index',
  CreateAdmin = 'system/admin/create',
  UpdateAdmin = 'system/admin/update',
  DeleteAdmin = 'system/admin/delete',
}

export const getAdminListPage = (params: AdminPageParams) =>
  defHttp.get<AdminListGetResultModel>({ url: Api.AdminList, params })

export const createAdmin = (params: AdminParams) => defHttp.post({ url: Api.CreateAdmin, params })

export const updateAdmin = (params: AdminParams) => defHttp.put({ url: Api.UpdateAdmin, params })

export const delAdmin = (id: number) => defHttp.delete({ url: Api.DeleteAdmin, params: { id } })
