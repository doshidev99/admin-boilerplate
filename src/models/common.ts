import { FunctionComponent } from 'react'

export interface PaginationParams {
  page?: number
  limit: number
}

export interface ResponseData<T> {
  data: T
  status: number
}

export type Nullable<T> = T | undefined | null

export interface Profile {
  id: string
  username: string
  email: string
  avatar: string | null
  status: string
}

export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>

export interface IRoutes {
  path: string
  exact?: boolean
  layout?: React.FunctionComponent
  guard: React.FunctionComponent
  component: React.LazyExoticComponent<FunctionComponent>
}
