import {React} from "react";
import {Form, Button, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import ReactInputVerificationCode from 'react-input-verification-code';

const VerifyAccount = () => {

    return(
        <>
            <>
                <Form>
                    <h1 className={"mb-5"}>Verrify Your <br /> Account</h1>
                    <p className={"text-muted mb-5"}>Verification code sent to your phone <br /> +1 234 567 8901</p>

                    <Row>
                        <Col md={12}>
                            <Form.Group col className={"form-group mb-3"} controlId="signupuemail">
                                <Form.Label>Verification code</Form.Label>
                                <ReactInputVerificationCode
                                    length={6}
                                />
                            </Form.Group>
                            <Form.Group className={"form-group mb-3 py-4 text-center"}>
                                <Link to={"#"} className={"text-danger"}>Didn’t receive code?</Link>
                            </Form.Group>
                            <Form.Group className={"form-group mb-3 text-center"}>
                                <Button className={"w-100"}>Verify</Button>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </>
        </>
    )
}

export default VerifyAccount;