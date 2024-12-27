'use client'

import { useEffect, useRef, useState } from 'react'
import 'quill/dist/quill.snow.css'
import './page.scss'
import { Button, Input, DatePicker, message, Modal } from 'antd'
import { useLocalStore } from '@/app/store'
import { api_addTask } from './api'
import { useParams, useRouter } from 'next/navigation'
import { api_getTaskDetail } from '../../task/api'

export default function Edit() {
  const [deadline, setDeadline] = useState<Date | null>(null)
  const [title, setTitle] = useState('')
  const quill = useRef<any>(null)
  const { deptName } = useLocalStore()
  const router = useRouter()
  const id = useParams().id

  useEffect(() => {
    ;(async () => {
      const Quill = await (await import('quill')).default

      quill.current = new Quill('#editor', { theme: 'snow' })

      api_getTaskDetail({ id }).then((res: any) => {
        setTitle(res.data.title)
        setDeadline(res.data.deadline)
        console.log(Object.getPrototypeOf(quill.current))
        console.log(res.data.content)
        quill.current.setText(res.data.content)
      })
    })()
  }, [])

  function handleSubmit() {
    if (!title || !deadline || !quill.current.getSemanticHTML())
      return message.error('请填写完整信息')
    Modal.confirm({
      title: '确认提交',
      content: '确认提交后，任务将无法修改',
      onOk: () => {
        api_addTask({
          title,
          deadline,
          content: quill.current.getSemanticHTML(),
          deptName
        }).then((res: any) => {
          message.success(res.message)
          router.push('/layout/task')
        })
      },
      icon: null,
      style: { top: '30%' }
    })
  }

  return (
    <div className="py-4">
      <div className="w-full justify-between mb-4 flex items-center">
        <Input
          placeholder="请输入任务标题"
          size="large"
          className="flex-grow"
          style={{ marginRight: '16px' }}
          onChange={(e) => setTitle(e.target.value)}
        />
        <DatePicker
          size="large"
          className="w-80"
          placeholder="请选择截止日期"
          style={{ marginRight: '16px' }}
          onChange={(v: any) => setDeadline(v.$d)}
          showTime={{ format: 'HH:mm' }}
          format="YYYY-MM-DD HH:mm"
        />
        <Button
          type="primary"
          size="large"
          className="w-40"
          onClick={handleSubmit}
        >
          提交
        </Button>
      </div>
      <div id="editor"></div>
    </div>
  )
}
