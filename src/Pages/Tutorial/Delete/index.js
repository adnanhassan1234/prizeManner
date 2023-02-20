import React from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap';

const DeleteTools = (props) => {
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
                            <h5 className='mb-4'>Are you sure?</h5>
                            <p>Do you want to delete this tutorial?</p>
                            <Button onClick={props.onHide} variant={"outline-secondary mx-2"}>CANCEL</Button>
                            <Button variant={'danger mx-2'} style={{backgroundColor: "#f00"}}  onClick={() => setModalShow(true)}>CONFIRM</Button>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>

        </>

    );
}

export default DeleteTools;