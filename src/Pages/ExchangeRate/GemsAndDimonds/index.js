import React from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import dimond from 'Images/dimond.png'
import gem from 'Images/gems.png'
import Search from 'Components/Search';
import EditGems from './EditGems';


const GemsAndDimonds = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const columns = [
        {
            name: "Images",
            selector: (row) => row.Images,
        },
        {
            name: "Gem QTY",
            selector: (row) => row.qty,
        },
        {
            name: "Coin Cost",
            selector: (row) => row.Pound,
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
            qty: "1",
            Pound: "20",
            Images:  <div className="img-box p-3">
                <img src={dimond} alt="img" />
            </div>

        },
        {
            id: 2,
            qty: "1",
            Pound: "50",
            Images:  <div className="img-box p-3">
                <img src={gem} alt="img" />
            </div>
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

            <EditGems show={modalShow} onHide={() => setModalShow(false)}/>
        </>
    )

}

export default GemsAndDimonds