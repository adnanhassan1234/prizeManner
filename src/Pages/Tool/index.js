import PageTitle from 'Components/Pagetitle';
import React, {useEffect, useState} from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import AuthService from "../../services/auth.service";
import {ENDPOINT} from "../../config/constants";
import Loader from "../../Components/Loader";
import DeleteTools from "./Delete";
import ToolTable from "./table/table";
import Swal from "sweetalert2";
import {toast} from "react-toastify";

function Tool() {
    const [digContent, setDigContent] = useState([]);
    const [smashContent, setSmashContent] = useState([]);
    const [cutContent, setCutContent] = useState([]);
    const [excauateContent, setExcauateContent] = useState([]);
    const [collectContent, setCollectContent] = useState([]);
    const [pumpContent, setPumpContent] = useState([]);
    const [shooContent, setShooContent] = useState([]);
    const [destroyContent, setDestroyContent] = useState([]);
    const [freezeContent, setFreezeContent] = useState([]);
    const [dropContent, setDropContent] = useState([]);
    const [activateContent, setActivateContent] = useState([]);
    const [isLoader, setIsLoader] = useState(false);
    const [EditRecord , setEditRecord] = useState({});
    const [EditModalShow, setEditModalShow] = React.useState(false);
    const [DelModalShow, setDelModalShow] = React.useState(false);
    const [id, setId] = React.useState("");
    const [isLoading, setIsLoading] = useState(false);


    const handleEdit = (record) => {
        console.log(record)
        setEditRecord(record);
        setEditModalShow(true);
    }

    const toolsData = async () => {



        await AuthService.getMethod(ENDPOINT.tools.listing, true)
            .then((res) => {

                setDigContent(res.data.filter(data => ["dig"].includes(data.tool_type)));
                setSmashContent(res.data.filter(data => ["smash"].includes(data.tool_type)));
                setCutContent(res.data.filter(data => ["cut"].includes(data.tool_type)));
                setExcauateContent(res.data.filter(data => ["excauate"].includes(data.tool_type)));
                setCollectContent(res.data.filter(data => ["collect"].includes(data.tool_type)));
                setPumpContent(res.data.filter(data => ["pump"].includes(data.tool_type)));
                setShooContent(res.data.filter(data => ["shoo"].includes(data.tool_type)));
                setDestroyContent(res.data.filter(data => ["destroy"].includes(data.tool_type)));
                setFreezeContent(res.data.filter(data => ["freeze"].includes(data.tool_type)));
                setDropContent(res.data.filter(data => ["drop"].includes(data.tool_type)));
                setActivateContent(res.data.filter(data => ["activate"].includes(data.tool_type)));
                setIsLoader(true);

                const table = new Map();
                for (let row = 0; row < 5; row++) {
                    for (let col = 0; col < 5; col++) {
                        table.set(row+','+col,[{
                            "asset":{},
                            "uniqueId": "0.16312488784383294"
                        }, {
                            "asset": {},
                            "uniqueId": "0.16312488784383294"
                        }, {
                            "asset": {},
                            "uniqueId": "0.16312488784383294"
                        }, {
                            "asset":{},
                            "uniqueId": "0.16312488784383294"
                        }])
                    }
                }

                console.log(table)



            })
            .catch((err) => {
                //console.log(" ~ file: index.js:24 ~ assetsRouteGetData ~ err", err)
                // swal("Error", `${AuthService.errorMessageHandler(err)}`, "error");
            });

    };


    const deleteRouteList2 = async (id) => {

        setDelModalShow(true)
        setId(id)


    };
    const deleteRouteList = async (id) => {


        ENDPOINT.tools.delete.id = id;
        await AuthService.deleteMethod(ENDPOINT.tools.delete.url + ENDPOINT.tools.delete.id, true)
            .then((res) => {
                toolsData();
                // console.log(res.data);
                toast('Tool deleted successfully!')
            })
            .catch((err) => {
                // console.log(" ~ file: index.js:38 ~ deleteRouteList ~ err", err)
                // swal("Error", `${AuthService.errorMessageHandler(err)}`, "error");
            });

        setDelModalShow(false)


    };

    useEffect(() => {
        toolsData();
    }, [
    ]);



    if (!isLoader) {
        return (
            <Loader isLoading={isLoading} />
        );
    }


    return (
        <>
            <PageTitle title={"Tools"} />

            <section>

                <row>
                    <Tabs
                        defaultActiveKey="DIG"
                        transition={false}
                    >
                        <Tab  eventKey="DIG" title="DIG">
                            <ToolTable tableContent={digContent} deleteRouteList={deleteRouteList2}/>
                        </Tab>
                        <Tab eventKey="SMASH" title="SMASH">
                            <ToolTable tableContent={smashContent} deleteRouteList={deleteRouteList2}/>

                        </Tab>
                        <Tab eventKey="CUT" title="CUT">
                            <ToolTable tableContent={cutContent} deleteRouteList={deleteRouteList2}/>

                        </Tab>
                        <Tab eventKey="EXCAUATE" title="EXCAUATE">
                            <ToolTable tableContent={excauateContent} deleteRouteList={deleteRouteList2}/>

                        </Tab>
                        <Tab eventKey="COLLECT" title="COLLECT">
                            <ToolTable tableContent={collectContent} deleteRouteList={deleteRouteList2}/>

                        </Tab>
                        <Tab eventKey="PUMP" title="PUMP">
                            <ToolTable tableContent={pumpContent} deleteRouteList={deleteRouteList2}/>

                        </Tab>
                        <Tab eventKey="SHOOING" title="SHOOING">
                            <ToolTable tableContent={shooContent} deleteRouteList={deleteRouteList2}/>

                        </Tab>
                        <Tab eventKey="DESTROY" title="DESTROY">
                            <ToolTable tableContent={destroyContent} deleteRouteList={deleteRouteList2}/>

                        </Tab>
                        <Tab eventKey="FREEZE" title="FREEZE">
                            <ToolTable tableContent={freezeContent} deleteRouteList={deleteRouteList2}/>

                        </Tab>
                        <Tab eventKey="DROP" title="DROP">
                            <ToolTable tableContent={dropContent} deleteRouteList={deleteRouteList2}/>

                        </Tab>
                        <Tab eventKey="ACTIVATE" title="ACTIVATE">
                            <ToolTable tableContent={activateContent} deleteRouteList={deleteRouteList2}/>

                        </Tab>

                    </Tabs>


                </row>
                {DelModalShow && <DeleteTools show={DelModalShow} id={id} onConfirm={() => setDelModalShow(false)} refreshRecord={() => deleteRouteList(id)} />}

            </section>
        </>

    )
}

export default Tool