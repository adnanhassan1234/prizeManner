import React from 'react'
import { Button, Modal, Row, Col, Form } from "react-bootstrap";

const TitlePopUp = (props) => {
    return (
        <div>
            <Modal
                show={props.show}
                size='lg'
                centered
            >
                <Modal.Body>
                    <Row className=' py-3  '>
                        <Col>
                            <h5 className='mb-4 text-center'>Reward System</h5>
                            <Form>
                                <Form.Group className="mb-3" controlId="subAdminName">
                                    <Form.Label>Coin</Form.Label>
                                    <Form.Control type="text" placeholder="QTY" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="subAdminName">
                                    <Form.Label>Diamond</Form.Label>
                                    <Form.Control type="text" placeholder="QTY" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="subAdminName">
                                    <Form.Label>Gems</Form.Label>
                                    <Form.Control type="text" placeholder="QTY" />
                                </Form.Group>
                                <Row className='align-items-end'>
                                    <Col md={6}>
                                        <Form.Label>Tool</Form.Label>
                                        <Form.Select aria-label="Default select example">
                                            <option>Thor’s Hammer</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                    </Col>
                                    <Col md={3}>
                                        <Form.Group controlId="subAdminName">
                                            <Form.Label>Qty</Form.Label>
                                            <Form.Control type="text"  />
                                        </Form.Group>
                                    </Col>
                                    <Col md={3}>
                                        <Button variant={"outline-success fw-bold"}>ADD MORE</Button>
                                    </Col>
                                </Row>
                            </Form>

                            <div className="text-center pt-4">
                                <Button onClick={props.onHide} variant={"outline-success"}>CANCEL</Button>
                                <Button className='btn  btn-delete text-center ms-2'>SUBMIT</Button>
                            </div>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default TitlePopUp
