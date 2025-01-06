'use client'

import { useEffect, useRef, useState } from 'react'
import { api_getAns, getUsers } from '../[id]/api'
import { useLocalStore } from '@/app/store'
import { useParams } from 'next/navigation'
import { message } from 'antd'

export default function Tabs({ onChange }: any) {
  const id = useParams().id as string
  const [items, setItems] = useState([])
  const { role } = useLocalStore()

  if (role === 'admin') {
    useEffect(() => {
      getUsers({}).then((res: any) => {
        setItems(
          res.data.map(({ username, _id }: any) => ({
            label: username,
            key: _id
          }))
        )
        onChange(res.data[0]._id)
      })
    }, [])
  }

  const lastActiveKey = useRef('')
  const [activeKey, setActiveKey] = useState('')

  return (
    <Tabs
      items={items}
      style={{ marginBottom: '20px' }}
      onChange={onChange}
      activeKey={activeKey}
    />
  )
}
