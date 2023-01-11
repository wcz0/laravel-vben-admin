export type PermissionParams = {
  id?: number
  parent_id?: number
  title: string
  name?: string
  path?: string
  redirect?: string
  icon?: string
  component: string
  permission: string
  affix?: number
  sort?: number
  type?: number
  status?: number
}

export type PermissionListParams = {
  title?: string
  permission?: string
  status?: number
}

export interface PermissionListItem {
  id: number
  title: string
  icon: string
  component: string
  permission: string
  sort: number
  status: number
  children: PermissionListItem[]
}
// export type PermissionPageParams = BasicPageParams & PermissionParams

export interface PermissionList {
  id: number
  title: string
  children: PermissionList[]
}
