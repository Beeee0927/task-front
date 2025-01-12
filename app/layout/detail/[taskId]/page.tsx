'use client'

import { useEffect, useRef, useState } from 'react'
import { Button, message, Modal, Progress, ProgressProps, Tooltip } from 'antd'
import { useLocalStore } from '@/app/store'
import { useParams, useRouter } from 'next/navigation'
import { api_getTaskDetail } from '../../task/api'
import dayjs, { Dayjs } from 'dayjs'
import 'quill/dist/quill.snow.css'
import './page.scss'
import { api_addAns, api_getAns, api_getUsers } from './api'
import { downloadFiles } from '@/app/api'
import Tabs from './(components)/Tabs'
import Files from './(components)/Files'
import { useDefer } from '@/app/utils/tools'
import UploadModal from './(components)/UploadModal'
import ReviewModal from './(components)/ReviewModal'

export default function Detail() {
  const isDeferred = useDefer()

  const [deadline, setDeadline] = useState<Dayjs | string | null>(null)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const quill = useRef<any>(null)
  const quillInitRef = useRef<any>(null)
  const router = useRouter()
  const taskId = useParams().taskId as string

  const [files, setFiles] = useState<File[]>([])
  const [status, setStatus] = useState('')
  const [score, setScore] = useState(0)
  const [comment, setComment] = useState('')
  const { role } = useLocalStore()
  const curUserId = useRef('')

  async function refresh(userId?: string) {
    curUserId.current = userId ?? ''
    setFiles([])
    setScore(0)
    setComment('')

    if (!userId) {
      await quillInitRef.current
      quill.current.setContents(content)
      if (role === 'admin') quill.current.disable()
      return { code: 0 }
    }

    const res = api_getAns({ taskId, userId })
    res.then(async (res) => {
      if (res.code === 1) {
        if (role === 'admin') {
          setScore(score)
          setComment(comment)
          setFiles(files)
          message.error(res.message)
        }
        return
      }

      const {
        content,
        files: newFiles,
        status,
        score: newScore,
        comment: newComment
      } = res.data

      await quillInitRef.current
      quill.current.setContents(content)
      if (role === 'admin') quill.current.disable()
      setStatus(status)
      setScore(newScore)
      setComment(newComment)
      downloadFiles(newFiles).then(setFiles)
    })
    return res
  }

  const { userId } = useLocalStore()
  useEffect(() => {
    if (role === 'user') refresh(userId)
  }, [role])

  useEffect(() => {
    ;(async () => {
      quillInitRef.current = import('quill')
      const Quill = (await quillInitRef.current).default
      quill.current = new Quill('#editor', { theme: 'snow' })

      api_getTaskDetail({ id: taskId }).then((res: any) => {
        const { title, deadline, contentHtml } = res.data
        setTitle(title)
        setDeadline(deadline)
        setContent(contentHtml)
      })

      if (role === 'user') refresh()
    })()
  }, [])

  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false)
  async function handleSubmit() {
    const data = {
      taskId,
      content: quill.current.getContents(),
      contentHtml: quill.current.getSemanticHTML(),
      files
    }
    if (quill.current.getSemanticHTML().length <= 7)
      return message.error('请先填写答案')

    Modal.confirm({
      title: '提交作答',
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

  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false)

  const conicColors: ProgressProps['strokeColor'] = {
    '0%': '#108ee9',
    '75%': '#87d068',
    '100%': '#108ee9'
  }

  return (
    <div>
      <Tabs refresh={refresh} />
      <div className="w-fit mx-auto min-w-[800px] bg-blue-50 p-10 rounded-md">
        <div className="flex justify-between">
          <div className="text-4xl font-bold mb-4 w-fit">{title}</div>
          <Tooltip
            title={comment ? '评语：' + comment : ''}
            placement="left"
            defaultOpen
            color="cyan"
          >
            <Progress
              type="circle"
              percent={score}
              size={75}
              strokeColor={conicColors}
              style={{
                transform: 'translateY(-20px)',
                visibility: score ? 'visible' : 'hidden',
                cursor: 'pointer'
              }}
              format={(e) => e + '分'}
            />
          </Tooltip>
        </div>
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

        <Files
          setIsModalOpen={setIsUploadModalOpen}
          files={files}
          setFiles={setFiles}
        />

        {isDeferred && (
          <div>
            {role === 'user' && (
              <Button
                type="primary"
                size="large"
                className="w-full mt-6"
                onClick={handleSubmit}
              >
                {status === 'grading' ? '修改作答' : '提交作答'}
              </Button>
            )}
            {role === 'admin' && curUserId.current && (
              <Button
                type="primary"
                size="large"
                className="w-full mt-6"
                onClick={() => setIsReviewModalOpen(true)}
              >
                批阅作答
              </Button>
            )}
          </div>
        )}
      </div>

      <UploadModal
        isModalOpen={isUploadModalOpen}
        setIsModalOpen={setIsUploadModalOpen}
        files={files}
        setFiles={setFiles}
      />
      <ReviewModal
        userId={curUserId.current}
        isModalOpen={isReviewModalOpen}
        setIsModalOpen={setIsReviewModalOpen}
        refresh={refresh}
      />
    </div>
  )
}
