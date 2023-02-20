import React from 'react'
import { Button, Form, Modal } from "react-bootstrap";
const EditExp = (props) => {
  return (
    <Modal {...props} size="md" centered>
    <Modal.Header className={"border-0 justify-content-center"}>
      <Modal.Title className={"mb-0 fw-bold"}>
      Edit Exchange
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label className='fw-bold'>EXP Points</Form.Label>
          <Form.Control type="number" placeholder="100" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className='fw-bold'>Coin Cost</Form.Label>
          <Form.Control type="number" placeholder="1" />
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

export default EditExp