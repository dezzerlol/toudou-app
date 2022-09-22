import fetcher from './fetcher'

export const signupMutation = async ({ email, password }: { email: string; password: string }) => {
  await fetcher('/signup', { email, password })
}

export const loginMutation = async ({ email, password }: { email: string; password: string }) => {
  await fetcher('/login', { email, password })
}

export const logoutMutation = async () => {
  await fetcher('/logout')
}

export const getTodosMutation = async (folderId: string) => {
  return fetcher('/todo/getTodos', { folderId })
}

export const getFoldersMutation = async () => {
  return fetcher('/folder/getFolders')
}

export const createFolderMutation = ({title, userId}: {title: string, userId: number}) =>{
  return fetcher('/folder/createFolder', {title, userId})
}