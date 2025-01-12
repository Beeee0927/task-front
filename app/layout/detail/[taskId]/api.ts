import { formPost, post } from '@/app/utils/request'

export const api_addAns = async (data?: any) => {
  return formPost('/addAns', data)
}

export const api_getAns = async (data?: any) => {
  return post('/getAns', data)
}

export const api_getUsers = async (data?: any) => {
  return post('/getUsers', data)
}

export const api_addReview = async (data?: any) => {
  return post('/addReview', data)
}
