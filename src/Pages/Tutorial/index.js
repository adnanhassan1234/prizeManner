import PageTitle from "Components/Pagetitle";
import React from "react";
import {
  Button,
  ButtonGroup,
  Col,
  Dropdown,
  DropdownButton,
  Form,
  Row,
} from "react-bootstrap";
import img from "Images/tutorialImg.png";
import filterImg from "Images/Filter-icon.png";
import DataTable from "react-data-table-component";
import BanUserMadal from "Pages/User/BanUser";
import { useNavigate } from "react-router-dom";
import AddVedioTutorial from "./AddVedioTutorial";
import Delete from "../Tutorial/Delete";

const ModalCLose = () => {};

const Tutorial = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const navigate = useNavigate();
  const AddVedioTutorial = () => {
    navigate("/add-vedio-tutorial");
  };

  const columns = [
    {
      name: "Video Tutorial ",
      selector: (row) => row.title,
    },
    {
      name: "Duration",
      selector: (row) => row.email,
    },
    {
      name: "Date Upload",
      selector: (row) => row.phone,
    },
    {
      name: "Status",
      selector: (row) => row.Status,
      cell: (row) => (
          <div className="drop-down-btn">
            <Dropdown>
              <Dropdown.Toggle
                  variant="publish"
                  id="dropdown-basic"
                  className="drop-down-btn"
              >
                Published
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
      ),
    },

    {
      name: <strong>Action</strong>,
      selector: (row) => row.action,
      //   cell: row => (
      //       <ul className={"action-List"}>

      //           <li><Button  onClick={(()=>{setModalShow(true); })}  variant={"actionBtn text-danger"}><i className={"fal fa-ban"}></i></Button></li>
      //       </ul>
      //   ),
    },
  ];

  const data = [
    {
      id: 1,
      title: (
          <div className={"d-flex align-items-center"}>
            <div className="img-box mx-2">
              <img src={img} alt="" />
            </div>
            Video Tutorial 1
          </div>
      ),
      email: "02:34",
      phone: "Jul 21, 2022",
      age: "Jul 21, 2022",
      Status: "",
      rank: "1",
      action: (
          <Button variant={"actionBtn text-danger"} onClick={() => setModalShow(true)}>
            {" "}
            <i class="far fa-trash"></i>
          </Button>
      ),
    },
    {
      id: 2,
      title: (
          <div className={"d-flex align-items-center"}>
            <div className="img-box mx-2">
              <img src={img} alt="" />
            </div>
            Video Tutorial 2
          </div>
      ),
      email: "02:34",
      phone: "Jul 21, 2022",
      age: "Jul 21, 2022",
      Status: <></>,
      rank: "2",
      action: (
          <Button variant={"actionBtn text-danger"} onClick={() => setModalShow(true)}>
            {" "}
            <i class="far fa-trash"></i>
          </Button>
      ),
    },
  ];
  return (
      <>
        <PageTitle title="Tutorial" />
        <section>
          <Row className="mb-3 ">
            <Col>
              <Row className="align-items-center">
                <Col md={12} className=" d-flex justify-content-end">
                  <Button
                      onClick={AddVedioTutorial}
                      className="btn  btn-delete  mx-2 "
                  >
                    ADD VIDEO
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
          <DataTable
              columns={columns}
              data={data}
              pagination
              striped
          />
        </section>
        <BanUserMadal show={modalShow} onHide={() => setModalShow(false)} />
        <Delete show={modalShow} onHide={() => setModalShow(false)}/>

      </>
  );
};

export default Tutorial;
