import React from 'react'
import { Button, Modal, Row, Col, Form } from "react-bootstrap";

const Password = (props) => {
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
                            <h5 className='mb-4'>Enter Password</h5>
                            <Form>
                                <Form.Group className="mb-3" controlId="subAdminName">
                                    <Form.Control type="Password" placeholder="Enter Password" />
                                </Form.Group>
                            </Form>
                            <Button onClick={props.onHide} variant={"outline-success"}>CANCEL</Button>
                            <Button className='btn  btn-delete ms-2'>Submit</Button>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Password
