// import logo from './logo.svg';
import './App.css';

import Post from './Container/Post/Post';

import { Avatar, Image } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;



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
      <Post></Post>
    </Content>

    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
  );
  
}

export default App;
