import PageTitle from "Components/Pagetitle";
import React from "react";
import { Button, Col, Dropdown, Form, Row } from "react-bootstrap";
import DataTable from "react-data-table-component";
import price_img1 from "Images/prize-img1.png";
import filterImg from "Images/Filter-icon.png";
import Search from "Components/Search";
import {useNavigate} from "react-router-dom";
import Delete from "../PrizeInfo/Delete";

const PrizeInfo = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const navigate = useNavigate();

  const addPrize = () => {
    navigate('/prize-info/add-prize');
  };


  const columns = [
    {
      name: <strong>Live</strong>,
      selector: (row) => row.map_name,
      sortable: true,
      cell: (row) => <Form.Check type="switch" id="custom-switch" />,
      grow: 1,
    },
    {
      name: <strong>Prize Image</strong>,
      selector: (row) => row.map_type,
      sortable: true,
      cell: (row) => <img src={price_img1} alt="img" />,
    },
    {
      name: <strong>Prize Name</strong>,
      selector: (row) => row.prizename,
      sortable: true,
    },
    {
      name: <strong>DESCRIPTION</strong>,
      selector: (row) => row.dec,
      sortable: true,
    },
    {
      name: <strong>Required Level</strong>,
      selector: (row) => row.level,
      sortable: true,
    },
    {
      name: <strong>Age Restriction</strong>,
      selector: (row) => row.agrRes,
      sortable: true,
    },

    {
      name: "Action",
      cell: (row) => (
          <div className="action-list">
            <Button variant="actionBtn text-green" onClick={addPrize}>
              {" "}
              <i class="far fa-pen"></i>
            </Button>
            <Button variant="actionBtn text-danger" onClick={() => setModalShow(true)}>
              <i class="fal fa-trash"></i>
            </Button>
          </div>
      ),
    },
  ];
  const data = [
    {
      prizename: "Playstation 5",
      dec: <p className="dec">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at id sed proin ornare neque pellentesque. Ut elit id neque, sagittis, urna amet, curabitur nibh fringilla."</p>,
      level: "10",
      agrRes: "Less than 5 y/o",
      winner: "Aleisha10",
      //action: "action"
    },

    {
      prizename: "X box",
      dec: <p className="dec">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at id sed proin ornare neque pellentesque. Ut elit id neque, sagittis, urna amet, curabitur nibh fringilla."</p>,
      level: "10",
      agrRes: "Less than 5 y/o",
      winner: "Aleisha10",
      //action: "action"
    },

    {
      prizename: "Jetski",
      dec: <p className="dec">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at id sed proin ornare neque pellentesque. Ut elit id neque, sagittis, urna amet, curabitur nibh fringilla."</p>,
      level: "100",
      agrRes: "Less than 15 y/o",
      winner: "Aleisha10",
      //action: "action"
    },

    {
      prizename: "Tennis Set",
      dec: <p className="dec">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at id sed proin ornare neque pellentesque. Ut elit id neque, sagittis, urna amet, curabitur nibh fringilla."</p>,
      level: "100",
      agrRes: "Less than 15 y/o",
      winner: "Aleisha10",
      //action: "action"
    },

    {
      prizename: "Iphone 14 pro",
      dec: <p className="dec">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at id sed proin ornare neque pellentesque. Ut elit id neque, sagittis, urna amet, curabitur nibh fringilla."</p>,
      level: "100",
      agrRes: "Less than 15 y/o",
      winner: "Aleisha10",
      //action: "action"
    },
    {
      prizename: "Trip to Paris",
      dec: <p className="dec">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at id sed proin ornare neque pellentesque. Ut elit id neque, sagittis, urna amet, curabitur nibh fringilla."</p>,
      level: "100",
      agrRes: "Less than 15 y/o",
      winner: "Aleisha10",
      //action: "action"
    },
    {
      prizename: "Macbook Pro",
      dec: <p className="dec">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at id sed proin ornare neque pellentesque. Ut elit id neque, sagittis, urna amet, curabitur nibh fringilla."</p>,
      level: "100",
      agrRes: "Less than 15 y/o",
      winner: "Aleisha10",
      //action: "action"
    },
  ];
  return (
      <>
        <PageTitle title="Prize Information" />

        <section>
          <div className={'tab-pane'}>
            <Row className="searchbox  align-items-center">
              <Col md={3} sm={6} className='my-2'>
                <Search placeholder="Search Prize"/>
              </Col>
              <Col md={6} sm={3} xs={6} className={'my-2'}>
                <Dropdown>
                  <Dropdown.Toggle
                      id="filterDropDown"
                      variant="outline-light"
                      className="drop-btn"
                  >
                    Filter <img src={filterImg} alt="img" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
              <Col md={3} sm={3} xs={6} className="text-end my-2">
                <Button onClick={addPrize} type="button">
                  ADD A PRIZE
                </Button>
              </Col>
            </Row>

            <div className="cust-data">
              <DataTable
                  columns={columns}
                  data={data}
                  pagination
                  striped
              />
            </div>
          </div>
        </section>

        <Delete show={modalShow} onHide={() => setModalShow(false)}/>

      </>
  );
};

export default PrizeInfo;
