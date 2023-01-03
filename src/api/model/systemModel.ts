import { BasicPageParams, BasicFetchResult } from './baseModel'

export type RoleListParams = {
  name?: string
  value?: string
  status?: number
}

export type RoleParams = {
  id?: string
  name: string
  value: string
  status: number
  desc?: string
  permissions: Array<number>
}

export type PermissionParams = {
  name?: string
  title?: string
  status?: number
  type?: number
}

export type PermissionPageParams = BasicPageParams & PermissionParams
export type RolePageParams = BasicPageParams & RoleListParams

export interface PermissionItem {
  id: number
  title: string
  children: PermissionItem[]
}

export interface RoleListItem {
  id: number
  name: string
  value: string
  desc: string
  status: number
  created_at: string
  permissions: number[]
  // updatedAt: string
}

export type RoleListGetResultModel = BasicFetchResult<RoleListItem>
export type PermissionListGetResultModel = BasicFetchResult<PermissionItem>
