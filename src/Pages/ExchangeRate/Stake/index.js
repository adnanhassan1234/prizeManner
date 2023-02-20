import React from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import img from 'Images/Stake-img.png'
import Search from 'Components/Search';
import EditStake from './EditStake';

const StakeEx = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const columns = [
        {
            name: "Images",
            selector: (row) => row.Images,
            cell: (row) =>(
                <div className="img-box p-3">
                    <img src={img} alt="img" />
                </div>
            ),
        },
        {
            name: "Coin Cost",
            selector: (row) => row.cost,
        },

        {
            name: "Action",
            selector: (row) => row.Action,
            cell: row => (
                <ul className={"action-List"}>
                    <li><Button onClick={() => setModalShow(true)} variant={"actionBtn text-success"}><i className={"fal fa-pen"}></i> </Button></li>
                </ul>
            ),
        },

    ];

    const data = [
        {
            id: 1,
            cost: "50",
            Pound: "£1.00",

        },

    ];
    return (
        <>
            <Row className={'searchbox'}>
                <Col md={12} className={"my-2"}><Search placeholder={'Search'} /></Col>
            </Row>
            <DataTable
                columns={columns}
                data={data}
                pagination
                striped
            />
            <EditStake  show={modalShow} onHide={() => setModalShow(false)}/>
        </>
    )

}

export default StakeEx