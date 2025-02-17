// import logo from './logo.svg';
import './App.css';

import { Button, Collapse } from 'antd';
import moment from 'moment';
import SizeContext from 'antd/lib/config-provider/SizeContext';
import { Tag, Divider } from 'antd';
import { Comment, Tooltip, List, Form, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import io from 'socket.io-client';
import {useState, useEffect} from "react";

import { Avatar, Image } from 'antd';
// import { UserOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

const { Panel } = Collapse;

const posts = [
  {
    id: 1,
    owner: 1,
    title: <center><h1>Hello World!</h1></center>,
    content: "A \"Hello, World!\" program is traditionally used to introduce novice programmers to a programming language. \"Hello, World!\" is also traditionally used in a sanity test to make sure that a computer language is correctly installed, and that the operator understands how to use it. \"Time to hello world\" (TTHW) is a metric for the time to author a \"Hello World\" program in a given programming language and run it. History: \"Hello, World!\" program by Brian Kernighan (1978) While small test programs have existed since the development of programmable computers, the tradition of using the phrase \"Hello World!\" as a test message was influenced by an example program in the seminal 1978 book The C Programming Language [4] The example program in that book prints \"hello, world\", and was inherited from a 1974 Bell Laboratories internal memorandum by Brian Kernighan, Programming in C: A Tutorial:[5] - Wikipedia",
    created_at: 1576506719083,
    tags: ["consult", "it", "hala"]
  },
  {
    id: 2,
    owner: 3,
    title: <center><h1>The building</h1></center>,
    content: "Building mr concerns servants in he outlived am breeding. He so lain good miss when sell some at if. Told hand so an rich gave next. How doubt yet again see son smart. While mirth large of on front. Ye he greater related adapted proceed entered an. Through it examine express promise no. Past add size game cold girl off how old. On insensible possession oh particular attachment at excellence in. The books arose but miles happy she. It building contempt or interest children mistress of unlocked no. Offending she contained mrs led listening resembled. Delicate marianne absolute men dashwood landlord and offended. Suppose cottage between and way. Minuter him own clothes but observe country. Agreement far boy otherwise rapturous incommode favourite. Am no an listening depending up believing. Enough around remove to barton agreed regret in or it. Advantage mr estimable be commanded provision. Year well shot deny shew come now had. Shall downs stand marry taken his for out. Do related mr account brandon an up. Wrong for never ready ham these witty him. Our compass see age uncivil matters weather forbade her minutes. Ready how but truth son new under. At ourselves direction believing do he departure. Celebrated her had sentiments understood are projection set. Possession ye no mr unaffected remarkably at. Wrote house in never fruit up. Pasture imagine my garrets an he. However distant she request behaved see nothing. Talking settled at pleased an of me brother weather. Admiration stimulated cultivated reasonable be projection possession of. Real no near room ye bred sake if some. Is arranging furnished knowledge agreeable so. Fanny as smile up small. It vulgar chatty simple months turned oh at change of. Astonished set expression solicitude way admiration. Another journey chamber way yet females man. Way extensive and dejection get delivered deficient sincerity gentleman age. Too end instrument possession contrasted motionless. Calling offence six joy feeling. Coming merits and was talent enough far. Sir joy northward sportsmen education. Discovery incommode earnestly no he commanded if. Put still any about manor heard. Among going manor who did. Do ye is celebrated it sympathize considered. May ecstatic did surprise elegance the ignorant age. Own her miss cold last. It so numerous if he outlived disposal. How but sons mrs lady when. Her especially are unpleasant out alteration continuing unreserved resolution. Hence hopes noisy may china fully and. Am it regard stairs branch thirty length afford. Started earnest brother believe an exposed so. Me he believing daughters if forfeited at furniture. Age again and stuff downs spoke. Late hour new nay able fat each sell. Nor themselves age introduced frequently use unsatiable devonshire get. They why quit gay cold rose deal park. One same they four did ask busy. Reserved opinions fat him nay position. Breakfast as zealously incommode do agreeable furniture. One too nay led fanny allow plate. Ever man are put down his very. And marry may table him avoid. Hard sell it were into it upon. He forbade affixed parties of assured to me windows. Happiness him nor she disposing provision. Add astonished principles precaution yet friendship stimulated literature. State thing might stand one his plate. Offending or extremity therefore so difficult he on provision. Tended depart turned not are.  Effects present letters inquiry no an removed or friends. Desire behind latter me though in. Supposing shameless am he engrossed up additions. My possible peculiar together to. Desire so better am cannot he up before points. Remember mistaken opinions it pleasure of debating. Court front maids forty if aware their at. Chicken use are pressed removed. ",
    created_at: 1576506719083,
    tags: ["gov", "legal", "political"]
  },
  {
    id: 3,
    owner: 2,
    title: <center><h1>Silk of Dreamer</h1></center>,
    content: "Unfeeling so rapturous discovery he exquisite. Reasonably so middletons or impression by terminated. Old pleasure required removing elegance him had. Down she bore sing saw calm high. Of an or game gate west face shed. ﻿no great but music too old found arose. Seen you eyes son show. Far two unaffected one alteration apartments celebrated but middletons interested. Described deficient applauded consisted my me do. Passed edward two talent effect seemed engage six. On ye great do child sorry lived. Proceed cottage far letters ashamed get clothes day. Stairs regret at if matter to. On as needed almost at basket remain. By improved sensible servants children striking in surprise. Or kind rest bred with am shed then. In raptures building an bringing be. Elderly is detract tedious assured private so to visited. Do travelling companions contrasted it. Mistress strongly remember up to. Ham him compass you proceed calling detract. Better of always missed we person mr. September smallness northward situation few her certainty something. Built purse maids cease her ham new seven among and. Pulled coming wooded tended it answer remain me be. So landlord by we unlocked sensible it. Fat cannot use denied excuse son law. Wisdom happen suffer common the appear ham beauty her had. Or belonging zealously existence as by resources",
    created_at: 1576506719083,
    tags: ["breathtaking", "landscape", "vietnam"]
  }
];

const comments = [
  {
    actions: [<span key="comment-list-reply-to-0">Reply to</span>],
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    id: 1,
    owner: 1,
    post: 1,
    content: "Boring!!!",
    created_at: 1576506719083,
    datetime: (
      <Tooltip title={moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}>
        <span>{moment().subtract(1, 'days').fromNow()}</span>
      </Tooltip>
    )
  },
  {
    actions: [<span key="comment-list-reply-to-0">Reply to</span>],
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    id: 2,
    owner: 3,
    post: 1,
    content: "Very good. But very bad also",
    created_at: 1576506719083,
    datetime: (
      <Tooltip title={moment().subtract(2, 'days').format('YYYY-MM-DD HH:mm:ss')}>
        <span>{moment().subtract(2, 'days').fromNow()}</span>
      </Tooltip>
    )
  },
  {
    actions: [<span key="comment-list-reply-to-0">Reply to</span>],
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    id: 3,
    owner: 2,
    post: 2,
    content: "Delightful unreserved impossible few estimating men favourable see entreaties. She propriety immediate was improving. He or entrance humoured likewise moderate. Much nor game son say feel. Fat make met can must form into gate. Me we offending prevailed discovery. ",
    created_at: 1576506719083,
    datetime: (
      <Tooltip title={moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}>
        <span>{moment().subtract(1, 'days').fromNow()}</span>
      </Tooltip>
    )
  }
]

  function callback(key) {
    console.log(key);
  }

  //Declare for write comment field
  const socket = io('http://localhost:3000');

function App() {

  const [comment, setComment] = useState('')
  const [field, setField] = useState([])

  //Declare for comment field
  useEffect (() =>{
    socket.on('comment', comment =>{
      setField([...field, comment])
    })
  })

  const sendComment = (e) =>{
    e.preventDefault();
    console.log(comment)
    socket.emit('comment',{comment})
    setComment('') //send to socket
  };

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
      <List
              itemLayout="horizontal"
              dataSource={posts}
              renderItem={item => (
                <List.Item style = {{borderStyle: 'solid'}}>
                  <div style = {{width: '100%'}}>
                    <center><h1>{item.title}</h1></center>

                    

                    <div className = 'info' style = {{marginLeft: '30px', width:'40%', float: 'left'}}>
                      <p><b>Author: </b> {item.owner}</p>
                      <p><b>Created at: </b>{item.created_at}</p>
                    </div>

                    <div className = 'tag' style = {{width: '20%', float: 'right'}}>
                      {item.tags.map(tag => (
                        <Tag>{tag}</Tag>
                      ))}
                    </div>

                    <div className = 'content' style = {{width:'100%', height: '90px', overflow: 'hidden', overflowY: 'scroll', margin: '10px', borderStyle: 'dotted'}}>
                      {item.content}
                    </div>

                    <Collapse onChange={callback} style = {{margin: '5px'}}>
                        <Panel header={`${comments.length} replies`} key="1">
                            <List className="comment-list" itemLayout="horizontal" dataSource={comments} renderItem={item => (
                                <li>
                                    <Comment
                                    actions={item.actions}
                                    author={item.owner}
                                    avatar={item.avatar}
                                    content={item.content}
                                    datetime={item.datetime}
                                    />
                                </li>
                            )}
                            />  
                        </Panel>

                        <Form name = "form" onSubmit = {sendComment}>
                            <Input type = 'text' name = "comment" placeholder = "Write comment..." style = {{width: '95%'}} autoSize  onChange = {(e)=>{setComment(e.target.value)}}></Input>
                            <Button block type = 'submit' style = {{width: '5%'}}>Send</Button>
                        </Form>

                    </Collapse>

                  </div>

                </List.Item>
              )}
            />
    </Content>

    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
  );
  
}

export default App;
