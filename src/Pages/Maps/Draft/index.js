// import AddNewSubAdmins from 'Pages/Dashboard/AddNewSubAdmins';
import Search from 'Components/Search';
import React from 'react'
import { Col, Row, Button, } from "react-bootstrap";
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import DeleteMap from '../BuildMap/DeletePopUp';

const Draft = (props) => {
    const [modalShow, setModalShow] = React.useState(false);

    const columns = [

        {
            name: 'Map Name',
            selector: row => row.title,
        },
        {
            name: 'Map Type',
            selector: row => row.MapData,
        },
        {
            name: 'Start Date',
            selector: row => row.StartDate,

        },
        {
            name: 'End Date',
            selector: row => row.EndDate,
        },
        {
            name: 'Players Played',
            selector: row => row.PlayersPlayed,
            cell: row =>
                <div className='CurrentPlayersOnline'>

                </div>
        },
        {
            name: 'Winner',
            selector: row => row.Winner,
        },
        {
            name: 'Action',
            cell: row =>
                <div className='action-list'>
                    <Link to={"/maps/create-map"} className='btn btn-actionBtn text-green'> <i class="far fa-pen"></i></Link>
                    <Button  onClick={() => setModalShow(true)} variant='actionBtn text-danger'> <i class="fal fa-trash"></i></Button>
                </div>
        },

    ];

    const data = [
        {
            id: 1,
            title: 'Map ABC',
            MapData: 'Free Map',
            StartDate: 'Sept. 12, 2022',
            EndDate: '-',
            CurrentPlayersOnline: '100',
            Purchase: 1000,

        },
        {
            id: 2,
            title: 'Map JKL',
            MapData: 'Pay to Play',
            StartDate: 'Sept. 12, 2022',
            EndDate: '-',
            Purchase: 1000000,

        },
        {
            id: 3,
            title: 'Map GHI',
            MapData: 'Charity',
            StartDate: 'Sept. 12, 2022',
            EndDate: '-',
            Purchase: 1000000,
        },
        {
            id: 4,
            title: 'Map JKL',
            MapData: 'Pay to Play',
            StartDate: 'Sept. 12, 2022',
            EndDate: '-',
            Purchase: 1000000,
        },
        {
            id: 5,
            title: 'Map ABC',
            MapData: 'Free Map',
            StartDate: 'Sept. 12, 2022',
            EndDate: '-',
            Purchase: 1000,
        },
        {
            id: 6,
            title: 'Map JKL',
            MapData: 'Pay to Play',
            StartDate: 'Sept. 12, 2022',
            EndDate: '-',
            Purchase: 1000000,
        },


    ]
    return (
        <>
            <Row className="justify-content-between align-items-center searchbox">
                <Col md={8} sm={6} className="my-2">
                    <Search placeholder="Search" />
                </Col>
                <Col md={4} sm={6} className="text-right">
                    <Link to={"/maps/create-map"} className="btn btn-primary py-2">
                        Build Map
                    </Link>
                </Col>
            </Row>
            <DataTable
                columns={columns}
                data={data}
                pagination
                striped
            />
            <DeleteMap show={modalShow} onHide={() => setModalShow(false)} />
        </>

    )
}

export default Draft
