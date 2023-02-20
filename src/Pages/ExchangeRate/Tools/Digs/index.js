import { Button } from "react-bootstrap";
import React from "react";
import DataTable from "react-data-table-component";
import dig1 from "Images/dig1.png";
import dig2 from "Images/dig2.png";
import dig3 from "Images/dig3.png";
import dig4 from "Images/dig4.png";
import EditDigs from "./EditDig";

const ExchangeDigs = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const columns = [
    {
      name: "Images",
      selector: (row) => row.Images,
    },
    {
      name: "Tool Name",
      selector: (row) => row.name,
    },
    {
      name: "Quantity",
      selector: (row) => row.quantity,
    },
    {
      name: "Coins Value",
      selector: (row) => row.coins,
    },
    {
      name: "Action",
      selector: (row) => row.Action,
      cell: (row) => (
          <ul className={"action-List"}>
            <li>
              <Button onClick={() => setModalShow(true)} variant={"actionBtn text-success"}>
                <i className={"fal fa-pen"}></i>{" "}
              </Button>
            </li>
          </ul>
      ),
    },
  ];

  const data = [
    {
      id: 1,
      Images: (
          <div className="img-box p-3">
            <img src={dig1} alt="img" />
          </div>
      ),
      name: "Super Spade v1",
      quantity: "1",
      coins: "20",
      Pound: "£1.00",
    },
    {
      id: 2,
      Images: (
          <div className="img-box p-3">
            <img src={dig2} alt="img" />
          </div>
      ),
      name: "Digger Hands",
      quantity: "5",
      coins: '50',
      Pound: "£2.00",
    },
    {
      id: 3,
      Images: (
          <div className="img-box p-3">
            <img src={dig3} alt="img" />
          </div>
      ),
      name: "Spade",
      quantity: "5",
      coins: '20',
      Pound: "£3.00",
    },
    {
      id: 4,
      Images: (
          <div className="img-box p-3">
            <img src={dig4} alt="img" />
          </div>
      ),
      name: "Super Spade v1",
      quantity: "1",
      coins: '50',
      Pound: "£4.00",
    },
  ];
  return (
      <>
        <DataTable
            columns={columns}
            data={data}
            pagination
            striped
        />;
        <EditDigs
            show={modalShow}
            onHide={() => setModalShow(false)}/>
      </>
  )

};

export default ExchangeDigs;
