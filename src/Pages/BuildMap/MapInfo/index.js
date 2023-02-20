import React, {useEffect, useState} from 'react';
import { Row, Col, Button, Form, Tab, Tabs } from "react-bootstrap";
import ToolList from "../../../Components/ToolList";

const MapInformation = (props) => {

    const [formData, setFormData] = useState({});
    const handleChange = (event) => {
        let value = event.target.value;
        let name = event.target.name;
        // if (name === 'stake_limit_by_admin') {
        //     toast(value)
        //     console.log(value)
        // }
        setFormData((prevalue) => {
            return {
                ...prevalue,   // Spread Operator
                [name]: value
            }
        })

    }

    useEffect(()=>{

        if (props){
            console.log('success')
            console.log(props.data)
            setFormData(props.data)
        }

    },[])

    return (
        <div>
            <section>
                <Row>
                    <Col md={6}>
                        <Row>
                            <Col md={6} className={"mb-3"}>
                                <Form.Label>Required level to join</Form.Label>
                                <Form.Control type="text" placeholder="1" name={'required_level_to_join'} onChange={handleChange} />
                            </Col>
                            <Col md={6} className={"mb-3"}>
                                <Form.Label>Age Restriction</Form.Label>
                                <Form.Select class="form-select" id="inputGroupSelect01" name={'age_restriction'} onChange={handleChange}>
                                    <option value={"Less than 5 y/o"} selected>Less than 5 y/o</option>
                                    <option value="12+ years old">12+ years old</option>
                                    <option value="18+ years old">12+ years old</option>
                                    <option value="All Ages">All Ages</option>
                                </Form.Select>
                            </Col>
                            <Col md={12} className={"mb-3"}>
                                <Form.Label>Map Name</Form.Label>
                                <Form.Control type="text" placeholder="Ex. Snowy Map"  name={'name'} onChange={handleChange} value={formData.name}/>
                            </Col>
                            <Col md={12} className={"mb-3"}>
                                <Form.Label>Map Description</Form.Label>
                                <Form.Control
                                    as='textarea'
                                    placeholder="Enter your prize description..."
                                    style={{height: '250'}}
                                    onChange={handleChange}
                                    name={'description'}
                                    value={formData.description}
                                />
                            </Col>
                            <Col md={6} className={"mb-3"}>
                                <Form.Label>Start Date</Form.Label>
                                <Form.Control type="date" placeholder="1"  name={'start_date'} value={formData.start_date} onChange={handleChange}/>
                            </Col>
                            <Col md={6} className={"mb-3"}>
                                <Form.Label>End Date</Form.Label>
                                <Form.Control type="date" placeholder="1" name={'end_date'} value={formData.end_date} onChange={handleChange} />
                            </Col>
                            <Col md={12} className={"mb-3"}>
                                <Form.Label>Timezone</Form.Label>
                                <Form.Select name={'timezone'} onChange={handleChange}>
                                    <option>Select</option>
                                        <option value="Pacific/Midway">(UTC-11:00) Midway Island</option>
                                        <option value="Pacific/Pago_Pago">(UTC-11:00) Pago Pago</option>
                                        <option value="Pacific/Honolulu">(UTC-10:00) Hawaii Time</option>
                                        <option value="America/Anchorage">(UTC-09:00) Alaska Time</option>
                                        <option value="America/Los_Angeles">(UTC-08:00) Pacific Time (US & Canada)</option>
                                        <option value="America/Denver">(UTC-07:00) Mountain Time (US & Canada)</option>
                                        <option value="America/Phoenix">(UTC-07:00) Arizona Time</option>
                                        <option value="America/Chicago">(UTC-06:00) Central Time (US & Canada)</option>
                                        <option value="America/New_York">(UTC-05:00) Eastern Time (US & Canada)</option>
                                        <option value="America/Caracas">(UTC-04:30) Caracas</option>
                                        <option value="America/Halifax">(UTC-04:00) Atlantic Time (Canada)</option>
                                        <option value="America/Santo_Domingo">(UTC-04:00) Santo Domingo</option>
                                        <option value="America/La_Paz">(UTC-04:00) La Paz</option>
                                        <option value="America/Argentina/Buenos_Aires">(UTC-03:00) Buenos Aires</option>
                                        <option value="America/Santiago">(UTC-03:00) Santiago</option>
                                        <option value="America/Noronha">(UTC-02:00) Fernando de Noronha</option>
                                        <option value="Atlantic/Azores">(UTC-01:00) Azores</option>
                                        <option value="Europe/London">(UTC+00:00) London</option>
                                        <option value="Europe/Paris">(UTC+01:00) Paris</option>
                                        <option value="Europe/Moscow">(UTC+03:00) Moscow</option>
                                        <option value="Asia/Dubai">(UTC+04:00) Dubai</option>
                                        <option value="Asia/Kolkata">(UTC+05:30) India Standard Time</option>
                                        <option value="Asia/Kathmandu">(UTC+05:45) Kathmandu</option>
                                        <option value="Asia/Dhaka">(UTC+06:00) Dhaka</option>
                                        <option value="Asia/Bangkok">(UTC+07:00) Bangkok</option>
                                        <option value="Asia/Hong_Kong">(UTC+08:00) Hong Kong</option>
                                        <option value="Asia/Tokyo">(UTC+09:00) Tokyo</option>
                                        <option value="Australia/Sydney">(UTC+10:00) Sydney</option>
                                        <option value="Pacific/Auckland">(UTC+12:00) Auckland</option>


                                </Form.Select>
                            </Col>
                            <Col md={6} className={"mb-3"}>
                                <Form.Label>Start Time</Form.Label>
                                <Form.Control type="time" placeholder="1" />
                            </Col>
                            <Col md={6} className={"mb-3"}>
                                <Form.Label>End Time</Form.Label>
                                <Form.Control type="time" placeholder="1" />
                            </Col>
                        </Row>
                    </Col>
                    <Col className="col-md-6">
                        <Form.Group>
                            <Form.Label>Map Sizes</Form.Label>
                            <Form.Select class="form-select" id="inputGroupSelect01">
                                <option selected>50 x 100</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Form.Group>
                        <div className={"d-flex justify-content-between py-3"}>
                            <div className={"fw-bold"}>Tools Available</div>
                            <Form.Check className='fw-bold'
                                        inline
                                        label="Apply all tools"
                                        type="checkbox"
                                        name="selectAll"
                                        id="selectAll"
                                        handleClick={"Check All"}
                            />
                        </div>
                        <Tabs
                            defaultActiveKey="profile"
                            className="tabs-sm full-width"
                        >
                            <Tab eventKey="profile" title="ALL">
                                <div className={'bgBox'}>
                                    <div className="mb-3">
                                        <ToolList/>
                                    </div>
                                    <div className="footer text-center py-3">
                                        <button><a href="/"><i className="fas fa-arrow-left"></i></a></button>
                                        Page 1 of 10
                                        <button><a href="/"><i className="fas fa-arrow-right"></i></a></button>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="contact" title="DIG">

                            </Tab>
                            <Tab eventKey="asd" title="SMASH">

                            </Tab>
                            <Tab eventKey="ghj" title="CUT">

                            </Tab>
                            <Tab eventKey="uui" title=" EXCAUATE">

                            </Tab>
                            <Tab eventKey="ut" title=" COLLECT">

                            </Tab>
                            <Tab eventKey="eui" title=" MORE">

                            </Tab>
                            <Tab eventKey="oui" title="MORE">

                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
                <hr />
                <div className="col-md-12 d-flex justify-content-end">
                    <Button onClick={props.onHide} variant={"outline-success"} className='me-2'>SAVE AS DRAFT</Button>
                    <Button className='btn  btn-delete '>NEXT</Button>
                </div>

            </section>
        </div>
    )
}

export default MapInformation