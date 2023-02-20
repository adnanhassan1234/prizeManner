import Search from 'Components/Search'
import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import DataTable from 'react-data-table-component'
import img from "Images/coin-img.png";
import EditCoin from './EditCoin';

const Coins = () => {
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
      name: "QTY",
      selector: (row) => row.qty,
    },
    {
      name: "Pound Equivalent",
      selector: (row) => row.Pound,
    },
    {
      name: "Action",
      selector: (row) => row.Action,
      cell: row => (
          <ul className={"action-List"}>
            <li><Button  onClick={() => setModalShow(true)} variant={"actionBtn text-success"}><i className={"fal fa-pen"}></i> </Button></li>
          </ul>
      ),
    },

  ];

  const data = [
    {
      id: 1,
      qty: "10",
      Pound: "£1.00",

    },
    {
      id: 2,
      qty: "20",
      Pound: "£2.00",
    },
    {
      id: 3,
      qty: "30",
      Pound: "£3.00",
    },
    {
      id: 4,
      qty: "40",
      Pound: "£4.00",

    },
    {
      id: 5,
      qty: "50",
      Pound: "£5.00",

    },
    {
      id: 6,
      qty: "100",
      Pound: "£6.00",
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
        <EditCoin show={modalShow} onHide={() => setModalShow(false)}/>
      </>
  )

}

export default Coins