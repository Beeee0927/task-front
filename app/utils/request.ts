'use client'
const baseUrl = 'http://localhost:8000'

async function request(url: string, init?: RequestInit) {
  return fetch(baseUrl + url, init).then((res) => res.json())
}

export function get(url: string, params?: Record<string, any>) {
  const queryString = new URLSearchParams(params).toString()
  return request(url + (params ? '?' + queryString : ''))
}

export function post(url: string, data: any) {
  return request(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
  })
}
