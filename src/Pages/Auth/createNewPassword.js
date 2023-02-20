import React, {useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";

const CreateNewPassword = () => {
    const [isVisible, setVisible] = useState(false);
    const toggle = () => {
        setVisible(!isVisible);
    };
    const [isVisiblee, setVisiblee] = useState(false);
    const togglee = () => {
        setVisiblee(!isVisiblee);
    };

    return(
        <>
           <Form>
               <h1 className={"mb-4"}>Create New <br />Password</h1>
               <p className={"mb-5 text-muted font-16"}>Your password must be different from <br /> previous used password.</p>

               <Row>
                    <Col md={12}>
                        <Form.Group col className={"form-group mb-3"} controlId="newpassword">
                            <Form.Label>New Password</Form.Label>
                            <div className={'position-relative'}>
                                <Form.Control
                                    type={isVisible ? "text" : "password"}
                                    placeholder="************"
                                />
                                <i className={`showbtn ${isVisible ? 'fal fa-eye' : 'far fa-eye-slash'}`} onClick={toggle}></i>
                            </div>
                        </Form.Group>
                    </Col>
                    <Col md={12}>
                        <Form.Group col className={"form-group mb-5"} controlId="confirmpassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <div className={'position-relative'}>
                                <Form.Control
                                    type={isVisiblee ? "text" : "password"}
                                    placeholder="************"
                                />
                                <i className={`showbtn ${isVisiblee ? 'fal fa-eye' : 'far fa-eye-slash'}`} onClick={togglee}></i>
                            </div>
                        </Form.Group>
                    </Col>
                    <Col md={12}>
                        <Form.Group className={"form-group mb-3 text-center"}>
                            <Button className={"w-100"}>Set New Password</Button>
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default CreateNewPassword;