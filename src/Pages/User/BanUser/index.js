import React from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap';
import BanUserS1 from '../BanUserS1/Index';

const BanUserMadal = (props) => {
    const [modalShow, setModalShow] = React.useState(false);
    
  return (
    <>
    <Modal
    show={props.show}
    size='md'
    centered
>
    <Modal.Body>
        <Row className='text-center py-3  '>
            <Col>
                <h5 className='mb-4'>Ban This Account?</h5>
                <Button onClick={props.onHide} variant={"outline-success"} className="me-3 px-5">No</Button>
                <Button className='btn  btn-delete px-5'  onClick={() => setModalShow(true)}>Yes</Button>
            </Col>
        </Row>
    </Modal.Body>
</Modal>

<BanUserS1 show={modalShow} onHide={() => setModalShow(false)}/>

</>

  );
}

export default BanUserMadal