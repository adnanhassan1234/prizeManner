import Search from 'Components/Search'
import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import DataTable from 'react-data-table-component'
import img from "Images/PrizeMiner.png";
import EditExp from './EditExp';
const EXP = () => {
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
      name: "Hours",
      selector: (row) => row.Hours,
    },
    {
      name: "EXP Points",
      selector: (row) => row.Points,
    },
    {
      name: "Coin Cost",
      selector: (row) => row.coincost,
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
      Hours: "1",
      Points: "1000",
      coincost: "50",

    },
    {
      id: 2,
      Hours: "2",
      Points: "10000",
      coincost: "20",
    },
    {
      id: 3,
      Hours: "3",
      Points: "100000",
      coincost: "50",
    },
    {
      id: 4,
      Hours: "10",
      Points: "1000000",
      coincost: "20",
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
        <EditExp show={modalShow} onHide={() => setModalShow(false)} />
      </>
  )
}

export default EXP