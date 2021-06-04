// import logo from './logo.svg';
import './App.css';

import { Tag, Divider } from 'antd';
import { Avatar, Image } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Comment, Tooltip, List } from 'antd';
import moment from 'moment';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import SizeContext from 'antd/lib/config-provider/SizeContext';
const { Header, Content, Footer } = Layout;

const data = [
  {
    actions: [<span key="comment-list-reply-to-0">Reply to</span>],
    author: 'Han Solo',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    content: (
      <p>
        We supply a series of design principles, practical patterns and high quality design
        resources (Sketch and Axure), to help people create their product prototypes beautifully and
        efficiently.
      </p>
    ),
    datetime: (
      <Tooltip title={moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}>
        <span>{moment().subtract(1, 'days').fromNow()}</span>
      </Tooltip>
    ),
  },
  {
    actions: [<span key="comment-list-reply-to-0">Reply to</span>],
    author: 'Han Solo',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    content: (
      <p>
        We supply a series of design principles, practical patterns and high quality design
        resources (Sketch and Axure), to help people create their product prototypes beautifully and
        efficiently.
      </p>
    ),
    datetime: (
      <Tooltip title={moment().subtract(2, 'days').format('YYYY-MM-DD HH:mm:ss')}>
        <span>{moment().subtract(2, 'days').fromNow()}</span>
      </Tooltip>
    ),
  },
];

function App() {

  return (
    <Layout className="layout">

    <Header style= {{backgroundColor:'#224a99'}}>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}  style = {{backgroundColor: 'white'}}>
        <Menu.Item key="1" style = {{width: '40%', color: 'black'}}>Logo</Menu.Item>
        <Menu.Item key="2" style = {{width: '20%', color: 'black', textAlign: 'center'}}>Blogs</Menu.Item>
        <Menu.Item key="3" style = {{width: '40%', color: 'black', textAlign: 'right'}}>
          <Avatar shape="square" size="large" icon={<UserOutlined />} />
          Admin
        </Menu.Item>
      </Menu>
    </Header>

    <Content style={{ backgroundColor: 'white', position: 'center'}}>
      <div name = 'posts' style = {{borderStyle: 'dotted'}}>
        <center>
          <h1>Post title 1</h1>
        </center>

        
        <div className = 'info' style = {{marginLeft: '50px', width:'40%', float: 'left'}}>
          <p>Author: John Smith</p>
          <p>Created at: Sep 20, 2018</p>
        </div>

        <div className = 'tag' style = {{width: '20%', float: 'right'}}>
            <Tag color="magenta">magenta</Tag>
            <Tag color="red">red</Tag>
            <Tag color="volcano">volcano</Tag>
            <Tag color="orange">orange</Tag>
            <Tag color="gold">gold</Tag>
            <Tag color="lime">lime</Tag>
            <Tag color="green">green</Tag>
            <Tag color="cyan">cyan</Tag>
            <Tag color="blue">blue</Tag>
            <Tag color="geekblue">geekblue</Tag>
            <Tag color="purple">purple</Tag>
        </div>

        <div className = 'content' style = {{backgroundColor: 'green', width:'100%', height: '80px', overflow: 'hidden', overflowY: 'scroll'}}>
          <p>A \"Hello, World!\" program is traditionally used to introduce novice programmers to a programming language. \"Hello, World!\" is also traditionally used in a sanity test to make sure that a computer language is correctly installed, and that the operator understands how to use it. \"Time to hello world\" (TTHW) is a metric for the time to author a \"Hello World\" program in a given programming language and run it. History: \"Hello, World!\" program by Brian Kernighan (1978) While small test programs have existed since the development of programmable computers, the tradition of using the phrase \"Hello World!\" as a test message was influenced by an example program in the seminal 1978 book The C Programming Language [4] The example program in that book prints \"hello, world\", and was inherited from a 1974 Bell Laboratories internal memorandum by Brian Kernighan, Programming in C: A Tutorial:[5] - Wikipedia</p>
        </div>

        <List className="comment-list" header={`${data.length} replies`} itemLayout="horizontal" dataSource={data} renderItem={item => (
          <li>
            <Comment
              actions={item.actions}
              author={item.author}
              avatar={item.avatar}
              content={item.content}
              datetime={item.datetime}
            />
          </li>
        )}
        />  
      </div>
    </Content>

    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
  );
  
}

export default App;
