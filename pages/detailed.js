import Head from 'next/head'
import {Row, Col, Breadcrumb} from 'antd'
import { CalendarFilled, FolderFilled, FireFilled } from '@ant-design/icons';
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import DetailCSS from '../styles/pages/detailed.css'

const Detailed = () => (
  <>
    <Head>
      <title>博客详情页</title>
    </Head>
    <Header />
    <Row className='comm-main' type="flex" justify="center">
      <Col className='comm-left' xs={24} sm={24} md={16} lg={18} xl={14}  >
        <div>
         <div className={DetailCSS['bread-div']}>
            <Breadcrumb>
              <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
              <Breadcrumb.Item>视频列表</Breadcrumb.Item>
              <Breadcrumb.Item>xxxx</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div>
            <div className={DetailCSS['detailed-title']}>React实战视频教程-技术胖Blog开发(更新08集)</div>
            <div className={`list-icon ${DetailCSS['center']}`}>
              <span><CalendarFilled /> 2019-06-28</span>
              <span><FolderFilled /> 视频教程</span>
              <span><FireFilled /> 5498人</span>
            </div>
            <div className={DetailCSS['detailed-content']}>
              详细内容，下节课编写
            </div>
          </div>
        </div>
      </Col>

      <Col className='comm-right' xs={0} sm={0} md={7} lg={5} xl={4}>
        <Author />
        <Advert />
      </Col>
    </Row>
    <Footer />
 </>
)
export default Detailed