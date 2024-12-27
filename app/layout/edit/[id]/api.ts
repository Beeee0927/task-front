import { post } from '@/app/utils/request'

export const api_addTask = async (data: any) => {
  return post('/addTask', data)
}
