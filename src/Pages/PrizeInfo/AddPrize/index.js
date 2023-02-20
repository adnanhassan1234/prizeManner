import { Button, Card, Col, Form, Modal, Row } from "react-bootstrap";
import upload from "Images/upload-img.png";
import React from "react";
import PageTitle from "../../../Components/Pagetitle";
import {useNavigate} from "react-router-dom";



const AddPrize = () => {
    const navigate = useNavigate();
    const back = () => {
        navigate('/prize-info');
    };


  return (
      <>
          <PageTitle title="Prize Information" />
          <section>
              <Button onClick={back} variant={"transparent font-18 fw-bold ps-0"}><i className={"fas fa-arrow-left  mx-2"}></i>Add Prize</Button>
              <Form className={'pt-4'}>
                  <Card className="p-3">
                      <Row className="mb-3">
                          <Col md={3}>
                              <Form.Group className="mb-3" controlId="formBasicName">
                                  <Form.Label>
                                      Upload Photo
                                  </Form.Label>
                                  <a href="#" className="upload-btn">
                                      <img src={upload} alt="" />
                                      <span>drag image/upload</span>
                                  </a>
                              </Form.Group>

                          </Col>

                          <Col md={6}>

                              <Form.Group className="mb-3" controlId="formBasicName">
                                  <Form.Label>
                                      Prize Name
                                  </Form.Label>
                                  <Form.Control
                                      type="text"
                                      placeholder="Ex. Trip to singapore"
                                  />
                              </Form.Group>

                              <Form.Group className="mb-3" controlId="formBasicDec">
                                  <Form.Label>
                                      Prize Description
                                  </Form.Label>
                                  <Form.Control
                                      as="textarea"
                                      rows={3}
                                      placeholder="Enter your prize description..."
                                  />
                              </Form.Group>
                              <Row>
                                  <Col md={6}>
                                      <Form.Group className="mb-5" controlId="formBasicDec">
                                          <Form.Label>
                                              Required Level To Play For
                                          </Form.Label>
                                          <Form.Control type="tel" placeholder="1" />
                                      </Form.Group>
                                  </Col>

                                  <Col md={6}>
                                      <Form.Group className="mb-3" controlId="formBasicDec">
                                          <Form.Label>
                                              Age Restriction
                                          </Form.Label>

                                          <Form.Select aria-label="Default select example">
                                              <option>Less than 5 y/o</option>
                                              <option value="1">12+ years old</option>
                                              <option value="2">18+ years old</option>
                                              <option value="3">All Ages</option>
                                          </Form.Select>
                                      </Form.Group>
                                  </Col>
                              </Row>

                          </Col>
                      </Row>
                      <Row className="mb-3 border-top">
                          <Col md={8}></Col>
                          <Col md={4}><Button variant="primary" type="submit" className="float-end mt-3">
                              PUBLISH
                          </Button></Col>
                      </Row>
                  </Card>
              </Form>
          </section>
      </>
  );
};

export default AddPrize;
