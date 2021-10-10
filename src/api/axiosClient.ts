import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { SMC_AUTH } from 'configs/constants'
import { getDataStorage, removeAllDataStorage } from 'utils'

const API_URL = process.env.REACT_APP_BASE_URL

const axiosClient = axios.create({
  baseURL: `${API_URL}/api`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded',
  },
})

const refreshAccessToken = () => {
  const authInfo = getDataStorage('token')
  return axios.get(`${API_URL}/auth/refresh-token`, {
    headers: {
      refresh_token: authInfo.refreshToken,
    },
  })
}

axiosClient.interceptors.request.use(
  (config) => {
    const token = getDataStorage('token')
    config.headers = {
      Authorization: `Bearer ${token || ''}`,
    }
    return config
  },
  (error) => Promise.reject(error.response.data),
)

// Add a response interceptor
axiosClient.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  async (error: AxiosError) => {
    const originalRequest = error?.config as AxiosRequestConfig & {
      _retry: boolean
    }

    if (error?.response?.status === 403 && !originalRequest?._retry) {
      originalRequest._retry = true
      try {
        const access_token = await refreshAccessToken()
        axios.defaults.headers.common.Authorization = `Bearer ${access_token}`
        return await axiosClient(originalRequest)
      } catch (error) {
        removeAllDataStorage()
        window.location.reload()
        return Promise.reject(error)
      }
    }
    return Promise.reject(error.response?.data)
  },
)
export default axiosClient
