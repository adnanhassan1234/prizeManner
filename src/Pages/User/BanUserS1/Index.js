import React from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import BanFinalStep from "../BannerUserFinalS";
const BanUserS1 = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
 
  return (
    <>
      <Modal show={props.show} size="md" centered>
        <Modal.Body>
          <Row className=" py-3 text-center ">
            <Col>
              <h5 className="mb-4 ">Ban This Account?</h5>
              <Form>
                <Form.Group
                  className="mb-3 text-start"
                  controlId="formBasicDate"
                >
                  <Form.Label>
                    {" "}
                    <strong>Enter Date of resume</strong>{" "}
                  </Form.Label>
                  <Form.Control type="text" placeholder="07/16/2022" />
                </Form.Group>

                <Form.Group
                  className="mb-3 text-start"
                  controlId="formBasicTime"
                >
                  <Form.Label>
                    {" "}
                    <strong>Enter Time To Resume Gameplay</strong>{" "}
                  </Form.Label>
                  <Form.Control type="text" placeholder="8:00 PM" />
                </Form.Group>
              </Form>
              <Button
                onClick={props.onHide}
                variant={"outline-success"}
                className="me-3 px-5"
              >
                CANCEL
              </Button>
              <Button className="btn  btn-delete px-5" onClick={() => setModalShow(true)}>CONTINUE</Button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>

      <BanFinalStep show={modalShow} onHide={() => setModalShow(false)}/>
    </>
  );
};

export default BanUserS1;
