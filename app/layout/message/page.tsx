'use client'
import { List, Modal, Tabs, TabsProps } from 'antd'
import Link from 'next/link'
import { useState } from 'react'

export default function Message() {
  const data = [
    {
      title: '【李佳乐】Ant Design Title 1',
      description: 'Ant Design, a design language',
      id: 1,
      time: '刚刚'
    },
    {
      title: '【李佳乐】Ant Design Title 2',
      description: 'Ant Design, a design language',
      id: 2,
      time: '2分钟前'
    },
    {
      title: '【李佳乐】Ant Design Title 3',
      description: 'Ant Design, a design language',
      id: 3,
      time: '5小时前'
    },
    {
      title: '【李佳乐】Ant Design Title 4',
      description: 'Ant Design, a design language',
      id: 4,
      time: '一个月内'
    }
  ]

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modelTitle, setModelTitle] = useState('')
  const [modelContent, setModelContent] = useState('' as any)

  function DetailLink(modelTitle: string, modelContent: any, content: string) {
    return (
      <Link
        key="list-loadmore-more"
        href=""
        onClick={() => {
          setModelTitle(modelTitle)
          setModelContent(modelContent)
          setIsModalOpen(true)
        }}
      >
        {content}
      </Link>
    )
  }

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: '未读消息'
    },
    {
      key: '2',
      label: '已读消息'
    }
  ]

  return (
    <div className="w-full">
      <Tabs defaultActiveKey="1" items={items} />
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={({ id, title, description, time }, index) => (
          <List.Item
            actions={[DetailLink(title, description, '详情')]}
            style={{ display: 'flex' }}
          >
            <List.Item.Meta
              title={DetailLink(title, description, title)}
              description={description}
            />
            <div>{time}</div>
          </List.Item>
        )}
      />
      <Modal
        title={modelTitle}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        style={{ top: '30%' }}
      >
        {modelContent}
      </Modal>
    </div>
  )
}
