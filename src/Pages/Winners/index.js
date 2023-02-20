import PageTitle from 'Components/Pagetitle'
import React from 'react'
import { Row, Tab, Tabs } from 'react-bootstrap'
import Charity from './Charity'
import FreeToPlay from './FreeToPlay'
import PlayToPlay from './PlayToPlay'

const Winners = () => {
    return (
        <>
            <PageTitle title={"Winners"} />

            <section>

                <Tabs
                    defaultActiveKey="Freeplay"
                    transition={false}
                >
                    <Tab  eventKey="Freeplay" title="Free To Play ">
                        <FreeToPlay/>
                    </Tab>
                    <Tab eventKey="PlayToPlay" title="Pay to Play">
                        <PlayToPlay/>
                    </Tab>
                    <Tab eventKey="charity" title="Charity">
                        <Charity/>
                    </Tab>
                </Tabs>
            </section>
        </>
    )
}

export default Winners