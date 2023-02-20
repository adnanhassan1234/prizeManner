import PageTitle from 'Components/Pagetitle'
import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import upload from "Images/arrowUp.png";
import { useNavigate } from 'react-router-dom';

const AddExchange = () => {
    const navigate = useNavigate();
    const AddMusic = () => {
        navigate('/ads');
    };
    return (
        <>

            <PageTitle title="Ads Exchange" />
            <section>
                <Button onClick={AddMusic} variant={"transparent font-18 fw-bold ps-0"}><i className={"fas fa-arrow-left  mx-2"}></i>Add Ads Exchange</Button>

                <Row className={'pt-4'} style={{
                    height: "calc(100vh - 220px)"
                }}>
                    <Col md={6}>
                        <Form className='pb-3'>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label> <strong>Ads Link</strong> </Form.Label>
                                <Form.Control type="text" placeholder="Enter link" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label> <strong>Ads From</strong> </Form.Label>
                                <Form.Control type="text" placeholder="Farm Heroes" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label> <strong>Gem Value</strong> </Form.Label>
                                <Form.Control type="text" placeholder="10" />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <hr />
                <Col className=" d-flex justify-content-end ">
                    <Button className='btn  btn-delete px-4 '>SAVE</Button>
                </Col>
            </section>
        </>
    )
}

export default AddExchange