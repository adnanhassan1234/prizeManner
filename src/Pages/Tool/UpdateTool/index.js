import PageTitle from 'Components/Pagetitle'
import React, {useEffect, useState} from 'react'
import { Button, Tab, Tabs } from 'react-bootstrap'
import Specification from '../Spacification'
import SpecialRule from '../SpecialRule'
import {useLocation, useNavigate} from "react-router-dom";
import SpecificationUpdate from "../Spacification/update";

const UpdateTool = (props) => {
    const location = useLocation();

    const navigate = useNavigate();
    const back = () => {
        navigate('/tools');
    };


    return (

        <div>
            <PageTitle title={"Update Tools"} />
            <section>
                <Button onClick={back}  variant={"transparent font-18 fw-bold ps-0"}>
                    <i className={"fas fa-arrow-left  mx-2"}></i>
                    Update tool
                </Button>

                <Tabs
                    defaultActiveKey="home"
                    className="pt-4"
                >
                    <Tab eventKey="home" title="SPECIFICATIONS ">
                        <SpecificationUpdate data={location.state.row}/>
                    </Tab>
                    <Tab eventKey="profile" title="SPECIAL RULE">
                        <SpecialRule btn={"Update"} data={location.state.row}/>
                    </Tab>

                </Tabs>
            </section>
        </div>
    )
}

export default UpdateTool
