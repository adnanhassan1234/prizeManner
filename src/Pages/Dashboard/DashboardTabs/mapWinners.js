import CurrentOnlinePopUp from "Pages/Maps/CurrentOnlinePopUp";
import React from "react";
import { Button} from "react-bootstrap";

import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";

const MapWinners = () => {
    const navigate = useNavigate();
    const SupportLink = () => {
        navigate('/support');
    };
    const [modalShow, setModalShow] = React.useState(false);
    const columns = [
        {
            name: <strong>Map Name</strong>,
            selector: row => row.map_name,
            
        },
        {
            name: <strong>Map Type</strong>,
            selector: row => row.map_type,
            
        },
        {
            name: <strong>Start Date</strong>,
            selector: row => row.start_date,
            
        },
        {
            name: <strong>End Date</strong>,
            selector: row => row.end_date,
            
        },
        {
            name: <strong>Current Players Online</strong>,
            selector: row => row.current_players_online,
            
            cell:row=>(<span onClick={() => setModalShow(true)} className={"online"}>100</span>),
        },
        {
            name: <strong>Stake Purchased</strong>,
            selector: row => row.stake_purchased,
            
        },

        {
            name: <strong>Winner</strong>,
            selector: row => row.winner,
            
        },
        {
            name: <strong>Action</strong>,
            selector: row => row.action,
            cell: row => (
                <Button variant="dropdownToggle" onClick={SupportLink}><i className={"fas fa-comment-dots fa-fw"}></i></Button>
            ),
        },



    ];
    const data = [
        {
            map_name: "Map ABC",
            map_type: 'Free Map',
            start_date:'Sept. 12, 2022',
            end_date:'Sept. 30, 2022',
            current_players_online:<span  className={"online"}>100</span>,
            stake_purchased:"1,000",
            winner: "Aleisha10",
            //action: "action"
        },
        {
            map_name: "Map ABC",
            map_type: 'Free Map',
            start_date:'Sept. 12, 2022',
            end_date:'Sept. 30, 2022',
            current_players_online:<span className={"online"}>100</span>,
            stake_purchased:"1,000",
            winner: "Aleisha10",
            //action: "action"
        },
        {
            map_name: "Map ABC",
            map_type: 'Free Map',
            start_date:'Sept. 12, 2022',
            end_date:'Sept. 30, 2022',
            current_players_online:<span className={"online"}>100</span>,
            stake_purchased:"1,000",
            winner: "Aleisha10",
            //action: "action"
        },

    ]
    return(
        <>
            <DataTable
                columns={columns}
                data={data}
                pagination
                striped
            />
           
            <CurrentOnlinePopUp 
                show={modalShow} 
                onHide={() => setModalShow(false)}
            />
        </>
    )
}

export default MapWinners;