import React from 'react'
import { Modal, Row, Col,Button } from "react-bootstrap";

const PopUp = (props) => {
    return (
        <div>
             <Modal
            show={props.show}
            size='md'
            centered
        >
            <Modal.Body>
                <Row className='text-center py-3  '>
                    <Col>
                        
                       <strong><p>Are You Sure You Want To Complete <br /> The Map Build? </p></strong>
                       
                        <Button onClick={props.onHide} variant={"outline-success m-2 fw-bold "}>MAYBE LATER</Button>
                        <Button className='btn  btn-delete m-2 fw-bold'>YES</Button>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
        </div>
    )
}

export default PopUp
