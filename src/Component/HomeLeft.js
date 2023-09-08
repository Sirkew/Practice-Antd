import React from 'react';
import {Input} from 'antd';
import { Col, Row } from 'antd';
import {DownOutlined, SearchOutlined} from '@ant-design/icons';


const HomeLeft = () => {
  return (
<>
  <div style={{color:'white', fontSize:'20px'}}><h1>Your One-Stop Shop <br /> For Instant Buying <br /> And selling</h1></div>
  <div style={{color:'#DBDBDB99', fontSize:'20px',  marginTop:'30px', fontWeight:'300'}}><p>No registration needed. Over 400 tokens to trade <br /> at your fingertips.</p></div>
    <Row>
      <Col className="gutter-row search" span={11}>
        <a className='search-icon'><SearchOutlined/></a>
        <Input className='search-box' placeholder='Search by Token Or Address'></Input>
      </Col>
      <Col className='gutter-row' span={1}>
        <button className='btn-1'>ETH <DownOutlined style={{marginLeft:'10px', marginTop:'5px'}}/></button>
      </Col>
    </Row>

</>
  )
}

export default HomeLeft
