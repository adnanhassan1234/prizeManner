import PageTitle from "Components/Pagetitle";
import React from "react";
import { Button, ButtonGroup, Col, Dropdown, DropdownButton, Form, Row } from "react-bootstrap";
import img from "Images/adsIMG.png";
import filterImg from "Images/Filter-icon.png";
import DataTable from "react-data-table-component";
import BanUserMadal from "Pages/User/BanUser";
import { useNavigate } from "react-router-dom";




const ModalCLose = (() => {


})

const Ads = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const navigate = useNavigate();
    const AddMusic = () => {
        navigate('/ads/add-exchange');
    };


    const columns = [
        {
            name: "Advertisement Video",
            selector: (row) => row.title,
        },
        {
            name: "Ads From",
            selector: (row) => row.email,
        },
        {
            name: "Gem Value",
            selector: (row) => row.phone,
        },



        {
            name: <strong>Action</strong>,
            selector: row => row.action,
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
            title: <>
                <div className="img-box">
                    <img src={img} alt="" />
                </div>
            </>,
            email: "Farm Heroes",
            phone: "10",
            age: "Jul 21, 2022",
            level: <>
                <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>
            </>,
            rank: "1",
            action: <Button variant={"actionBtn text-danger"}> <i class="far fa-trash"></i></Button>
        },




    ];
    return (
        <>
            <PageTitle title="Ads Exchange" />

            <section>
                <Row className="mb-3 ">
                    <Col>
                        <Row className="align-items-center">
                            <Col lg={2}>
                                <Form.Group className="d-flex" controlId="exampleForm.ControlInput1">
                                    <Form.Label> <strong>Default Gem Reward</strong> </Form.Label>

                                </Form.Group>
                            </Col>
                            <Col md={4} className='mb-md-0 mb-3'>
                                <Form.Control type="text" />
                            </Col>
                            <Col md={2} xs={4}>
                                <Button className='btn  btn-delete '>SAVE</Button>
                            </Col>
                            <Col lg={4} md={6} xs={8} className=" d-flex justify-content-end">
                                <Button onClick={AddMusic} className='btn  btn-delete  mx-2 '>ADD ADVERTISEMENT</Button>
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




        </>
    )
};

export default Ads;
