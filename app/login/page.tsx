'use client'

import { useState } from 'react'
import { Form, Input, Button, message as antMessage, Spin } from 'antd'
import { api_login } from './api'
import { LoadingOutlined, LockFilled, UserOutlined } from '@ant-design/icons'
import { useLocalStore } from '../store'
import { useRouter } from 'next/navigation'

export default function Login() {
  const router = useRouter()
  const { setData } = useLocalStore()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const onFinish = () => {
    setLoading(true)
    api_login(username, password)
      .then(({ code, message, data }) => {
        if (code) antMessage.error(message)
        else {
          setData(data)
          antMessage.success(message)
          router.push('/')
        }
      })
      .finally(() => setLoading(false))
  }

  return (
    <div className="flex justify-center h-screen pt-[26vh]">
      <Form className="w-[360px]" onFinish={onFinish} variant="filled">
        <Form.Item>
          <div className="text-center text-[32px] mb-4">翼灵任务系统</div>
        </Form.Item>

        <Form.Item
          name="用户名"
          rules={[{ required: true, message: '请输入用户名' }]}
        >
          <Input
            className="h-12"
            onChange={(e) => setUsername(e.target.value)}
            prefix={<UserOutlined className="mx-2" />}
          />
        </Form.Item>

        <Form.Item
          name="密码"
          rules={[{ required: true, message: '请输入密码' }]}
        >
          <Input.Password
            className="h-12"
            onChange={(e) => setPassword(e.target.value)}
            prefix={<LockFilled className="mx-2" />}
          />
        </Form.Item>

        <Form.Item label={null}>
          <Spin
            spinning={loading}
            indicator={<LoadingOutlined spin style={{ marginTop: '-12px' }} />}
            size="large"
          >
            <Button
              type="primary"
              htmlType="submit"
              className="w-full mt-2"
              style={{ height: '48px' }}
            >
              登录
            </Button>
          </Spin>
        </Form.Item>
      </Form>
    </div>
  )
}
