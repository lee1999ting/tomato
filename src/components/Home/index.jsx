import React, { Component } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import { Layout, Menu } from "antd";
import { createFromIconfontCN } from '@ant-design/icons';
import Statistics from '../Statistics'
import Task from '../Task';
import 'antd/dist/antd.css';
import './Home.css'

const { Header, Footer, Content } = Layout;

const MyIcon = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_3127654_w025kizfkj.js'
});

export default class Home extends Component {
    
    render() {
        return (
            <Layout className="layout" style={{ width: '400px' ,margin: '0 auto'}}>
                <Header style={{}}>
                    <Menu mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Link to="/task">任务</Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/statistics">统计</Link>
                        </Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 20px' }}>
                    <div className="site-layout-content">
                        {/* 注册路由 */}
                        <Routes>
                            <Route path="/" element={<Task/>}/>
                            <Route path="/task" element={<Task/>}/>
                            <Route path="/statistics" element={<Statistics/>}/>
                        </Routes>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center',padding: '15px 50px'}}>
                    <MyIcon className="icon" type="icon-fanqie" />
                    番茄钟 ©2022 Created by L
                </Footer>
            </Layout>
        )
    }
}
