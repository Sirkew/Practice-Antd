import React from 'react';
import { Col } from 'antd';

const TableBox = () => {
  return (
    <>
    <Col span={12} style={{marginTop:'20px', color:'#CDCDCD94'}}>
        <h5 style={{fontSize:'15px'}}>Refq</h5>
        <h5 style={{fontSize:'15px', marginTop:'5px'}}>Liquid Extension</h5>
        <h5 style={{fontSize:'15px', marginTop:'5px', marginBottom:'20px'}}>Price</h5>
    </Col>
    <Col span={12} style={{marginTop:'20px', color:'#CDCDCD94'}}>
        <h5 style={{marginLeft:'30px', fontSize:'15px'}}>bvbasaff****as</h5>
        <h5 style={{marginLeft:'118px', fontSize:'15px', marginTop:'5px'}}>14%</h5>
        <h5 style={{marginLeft:'118px', fontSize:'15px', marginTop:'5px', marginBottom:'20px'}}>23$</h5>
    </Col>
    </>
  )
}

export default TableBox
