'use client'

import { useLocalStore } from '@/app/store'
import { useEffectProp } from '@/app/utils/tolls'
import { Button, List, Tabs, TabsProps } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { api_getTaskList } from './api'
import { useEffect, useState } from 'react'

export default function Task() {
  const router = useRouter()
  const role = useEffectProp(useLocalStore, 'role')

  const [data, setData] = useState([])
  useEffect(() => {
    api_getTaskList({}).then((res: any) => {
      console.log(res)
      setData(res.data)
    })
  }, [])
  // const data = [
  //   {
  //     title: '【李佳乐】 Ant Design Title 1',
  //     description: 'Ant Design, a design language',
  //     id: 1,
  //     releaseTime: '2024-01-01 12:00:00',
  //     deadline: '2024-01-02 23:59'
  //   },
  //   {
  //     title: '【李佳乐】Ant Design Title 2',
  //     description: 'Ant Design, a design language',
  //     id: 2,
  //     releaseTime: '2024-01-01 12:00:00',
  //     deadline: '2024-01-02 23:59'
  //   },
  //   {
  //     title: '【李佳乐】Ant Design Title 3',
  //     description: 'Ant Design, a design language',
  //     id: 3,
  //     releaseTime: '2024-01-01 12:00:00',
  //     deadline: '2024-01-02 23:59'
  //   },
  //   {
  //     title: '【李佳乐】Ant Design Title 4',
  //     description: 'Ant Design, a design language',
  //     id: 4,
  //     releaseTime: '2024-01-01 12:00:00',
  //     deadline: '2024-01-02 23:59'
  //   }
  // ]

  const userItems: TabsProps['items'] = [
    {
      key: '1',
      label: '待提交任务'
    },
    {
      key: '2',
      label: '待批阅任务'
    },
    {
      key: '3',
      label: '已完成任务'
    }
  ]
  const adminItems: TabsProps['items'] = [
    {
      key: '1',
      label: '待批阅任务'
    },
    {
      key: '2',
      label: '已发布任务'
    },
    {
      key: '3',
      label: '已完成任务'
    }
  ]

  return (
    <div className="w-full">
      <div className="flex justify-between">
        <Tabs
          defaultActiveKey="1"
          items={role === 'admin' ? adminItems : userItems}
        />
        <Button
          type="primary"
          className="mt-4"
          onClick={() => {
            router.push('/layout/edit/-1')
          }}
        >
          发布任务
        </Button>
      </div>

      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={({ _id, title, content, releaseTime, deadline }: any) => (
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
                  {content.replace(/<[^>]*>/g, ' ')}
                </div>
              }
            />
            <div>截止时间：{deadline.replace('T', ' ').slice(0, -8)}</div>
          </List.Item>
        )}
      />
    </div>
  )
}
