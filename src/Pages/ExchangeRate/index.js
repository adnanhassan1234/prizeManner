import PageTitle from "Components/Pagetitle";
import React from "react";
import { Row, Tab, Tabs } from "react-bootstrap";
import Coins from "./Coin";
import EXP from "./Exp";
import GemsAndDimonds from "./GemsAndDimonds";
import Stake from "./Stake";
import ExchangeTool from "./Tools";

const ExchangeRate = () => {
    return (
        <>
            <PageTitle title={"Exchange"} />

            <section>
                <Tabs
                    defaultActiveKey="ToolsEx"
                    transition={false}
                >
                    <Tab eventKey="ToolsEx" title="Tools">
                        <ExchangeTool/>
                    </Tab>
                    <Tab eventKey="Coinsex" title="Coins">
                        <Coins/>
                    </Tab>
                    <Tab eventKey="Stake" title="Stake">
                        <Stake/>
                    </Tab>
                    <Tab eventKey="Gemsex" title="Gems & Diamonds">
                        <GemsAndDimonds/>
                    </Tab>
                    <Tab eventKey="Expex" title="Exp">
                        <EXP/>
                    </Tab>
                </Tabs>
            </section>
        </>
    );
};

export default ExchangeRate;
