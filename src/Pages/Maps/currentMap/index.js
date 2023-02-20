import React, {useState} from "react";
import DataTable from "react-data-table-component";
import WinnerPopUp from "../WinnerPopUp";
import {Row, Tab, Tabs, Col, Button} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import Search from "Components/Search";

const MapList = (props) => {
    const [modalShow, setModalShow] = React.useState(false);
    const [isDraft, setIsDraft] = useState(props.draft);
    const navigate = useNavigate();

    const columns = [
        {
            name: "Map Name",
            selector: (row) => row.name,
        },
        {
            name: "Map Type",
            selector: (row) => row.map_type,
        },
        {
            name: "Start Date",
            selector: (row) => row.start_date,
        },
        {
            name: "End Date",
            selector: (row) => row.end_date,
        },


    ];
    if (isDraft) {
        columns.push({
            name: 'Action',
            cell: row =>
                <div className='action-list'>
                    <i
                        class="far fa-pen" onClick={() => navigate('/maps/create-map', {state: {row}})}></i>
                    <Button onClick={() => {
                        props.deleteRouteList(row.id)
                    }} variant='actionBtn text-danger'> <i
                        class="fal fa-trash"></i></Button>
                </div>


        },);
    } else {
        columns.push({
            name: "Current Players Online",
            selector: (row) => row.mapUsers,
            cell: (row) => (
                <div className="CurrentPlayersOnline" onClick={() => {
                    props.usersPopup(row.mapUsers)
                }}>
                    <span className="dot"></span>{row.mapUsers?.length ?? 0}
                </div>
            ),
        }, {
            name: "Winner",
            selector: (row) => row.user?.first_name ?? "No Winner Yet",
        }, {
            name: "Stake Purchased",
            selector: (row) => row.mapUsers?.reduce((acc, user) => acc + user.stake, 0),
        },)


    }

    return (
        <div>
            <Row className="justify-content-between align-items-center searchbox">
                <Col md={8} sm={6} className="my-2">
                    <Search placeholder="Search"/>
                </Col>
                <Col md={4} sm={6} className="text-right">
                    <Link to={"/maps/create-map"} className="btn btn-primary py-2">
                        Build Map
                    </Link>
                </Col>
            </Row>
            <DataTable
                // show={props.show}
                columns={columns}
                data={props.data}
                pagination
                striped
            />
        </div>
    );
};

export default MapList;
