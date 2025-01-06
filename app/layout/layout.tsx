import { Image } from 'antd'
import UserAvatar from './(components)/userAvatar'
import Menu from './(components)/menu'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between pl-6 pr-4 shadow-md z-[100] relative items-center">
        <div className="flex items-center gap-6">
          <Image src="/logo.png" width={60} height={60} preview={false} />
          翼灵任务系统
        </div>
        <UserAvatar />
      </div>
      <div className="flex flex-grow overflow-y-hidden">
        <Menu />
        <div className="px-12 pt-6 flex-grow overflow-y-scroll">{children}</div>
      </div>
    </div>
  )
}
