import { ResponseData, Profile } from 'models'
import axiosClient from './axiosClient'

export const profileApi = {
  getProfile(): Promise<ResponseData<Profile>> {
    return axiosClient.get('/profile')
  },
}
