import { authAction } from 'features/auth/authSlice'
import { toast } from 'react-toastify'
import { AxiosError } from 'axios'
import { store } from 'app/store'

export const apiErrorHandler = (error: AxiosError) => {
  let message = 'Something wrong'

  if (error.response) {
    message = error.response.data.message
  } else if (error.request) {
    message = error.request._response
  } else {
    message = error.message
  }

  if (error?.response?.data.code === 401) {
    // store.dispatch(authAction.logout())
  }
  toast.error(message)
}
