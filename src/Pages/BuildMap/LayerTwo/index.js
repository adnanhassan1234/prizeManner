import React from 'react'
import { Col, Form, Row, Button } from 'react-bootstrap'
import box from 'Images/Frame 51.png'
import TitlePopUp from '../LayerThree/TitlePopUp';


const LayerTwo = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  return (

      <div className='border rounded'>
        <Row className='p-4'>
          <Col md={5}>
            <Form className='p-3 border rounded'>
              <Row className={"inputRow"}>
                <Col md={12}>
                  <Form.Label> <strong>Substrate</strong> </Form.Label>
                  <Form.Select>
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
                <Button className='small-text' type={"submit"}>DRAG ME</Button>
              </Row>
              <Row className={"inputRow"}>
                <Col md={8}>
                  <Form.Label> <strong>Tool</strong> </Form.Label>
                  <Form.Select>
                    <option>Nuke</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
                <Col md={4}>
                  <Form.Label> <strong>Qty</strong> </Form.Label>
                  <Form.Control type="text" />
                </Col>
                <Button className='small-text me-1 px-4' >ADD</Button>
              </Row>
              <div className="col-md-12">
                <Form.Label> <strong>Rewards</strong> </Form.Label>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefaultrad" />
                  <label class="form-check-label" for="flexCheckDefaultrad" onClick={() => setModalShow(true)}>
                    Random
                  </label>
                </div>
              </div>
            </Form>
          </Col>
          <Col md={7} >
            <Row className='align-items-end p-2'>
              <Col md={6}>
                <Form.Label> <strong>Map Sizes</strong> </Form.Label>
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
                  <a href="/"><i class="fas fa-search-plus"></i></a>
                </span>
                  <span className='zoom-icon mx-1 justify-content-center align-items-center'>
                  <a href="/"><i class="fas fa-search-minus"></i></a>
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

          <Col md={12} className="  p-4 mt-3  border rounded col-md-12">
            <h5>Console Log</h5>
            <p className="fw-light text-muted">You added a water</p>
            <p className="fw-light text-muted">You added a red heatmap with major and minor prize</p>
            <p className="fw-light text-muted">You added a blue heatmap</p>
            <p className="fw-light text-muted">You started a map...</p>
          </Col>
        </Row>

        <hr />
        <div className="col-md-12 d-flex justify-content-end align-items-center mb-3">
          <Button onClick={props.onHide} variant={"outline-success"}>SAVE AS DRAFT</Button>
          <Button className='btn  btn-delete ms-2'>NEXT</Button>
        </div>
        <TitlePopUp show={modalShow} onHide={() => setModalShow(false)} />
      </div>

  )
}

export default LayerTwo