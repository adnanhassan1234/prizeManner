import PageTitle from "../../Components/Pagetitle";
import { Row,  Tab, Tabs, Col } from "react-bootstrap";
import CurrentMap from './currentMap';
import ExpiredMap from './ExpiredMap';

import Draft from './Draft';
import MapList from "./currentMap";
import AuthService from "../../services/auth.service";
import {ENDPOINT} from "../../config/constants";
import React, {useEffect, useState} from "react";
import {toast} from "react-toastify";
import DeleteMaps from "./Delete";
import CurrentOnlinePopUp from "./CurrentOnlinePopUp";




const Maps = () => {
    const [data, setData] = useState(null);
    const [DelModalShow, setDelModalShow] = React.useState(false);
    const [id, setId] = React.useState("");
    const [usersModalShow, setUsersModalShow] = React.useState(false);
    const [users, setUsers] = React.useState("");
    const deleteRouteList2 = async (id) => {

        setDelModalShow(true)
        setId(id)


    };

    const usersPopup = async (users) => {

        setUsersModalShow(true)
        setUsers(users)


    };
    const deleteRouteList = async (id) => {


        ENDPOINT.maps.delete.id = id;
        await AuthService.deleteMethod(ENDPOINT.maps.delete.url + ENDPOINT.maps.delete.id, true)
            .then((res) => {
                mapsData();
                // console.log(res.data);
                toast('Map deleted successfully!')
            })
            .catch((err) => {
                // console.log(" ~ file: index.js:38 ~ deleteRouteList ~ err", err)
                // swal("Error", `${AuthService.errorMessageHandler(err)}`, "error");
            });

        setDelModalShow(false)


    };
    const mapsData = async () => {



        await AuthService.getMethod(ENDPOINT.maps.listing, true)
            .then((res) => {
                console.log('maps')
                console.log(res.data)

                setData(res.data);




            })
            .catch((err) => {
                //console.log(" ~ file: index.js:24 ~ assetsRouteGetData ~ err", err)
                // swal("Error", `${AuthService.errorMessageHandler(err)}`, "error");
            });

    };

    useEffect(() => {
        mapsData();
    }, [
    ]);


    return (
        <>
            <PageTitle title="Maps" />

            <section>
                <Tabs
                    defaultActiveKey="currentMap"
                    transition={false}
                >
                    <Tab eventKey="currentMap" title="Current Map">
                        <MapList data={data?.filter(item => ["published"].includes(item.status))} usersPopup={usersPopup} />
                    </Tab>
                    <Tab eventKey="expiredMap" title="Expired Map">
                        <MapList data={data?.filter(item => ["expired"].includes(item.status))} usersPopup={usersPopup}/>
                    </Tab>
                    <Tab eventKey="draft" title="Drafts">
                        <MapList data={data?.filter(item => ["draft"].includes(item.status))} draft={true} deleteRouteList={deleteRouteList2}/>
                    </Tab>
                </Tabs>
                {DelModalShow && <DeleteMaps show={DelModalShow} id={id} onConfirm={() => setDelModalShow(false)} refreshRecord={() => deleteRouteList(id)} />}
                { usersModalShow && <CurrentOnlinePopUp show={usersModalShow} players={users} onConfirm={() => setUsersModalShow(false)} />}

            </section>


        </>
    )
}

export default Maps;