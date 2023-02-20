import PageTitle from "Components/Pagetitle";
import React from "react";
import { Button, Col, Dropdown, Form, Row } from "react-bootstrap";
import img from "Images/searchIcon.svg";
import filterImg from "Images/Filter-icon.png";
import DataTable from "react-data-table-component";
import Search from "../../Components/Search";

const LeaderBoard = () => {
    const columns = [
        {
          name: "Name of User",
          selector: (row) => row.title,
        },
        {
          name: "Hours Played",
          selector: (row) => row.hour,
        },
        {
          name: "Email Address",
          selector: (row) => row.email,
        },
        {
          name: "Rank",
          selector: (row) => row.rank,
        },
    
        {
          name: "Age",
          selector: (row) => row.age,
        },
    
        {
          name: "Level",
          selector: (row) => row.level,
        },
      ];
    
      const data = [
        {
          id: 1,
          title: "Marie Smith",
          hour: "1000",
          email: "mariesmith@gmail.com",
          rank: "1",
          age: "18",
          level: "10",
        },
        {
            id: 2,
            title: "Kirth Santo",
            hour: "900",
            email: "mariesmith@gmail.com",
            rank: "2",
            age: "18",
            level: "10",
          },

          {
            id: 3,
            title: "Kirth Santo",
            hour: "800",
            email: "mariesmith@gmail.com",
            rank: "3",
            age: "18",
            level: "10",
          },

          {
            id: 4,
            title: "Jacob Smith",
            hour: "700",
            email: "mariesmith@gmail.com",
            rank: "4",
            age: "18",
            level: "10",
          },

          {
            id: 5,
            title: "Mark Escu",
            hour: "600",
            email: "mariesmith@gmail.com",
            rank: "5",
            age: "18",
            level: "10",
          },

          {
            id: 6,
            title: "Dero Mari",
            hour: "500",
            email: "mariesmith@gmail.com",
            rank: "6",
            age: "18",
            level: "10",
          },

          {
            id: 7,
            title: "Dero Mari",
            hour: "400",
            email: "mariesmith@gmail.com",
            rank: "7",
            age: "18",
            level: "10",
          },

          {
            id: 8,
            title: "Dero Mari",
            hour: "300",
            email: "mariesmith@gmail.com",
            rank: "8",
            age: "18",
            level: "10",
          },

          {
            id: 9,
            title: "Dero Mari",
            hour: "200",
            email: "mariesmith@gmail.com",
            rank: "9",
            age: "18",
            level: "10",
          },

          {
            id: 10,
            title: "Dero Mari",
            hour: "100",
            email: "mariesmith@gmail.com",
            rank: "10",
            age: "18",
            level: "10",
          },
    
      ];
  return (
    <>
    <PageTitle title="Leaderboard" />

    <section>
        <Row className="searchbox align-items-center pt-0 px-0">
          <Col md={3} xs={6} className={'my-2'}>
            <Search placeholder={'Search User'} />
          </Col>
          <Col md={6} xs={6} className={'my-2'}>
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
        </Row>

        <DataTable
            columns={columns}
            data={data}
            pagination
            striped
        />
        </section>

        </>
  )
}

export default LeaderBoard