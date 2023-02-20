import React from 'react'
import { Col, Row } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';
import Search from 'Components/Search';

const FreeToPlay = () => {
    const navigate = useNavigate();
    const UserProfle = () => {
        navigate('/User-Profile');
    };
    const columns = [

        {
            name: 'Winner Name',
            selector: row => row.title,
        },
        {
            name: 'Stakes',
            selector: row => row.Stake,
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
            name: 'Time',
            selector: row => row.Time,
        },

        {
            name: 'Coordinates',
            selector: row => row.Coordinate,
        },


    ];

    const data = [
        {
            id: 1,
            title: <span onClick={UserProfle}> James</span>,
            Stake: '111',
            StartDate: 'Oct. 12, 2022',
            EndDate: 'Nov. 12, 2022',
            Time: '00:11:12',
            Coordinate: 'A1',
        },
        {
            id: 2,
            title:<span onClick={UserProfle}>George Walter</span>,
            Stake: '122',
            StartDate: 'Oct. 10, 2022',
            EndDate: 'Nov. 10, 2022',
            Time: '00:11:12',
            Coordinate: 'A1',
        },

        {
            id: 3,
            title:<span onClick={UserProfle}>Andrew Josh</span>,
            Stake: '100',
            StartDate: 'Oct. 8, 2022',
            EndDate: 'Nov. 8, 2022',
            Time: '00:11:12',
            Coordinate: 'A3',
        },

        {
            id: 4,
            title:<span onClick={UserProfle}>Bill Parker</span>,
            Stake: '98',
            StartDate: 'Oct. 5, 2022',
            EndDate: 'Nov. 5, 2022',
            Time: '00:11:12',
            Coordinate: 'H5',
        },

        {
            id: 5,
            title:<span onClick={UserProfle}>Malisha Samantha</span>,
            Stake: '49',
            StartDate: 'Oct. 2, 2022',
            EndDate: 'Nov. 2, 2022',
            Time: '00:11:12',
            Coordinate: 'L9',
        },

        {
            id: 6,
            title:<span onClick={UserProfle}>Ann Danials</span>,
            Stake: '200',
            StartDate: 'Sept. 28, 2022',
            EndDate: 'Oct. 28, 2022',
            Time: '00:11:12',
            Coordinate: 'A2',
        },


    ]
    return (
        <>
            <Row className="searchbox align-items-center">
                <Col md={12} className={'my-2'}>
                    <Search placeholder="Search"/>
                </Col>
            </Row>
            <DataTable
                // show={props.show}
                columns={columns}
                data={data}
                pagination
                striped
            />
        </>
    )
}

export default FreeToPlay