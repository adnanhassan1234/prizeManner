import PageTitle from 'Components/Pagetitle';
import React, {useState} from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import PopUp from './PopUp';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PushNotif = (props) => {
    const [modalShow, setModalShow] = React.useState(false);
    const [startDate, setStartDate] = useState(new Date());

    return (
        <>
            <PageTitle title={"Push Notification"} />
            <section>
                <Row>
                    <Col md={9}>
                        <Card className={'p-4'}>
                            <Form>
                                <Row className={'py-2'}>
                                    <div className="col-md-4">
                                        <Form.Check
                                            inline
                                            label="Send to all players"
                                            name="GameMode"
                                            type='checkbox'
                                            id={`Standard`}
                                        />
                                    </div>
                                    <div className="col-md-4">
                                        <Form.Check
                                            inline
                                            label="Send to  all calendars"
                                            name="GameMode"
                                            type='checkbox'
                                            id={`Proximity`}
                                        />
                                    </div>
                                    <div className="col-md-4">
                                        <Form.Check
                                            inline
                                            label="Send as announcements"
                                            name="GameMode"
                                            type='checkbox'
                                            id={`RaceMode`}
                                        />
                                    </div>
                                </Row>
                                <hr />
                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="" controlId="exampleForm.ControlInput1">
                                            <Form.Label> Notification Title</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Here" />
                                        </Form.Group>
                                        <Form.Group className="mt-3" controlId="formBasicDec" >
                                            <Form.Label>
                                                Details
                                            </Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                rows={3}
                                                placeholder="Enter description here"
                                                style={{ height: "400px" }}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="" controlId="exampleForm.ControlInput1">
                                            <Form.Label> Select Date</Form.Label>
                                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row className={'justify-content-end'}>
                                    <Col md={6} className={"text-center py-3"}>
                                        <Button onClick={() => setModalShow(true)}  className='btn  btn-delete'>SEND NOTIFICATION</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className='my-3'>
                            <Form className='m-3'>
                                <Col className='my-3'>
                                    <h5>History</h5>
                                </Col>
                                <Col  className='my-2'>
                                    <span>06/19/2022</span>
                                    <p>Notif Title 1 1:00 PM</p>
                                    <hr />
                                </Col>

                                <Col  className='my-2'>
                                    <span>06/19/2022</span>
                                    <p>Notif Title 1 2:00 PM</p>
                                    <hr />
                                </Col>

                                <Col  className='my-2'>
                                    <span>06/19/2022</span>
                                    <p>Notif Title 1 3:00 PM</p>
                                    <hr />
                                </Col>

                            </Form>
                        </Card>
                    </Col>
                </Row>
            </section>
            <PopUp show={modalShow} />
        </>
    )
}

export default PushNotif