import React from 'react';
import { Col, Row } from 'antd';
import image from '../Image/Frame 21.png';
import image1 from '../Image/Frame 22.png';
import image2 from '../Image/Frame 23.png';
import image3 from '../Image/Frame 24.png';
import line from '../Image/line.png';
import last from '../Image/Group 12.png'
const Days = () => {
  return (
    <>
    <Row style={{marginTop:'200px', marginLeft:'110px'}}>
        <Col span={6}><img src={image} alt="" height={'60px'}/></Col>
        <Col span={6}><img src={image1} alt="" height={'60px'}/></Col>
        <Col span={6}><img src={image2} alt="" height={'60px'}/></Col>
        <Col span={6}><img src={image3} alt="" height={'60px'}/></Col>
    </Row>
    <Row style={{marginLeft:'200px'}}>
        <img src={line} alt="" />
    </Row>
    <Row>
        <Col span={8}></Col>
        <Col className='days' span={8} style={{textAlign:'center', padding:'30px 50px'}}>
        <h1>365 Days.</h1>
        <p>All the way from you will get help. And 24/7 service warranty. Don't feel hesitate to use us. </p>
        </Col>
        <Col span={8}></Col>
    </Row>
    <Row style={{marginLeft:'300px', marginTop:'100px', marginBottom:'200px'}}>
        <img src={last} alt="" height={'300px'}/>
    </Row>
    </>
  )
}

export default Days
