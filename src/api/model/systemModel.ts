import { BasicPageParams, BasicFetchResult } from './baseModel';

export type RoleParams = {
  name?: string;
  value?: string;
  status?: number;
};

export type PermissionParams = {
  name?: string;
  title?: string;
  status?: number;
  type?: number;
};

export type PermissionPageParams = BasicPageParams & PermissionParams;

export interface PermissionItem {
  id: number;
  title: string;
  children: PermissionItem[];
}

export type RolePageParams = BasicPageParams & RoleParams;

export interface RoleListItem {
  id: number;
  name: string;
  value: string;
  desc: string;
  status: number;
  created_at: string;
  permissions: number[];
  // updatedAt: string
}

export type RoleListGetResultModel = BasicFetchResult<RoleListItem>;
export type PermissionListGetResultModel = BasicFetchResult<PermissionItem>;
