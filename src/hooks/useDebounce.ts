import { useEffect, useState } from 'react'

export const useDebounce = <T>(value: T, delay: number): T | undefined => {
  const [debouncedValue, setDebouncedValue] = useState<T>()

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return (): void => {
      clearTimeout(timeout)
    }
  }, [value])
  return debouncedValue
}
