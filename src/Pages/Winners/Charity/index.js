import React from "react";
import { Col, Row } from "react-bootstrap";
import DataTable from "react-data-table-component";
import UserProfile from "Pages/User/UserProfile";
import Search from "Components/Search";

const Charity = () => {
  const columns = [
    {
      name: "Winner Name",
      selector: (row) => row.title,
    },
    {
      name: "Stakes",
      selector: (row) => row.Stake,
    },
    {
      name: "Start Date",
      selector: (row) => row.StartDate,
    },
    {
      name: "End Date",
      selector: (row) => row.EndDate,
    },

    {
      name: "Time",
      selector: (row) => row.Time,
    },

    {
      name: "Coordinates",
      selector: (row) => row.Coordinate,
    },
  ];

  const data = [
    {
      id: 1,
      title: <span onClick={UserProfile}>Matt Brownee</span>,
      Stake: "99",
      StartDate: "Oct. 5, 2022",
      EndDate: "Nov. 5, 2022",
      Time: "00:11:12",
      Coordinate: "A1",
    },

  ];
  return (
      <>
        <Row className="searchbox align-items-center">
          <Col md={12} className={'my-2'}>
          <Search placeholder="Search"/>
          </Col>
        </Row>
        <DataTable
          // show={props.show}
          columns={columns}
          data={data}
          pagination
          striped
        />
      </>
  );
};

export default Charity;
