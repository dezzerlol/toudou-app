import fetcher from './fetcher'

export const signupMutation = async ({ email, password }: { email: string; password: string }) => {
  await fetcher('/signup', { email, password })
}

export const loginMutation = async ({ email, password }: { email: string; password: string }) => {
  await fetcher('/login', { email, password })
}
