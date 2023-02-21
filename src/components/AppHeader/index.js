
import React from 'react'
import { BellFilled, HomeOutlined, MailOutlined } from '@ant-design/icons';
import { Badge, Space } from 'antd';

function AppHeader() {
    return (
        <div className='AppHeader'>
            <HomeOutlined style={{ fontSize: 24 }} />
            <Space>
                <Badge count={10}>

                    <MailOutlined style={{ fontSize: 24 }} />
                </Badge>
                <Badge count={22}>

                    <BellFilled style={{ fontSize: 24 }} />
                </Badge>
            </Space>
        </div>
    )
}

export default AppHeader