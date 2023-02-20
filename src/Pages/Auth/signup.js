import React from "react";
import {Form, Button, Row, Col} from "react-bootstrap";

const SignUp = () => {


    return(
        <>
            <>

                <Form>
                    <h1 className={"mb-5"}>Signup</h1>
                    <Row>
                        <Col md={12}>
                            <Form.Group col className={"form-group mb-3"} controlId="signupfirstname">
                                <Form.Label>Admin First Name</Form.Label>
                                <Form.Control type={"text"}  placeholder="Enter Username" />
                            </Form.Group>
                        </Col>
                        <Col md={12}>
                            <Form.Group col className={"form-group mb-3"} controlId="signupulastname">
                                <Form.Label>Admin Last Name</Form.Label>
                                <Form.Control type={"text"}  placeholder="Enter Last Name" />
                            </Form.Group>
                        </Col>
                        <Col md={12}>
                            <Form.Group col className={"form-group mb-3"} controlId="signupuemail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type={"text"}  placeholder="Enter Email" />
                            </Form.Group>
                        </Col>
                        <Col md={12}>
                            <Form.Group col className={"form-group mb-3"} controlId="signupphonenumber">
                                <Form.Label>Mobile Phone</Form.Label>
                                <Form.Control type={"tel"}  placeholder="+233 1899 3890 12899" />
                            </Form.Group>
                        </Col>
                        <Col md={12}>
                            <Form.Group col className={"form-group mb-3"} controlId="signuppassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type={"password"}
                                    placeholder="************"
                                />
                            </Form.Group>
                        </Col>
                        <Col md={12}>
                            <div className={"text-center mb-3 font-18"}><span>Or</span></div>
                        </Col>
                        <Col md={12}>
                            <Form.Group className={"form-group text-center mb-3"}>
                                <Button variant={"outline-light sm-square m-1 text-dark"}>
                                    <i className={"fab fa-google font-20"}></i>
                                </Button>
                                <Button variant={"outline-light sm-square m-1 text-dark"}>
                                    <i className={"fab fa-facebook font-20"}></i>
                                </Button>
                            </Form.Group>
                        </Col>
                        <Col md={12}>
                            <Form.Group className={"form-group mb-3 text-center"}>
                                <Button className={"w-100"}>Sign Up</Button>
                            </Form.Group>
                        </Col>

                    </Row>
                </Form>
            </>
        </>
    )
}

export default SignUp;