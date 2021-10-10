import { LoginPayload, LoginResponse, ResponseData } from 'models'
import axiosClient from './axiosClient'

export const loginApi = {
  login(payload: LoginPayload): Promise<ResponseData<LoginResponse>> {
    return axiosClient.post('/admin/login', payload)
  },
}
