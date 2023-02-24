
import { Space, Table, Typography } from 'antd'
import React, { useEffect, useState } from 'react'

import { getOrders } from '../../API'

function Orders() {
    const [loading, setLoading] = useState(false)
    const [dataSource, setdataSource] = useState([])
    useEffect(() => {
        setLoading(true)
        getOrders().then(res => {
            setdataSource(res.products);
            setLoading(false)
        })

    }, [])

    return (
        <Space size={20} direction="vertical">
            <Typography.Title level={4}>Orders</Typography.Title>
            <Table
                loading={loading}
                columns={[
                    {
                        title: "Title",
                        dataIndex: 'title'
                    },
                    {
                        title: "Price/pcs",
                        dataIndex: 'price',
                        render: (value) => <span>${value}</span>
                    },
                    {
                        title: "Quantity",
                        dataIndex: 'quantity'
                    },
                    {
                        title: "Total",
                        dataIndex: 'total'

                    },
                    {
                        title: "DiscountedPrice",
                        dataIndex: 'discountedPrice',
                        render: (value) => <span>${value}</span>
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

export default Orders;