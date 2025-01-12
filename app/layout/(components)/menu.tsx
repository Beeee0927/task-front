'use client'

import { Menu as AntdMenu, MenuProps } from 'antd'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useMenuStore } from '@/app/store'
import { useEffect, useMemo } from 'react'
import { useDefer } from '@/app/utils/tools'

export default function Menu() {
  const isDeferred = useDefer()

  type MenuItem = Required<MenuProps>['items'][number]
  const commonItems: (MenuItem & { key: string })[] = [
    {
      key: '/layout/message',
      get label() {
        return <Link href={this.key}>消息列表</Link>
      }
    },
    {
      key: '/layout/task',
      get label() {
        return <Link href={this.key}>任务列表</Link>
      }
    }
  ]
  // const userItems: MenuItem[] = []
  // const adminItems: MenuItem[] = []
  const items: MenuItem[] = [...commonItems]

  const { activeKey, setActiveKey } = useMenuStore()
  const availableKeys = useMemo(() => items.map((item) => item?.key), [])
  const pathname = usePathname()
  useEffect(() => {
    if (availableKeys.includes(pathname)) setActiveKey(pathname)
  }, [pathname])

  return (
    <AntdMenu
      style={{
        width: 'calc(100px + 8vw)',
        flexShrink: 0,
        padding: '6px 4px',
        backgroundColor: '#00000001',
        boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.1)'
      }}
      selectedKeys={!isDeferred ? [] : [activeKey]}
      mode="inline"
      items={items}
    />
  )
}
