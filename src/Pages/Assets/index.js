import PageTitle from 'Components/Pagetitle'

import React, { useState, useEffect } from 'react';
import { Tab, Tabs } from 'react-bootstrap'

import { ENDPOINT, KEY } from "config/constants";
import AuthService from "services/auth.service";

import EditAssets from "./Substrates/EditAssets/EditAssets";
import DeleteAssetPopUp from "./Delete/index";
import Loader from "../../Components/Loader";
import TableData from "./Component/table";
import { toast } from "react-toastify";


function Assets() {

    const [subStratesContent, setSubstratesContent] = useState([]);
    const [landScapeContent, setLandScapeContent] = useState([]);
    const [animalsContent, setAnimalsContent] = useState([]);
    const [equipmentContent, setEquipmentContent] = useState([]);
    const [infrastructureContent, setInfrastructureContent] = useState([]);
    const [isLoader, setIsLoader] = useState(false);
    const [EditRecord, setEditRecord] = useState({});
    const [EditModalShow, setEditModalShow] = React.useState(false);
    const [DelModalShow, setDelModalShow] = React.useState(false);
    const [id, setId] = React.useState("");
    const [isLoading, setIsLoading] = useState(false);


    const handleEdit = (record) => {
        console.log(record)
        setEditRecord(record);
        setEditModalShow(true);
    }

    const assetsRouteGetData = async () => {

        await AuthService.getMethod(ENDPOINT.assets.listing, true)
            .then((res) => {
                setSubstratesContent(res.data.filter(data => ["substrates"].includes(data.asset_type)));
                setLandScapeContent(res.data.filter(data => ["landscape"].includes(data.asset_type)));
                setAnimalsContent(res.data.filter(data => ["animals"].includes(data.asset_type)));
                setEquipmentContent(res.data.filter(data => ["equipment"].includes(data.asset_type)));
                setInfrastructureContent(res.data.filter(data => ["infrastructure"].includes(data.asset_type)));
                setIsLoader(true);
                //console.log("get assets", res.data);
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


        ENDPOINT.assets.delete.id = id;
        await AuthService.deleteMethod(ENDPOINT.assets.delete.url + ENDPOINT.assets.delete.id, true)
            .then((res) => {
                assetsRouteGetData();
                // console.log(res.data);
                toast("Asset deleted successfully!")
            })
            .catch((err) => {
                // console.log(" ~ file: index.js:38 ~ deleteRouteList ~ err", err)
                // swal("Error", `${AuthService.errorMessageHandler(err)}`, "error");
            });

        setDelModalShow(false)


    };

    useEffect(() => {
        assetsRouteGetData();
    }, []);


    if (!isLoader) {
        return (
            <Loader isLoading={isLoading} />
        );
    }


    return (
        <>
            <PageTitle title={"Assets"} />

            <section>

                <row>
                    <Tabs
                        defaultActiveKey="DIG"
                        transition={false}
                    >
                        <Tab eventKey="DIG" title="SUBSTRATES">
                            <TableData tableContent={subStratesContent} deleteRouteList={deleteRouteList2}
                                handleEdit={handleEdit} />
                        </Tab>
                        <Tab eventKey="SMASH" title="LANDSCAPE">
                            <TableData tableContent={landScapeContent} deleteRouteList={deleteRouteList2}
                                handleEdit={handleEdit} />
                        </Tab>
                        <Tab eventKey="CUT" title="ANIMALS">
                            <TableData tableContent={animalsContent} deleteRouteList={deleteRouteList2}
                                handleEdit={handleEdit} />
                        </Tab>
                        <Tab eventKey="EXCAUATE" title=" EQUIPMENT">
                            <TableData tableContent={equipmentContent} deleteRouteList={deleteRouteList2}
                                handleEdit={handleEdit} />
                        </Tab>
                        <Tab eventKey="COLLECT" title="INFRASTRUCTURE">
                            <TableData tableContent={infrastructureContent} deleteRouteList={deleteRouteList2}
                                handleEdit={handleEdit} />
                        </Tab>
                    </Tabs>
                </row>
                {DelModalShow && <DeleteAssetPopUp show={DelModalShow} id={id} onConfirm={() => setDelModalShow(false)}
                    refreshRecord={() => deleteRouteList(id)} />}
                {EditModalShow &&
                    <EditAssets data={EditRecord} show={EditModalShow} onHide={() => setEditModalShow(false)}
                        reload={assetsRouteGetData} />}

            </section>


        </>

    )
}

export default Assets
