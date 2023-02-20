import PageTitle from "Components/Pagetitle";
import React from "react";
import { Button, Card, Col, Nav, Row, Tab } from "react-bootstrap";
import Faqs from "./Faqs";
import PrivacyPolicy from "./Privacy Policy";
import TermAndCondition from "./TermAndCondition";

const GuideLines = () => {
  return (
    <>
      <PageTitle title={"GuideLines"} />
      <section>
        <Button className="px-5 float-end mb-3">EDIT</Button>

        <Card style={{clear: "both"}} className='medium-border'>
          <Tab.Container id="left-tabs-example" defaultActiveKey="Term">
            <Row>
              <Col md={3}>
                <Nav variant="pills" className="flex-column vertical-nav">
                  <Nav.Item>
                    <Nav.Link eventKey="Term">Terms & Condition</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Policy">Privacy Policy</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Faq">FAQs</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col md={9}>
                <Tab.Content className="py-md-5 py-3 px-md-0 px-3 pe-4">
                  <Tab.Pane eventKey="Term">
                   <TermAndCondition/>
                  </Tab.Pane>
                  <Tab.Pane eventKey="Policy">
                <PrivacyPolicy/>
                  </Tab.Pane>

                  <Tab.Pane eventKey="Faq">
                <Faqs/>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Card>
      </section>
    </>
  );
};

export default GuideLines;
