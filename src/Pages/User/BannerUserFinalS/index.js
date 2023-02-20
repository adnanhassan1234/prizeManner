import React from 'react'
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
const BanFinalStep = (props) => {
  return (
    <Modal
    show={props.show}
    size='md'
    centered
>
    <Modal.Body>
        <Row className=' py-3 text-center '>
            <Col>
                <h5 className='mb-4 '>Are you sure?</h5>
                <p>By banning this account, the end user can resume playing the game on August 16, 2022 at 8:00PM</p>
             
                <Button onClick={props.onHide} variant={"outline-success"} className="me-3 px-5">CANCEL</Button>
                <Button className='btn  btn-delete px-5'>BAN ACCOUNT</Button>
            </Col>
        </Row>
    </Modal.Body>
</Modal>
  )
}

export default BanFinalStep