import { BasicPageParams, BasicFetchResult } from '../../model/baseModel'

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

export type RolePageParams = BasicPageParams & RoleListParams

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
