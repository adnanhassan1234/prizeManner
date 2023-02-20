import React, {useEffect} from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap';
import {ENDPOINT} from "../../../config/constants";
import AuthService from "../../../services/auth.service";

const DeleteAssets = (props) => {
    const [DelModalShow, setDelModalShow] = React.useState(false);
    useEffect(() => {
        setDelModalShow(props.show);
    }, []);

    {/*const deleteRecord = async (id) => {*/}
    //     setDelModalShow(false);
    // ENDPOINT.assets.delete.id = id;
    // await AuthService.deleteMethod(ENDPOINT.assets.delete.url + ENDPOINT.assets.delete.id, true)
    //     .then((res) => {
    //         document.getElementById('testing').click();
    //     })
    //     .catch((err) => {
    //         // console.log(" ~ file: index.js:38 ~ deleteRouteList ~ err", err)
    //         // swal("Error", `${AuthService.errorMessageHandler(err)}`, "error");
    //     });
    // }
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
                            <p>Do you want to delete this asset ?</p>
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

export default DeleteAssets;