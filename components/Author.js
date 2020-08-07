
import {Avatar,Divider} from 'antd'
import AuthorCSS from '../styles/components/author.css'
import styles from '../styles/Home.module.css'
import { GithubFilled, QqOutlined, WechatFilled } from '@ant-design/icons';

const Author =()=>{

    return (
        <div className={AuthorCSS["author-div"] +" " + styles["comm-box"]}>
            <div> <Avatar size={100} src="/static/author.jpg" alt="author"  /></div>
            <div className={AuthorCSS['author-introduction']}>
                光头程序员，专注于WEB和移动前端开发。要录1000集免费前端视频的傻X。此地维权无门，此时无能为力，此心随波逐流。
                <Divider>社交账号</Divider>
                <Avatar size={28} icon={<GithubFilled />} className={AuthorCSS.account}  />
                <Avatar size={28} icon={<QqOutlined />}  className={AuthorCSS.account} />
                <Avatar size={28} icon={<WechatFilled />}  className={AuthorCSS.account}  />

            </div>
        </div>
    )

}

export default Author