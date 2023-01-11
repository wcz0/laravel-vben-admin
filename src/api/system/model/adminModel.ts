import { BasicFetchResult, BasicPageParams } from '/@/api/model/baseModel'
export type AdminParams = {
  id?: number
  username: string
  password: string
  gender?: number
  name?: string
  avatar?: string
  phone?: string
  email?: string
  email_status?: number
  birthday?: Date
  last_ip?: string
  last_time?: Date
  status?: number
  roleIds?: Array<number>
}

export type AdminListParams = {
  username?: string
  name?: string
  phone?: string
  gender?: number
}

export type AdminPageParams = BasicPageParams & AdminListParams

export type AdminListItem = {
  id: number
  username: string
  name: string
  gender: number
  phone: string
  email: string
  last_ip: string
  created_at: string
}

export type AdminListGetResultModel = BasicFetchResult<AdminListItem>
