import React, {useState} from "react";
import PageTitle from "../../Components/Pagetitle";
import {Button, Col, Form, Row} from "react-bootstrap";
import DataTable from "react-data-table-component";
import {useNavigate} from "react-router-dom";
import Search from "../../Components/Search";
import AddNewSubAdmins from "../Dashboard/AddNewSubAdmins/AddNewSubAdmins";

const AllSubAdmin = () => {
    const [modalShow, setModalShow] = useState(false);

    const navigate = useNavigate();
    const back = () => {
        navigate('/dashboard');
    };
    const columns = [
        {
            name: <strong>Name of Sub Admin</strong>,
            selector: row => row.name_subAdmin,
            sortable: true,
        },
        {
            name: <strong>Email Address</strong>,
            selector: row => row.email_address,
            sortable: true,
        },
        {
            name: <strong>Phone</strong>,
            selector: row => row.phone,
            sortable: true,
        },
        {
            name: <strong>Temporary Password</strong>,
            selector: row => row.temporary_password,
            sortable: true,
        },
        {
            name: <strong>Action</strong>,
            selector: row => row.action,
            cell: row => (
                <ul className={"action-List"}>
                    <li><Button variant={"actionBtn text-success"}><i className={"fal fa-pen"}></i> </Button></li>
                    <li><Button variant={"actionBtn text-danger"}><i className={"fal fa-ban"}></i></Button></li>
                </ul>
            ),
        },



    ];
    const data = [
        {
            name_subAdmin: "Map ABC",
            email_address: 'Free Map',
            phone:'Sept. 12, 2022',
            temporary_password:'Sept. 30, 2022',
        },
        {
            name_subAdmin: "Map ABC",
            email_address: 'Free Map',
            phone:'Sept. 12, 2022',
            temporary_password:'Sept. 30, 2022',
        },
        {
            name_subAdmin: "Map ABC",
            email_address: 'Free Map',
            phone:'Sept. 12, 2022',
            temporary_password:'Sept. 30, 2022',
        },
        {
            name_subAdmin: "Map ABC",
            email_address: 'Free Map',
            phone:'Sept. 12, 2022',
            temporary_password:'Sept. 30, 2022',
        },
        {
            name_subAdmin: "Map ABC",
            email_address: 'Free Map',
            phone:'Sept. 12, 2022',
            temporary_password:'Sept. 30, 2022',
        },
        {
            name_subAdmin: "Map ABC",
            email_address: 'Free Map',
            phone:'Sept. 12, 2022',
            temporary_password:'Sept. 30, 2022',
        },
        {
            name_subAdmin: "Map ABC",
            email_address: 'Free Map',
            phone:'Sept. 12, 2022',
            temporary_password:'Sept. 30, 2022',
        },

    ]


    return(
        <>
            <PageTitle title={"Sub Admins"} />
            <section>
                <Button onClick={back} variant={"transparent font-18 fw-bold ps-0"}><i className={"fas fa-arrow-left  mx-2"}></i> Sub Admins</Button>
                <Row className="justify-content-between py-3 align-items-center">
                    <Col md={8} sm={6} className="my-2">
                        <Search placeholder="Search Sub Admin" />
                    </Col>
                    <Col md={4} sm={6} className="text-right">
                        <Button className={"m-1"} onClick={() => setModalShow(true)}>ADD SUB ADMIN</Button>
                    </Col>
                </Row>
                <div className={"TableBox"}>
                    <DataTable
                        columns={columns}
                        data={data}
                        //pagination
                        striped
                    />
                </div>
            </section>
            <AddNewSubAdmins
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    )
}

export default AllSubAdmin;