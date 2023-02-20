import React from 'react'
import { Col, Form, Row, Button } from 'react-bootstrap'
import box from 'Images/Frame 53.png'
import TitlePopUp from '../LayerThree/TitlePopUp';
import PopUp from './PopUp';
import {Link} from "react-router-dom";


const LayerOne = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  return (

      <div className='border p-4'>
        <Row>
          <Col md={4} className='border rounded p-3'>
            <Form>
              <Row className={"inputRow"}>
                <Col lg={12}>
                  <Form.Label> <strong>Substrate</strong></Form.Label>
                  <Form.Select>
                    <option>Charcoal</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
                <Button type={"submit"}>ADD</Button>
              </Row>
              <Row className={"inputRow"}>
                <Col lg={8}>
                  <Form.Label><strong>Infrastructure</strong> </Form.Label>
                  <Form.Select>
                    <option>Castle</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
                <Col lg={4}>
                  <Form.Label> <strong>Qty</strong> </Form.Label>
                  <Form.Control type="text" />
                </Col>
                <Button >ADD</Button>
              </Row>
              <Row className={"inputRow"}>
                <Col md={8}>
                  <Form.Label><strong>Tools </strong> </Form.Label>
                  <Form.Select aria-label="Default select example" className='me-2'>
                    <option>hammer</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="exampleForm.ControlInput1" className='me-2'>
                    <Form.Label><strong>Qty</strong> </Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
                <Button onClick={() => setModalShow(true)} >ADD</Button>
              </Row>
              <Row className={"inputRow"}>
                <Col md={8}>
                  <Form.Label><strong>Equipment </strong> </Form.Label>
                  <Form.Select aria-label="Default select example" className='me-2'>
                    <option>laser gun</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="exampleForm.ControlInput1" className='me-2'>
                    <Form.Label><strong>Qty</strong> </Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
                <Button  >ADD</Button>
              </Row>
              <Row className={"inputRow"}>
                <Col md={8}>
                  <Form.Label><strong>Animals</strong> </Form.Label>
                  <Form.Select aria-label="Default select example" className='me-2'>
                    <option>Wolf</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="exampleForm.ControlInput1" className='me-2'>
                    <Form.Label><strong>Qty</strong> </Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
                <Button  >ADD</Button>
              </Row>
              <Row className={"inputRow"}>
                <Col md={8}>
                  <Form.Label><strong>Flora</strong> </Form.Label>
                  <Form.Select aria-label="Default select example" className='me-2'>
                    <option>Coconut Tree</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
                <Col md={4}>
                    <Form.Label><strong>Qty</strong> </Form.Label>
                    <Form.Control type="text" />
                </Col>
                <Button >ADD</Button>
              </Row>
            </Form>
          </Col>
          <Col md={8}>
            <Row>
              <Col md={6}>
                <Form.Label>Map Sizes</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>50 x 50</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>
              <Col md={6} className={"d-flex align-items-center justify-content-end"}>
                  <Button variant={"primary m-1"} type={"submit"}><i className={"fal fa-undo"}></i> UNDO</Button>
                  <Button variant={"icon m-1 font-18"}><i className="fal fa-search-plus"></i></Button>
                  <Button variant={"icon m-1 font-18"}><i className="fal fa-search-minus"></i></Button>
              </Col>
              <Col md={12}>
                <div className="img-box">
                  <img src={box} alt="" />
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={12} className=" p-4 mt-3  border rounded mt-5">
            <h5>Console Log</h5>
            <p className="fw-light text-muted">You added a water</p>
            <p className="fw-light text-muted">You added a red heatmap with major and minor prize</p>
            <p className="fw-light text-muted">You added a blue heatmap</p>
            <p className="fw-light text-muted">You started a map...</p>
          </Col>
        </Row>

        <hr />
        <div className="col-md-12 d-flex justify-content-end">
          <Button onClick={props.onHide} variant={"outline-success"}>SAVE AS DRAFT</Button>
          <Button onClick={() => setModalShow(true)} variant="primary" type="submit" className='btn  btn-delete ms-2'>COMPLETE</Button>
        </div>
        <PopUp show={modalShow} />
      </div>

  )
}

export default LayerOne