import React from "react";
import {Modal, Button, Form} from 'react-bootstrap';
import {Link} from "react-router-dom";

const AddNewSubAdmins = (props) =>{
    return(
        <Modal
            {...props}
            size="md"
            centered
        >
            <Modal.Header className={"border-0"}>
                <Modal.Title className={"mb-0 fw-normal"}>
                    Add Sub Admin
                </Modal.Title>
                <div>
                    <Link to={"/dashboard/all-sub-admins"} className={"text-green"} onClick={props.onHide}>Sub Admin’s List</Link>
                </div>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="subAdminName">
                        <Form.Label>Sub Admin Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter here" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="contactNo">
                        <Form.Label>Contact No.</Form.Label>
                        <Form.Control type="tel" placeholder="+1 234 345 390" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="subadmin@prizeminer.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="temporaryPassword">
                        <Form.Label>Temporary Password</Form.Label>
                        <Form.Control type="password" placeholder="1232jikijLLL" />
                    </Form.Group>
                    <Modal.Footer className={"border-0 justify-content-center"}>
                        <Button onClick={props.onHide} variant={"outline-success"}>CANCEL</Button>
                        <Button type={"submit"}>ADD</Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>

        </Modal>
    )
}

export default AddNewSubAdmins;