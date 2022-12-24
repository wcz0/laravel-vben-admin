import { RolePageParams, RoleListGetResultModel, PermissionItem } from './model/systemModel'

import { defHttp } from '/@/utils/http/axios'

enum Api {
  SetRoleStatus = 'system/role/set-status',
  RoleAllPageList = 'system/role/search',
  RolePageList = 'system/role/index',
  DeleteRole = 'system/role/delete',
  GetPermission = 'system/role/get-permission',
}

export const getRoleListPage = (params: RolePageParams) =>
  defHttp.get<RoleListGetResultModel>({ url: Api.RolePageList, params })

export const setRoleStatus = (id: string, status: number) =>
  defHttp.put({ url: Api.SetRoleStatus, params: { id, status } })

export const delRole = (id: string) => defHttp.delete({ url: Api.DeleteRole, params: id })

export const getPermissionList = () => defHttp.get<PermissionItem>({ url: Api.GetPermission })
