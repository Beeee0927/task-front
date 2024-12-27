'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useLocalStore } from '../store'

export default function RouteInterceptor() {
  const push = useRouter().push
  const path = usePathname()
  const { userId, role } = useLocalStore()

  useEffect(() => {
    if (!userId || !role) {
      if (path !== '/login') push('/login')
    } else if (['/', '/layout'].includes(path)) push('/layout/message')
  }, [path])

  return null
}
