import { Button, Card, Col, Form, Row } from "react-bootstrap";
import upload from "Images/uploadImg.svg";
import React from "react";



const PrizeInfo = (props) => {

    return (

        <section>
            {/* <div className="d-flex align-items-center py-2">
          <Button variant="bg-transparent fs-4 px-3">
            <i class="fas fa-long-arrow-left"></i>
          </Button>
          <h4 className="py-2 mb-0">Add Major Prize</h4>
        </div> */}
            <Form>
                <Row>
                        <Col md={4}>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>
                                    Upload Photo
                                </Form.Label>
                                <a href="#" className="upload-btn">
                                    <img src={upload} width={40} alt="" />
                                    <span>drag image/upload</span>
                                </a>
                            </Form.Group>
                        </Col>

                        <Col md={6}>

                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>
                                    Real Prize (name)
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Ex. Trip to singapore"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>
                                    qty
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="1"
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicDec">
                                <Form.Label>
                                    Prize Description
                                </Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    placeholder="Enter your prize description..."
                                />
                            </Form.Group>
                            <Form.Group className={"text-right py-5"}>
                                <Button>Add More</Button>
                            </Form.Group>

                        </Col>

                        <hr />
                        <div className="col-md-12 d-flex justify-content-end">
                            <Button onClick={props.onHide} variant={"outline-success"}>SAVE AS DRAFT</Button>
                            <Button className='btn  btn-delete ms-2'>NEXT</Button>
                        </div>
                    </Row>
            </Form>
        </section>

    );
};

export default PrizeInfo;