
import { Avatar, Space, Table, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { getCustomers } from '../../API'



function Customers() {
    const [loading, setLoading] = useState(false)
    const [dataSource, setdataSource] = useState([])
    useEffect(() => {
        setLoading(true)
        getCustomers().then(res => {
            setdataSource(res.users);
            setLoading(false)
        })

    }, [])

    return (
        <Space size={20} direction="vertical">
            <Typography.Title level={4}>Customers</Typography.Title>
            <Table
                loading={loading}
                columns={[
                    {
                        title: "Photo",
                        dataIndex: 'image',
                        render: (link) => {
                            return <Avatar src={link} />
                        }
                    },
                    {
                        title: "First Name",
                        dataIndex: "firstName"
                    },
                    {
                        title: "Last Name",
                        dataIndex: "lastName"
                    },
                    {
                        title: "Email",
                        dataIndex: 'email'
                    },
                    {
                        title: "Phone",
                        dataIndex: 'phone'
                    },
                    {
                        title: "Address",
                        dataIndex: 'address',
                        render: (address) => <span>${address.address},{address.city}</span>
                    },




                ]}
                dataSource={dataSource}
                pagination={{
                    pageSize: 5

                }}
            ></Table>
        </Space >
    )
}

export default Customers;