import fetcher from './fetcher'

// USER
export const signupMutation = async ({ email, password }: { email: string; password: string }) => {
  return fetcher('/auth/signup', { email, password })
}

export const loginMutation = async ({ email, password }: { email: string; password: string }) => {
  return fetcher('/auth/login', { email, password })
}

export const logoutMutation = async () => {
  return fetcher('/auth/logout')
}

// FOLDERS

export const getFoldersMutation = async () => {
  return fetcher('/folder/getFolders')
}

export const createFolderMutation = ({ title }: { title: string }) => {
  return fetcher('/folder/createFolder', { title })
}

export const updateFolderMutation = ({ id, icon, title }: { id: string; icon?: string; title?: string }) => {
  return fetcher('/folder/updateFolder', { id, icon, title })
}

export const deleteFolderMutation = ({ id }: { id: number }) => {
  return fetcher('/folder/deleteFolder', { id })
}

// TODOS

export const getTodosMutation = async (folderId: string) => {
  return fetcher('/todo/getTodos', { folderId })
}

export const createTodoMutation = ({ text, folderId }: { text: string; folderId: string }) => {
  return fetcher('/todo/createTodo', { text, folderId })
}

export const updateTodoMutation = ({ id, text, completed }: { id: number; text?: string; completed?: boolean }) => {
  return fetcher('/todo/updateTodo', { id, text, completed })
}

export const deleteTodoMutation = ({ id }: { id: number }) => {
  return fetcher('/todo/deleteTodo', { id })
}
