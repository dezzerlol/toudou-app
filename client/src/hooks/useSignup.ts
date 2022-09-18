import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { loginMutation, signupMutation } from '../services/mutations'

export const useSignup = () => {
  const [message, setMessage] = useState('')
  const { isLoading, mutate, error, isError } = useMutation<any, any, any, any>(['signup'], signupMutation, {
    onSuccess() {
      setMessage('Successfully created account.')

      setTimeout(() => {
        setMessage('')
      }, 6000)
    },
  })

  return { isLoading, mutate, error, isError, message }
}
