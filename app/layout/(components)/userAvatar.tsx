'use client'

import { useEffectProp } from '@/app/utils/tolls'
import { useLocalStore } from '@/app/store'
import { Avatar as AntdAvatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'

export default function UserAvatar() {
  // const avatar = useEffectProp(useLocalStore, 'avatar')
  return <AntdAvatar size={36} icon={<UserOutlined />} />
}
