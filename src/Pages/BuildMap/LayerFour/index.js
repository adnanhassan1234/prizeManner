import React from 'react'
import { Row, Col,Button } from "react-bootstrap";
import Password from './Password';

const LayerFour = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Row className='d-flex align-items-center '>
        <Col className='text-center center-element'>
          <p>This layer is locked.
            Enter password to unlock.</p>
            <Button onClick={() => setModalShow(true)} type={"submit"}>ENTER PASSWORD</Button>
        </Col>
      </Row>
      <Password show={modalShow} onHide={() => setModalShow(false)}/>
      </>
  )
}

export default LayerFour