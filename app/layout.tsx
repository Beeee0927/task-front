import './globals.scss'
import type { Metadata } from 'next'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import RouteInterceptor from './utils/routeIntereceptor'
import { ConfigProvider } from 'antd'

export const metadata: Metadata = {
  title: '翼灵任务系统',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <RouteInterceptor />
        <AntdRegistry>
          <ConfigProvider wave={{ disabled: true }}>{children}</ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  )
}
