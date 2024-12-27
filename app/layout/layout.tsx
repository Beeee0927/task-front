import { Image, Menu, MenuProps } from 'antd'
import Link from 'next/link'
import UserAvatar from './(components)/userAvatar'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  type MenuItem = Required<MenuProps>['items'][number]
  const commonItems: MenuItem[] = [
    { key: '1', label: <Link href="/layout/message">消息列表</Link> },
    { key: '2', label: <Link href="/layout/task">任务列表</Link> }
  ]
  // const userItems: MenuItem[] = []
  // const adminItems: MenuItem[] = []

  const items: MenuItem[] = [...commonItems]
  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between pl-6 pr-4 shadow-md z-[100] relative items-center">
        <div className="flex items-center gap-6">
          <Image src="/logo.png" width={60} height={60} preview={false} />
          翼灵任务系统
        </div>
        <UserAvatar />
      </div>
      <div className="flex flex-grow">
        <Menu
          style={{
            width: 'calc(100px + 8vw)',
            flexShrink: 0,
            padding: '6px 4px',
            backgroundColor: '#00000001',
            boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.1)'
          }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          items={items}
        />
        <div className=" px-12 pt-6 flex-grow">{children}</div>
      </div>
    </div>
  )
}
