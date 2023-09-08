import React from 'react';
import { Col } from 'antd';

const TableBox = () => {
  return (
    <>
    <Col span={12} style={{marginTop:'20px', color:'white'}}>
        <p style={{fontSize:'15px'}}>Refq</p>
        <p style={{fontSize:'15px', marginTop:'5px'}}>Liquid Extension</p>
        <p style={{fontSize:'15px', marginTop:'5px', marginBottom:'20px'}}>Price</p>
    </Col>
    <Col span={12} style={{marginTop:'20px', color:'white'}}>
        <p style={{marginLeft:'30px', fontSize:'15px'}}>bvbasaff****as</p>
        <p style={{marginLeft:'118px', fontSize:'15px', marginTop:'5px'}}>14%</p>
        <p style={{marginLeft:'118px', fontSize:'15px', marginTop:'5px', marginBottom:'34px'}}>23$</p>
    </Col>
    </>
  )
}

export default TableBox
