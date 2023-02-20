import React from 'react'
// import PageTitle from "../../Components/Pagetitle";

import CurrentMap from '../currentMap';
import DataTable from 'react-data-table-component';
import { Col, Row } from 'react-bootstrap';
import Search from 'Components/Search';
import { Link } from 'react-router-dom';


const ExpiredMap = () => {
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
                    <span className='dot'></span>100
                </div>


        },
        {
            name: 'Stake Purchased',
            selector: row => row.Purchase,
        },
        {
            name: 'Winner',
            selector: row => row.Winner,
        },

    ];

    const data = [
        {
            id: 1,
            title: 'Map ABC',
            MapData: 'Free Map',
            StartDate: 'Sept. 12, 2022',
            EndDate: 'Sept. 30, 2022',
            CurrentPlayersOnline: '100',
            Purchase: 1000,
            Winner: '-',


        },
        {
            id: 2,
            title: 'Map JKL',
            MapData: 'Pay to Play',
            StartDate: 'Sept. 12, 2022',
            EndDate: 'Sept. 24, 2022',

            Purchase: 1000000,
            Winner: '-',

        },
        {
            id: 3,
            title: 'Map GHI',
            MapData: 'Charity',
            StartDate: 'Sept. 12, 2022',
            EndDate: 'Sept. 16, 2022',

            Purchase: 1000000,
            Winner: '-',
        },
        {
            id: 4,
            title: 'Map JKL',
            MapData: 'Pay to Play',
            StartDate: 'Sept. 12, 2022',
            EndDate: 'Sept. 24, 2022',

            Purchase: 1000000,
            Winner: '-',
        },
        {
            id: 5,
            title: 'Map ABC',
            MapData: 'Free Map',
            StartDate: 'Sept. 12, 2022',
            EndDate: 'Sept. 30, 2022',

            Purchase: 1000,
            Winner: '-',
        },
        {
            id: 6,
            title: 'Map JKL',
            MapData: 'Pay to Play',
            StartDate: 'Sept. 12, 2022',
            EndDate: 'Sept. 24, 2022',

            Purchase: 1000000,
            Winner: '-'
        },


    ]
    return (
        <div>
            {/* <PageTitle title="Maps" /> */}
            <Row className="justify-content-between searchbox align-items-center">
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

        </div>
    )
}

export default ExpiredMap
