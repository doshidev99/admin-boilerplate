export const setDataStorage = (key: string, data: any) => {
  if (!window.localStorage || !window.JSON || !key) {
    return
  }

  window.localStorage.setItem(key, JSON.stringify(data))
}

export const getDataStorage = (key: string) => {
  if (!window.localStorage || !window.JSON || !key) {
    return
  }
  const item = window.localStorage.getItem(key)
  if (!item) {
    return
  }
  return JSON.parse(item)
}

export const removeDataStorage = (key: string) => {
  if (!window.localStorage || !window.JSON || !key) {
    return
  }
  window.localStorage.removeItem(key)
}

export const removeAllDataStorage = () => {
  if (!window.localStorage || !window.JSON) {
    return
  }
  window.localStorage.clear()
}
