import PageTitle from 'Components/Pagetitle'
import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import upload from "Images/arrowUp.png";
import { useNavigate } from 'react-router-dom';

const AddVedioTutorial = () => {
    const navigate = useNavigate();
    const AddTutorial = () => {
        navigate('/Tutorial');
    };
    return (
        <>
            <PageTitle title="Tutorial" />
            <section>
                <Button onClick={AddTutorial} variant={"transparent font-18 fw-bold ps-0"}><i className={"fas fa-arrow-left  mx-2"}></i>Add Video Tutorial</Button>
                <Row className='my-3'>
                    <Col md={6}>
                        <Form className='m-3'>
                            <Form.Label>
                                <strong>Upload Audio</strong>
                            </Form.Label>
                            <div className={"text-muted py-3"}>
                                This will be reflected to your profile and have the ability to manage.
                            </div>
                            <Form.Group className="mb-3" controlId="formBasicName">

                                <a href="#" className="upload-btn bg-light" style={{ width: "100%" }} >
                                    <img src={upload} alt="" />
                                    <span>Uplaod Video File</span>
                                </a>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label> <strong>Title</strong> </Form.Label>
                                <Form.Control type="text" placeholder="Enter title" />
                            </Form.Group>

                            <Col md={12}>
                                <Form.Group className="" controlId="formBasicDec" >
                                    <Form.Label><strong>Description</strong></Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        placeholder="Enter description..."
                                        // style={{ height: "200px" }}

                                    />
                                </Form.Group>
                            </Col>
                        </Form>

                    </Col>
                    <Col md={6}>

                    </Col>
                </Row>
                <hr />
                <Col className=" d-flex justify-content-end m-2">

                    <Button className='btn  btn-delete px-4 '>SAVE</Button>
                </Col>
            </section>
        </>
    )
}

export default AddVedioTutorial