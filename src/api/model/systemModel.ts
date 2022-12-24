import { BasicPageParams, BasicFetchResult } from './baseModel'

export type RoleParams = {
  name?: string
  value?: string
  status?: number
}

export interface PermissionItem {
  id: string
  title: string
  // sort: number
  // icon: string
  // component: string
  // permission: string
  // createdAt: string
  children: PermissionItem[]
}

export type RolePageParams = BasicPageParams & RoleParams

export interface RoleListItem {
  id: string
  name: string
  value: string
  desc: string
  status: number
  createdAt: string
  updatedAt: string
}

export type RoleListGetResultModel = BasicFetchResult<RoleListItem>
