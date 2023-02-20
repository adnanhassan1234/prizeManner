import React from 'react'
import { Col, Form, Row, Button, Card } from 'react-bootstrap'
import box from 'Images/Frame 50.png'
import TitlePopUp from './TitlePopUp';
const LayerThree = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  return (

      <div className='border rounded'>
        <Row className='p-4'>
          <Col md={5}>
            <Form className='p-3 border rounded'>
              <Row className={"inputRow"}>
                <Col lg={12}>
                  <Form.Label> Substrate </Form.Label>
                  <Form.Select className='me-2'>
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
                <Button variant={"primary sm"} type={"submit"}>DRAG ME</Button>
              </Row>
              <Row className={"inputRow"}>
                <Col lg={8}>
                  <Form.Label> Tool </Form.Label>
                  <Form.Select>
                    <option>Nuke</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
                <Col lg={4}>
                  <Form.Label> Qty </Form.Label>
                  <Form.Control type="text" />
                </Col>
                <Button  className='small-text mx-1 px-4' >ADD</Button>
              </Row>
              <div className="col-md-4">
                <Form.Label> Rewards </Form.Label>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label class="form-check-label" for="flexCheckDefault" onClick={() => setModalShow(true)}>
                    Random
                  </label>
                </div>
              </div>
            </Form>
          </Col>
          <Col md={7} >
            <Row className='align-items-end p-2'>
              <Col md={6}>
                <Form.Label> Map Sizes </Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>50 x 50</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>
              <Col md={6} className='px-3'>
                <div className="d-flex justify-content-end">
                  <Button type={"submit"}>UNDO</Button>
                  <span className='zoom-icon mx-1 justify-content-center align-items-center'>
                    <a href="/"><i class="fal fa-search-plus"></i></a>
                  </span>
                  <span className='zoom-icon mx-1  justify-content-center align-items-center'>
                  <a href="/"><i class="fal fa-search-minus"></i></a>
                </span>
                </div>
              </Col>
              <Col md={12}>
                <div className="img-box">
                  <img src={box} alt="" />
                </div>
              </Col>
            </Row>
          </Col>

          <Card>

            <Row className="p-4 user_data_profile">
              <Col md={12}>
                <Form.Group className="mb-3" controlId="formBasicDec">
                  <Form.Label>
                    Console Log
                  </Form.Label>
                </Form.Group>

                <p className="fw-light text-muted">You added a mud</p>
                <p className="fw-light text-muted">You added a water</p>
                <p className="fw-light text-muted">You added a red heatmap with major and minor prize</p>
                <p className="fw-light text-muted">You added a blue heatmap</p>
                <p className="fw-light text-muted">You started a map...</p>
              </Col>


            </Row>
          </Card>
          <hr />
          <div className="col-md-12 d-flex justify-content-end">
            <Button onClick={props.onHide} variant={"outline-success m-2"}>SAVE AS DRAFT</Button>
            <Button className='btn  btn-delete m-2'>NEXT</Button>
          </div>
        </Row>
        <TitlePopUp show={modalShow} onHide={() => setModalShow(false)} />
      </div>

  )
}

export default LayerThree