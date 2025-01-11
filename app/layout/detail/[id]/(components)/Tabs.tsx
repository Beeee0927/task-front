'use client'

import { useEffect, useRef, useState } from 'react'
import { getUsers } from '../api'
import { useLocalStore } from '@/app/store'
import { useParams } from 'next/navigation'
import { Tabs as AntdTabs } from 'antd'

export default function Tabs({ onChange }: any) {
  const id = useParams().id as string
  const [items, setItems] = useState<any[]>([])
  const { role } = useLocalStore()

  if (role === 'admin') {
    useEffect(() => {
      getUsers({}).then((res: any) => {
        setItems(
          [{ label: '题目', key: '' }].concat(
            res.data.map(({ username, _id }: any) => ({
              label: username,
              key: _id
            }))
          )
        )
        onChange(res.data[0]._id)
      })
    }, [])
  }

  const lastActiveKey = useRef('')
  const [activeKey, setActiveKey] = useState('0')

  return (
    <AntdTabs
      items={items}
      style={{ marginBottom: '20px' }}
      onChange={onChange}
      activeKey={activeKey}
    />
  )
}
