import PageTitle from 'Components/Pagetitle'
import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import upload from "Images/arrowUp.png";
import { useNavigate } from 'react-router-dom';

const AddMusic = () => {
    const navigate = useNavigate();
    const AddMusic = () => {
        navigate('/music');
    };
    return (
        <>
            <PageTitle title="Music" />
            <section>
                <Button onClick={AddMusic} variant={"transparent font-18 fw-bold ps-0"}><i className={"fas fa-arrow-left  mx-2"}></i>Add Music</Button>
                <Form className={'p-3'}>
                    <Row>
                        <Col md={4}>
                            <Form.Label>Upload Audio</Form.Label>
                            <div className={'text-muted py-3'}>
                                This will be reflected to your profile and have the ability to <br/> manage.
                            </div>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <a href="#" className="upload-btn bg-light" style={{ width: "100%" }} >
                                    <img src={upload} alt="" />
                                    <span>Upload Audio File</span>
                                </a>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder="Enter title" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicDec" >
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    placeholder="Enter description..."
                                />
                            </Form.Group>


                        </Col>
                        <hr />
                        <Col className=" d-flex justify-content-end m-2">

                            <Button className='btn  btn-delete px-4 '>SAVE</Button>
                        </Col>
                    </Row>
                </Form>
            </section>
        </>
    )
}

export default AddMusic