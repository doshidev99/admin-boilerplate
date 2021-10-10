export const keyById = <T extends { id: string }>(arr: T[]) => {
  const result: {
    [key: string]: T
  } = {}

  if (Array.isArray(arr) && arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      const currentValue = arr[i]
      result[currentValue.id] = currentValue
    }
  }
  return result
}
