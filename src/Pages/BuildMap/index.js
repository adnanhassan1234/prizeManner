import PageTitle from 'Components/Pagetitle'
import { Tab, Tabs } from "react-bootstrap";
import React from 'react'
import CurrentMap from 'Pages/Maps/currentMap';
import ExpiredMap from 'Pages/Maps/ExpiredMap';
import Draft from 'Pages/Maps/Draft';
import MapInformation from './MapInfo';
import PrizeInformation from './PrizeInfo';
import LayerFour from './LayerFour';
import LayerThree from './LayerThree';
import LayerTwo from './LayerTwo';
import LayerOne from './LayerOne';
import {useLocation} from "react-router-dom";

const BuildMap = () => {
    const location = useLocation();

    return (
        <>
            <PageTitle title={"Building a Map"} />
            <section>
                <Tabs
                    defaultActiveKey="MapInformation"
                    className={'tabradius'}
                >
                    <Tab  eventKey="MapInformation" title="Map Information ">
                        <MapInformation data={location.state.mapData} />
                    </Tab>
                    <Tab eventKey="PrizeInformation" title="Prize Information">
                        <PrizeInformation />
                    </Tab>
                    <Tab eventKey="LayerFour" title={<span>Layer Four <i className=" fas fa-lock" /> </span>}>
                        <LayerFour />
                    </Tab>
                    <Tab eventKey="LayerThree" title="Layer Three">
                        <LayerThree />
                    </Tab>
                    <Tab eventKey="Layertwo" title="Layer Two">
                        <LayerTwo />
                    </Tab>
                    <Tab eventKey="LayerOne" title="Layer One">
                        <LayerOne />
                    </Tab>
                </Tabs>
            </section>
        </>

    )
}

export default BuildMap