import React from 'react'
import { Col, Row } from 'antd';
import HomeLeft from './HomeLeft';
import HomeRight from './HomeRight';




const Home = () => {
  return (
  <>
    <Row>
      <Col className="gutter-row" col-12 style={{marginLeft:'110px', marginTop:'50px'}}>
        <HomeLeft/>
      </Col>
      <Col className='gutter-row' col-12>
        <HomeRight/>
      </Col>
    </Row>
  </>
  )
}

export default Home
