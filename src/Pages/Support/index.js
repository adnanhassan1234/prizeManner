import PageTitle from "Components/Pagetitle";
import React from "react";
import { Row, Tab, Tabs } from "react-bootstrap";
import EndUserSupport from "./EndUser/index.js";
import Tickets from "./Ticket.js";

const Support = () => {
  return (
    <>
      <PageTitle title="Support" />
      <section>
        <Tabs defaultActiveKey="Tickets">
          <Tab eventKey="Tickets" title="Support Tickets">
           <Tickets/>
          </Tab>
          <Tab eventKey="End_User_Chat" title="End User Chat">
          <EndUserSupport/>
          </Tab>
        </Tabs>
      </section>
    </>
  );
};

export default Support;
