import { Nullable } from 'models'

export interface Information {
  phone?: string
  numberOfEmployees: number
  companyName: string
}

export type StatusChange = 'BLOCK' | 'NOT_ALLOW' | 'ACTIVE' | 'INACTIVE'
// | 'ACTIVE'
// | 'INACTIVE'
// | 'PAID'
// | 'PAY_ERROR'
// | 'PENDING'
// | 'BLOCK'
// | 'DISABLE'
// | 'ENABLE'
// | 'PAY_WAITING'
// | 'NOT_ALLOW'
export interface User {
  id: string
  username: string
  email: string
  role: string
  status: StatusChange
  avatar: Nullable<string>
  information?: Information
  users: User[]
}

export interface WrapperResponse<T> {
  data: T
  status: number
}
export interface ListResponse<T> {
  data: {
    count: number
    rows: T[]
  }
  status?: number
}
