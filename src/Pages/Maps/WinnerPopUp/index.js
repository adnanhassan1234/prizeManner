import React, {useEffect} from 'react'
import { Modal, Row, Col } from "react-bootstrap";
import profile from 'Images/img1.png'

const WinnerPopUp = (props) => {


    return (
    <div>
          <Modal
          {...props}
            size='md'
            centered
        >
            <Modal.Body>
                <Row className='text-center py-3  '>
                    <Col>
                    <h3>Winner</h3>
                    <img className='px-2' src={profile} alt="" /> 
                    <p className='my-2'>Aleisha10</p>
                    </Col>
                    </Row>
                    <Row className='text-center py-2 rounded-4 mx-3'  >
                    <Col  md={4}>
                   <p> Date</p>
                 <h4>09/27/2022</h4> 
                    </Col>
                    <Col  md={4}>
                    <p>Time</p>
                 <h4>14:56</h4> 
                    </Col>
                    <Col  md={4}>
                    <p>Coordinates</p>
                 <h4>H4</h4> 
                    </Col>
                    </Row>

            </Modal.Body>
        </Modal>
    </div>
  )
}

export default WinnerPopUp
