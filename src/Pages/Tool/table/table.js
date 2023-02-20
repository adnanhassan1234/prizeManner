import Search from 'Components/Search'
import React from 'react'
import { Col, Row ,Button } from 'react-bootstrap'
import DataTable from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';
import UpdateTool from "../UpdateTool";
import { useHistory } from 'react-router-dom'


const ToolTable = (props) => {

    const navigate = useNavigate();
    const AddTool = () => {
        navigate('/tools/add-tool');
    };
    const columns = [

        {
            name: 'Tool Name',
            selector: row => row.name,
        },
        {
            name: 'Attack',
            selector: row => row.attack,
        },
        {
            name: 'Area Of Effect',
            selector: row => row.area_of_effect,

        },
        {
            name: 'Use Limit',
            selector: row => row.user_limit === -1?"Infinite":row.user_limit,
        },
        {
            name: 'Action Available',
            selector: row => row.PlayersPlayed,
            cell: row => row.tool_type

        },
        {
            name: 'Coin Cost',
            selector: row => row.coin_cost,

        },
        {
            name: 'Level',
            selector: row => row.level,

        },
        {
            name: 'Time Limit',
            selector: row => row.time_limit,

        },
        {
            name: 'Action',
            cell: row =>
                <div className='action-list'>
                    <Button variant='actionBtn text-green ' onClick={() => navigate('/tools/edit-tool',{state:{row}})}> <i class="far fa-pen"></i></Button>
                    <Button  variant='actionBtn text-danger' onClick={() => {
                        props.deleteRouteList(row.id)
                    }}> <i class="fal fa-trash"></i></Button>
                </div>
        },

    ];

    return (
        <>
            <Row className={'searchbox '}>
                <Col md={6} className='my-2'>
                    <Search placeholder={"Search Tools"}/>
                </Col>
                <Col md={6} className='text-right'>
                    <Button onClick={AddTool}  to={"#"}>ADD TOOL</Button>
                </Col>
            </Row>
            <DataTable
                columns={columns}
                data={props.tableContent}
                pagination
                striped
            />
        </>
    )
}

export default ToolTable
