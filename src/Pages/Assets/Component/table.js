import Search from "../../../Components/Search";
import React, { useState, useEffect } from 'react';
import { Col, Row ,Button } from 'react-bootstrap'
import DataTable from "react-data-table-component";


const  TableData  = (props) => {


    const columns = [

        {
            name: 'Asset Name',
            selector: row => row.name,

        },
        {
            name: 'Strength',
            selector: row => row.strength,

        },
        {
            name: 'Covered Area',
            selector: row => row.covered_area,

        },
        {
            name: 'Map Layer',
            selector: row => row.assetAllowedLayers.map((data,key) => {
                return (
                    <>
                        {key !== 0 ? ",":""} {(data.layer) ? data.layer : "-" }
                    </>
                )
            }),
        },
        {
            name: 'EXP Gained',
            selector: row => (row.experience_gained) ? row.experience_gained : "-" ,
        },
        {

            name: 'Action to Remove',
            selector: row => row.assetActions.map((data,key) => {
                return (
                    <>
                        {key !== 0 ? ",":""}   {(data.action) ? data.action : "-" }
                    </>
                )
            }),

        },
        {
            name: 'Coin',
            selector: row => row.coin_gained,
            //     cell: row =>
            //     <div className='Winner'>
            //     -
            //   </div>
        },
        {
            name: 'Stake',
            selector: row => row.stake,
            cell: row =>
                <div className='Winner'>
                    {row.stake ? "Yes" : "No"}
                </div>
        },
        {
            name: 'Action',
            cell: row =>
                <div className='action-list'>
                    <Button onClick={()=>props.handleEdit(row)}  variant='actionBtn text-green '> <i class="far fa-pen ms-2"></i></Button>
                    <Button  variant='actionBtn text-danger'
                             onClick={() => {
                                 props.deleteRouteList(row.id)
                             }}
                        // onClick={() => setDeleteItem(true)}
                    > <i class="fal fa-trash"></i></Button>
                </div>
        },

    ];

    return (
        <>
            <Row className={'searchbox'}>
                <Col md={4} sm={6} xs={12} className='my-2'><Search placeholder={"Search Assets"} /></Col>
                {/*<Col md={8} sm={6} className="text-right float-right">*/}
                {/*<Link to={"/create-assets"}  className="btn btn-primary py-2">*/}
                {/*        Add Assets*/}
                {/*    </Link>*/}
                {/*</Col>*/}
            </Row>
            <DataTable
                columns={columns}
                data={props.tableContent}
                pagination
                striped
            />

            {/*<EditAssets  show={EditModalShow} onHide={() => setEditModalShow(false)} />*/}
            {/* <DeletePopup  show={deleteItem} onHide={() => setDeleteItem(false)} /> */}

        </>
    )
}

export default TableData;
