import React from 'react'
import { Button, Form, Modal } from "react-bootstrap";
import dig1 from "Images/dig1.png";
const EditDigs = (props) => {
  return (
      <Modal {...props} size="md" centered>
        <Modal.Header className={"border-0 justify-content-center"}>
          <Modal.Title>
            Edit Exchange
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Type</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Cut</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Choose a Tool</Form.Label>
              <Form.Select aria-label="Default select example">
                <option >Image</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Coin Value</Form.Label>
              <Form.Control type="tel" placeholder="1" />
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

export default EditDigs