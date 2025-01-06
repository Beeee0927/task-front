'use client'

import { Avatar as AntdAvatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { useRouter } from 'next/navigation'

export default function UserAvatar() {
  const router = useRouter()

  return (
    <AntdAvatar
      size={32}
      icon={<UserOutlined />}
      className="cursor-pointer"
      onClick={() => {
        router.push('/login')
      }}
    />
  )
}
