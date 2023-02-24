
import React, { useEffect, useState } from 'react'
import { BellFilled, HomeOutlined, MailOutlined } from '@ant-design/icons';
import { Badge, Drawer, List, Space, Typography } from 'antd';
import { getComments, getOrders } from '../../API';

function AppHeader() {
    const [comments, setComments] = useState([])
    const [orders, setOrders] = useState([]);
    const [commentsOpen, setCommentsOpen] = useState(false);
    const [notificationsOpen, setNotificationsOpen] = useState(false)

    useEffect(() => {
        getComments().then((res) => {
            setComments(res.comments)
        })
        getOrders().then((res) => {
            setOrders(res.products)
        })
    }, [])

    return (
        <div className='AppHeader'>
            <HomeOutlined style={{ fontSize: 24 }} />
            <Space>
                <Badge count={comments.length} dot>

                    <MailOutlined onClick={() => {
                        setCommentsOpen(true)
                    }} style={{ fontSize: 24 }} />
                </Badge>
                <Badge count={orders.length}>

                    <BellFilled onClick={() => {
                        setNotificationsOpen(true)
                    }} style={{ fontSize: 24 }} />
                </Badge>
            </Space>
            <Drawer title="Comments" open={commentsOpen} onClose={() => { setCommentsOpen(false) }} maskClosable>
                <List dataSource={comments} renderItem={(item) => {
                    return <List.Item>{item.body}</List.Item>
                }}></List>
            </Drawer>
            <Drawer title="Notifications" open={notificationsOpen} onClose={() => { setNotificationsOpen(false) }} maskClosable>
                <List dataSource={orders} renderItem={(item) => {
                    return <List.Item><Typography.Text strong>{item.title}</Typography.Text>{" "} has been ordered.</List.Item>
                }}></List>
            </Drawer>
        </div>
    )
}

export default AppHeader