import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { loginMutation } from '../services/mutations'

export const useLogin = () => {
  const router = useRouter()
  const { isLoading, mutate, error, isError } = useMutation<any, any, any, any>(['login'], loginMutation, {
    onSuccess() {
      router.replace('/')
    },
  })

  return { isLoading, mutate, error, isError }
}
