import React from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
const GiveItemModal = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Modal show={props.show} size="md" centered>
      <Modal.Body>
        <Row className="text-center py-3  ">
          <Col>
            <h5 className="mb-4">
              Are you sure you want to send <br /> “tool name” to Marie Smith?
            </h5>
            <Button
              onClick={props.onHide}
              variant={"outline-success"}
              className="me-3 px-5"
            >
              No
            </Button>
            <Button
              className="btn  btn-delete px-5"
              onClick={() => setModalShow(true)}
            >
              Yes
            </Button>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default GiveItemModal;
