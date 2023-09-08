import React from 'react';
import {Input, Button} from 'antd';
import { Col, Row } from 'antd';
import Image from '../Image/eth.png';
import Image1 from '../Image/bitC.png'
import {DownOutlined} from '@ant-design/icons';
import TableBox from './TableBox'

const HomeRight = () => {
  return (
<>
    <Row className='priceList' style={{marginLeft:'100px', marginTop:'50px'}}>
        <li className='gutter-row price' style={{marginRight:'40px', color:'white'}}><h3>$1.75</h3><p>Price</p></li>
        <li className='gutter-row price' style={{marginRight:'50px', color:'white'}}><h3>$855.00</h3><p>Liquidity</p></li>
        <li className='gutter-row price' style={{marginRight:'50px', color:'white'}}><h3>$755.00</h3><p>Volume</p></li>
        <li className='gutter-row price' style={{ color:'white'}}><h3>$1.75</h3><p>Price</p></li>
    </Row>
    <div style={{marginLeft:'100px',  marginTop:'20px' , border:'0.1px solid white', borderRadius:'20px'}}>
    <Row>
      <Col>
        <Row className='Change' style={{marginTop:'15px'}}>
          <ul>
            <li style={{marginRight:'20px'}}><a href='#' style={{color:'#0008FFD9'}}>Swap</a></li>
            <li><a>Limit</a></li>
          </ul>
        </Row>
        <Row style={{marginTop:'20px'}}>
          <div className='search-right'>
            <Input className='search-box' placeholder='2,222'></Input>
            <Button style={{background:'transparent', display:'flex', borderRadius:'20px', color:'white'}}>
              <img style={{marginTop:'2px'}} src={Image} alt="" /> ETH <DownOutlined style={{marginTop:'4px', color:'white'}}/>
            </Button>
          </div>
        </Row>
        <Row style={{marginTop:'20px'}}>
          <div className='search-right'>
            <Input className='search-box' placeholder='2,222'></Input>
            <Button style={{background:'transparent', display:'flex', border:'none', color:'white'}}>
              <img style={{marginTop:'5px', marginRight:'7px'}} src={Image1} alt="" /> BTC <DownOutlined style={{marginTop:'4px', color:'white'}}/>
            </Button>
          </div>
        </Row>
        <Row>
          <Button block style={{marginLeft:'20px', marginTop:'10px', height:'50px', background:'#0B10ABD9', border:'none', color:'white'}}>Trade Now</Button>
        </Row>
        <Row style={{marginLeft:'20px'}}>
          <TableBox/>
        </Row>
      </Col>
    </Row>
    </div>
</>
  )
}

export default HomeRight
