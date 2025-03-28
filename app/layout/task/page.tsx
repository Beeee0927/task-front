'use client'

import { useLocalStore } from '@/app/store'
import { useEffectProp, useSkipFirstEffect } from '@/app/utils/tools'
import { Button, List, Tabs } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { api_getTaskList } from './api'
import { useState } from 'react'
import dayjs from 'dayjs'

export default function Task() {
  const router = useRouter()
  const role = useEffectProp(useLocalStore, 'role')

  const items = (() => {
    if (role === 'user') {
      return [
        {
          key: '0',
          label: '待提交任务'
        },
        {
          key: '1',
          label: '批阅中任务'
        },
        {
          key: '2',
          label: '已完成任务'
        }
      ]
    }
    return [
      {
        key: '0',
        label: '待批阅任务'
      },
      {
        key: '1',
        label: '已发布任务'
      },
      {
        key: '2',
        label: '已完成任务'
      }
    ]
  })()

  const [tabKey, setTabKey] = useState(0)
  const [data, setData] = useState([])

  useSkipFirstEffect(() => {
    // 'notFinished' | 'grading' | 'completed' | 'sendBack'
    api_getTaskList({ status: items[tabKey].label }).then((res: any) => {
      setData(res.data)
    })
  }, [role, tabKey])

  return (
    <div className="w-full">
      <div className="flex justify-between">
        <Tabs items={items} onChange={(key) => setTabKey(+key)} />
        {role === 'admin' && (
          <Button
            type="primary"
            className="mt-4"
            onClick={() => {
              router.push('/layout/edit/-1')
            }}
          >
            发布任务
          </Button>
        )}
      </div>

      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={({
          _id,
          title,
          content,
          contentHtml,
          releaseTime,
          deadline
        }: any) => (
          <List.Item
            actions={[
              role === 'admin' && (
                <Link key="list-loadmore-more" href={`/layout/edit/${_id}`}>
                  编辑
                </Link>
              ),
              <Link key="list-loadmore-more" href={`/layout/detail/${_id}`}>
                详情
              </Link>
            ]}
          >
            <List.Item.Meta
              title={
                <Link key="list-loadmore-more" href={`/layout/detail/${_id}`}>
                  {title}
                </Link>
              }
              description={
                <div className="text-ellipsis overflow-hidden text-nowrap mr-[60%]">
                  {contentHtml.replace(/<[^>]*>/g, ' ').replace(/&nbsp;/g, ' ')}
                </div>
              }
            />
            <div>截止时间：{dayjs(deadline).format('YYYY-MM-DD HH:mm')}</div>
          </List.Item>
        )}
      />
    </div>
  )
}
