import PageTitle from "Components/Pagetitle";
import React from "react";
import { Button } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";

const StakePurchased = () => {
    const navigate = useNavigate();
    const back = () => {
        navigate('/users/User-Profile');
    };
    const columns = [
        {
            name: 'Date',
            selector: row => row.Date,
        },

        {
            name: 'Time',
            selector: row => row.Time,
        },

        {
            name: 'Map Name',
            selector: row => row.title,
        },
        {
            name: 'Quantity',
            selector: row => row.Quantity,
        },



    ];

    const data = [
        {
            id: 1,
            title: 'Map ABC',
            Stake: '111',
            Date: 'Oct. 12, 2022',
            EndDate: 'Nov. 12, 2022',
            Time: '00:11:12',
            Coordinate: 'A1',
            Quantity: '100'
        },
        {
            id: 2,
            title:'Map DEF',
            Stake: '122',
            Date: 'Oct. 10, 2022',
            EndDate: 'Nov. 10, 2022',
            Time: '00:11:12',
            Coordinate: 'A1',
            Quantity: '100'
        },

        {
            id: 3,
            title:'Map GHI',
            Stake: '100',
            Date: 'Oct. 8, 2022',
            EndDate: 'Nov. 8, 2022',
            Time: '00:11:12',
            Coordinate: 'A3',
            Quantity: '100'
        },

        {
            id: 4,
            title:'Map JKL',
            Stake: '98',
            Date: 'Oct. 5, 2022',
            EndDate: 'Nov. 5, 2022',
            Time: '00:11:12',
            Coordinate: 'H5',
            Quantity: '100'
        },

        {
            id: 5,
            title:'Map MNO',
            Stake: '49',
            Date: 'Oct. 2, 2022',
            EndDate: 'Nov. 2, 2022',
            Time: '00:11:12',
            Coordinate: 'L9',
            Quantity: '100'
        },

        {
            id: 6,
            title:'Map PQR',
            Stake: '200',
            Date: 'Sept. 28, 2022',
            EndDate: 'Oct. 28, 2022',
            Time: '00:11:12',
            Coordinate: 'A2',
            Quantity: '100'
        },

        {
            id: 7,
            title:'Map JKL',
            Stake: '98',
            Date: 'Oct. 5, 2022',
            EndDate: 'Nov. 5, 2022',
            Time: '00:11:12',
            Coordinate: 'H5',
            Quantity: '100'
        },


    ]
    return (
        <>
            <PageTitle title="Users" />


            <section>
                <Button onClick={back} variant="transparent font-18 fw-bold ps-0 mb-3" >
                    <i class="fas fa-long-arrow-left mx-2"></i>
                    Stake Purchased Log
                </Button>
                <DataTable
                    // show={props.show}
                    columns={columns}
                    data={data}
                    pagination
                    striped
                />
            </section>
        </>
    );
};

export default StakePurchased;
