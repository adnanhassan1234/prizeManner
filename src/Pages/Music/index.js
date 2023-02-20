import PageTitle from "Components/Pagetitle";
import React from "react";
import { Button, ButtonGroup, Col, Dropdown, DropdownButton, Form, Row } from "react-bootstrap";
import DataTable from "react-data-table-component";
import BanUserMadal from "Pages/User/BanUser";
import { useNavigate } from "react-router-dom";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import Audio from "Audio/SoundHelix-Song-1.mp3";
import Search from "../../Components/Search";
import Delete from "../Music/Delete";

const Music = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const navigate = useNavigate();
  const AddMusic = () => {
    navigate('/music/add-music');
  };


  const columns = [
    {
      name: "Main Game Music",
      selector: (row) => row.title,
      grow :2,

    },
    {
      name: "InGame",
      selector: (row) => row.email,
      cell: row => (
          <div className="drop-down-btn">
            <Dropdown>
              <Dropdown.Toggle variant="light" className="drop-down-btn">
                Main Theme
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
      name: "Duration",
      selector: (row) => row.phone,
    },

    {
      name: "Date Posted",
      selector: (row) => row.age,
    },

    {
      name: "Status",
      selector: (row) => row.Status,
      cell: row => (
          <div className="drop-down-btn">
            <Dropdown>
              <Dropdown.Toggle variant="publish" id="dropdown-basic" className="drop-down-btn">
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
      title: <Row className="audio-background">
        <AudioPlayer style ={{width:'600px'}}
           customVolumeControls={[]}
           customAdditionalControls={[]}
           showDownloadProgress={false}
           showJumpControls={false}
           autoPlay
           src={Audio}
           onPlay={e => console.log("onPlay")}
           header="Main Game Music"

        />
      </Row>,
      email: "",
      phone: "02:34",
      age: "Jul 21, 2022",
      level: "",
      rank: "1",
      action: <Button variant={"actionBtn text-danger"} onClick={() => setModalShow(true)}> <i class="far fa-trash"></i></Button>
    },
    {
      id: 2,
      title: <Row className="audio-background">
        <AudioPlayer style ={{width:'600px'}}
           customVolumeControls={[]}
           customAdditionalControls={[]}
           showDownloadProgress={false}
           showJumpControls={false}
           autoPlay
           src={Audio}
           onPlay={e => console.log("onPlay")}
           header="Last 2 Minutes"
        />
      </Row>,
      email: "",
      phone: "02:34",
      age: "Jul 21, 2022",
      level: "",
      rank: "2",
      action: <Button variant={"actionBtn text-danger"} onClick={() => setModalShow(true)}> <i class="far fa-trash"></i></Button>
    },


  ];
  return (
      <>
        <PageTitle title="Music" />

        <section>
          <div className={'tab-pane'}>
            <Row className="searchbox align-items-center justify-content-between">
              <Col md={3} sm={6} className='my-2'>
                <Search placeholder={"Search Music"} />
              </Col>
              <Col md={3} sm={3} xs={6}>
                <Button onClick={AddMusic} className='btn  btn-delete  mx-2 d-block float-end'>ADD MUSIC</Button>
              </Col>
            </Row>

            <DataTable
                columns={columns}
                data={data}
                pagination
                striped
            />
          </div>
        </section>

        <BanUserMadal show={modalShow} onHide={() => setModalShow(false)} />
        <Delete show={modalShow} onHide={() => setModalShow(false)}/>





      </>
  )
};

export default Music;
