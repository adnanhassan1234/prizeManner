import PageTitle from "Components/Pagetitle";
import React, {useState} from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import GiveItemModal from "../GiveItem";
import Search from "Components/Search";
import LogList from "../../../Components/LogList";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const UserProfile = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [startDate, setStartDate] = useState(new Date());

  const navigate = useNavigate();
  const stakePurchased = () => {
    navigate('/Stake_Purchased_Log');
  };
  const TotalPurchased = () => {
    navigate('/TotalPurchased');
  };
  const back = () => {
    navigate('/users');
  };

  return (
      <>
        <PageTitle title="Users" />
        <div className="d-flex align-items-center py-2 ms-3">
          <Button onClick={back} variant={"transparent font-18 fw-bold ps-0"}><i className={"fas fa-arrow-left  mx-2"}></i> User Profile</Button>
        </div>
        <section>
          <Row>
            <Col md={6}>
              <Card className={'user_data_profile'}>
                <Card.Body>
                  <Row>
                    <Col md={2} className="mb-2">
                      <span>Name:</span>
                    </Col>
                    <Col md={10}>
                      <p>Marie Smith</p>
                    </Col>
                    <Col md={2} className="mb-2">
                      <span>Email:</span>
                    </Col>
                    <Col md={10}>
                      <p>mariesmith@gmail.com</p>
                    </Col>
                    <Col md={2} className="mb-2">
                      <span>Age:</span>
                    </Col>
                    <Col md={10}>
                      <p>24</p>
                    </Col>
                    <Col md={2} className="mb-2">
                      <span>Level:</span>
                    </Col>
                    <Col md={10}>
                      <p>15</p>
                    </Col>
                    <Col md={2} className="mb-2">
                      <span>Coins:</span>
                    </Col>
                    <Col md={10}>
                      <p>9,999</p>
                    </Col>
                    <Col md={2} className="mb-2">
                      <span>Gems:</span>
                    </Col>
                    <Col md={10}>
                      <p>9,999</p>
                    </Col>
                    <Col md={2} className="mb-2">
                      <span>Dimonds</span>
                    </Col>
                    <Col md={10}>
                      <p>15</p>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className={'user_data_profile'}>
                <Card.Body>
                  <Row>
                    <Col md={3} className="mb-2">
                      <span>Current Map:</span>
                    </Col>

                    <Col md={9}>
                      <p>map name 1, map name 2</p>
                    </Col>

                    <Col md={3} className="mb-2">
                      <span>Total Stake Purchased:</span>
                    </Col>

                    <Col md={9}>
                      <a href="#" onClick={stakePurchased}>400</a>
                    </Col>

                    <Col md={3}>
                      <span>Total Items Purchased:</span>
                    </Col>

                    <Col md={9}>
                      <a href="#" onClick={TotalPurchased}>50</a>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className={'user_data_profile'}>
                <Card.Title>Play Thru</Card.Title>
                <Card.Body>
                  <Row>
                    <Col md={3} className="mb-2">
                      <span>Free Map:</span>
                    </Col>

                    <Col md={9}>
                      <p>10</p>
                    </Col>

                    <Col md={3} className="mb-2">
                      <span>Pay-to-Play:</span>
                    </Col>

                    <Col md={9}>
                      <p>10</p>
                    </Col>

                    <Col md={3} className="mb-2">
                      <span>Proximity Map:</span>
                    </Col>

                    <Col md={9}>
                      <p>10</p>
                    </Col>

                    <Col md={3} className="mb-2">
                      <span>Charity Map:</span>
                    </Col>

                    <Col md={9}>
                      <p>10</p>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className={'user_data_profile'}>
                <Card.Title>Give Items</Card.Title>
                <Card.Body>
                  <Form.Group className="mb-3" controlId="formBasicDec">
                    <Form.Label>
                      <strong>Tools</strong>
                    </Form.Label>

                    <Form.Select aria-label="Default select example">
                      <option>Nuke</option>
                      <option value="1">12+ years old</option>
                      <option value="2">18+ years old</option>
                      <option value="3">All Ages</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicDec">
                    <Form.Label>
                      <strong>Coin</strong>
                    </Form.Label>
                    <Form.Control type="number" placeholder="50" />
                  </Form.Group>
                  <Button className={" d-block m-auto"} onClick={() => setModalShow(true)}>GIVE ITEMS</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={12}>
              <Card className={'user_data_profile'}>
                <Card.Title>Game Logs</Card.Title>
                <div className={"searchbox"}>
                  <Row>
                    <Col md={5}>
                      <Row>
                        <Col lg={7}>
                          <Search placeholder="Search"/>
                        </Col>
                        <Col lg={5} className={'px-0'}>
                          <div className={'btnData'}>
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                            />
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>

                </div>
                <Card.Body>
                  <h5 className={"mb-3"}>Console Log</h5>
                  <LogList />
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <GiveItemModal show={modalShow} onHide={() => setModalShow(false)}/>
        </section>

      </>

  );
};

export default UserProfile;
