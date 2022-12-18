import { RoleParams, RolePageParams, RoleListGetResultModel } from './model/systemModel'

import { defHttp } from '/@/utils/http/axios'

enum Api {
  SetRoleStatus = 'system/role/set-status',
  RoleAllPageList = 'system/role/search',
  RolePageList = 'system/role/index',
}

export const getRoleListPage = (params: RolePageParams) =>
  defHttp.get<RoleListGetResultModel>({ url: Api.RolePageList, params })

export const getAllRoleList = (params: RoleParams) =>
  defHttp.get<RoleListGetResultModel>({ url: Api.RolePageList, params })

export const setRoleStatus = (id: string, status: number) =>
  defHttp.put({ url: Api.SetRoleStatus, params: { id, status } })
