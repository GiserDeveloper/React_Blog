import React from 'react'
import HeaderCSS from '../styles/components/header.css'

import {Row,Col, Menu} from 'antd'
import {HomeFilled, YoutubeFilled, SmileFilled} from '@ant-design/icons';

const Header = () => (
  <div className="header">
    <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={10} lg={15} xl={12}>
            <span className={HeaderCSS.header_logo}>技术胖</span>
            <span className={HeaderCSS.header_txt}>专注前端开发,每年100集免费视频。</span>
        </Col>

        <Col className={HeaderCSS.memu_div} xs={0} sm={0} md={14} lg={8} xl={6}>
            <Menu mode="horizontal">
                <Menu.Item key="home">
                    <HomeFilled />
                    首页
                </Menu.Item>
                <Menu.Item key="video">
                    <YoutubeFilled />
                    视频
                </Menu.Item>
                <Menu.Item key="life">
                    <SmileFilled />
                    生活
                </Menu.Item>
            </Menu>
        </Col>
    </Row>
 </div>
)

export default Header