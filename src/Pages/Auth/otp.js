import {React} from "react";
import {Form, Button, Row, Col} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import ReactInputVerificationCode from "react-input-verification-code";

const SendOTP = () => {
    const navigate = useNavigate();
    const verifyAccount = () => {
        navigate('/create-new-password');
    };
    return(
        <>
            <>
               <Form>
                   <h1 className={"mb-4"}>Verify Your <br /> Account</h1>
                   <p className={"text-muted mb-5 font-16"}>Verification code sent to your phone <br/> +1 234 567 8901</p>

                   <Form.Group col className={"form-group mb-0"} controlId="signupuemail">
                        <div className={'otpBox'}>
                            <ReactInputVerificationCode
                                length={6}
                            />
                        </div>
                    </Form.Group>
                    <Form.Group className={"form-group mb-5 py-3"}>
                        Resend code in
                        <Link to={"#"} className={"text-light-yellow d-inline mx-3 text-decoration-none"}>..10s</Link>
                    </Form.Group>
                    <Form.Group className={"form-group mb-3 text-center"}>
                        <Button className={"w-100"} onClick={verifyAccount}>Verify</Button>
                    </Form.Group>
                </Form>
            </>
        </>
    )
}

export default SendOTP;