import { useEffect, useRef, useState } from 'react'
import { api_getUsers } from '../api'
import { useLocalStore } from '@/app/store'
import { Tabs as AntdTabs } from 'antd'
import { useDefer } from '@/app/utils/tools'

export default function Tabs({ refresh }: any) {
  const isDeferred = useDefer()

  const { role } = useLocalStore()
  const isAdmin = role === 'admin'

  const [items, setItems] = useState<any[]>([])

  useEffect(() => {
    if (isAdmin) {
      api_getUsers().then((res: any) => {
        setItems(
          [{ label: '仅题目', key: '' }].concat(
            res.data.map(({ username, _id }: any) => ({
              label: username,
              key: _id
            }))
          )
        )
      })
    }
  }, [])

  const [activeKey, setActiveKey] = useState('')
  const lastActiveKey = useRef('')

  return (
    <>
      {isDeferred && isAdmin && (
        <AntdTabs
          items={items}
          style={{ marginBottom: '20px' }}
          onChange={(key) => {
            refresh(key).then((res) => {
              if (res.code === 1) setActiveKey(lastActiveKey.current)
            })
            lastActiveKey.current = activeKey
            setActiveKey(key)
          }}
          activeKey={activeKey}
        />
      )}
    </>
  )
}
