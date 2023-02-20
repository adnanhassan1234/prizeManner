import React, {useState} from "react";
import {Button, Col, Form, InputGroup, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const ForGetPassword = () => {
    const [isVisible, setVisible] = useState(false);
    const toggle = () => {
        setVisible(!isVisible);
    };

    const navigate = useNavigate();
    const verifiyaccount = () => {
        navigate('/otp');
    };

    return(
        <>
            <Form>
                <h1 className={"mb-4"}>Forgot Password</h1>
                <p className={"mb-5 text-muted font-16"}>Forgot your password by sending us your email address or mobile number</p>

                <Row>
                    <Col md={12}>
                        <Form.Group className={"form-group mb-3"}>
                            <Form.Label>Email</Form.Label>
                            <InputGroup>
                                <InputGroup.Text id="loginEmail"><i className="fas fa-user"></i></InputGroup.Text>
                                <Form.Control
                                    type={"email"}
                                    placeholder="Username"
                                    required
                                />
                            </InputGroup>
                        </Form.Group>
                    </Col>
                    <Col md={12}>
                        <div className={'fw-bold text-center py-3'}>OR</div>
                    </Col>
                    <Col md={12}>
                        <Form.Group col className={"form-group mb-5"}>
                            <Form.Label>Mobile Number</Form.Label>
                                <Form.Control
                                    type={'tel'}
                                    placeholder="+1 234 455 6563"
                                />
                        </Form.Group>
                    </Col>
                    <Col md={12}>
                        <Form.Group className={"form-group mb-3 text-center"}>
                            <Button className={"w-100"} onClick={verifiyaccount}>Continue</Button>
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default ForGetPassword;