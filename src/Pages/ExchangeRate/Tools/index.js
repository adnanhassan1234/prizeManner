import Search from "Components/Search";
import React from "react";
import { Col, Row, Tab, Tabs } from "react-bootstrap";
import ExchangeDigs from "./Digs";

const ExchangeTool = () => {
    return (
        <>
            <Row className="searchbox">
                <Col md={12} className={'my-2'}>
                    <Search placeholder={"Search Tools"} />
                </Col>
            </Row>
            <Tabs
                defaultActiveKey="DIG"
                transition={false}
            >
                <Tab eventKey="DIG" title="DIG">
                    <ExchangeDigs />
                </Tab>
                <Tab eventKey="SMASH" title="SMASH"></Tab>
                <Tab eventKey="CUT" title="CUT"></Tab>
                <Tab eventKey="EXCAUATE" title="EXCAUATE"></Tab>
                <Tab eventKey="COLLECT" title="COLLECT"></Tab>
                <Tab eventKey="PUMP" title="PUMP"></Tab>
                <Tab eventKey="SHOOING" title="SHOOING"></Tab>
                <Tab eventKey="DESTROY" title="DESTROY"></Tab>
                <Tab eventKey="FREEZE" title="FREEZE"></Tab>
                <Tab eventKey="DROP" title="DROP"></Tab>
                <Tab eventKey="ACTIVATE" title="ACTIVATE"></Tab>
            </Tabs>
        </>
    );
};

export default ExchangeTool;
