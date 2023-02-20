import React from 'react'
import { Button, Modal, Row, Col, Form } from "react-bootstrap";

const PopUp = (props) => {
    return (
        <div>
            <Modal
                show={props.show}
                size='small'
                centered
            >
                <Modal.Body>
                    <Row className='text-center'>
                        <Col>
                            <Col className='m-3'>
                                <strong><h5>Send this notification to all the end <br /> users?</h5></strong>
                            </Col>
                            <Col className='m-3'>
                            <Button className='px-5 mx-1' onClick={props.onHide} variant={"outline-success"}>No</Button>
                            <Button className='btn btn-delete px-5 mx-1'>Yes</Button>
                            </Col>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default PopUp