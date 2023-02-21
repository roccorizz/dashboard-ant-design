import { ShoppingCartOutlined } from '@ant-design/icons'
import { Card, Space, Statistic, Typography } from 'antd'
import React from 'react'

function Dashboard() {
    return (
        <div>
            <Typography.Title level={4}>Dashboard</Typography.Title>
            <Space direction='horizontal'>
                <Card>
                    <ShoppingCartOutlined />
                    <Statistic title='Orders' value={1234} />
                </Card>
            </Space>
        </div>
    )
}

export default Dashboard