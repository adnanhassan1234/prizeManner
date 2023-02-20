import React, {useEffect} from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap';


const DeleteMaps = (props) => {
    const [DelModalShow, setDelModalShow] = React.useState(false);
    useEffect(() => {
        setDelModalShow(props.show);
    }, []);

    return (
        <>
            <Modal
                show={DelModalShow}
                size='md'
                centered
            >
                <Modal.Body>
                    <Row className='text-center py-3  '>
                        <Col>
                            <h5 className='mb-4'>Are you sure?</h5>
                            <p>Do you want to delete this map ?</p>
                            <Button onClick={props.onConfirm} variant={"outline-secondary mx-2"}>CANCEL</Button>
                          <button id="testing" className="d-none" onClick={props.refreshRecord}></button>
                            <Button variant={'danger mx-2'} style={{backgroundColor: "#f00"}}  onClick={props.refreshRecord}>CONFIRM</Button>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>

        </>

    );
}

export default DeleteMaps;