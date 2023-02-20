import React from 'react'
import { Button, Modal, Row, Col } from "react-bootstrap";
const DeleteMap = (props) => {
    return (
        <Modal
            show={props.show}
            size='md'
            centered
        >
            <Modal.Body>
                <Row className='text-center py-3  '>
                    <Col>
                        <h5 className='mb-4'>Are you sure?</h5>
                        <p>Do you want to delete Map ABC?</p>
                        {/* <Button className='btn bg-cancel' >CANCEL</Button> */}
                        <Button onClick={props.onHide} variant={"outline-secondary"}>CANCEL</Button>
                        <Button className='btn  btn-danger ms-2' style={{background: "red"}}>CONFIRM</Button>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    )
}

export default DeleteMap