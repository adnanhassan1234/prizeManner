import PageTitle from 'Components/Pagetitle'
import React from 'react'
import { Button, Tab, Tabs } from 'react-bootstrap'
import Specification from '../Spacification'
import SpecialRule from '../SpecialRule'
import {useNavigate} from "react-router-dom";

const AddTool = () => {
    const navigate = useNavigate();
    const back = () => {
        navigate('/tools');
    };


    return (

        <div>
            <PageTitle title={"Tools"} />
            <section>
                <Button onClick={back}  variant={"transparent font-18 fw-bold ps-0"}>
                    <i className={"fas fa-arrow-left  mx-2"}></i>
                    Add a tool
                </Button>

                <Tabs
                    defaultActiveKey="home"
                    className="pt-4"
                >
                    <Tab eventKey="home" title="SPECIFICATIONS ">
                        <Specification/>
                    </Tab>
                    <Tab eventKey="profile" title="SPECIAL RULE">
                        <SpecialRule btn={"Save"}/>
                    </Tab>

                </Tabs>
            </section>
        </div>
    )
}

export default AddTool
