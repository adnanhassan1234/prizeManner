import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import SupportSideBar from "Components/SupportSection/SupportSideBar";
import MsgPreview from "Components/SupportSection/MsgPreview";
const EndUserSupport = () => {
  return (
    <>
    <Row>
    <Col md={12}>
       <div class="support-block">
       <SupportSideBar/>
       <MsgPreview/>
       </div>
       </Col>
     </Row>
    </>
  )
}

export default EndUserSupport