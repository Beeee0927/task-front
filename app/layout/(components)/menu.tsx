'use client'

import { Menu as AntdMenu, MenuProps } from 'antd'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Menu() {
  const pathname = usePathname()
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

  return (
    <AntdMenu
      style={{
        width: 'calc(100px + 8vw)',
        flexShrink: 0,
        padding: '6px 4px',
        backgroundColor: '#00000001',
        boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.1)'
      }}
      defaultSelectedKeys={[pathname]}
      mode="inline"
      items={items}
    />
  )
}
