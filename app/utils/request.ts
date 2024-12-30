import { message } from 'antd'
import { useLocalStore } from '../store'
import { useRouterStore } from '../store'

const baseUrl = 'http://localhost:8000'

async function request(url: string, init?: RequestInit) {
  const res = await fetch(baseUrl + url, {
    ...init,
    headers: {
      ...init?.headers,
      sessionId: useLocalStore.getState().userId.toString()
    }
  })

  if (!res.ok) {
    message.error(res.statusText)
    if (res.status === 401) useRouterStore.getState().trigger()
  }
  return res.json()
}

export function get(url: string, params?: Record<string, any>) {
  const queryString = new URLSearchParams(params).toString()
  return request(url + (params ? '?' + queryString : ''))
}

export function post(url: string, data: object) {
  return request(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
  })
}

export function formPost(url: string, data: object) {
  const formData = new FormData()
  Object.entries(data).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((item) => {
        formData.append(key, item)
      })
    } else {
      formData.append(key, JSON.stringify(value))
    }
  })

  return request(url, {
    method: 'POST',
    body: formData
  })
}
