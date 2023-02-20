import PageTitle from "Components/Pagetitle";
import React from "react";
import { Button, Col, Dropdown, Form, Row } from "react-bootstrap";
import img from "Images/searchIcon.svg";
import filterImg from "Images/Filter-icon.png";
import DataTable from "react-data-table-component";
import BanUserMadal from "./BanUser";
import Search from "../../Components/Search";
import {Link} from "react-router-dom";



const ModalCLose =(()=>{

})
const Users = () => {
  const [modalShow, setModalShow] = React.useState(false);


  const columns = [
    {
      name: "Name of User",
      selector: (row) => row.title,
    },
    {
      name: "Email Address",
      selector: (row) => row.email,
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
    },

    {
      name: "Age",
      selector: (row) => row.age,
    },

    {
      name: "Level",
      selector: (row) => row.level,
    },

    {
      name: <strong>Action</strong>,
      selector: row => row.action,
      cell: row => (
          <ul className={"action-List"}>
            <li><Link to={"/users/User-Profile"} className={"btn btn-actionBtn text-success"}><i className={"fal fa-eye"}></i> </Link></li>
            <li><Button  onClick={(()=>{setModalShow(true); })}  variant={"actionBtn text-danger"}><i className={"fal fa-ban"}></i></Button></li>
          </ul>
      ),
    },




  ];

  const data = [
    {
      id: 1,
      title: "Marie Smith",
      email: "mariesmith@gmail.com",
      phone: "Android",
      age: "18",
      level: "10",
      rank: "1",
    },
    {
      id: 2,
      title: "Kirth Santo",
      email: "mariesmith@gmail.com",
      phone: "Apple",
      age: "18",
      level: "10",
      rank: "2",
    },

    {
      id: 3,
      title: "Kirth Santo",
      email: "mariesmith@gmail.com",
      phone: "Android",
      age: "18",
      level: "10",
      rank: "3",
    },

    {
      id: 4,
      title: "Jacob Smith",
      email: "mariesmith@gmail.com",
      phone: "Android",
      age: "18",
      level: "10",
      rank: "4",
    },

    {
      id: 5,
      title: "Mark Escu",
      email: "mariesmith@gmail.com",
      phone: "Apple",
      age: "18",
      level: "10",
      rank: "5",
    },

    {
      id: 6,
      title: "Dero Mari",
      email: "mariesmith@gmail.com",
      phone: "Android",
      age: "18",
      level: "10",
      rank: "6",
    },

    {
      id: 7,
      title: "Dero Mari",
      email: "mariesmith@gmail.com",
      phone: "Apple",
      age: "18",
      level: "10",
      rank: "7",
    },

    {
      id: 8,
      title: "Dero Mari",
      email: "mariesmith@gmail.com",
      phone: "Android",
      age: "18",
      rank: "8",
      level: "10",
    },

    {
      id: 9,
      title: "Dero Mari",
      email: "mariesmith@gmail.com",
      phone: "Android",
      age: "18",
      level: "10",
      rank: "9",
    },

    {
      id: 10,
      title: "Dero Mari",
      email: "mariesmith@gmail.com",
      phone: "Apple",
      age: "18",
      level: "10",
      rank: "10",
    },

  ];
  return (
      <>
        <PageTitle title="Users" />

        <section>
          <Row className="searchbox px-0 pt-0">
            <Col md={12} className="my-2">
              <Search placeholder="Search User" />
            </Col>
          </Row>

          <DataTable
              columns={columns}
              data={data}
              pagination
              striped
          />
        </section>

        <BanUserMadal show={modalShow} onHide={() => setModalShow(false)}/>



      </>
  )
};

export default Users;
