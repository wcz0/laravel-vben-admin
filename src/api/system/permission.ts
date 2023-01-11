import {
  PermissionList,
  PermissionListItem,
  PermissionListParams,
  PermissionParams,
} from './model/permissionModel'
import { defHttp } from '/@/utils/http/axios'

enum Api {
  PermissionList = 'system/permission/index',
  CreatePermission = 'system/permission/create',
  UpdatePermission = 'system/permission/update',
  DeletePermission = 'system/permission/delete',
  PermissionAll = 'system/permission/get-tree',
}

// permission
export const getPermissionList = (params: PermissionListParams) =>
  defHttp.get<PermissionListItem>({ url: Api.PermissionList, params })

export const createPermission = (params: PermissionParams) =>
  defHttp.post({ url: Api.CreatePermission, params })

export const updatePermission = (params: PermissionParams) =>
  defHttp.put({ url: Api.UpdatePermission, params })

export const delPermission = (id: number) =>
  defHttp.delete({ url: Api.DeletePermission, params: { id } })

export const getPermissionTree = () => defHttp.get<PermissionList>({ url: Api.PermissionAll })
