import React from 'react'
import { Button, Form, Modal } from "react-bootstrap";
const EditStake = (props) => {
  return (
    <Modal {...props} size="md" centered>
    <Modal.Header className={"border-0 justify-content-center"}>
      <Modal.Title className={"mb-0 fw-bold"}>
      Edit Stake Exchange
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label >Stake</Form.Label>
          <Form.Control type="number" placeholder="1" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label >Coin Cost</Form.Label>
          <Form.Control type="number" placeholder="50" />
        </Form.Group>

        <Modal.Footer className={"border-0 justify-content-center"}>
          <Button onClick={props.onHide} variant={"outline-success"}>
            CANCEL
          </Button>
          <Button type={"submit"}>SAVE CHANGES</Button>
        </Modal.Footer>
      </Form>
    </Modal.Body>
  </Modal>
  )
}

export default EditStake