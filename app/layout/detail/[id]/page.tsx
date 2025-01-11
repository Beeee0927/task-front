'use client'

import { useEffect, useRef, useState } from 'react'
import { Button, message, Modal } from 'antd'
import { useLocalStore } from '@/app/store'
import { useParams, useRouter } from 'next/navigation'
import { api_getTaskDetail } from '../../task/api'
import dayjs, { Dayjs } from 'dayjs'
import 'quill/dist/quill.snow.css'
import './page.scss'
import { CloseOutlined } from '@ant-design/icons'
import { api_addAns, api_getAns, getUsers } from './api'
import { downloadFiles } from '@/app/api'
import Tabs from './(components)/Tabs'

export default function Detail() {
  const [deadline, setDeadline] = useState<Dayjs | string | null>(null)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const quill = useRef<any>(null)
  const quillInitRef = useRef<any>(null)
  const router = useRouter()
  const id = useParams().id as string

  const [ansContent, setAnsContent] = useState('')
  const [ansContentHtml, setAnsContentHtml] = useState('')
  const [files, setFiles] = useState<File[]>([])
  const [status, setStatus] = useState('')
  const { role } = useLocalStore()

  const [diabled, setDiabled] = useState(false)
  useEffect(() => {
    if (role === 'admin') setDiabled(true)
  }, [role])

  const [items, setItems] = useState([])
  if (role === 'admin') {
    useEffect(() => {
      getUsers({}).then((res: any) => {
        setItems(
          res.data.map(({ username, _id }: any) => ({
            label: username,
            key: _id
          }))
        )
        refresh(res.data[0]._id)
      })
    }, [])
  }

  const lastActiveKey = useRef('')
  const [activeKey, setActiveKey] = useState('')
  function refresh(userId?: string) {
    api_getAns({ taskId: id, userId }).then(async (res) => {
      if (res.code === 1) {
        message.error(res.message)
        return setActiveKey(lastActiveKey.current)
      }
      lastActiveKey.current = id

      const { content, files, status } = res.data

      await quillInitRef.current
      quill.current.setContents(content)
      if (role === 'admin') quill.current.disable()
      setStatus(status)
      downloadFiles(files).then(setFiles)
    })
  }

  useEffect(() => {
    ;(async () => {
      quillInitRef.current = import('quill')
      const Quill = (await quillInitRef.current).default
      quill.current = new Quill('#editor', { theme: 'snow' })

      api_getTaskDetail({ id }).then((res: any) => {
        const { title, deadline, contentHtml } = res.data
        setTitle(title)
        setDeadline(deadline)
        setContent(contentHtml)
      })

      if (role === 'user') refresh()
    })()
  }, [])

  const [isModalOpen, setIsModalOpen] = useState(false)

  async function handleUpload() {
    const input = document.createElement('input')
    input.type = 'file'
    input.multiple = true
    input.style.display = 'none'
    input.click()
    input.onchange = () => {
      setFiles(files.concat(Array.from(input.files!)))
      input.remove()
      setIsModalOpen(false)
    }
  }

  async function handleSubmit() {
    const data = {
      taskId: id,
      content: quill.current.getContents(),
      contentHtml: quill.current.getSemanticHTML(),
      files
    }
    if (quill.current.getSemanticHTML().length <= 7)
      return message.error('请先填写答案')

    Modal.confirm({
      title: '提交答案',
      content: '确定要提交吗',
      onOk: () => {
        api_addAns(data).then((res: any) => {
          message.success(res.message)
          router.push('/layout/task')
        })
      },
      icon: null,
      style: { top: '30%' }
    })
  }

  return (
    <div>
      <Tabs onChange={refresh} />
      <div className="w-fit mx-auto min-w-[800px] bg-blue-50 p-10 rounded-md">
        <div className="text-4xl font-bold mb-4 w-fit">{title}</div>
        <div className="mb-4 flex flex-row-reverse">
          <div className="text-sm mb-4 w-fit flex">
            截止时间：{dayjs(deadline).format('YYYY-MM-DD HH:mm')}
          </div>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          className="w-fit mb-10"
        />
        <div id="editor"></div>
        <div className="flex mt-4">
          <Button
            type="primary"
            size="large"
            className="w-40"
            onClick={() => setIsModalOpen(true)}
            disabled={diabled}
          >
            上传附件
          </Button>
          <div className="flex flex-wrap">
            {files?.map(({ name }, idx) => (
              <div
                className="w-40 h-10 text-center leading-10 p-0 px-3 bg-white rounded-md ml-2 mb-2 text-sm flex items-center justify-between hover:cursor-pointer "
                key={idx}
                onClick={() => {
                  // downloadFile(files[idx])
                }}
              >
                <div className="whitespace-nowrap overflow-hidden text-ellipsis mr-2">
                  {name}
                </div>
                <CloseOutlined
                  className="hover:text-blue-500"
                  onClick={(e) => {
                    e.stopPropagation()
                    Modal.confirm({
                      title: '删除附件',
                      content: '确定删除该附件吗',
                      onOk: () => {
                        setFiles(files.filter((_, i) => i !== idx))
                      },
                      icon: null,
                      style: { top: '30%' }
                    })
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        <Button
          type="primary"
          size="large"
          className="w-full mt-6"
          onClick={handleSubmit}
        >
          {status === 'grading' ? '修改作答' : '提交作答'}
        </Button>
      </div>
      <Modal
        title="上传附件"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        style={{ top: '30%' }}
      >
        <div
          className="w-full h-[200px] mt-4 rounded-md bg-[#F6F7F9] flex flex-col justify-center items-center text-[#555] hover:text-blue-500 hover:cursor-pointer hover:border-blue-500 border-[1px] border-dashed"
          onClick={handleUpload}
        >
          <div className="text-4xl mb-5">+</div>
          <div className="text-sm">点击或拖拽至此上传</div>
        </div>
      </Modal>
    </div>
  )
}
