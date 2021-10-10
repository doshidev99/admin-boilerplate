export interface LoginPayload {
  email: string
  password: string
}

export interface LoginResponse {
  user: {
    id?: string
    username: string
    email: string
  }
  token: string
  refreshToken: string
  [key: string]: any
}
