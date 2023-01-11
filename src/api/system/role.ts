import { RolePageParams, RoleListGetResultModel, RoleParams } from './model/roleModel'

import { defHttp } from '/@/utils/http/axios'

enum Api {
  RolePageList = 'system/role/index',
  SetRoleStatus = 'system/role/set-status',
  CreateRole = 'system/role/create',
  UpdateRole = 'system/role/update',
  DeleteRole = 'system/role/delete',
  // RoleAllPageList = 'system/role/search',
}
export const getRoleListPage = (params: RolePageParams) =>
  defHttp.get<RoleListGetResultModel>({ url: Api.RolePageList, params })

export const setRoleStatus = (id: string, status: number) =>
  defHttp.put({ url: Api.SetRoleStatus, params: { id, status } })

export const updateRole = (params: RoleParams) => defHttp.put({ url: Api.UpdateRole, params })

export const createRole = (params: RoleParams) => defHttp.post({ url: Api.CreateRole, params })

export const delRole = (id: number) => defHttp.delete({ url: Api.DeleteRole, params: { id } })
