import { Typography, Layout } from 'antd';
import React from 'react';
import {Button} from 'antd';
const {Title} = Typography;
const {Header} = Layout;

const Navbar = () => {
  return (
    <>
    <Layout>
    <Header className='NavBar'>
        <Title level={5} style={{color: 'white', textAlign:'center', marginTop:'15px'}}>
            <ul>
                <li style={{marginRight:'8px'}}><a href='#'>Swap</a></li>
                <li>/</li>
                <li style={{marginRight:'8px'}}><a href='#'>Pools</a></li>
                <li>/</li>
                <li style={{marginRight:'8px'}}><a href='#'>Pay</a></li>
                <li>/</li>
                <li style={{marginRight:'8px'}}><a href='#'>Tools</a></li>
                <Button 
                style={{float:'right', background:'#001d66', color:'white', border:'0'}}
                >Enter app</Button>
            </ul>
        </Title>
        </Header>
    </Layout>
    </>
  )
}

export default Navbar
