import React, {useEffect, useState} from 'react'
import {Modal, Row, Col, Form, Card, Button} from "react-bootstrap";
import {ENDPOINT} from "../../../../config/constants";
import AuthService from "../../../../services/auth.service";
import ReactDOM from 'react-dom';

import {number} from "prop-types";
import {toast} from "react-toastify";

const EditAssets = (props) => {
    const [initialProps, setInitialProps] = useState(null);

    const [actionsData, setActionsData] = useState([]);
    const [layersData, setLayersData] = useState([]);

    const [formData, setFormData] = useState(null);
    const [selects, setSelects] = useState([]);
    const handleChange = (event) => {
        let value = event.target.value;
        let name = event.target.name;
        setFormData((prevalue) => {
            return {
                ...prevalue,   // Spread Operator
                [name]: value
            }
        })

    }
    const handleActionChange = (event) => {

        prepareActionData(event.target.id, event.target.value)

    }
    const handleLayerChange = (event) => {
        prepareLayerData(event.target.id, parseInt(event.target.value))


    }
    const isNumberKey = (evt) =>{
        let value = evt.target.value;
        let name = evt.target.name;
        const re = /^[0-9\b]+$/;
        if (re.test(evt.target.value))
            setFormData((prevalue) => {
                return {
                    ...prevalue,   // Spread Operator
                    [name]: value
                }
            })

    }

    const prepareActionData = (key, value) => {


        /* This line is only necessary if your element's ID
          isn't its position/index in the array or related to it.
          In the case that it is, use the ID as the index, or run the function
          (binary/hash) that relates the ID to that position/index to find the
          index.
       */
        let index = actionsData.findIndex(x => x.id === key);

        if (index !== -1) {
            let temporaryarray = actionsData.slice();
            temporaryarray[index]['action'] = value;
            setActionsData(temporaryarray);
        } else {
            return actionsData.push({id: key, action: value});
        }

    }
    const prepareLayerData = (key, value) => {
        let index = layersData.findIndex(x => x.id === key);
        /* This line is only necessary if your element's ID
           isn't its position/index in the array or related to it.
           In the case that it is, use the ID as the index, or run the function
           (binary/hash) that relates the ID to that position/index to find the
           index.
        */
        if (index !== -1) {
            let temporaryarray = layersData.slice();
            temporaryarray[index]['layer'] = value;
            setLayersData(temporaryarray);
        } else {
            return layersData.push({id: key, layer: value});
        }

    }

    const removeSelect = (id, type) => {
        if (type === 'action') {
            let filteredArray = actionsData.filter(item => item.id !== id)
            setActionsData(filteredArray);


        } else {
            let filteredArray = layersData.filter(item => item.id !== id)
            setLayersData(filteredArray);

        }
        document.getElementById(id).remove();
    }
    const addActionSelect = () => {
        const keyId = Math.random();

        const html = (
            <Form.Group className={'mb-3 d-flex align-items-center'} id={keyId} key={keyId}>

                <Form.Select name="actions" id={keyId} onChange={handleActionChange}>
                    <option value={'DIG'}>DIG</option>
                    <option value={'COLLECT'}>COLLECT</option>
                    <option value={'SMASH'}>SMASH</option>
                    <option value={'CUT'}>CUT</option>
                    <option value={'SHOO'}>SHOO</option>
                    <option value={'PUMP'}>PUMP</option>
                    <option value={'EXCAVATE'}>EXCAVATE</option>
                </Form.Select>
                <Button variant={'actionBtn text-danger'} onClick={() => {
                    removeSelect(keyId, 'action')
                }}>
                    <i className={'fal fa-times'}> </i>
                </Button>
            </Form.Group>
        );
        let div = document.getElementById('assetActions');

// render
        prepareActionData(keyId.toString(), 'DIG')
        ReactDOM.render(html, div);

        // ReactDOM.render(html, div);
    }
    const addLayerSelect = () => {
        const keyId = Math.random();

        const html = (
            <Form.Group className={'mb-3 d-flex align-items-center'} id={keyId} key={keyId}>

                <Form.Select name="layers" id={keyId} onChange={handleLayerChange}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                </Form.Select>
                <Button variant={'actionBtn text-danger'} onClick={() => {
                    removeSelect(keyId, 'layer')
                }}>
                    <i className={'fal fa-times'}> </i>
                </Button>
            </Form.Group>
        );
        prepareLayerData(keyId.toString(), 1)
        let div = document.getElementById('assetLayers');

// render
        ReactDOM.render(html, div);

        // ReactDOM.render(html, div);
    }

    const handleSubmit = async (data) => {
        let actionArray = [];
        let layerArray = [];

        actionsData.forEach(item => actionArray.push({action: item.action}))
        layersData.forEach(item => layerArray.push({layer: item.layer}))
        ENDPOINT.assets.edit.id = formData.id;
        formData.actions = actionArray;
        formData.layers = layerArray;
        formData.coin_gained = parseInt(formData.coin_gained)
        formData.experience_gained = parseInt(formData.experience_gained)
        formData.strength = parseInt(formData.strength)
        formData.stake = formData.stake === 'true' ? true : false
        return await AuthService.patchMethod(ENDPOINT.assets.edit.url + ENDPOINT.assets.edit.id, true, formData)
            .then((res) => {
                //setContent(res.data);
                //setIsLoader(true);
                //console.log(res.data);
                toast("Asset updated successfully!")
                props.reload();
                props.onHide();
                setTimeout(() => {
                    // setAddAdmin(props.onHide);
                    // props.subAdminAllData();
                }, 1000);
            })
            .catch((err) => {
                console.log("Error", `${AuthService.errorMessageHandler(err)}`, "error");
            });
    }

    useEffect(function () {

        setFormData(props.data)

    }, []);

    useEffect(function () {
        if (formData != null) {
            formData.assetActions && formData.assetActions.forEach(item => prepareActionData(item.id, item.action))
            formData.assetAllowedLayers && formData.assetAllowedLayers.forEach(item => prepareLayerData(item.id, item.layer))
        }
    }, [formData])

    useEffect(function () {
        console.log(actionsData)
    }, [actionsData])
    useEffect(function () {
        console.log(layersData)
    }, [layersData])

    if (formData != null)
        return (
            <div>
                <Modal
                    {...props}
                    size='md'
                    centered
                >
                    <Modal.Body>
                        <h4 className={"text-center p-4"}>{formData ? formData.name : ""}</h4>
                        <Row className=''>
                            <Col>
                                <Form>
                                    <Form.Group className="mb-2" controlId="formBasicDec">
                                        <Form.Label>
                                            Description
                                        </Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={1}
                                            placeholder="Enter the description..."
                                            name="description"
                                            value={formData ? formData.description : ""}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicName">
                                        <Form.Label>
                                            Strength
                                        </Form.Label>
                                        {/* eslint-disable-next-line no-restricted-globals */}

                                        <Form.Control type="text"
                                                      placeholder="0"
                                                      name="strength"
                                                      value={formData ? formData.strength : "0"}
                                            onChange={isNumberKey}

                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicName">
                                        <Form.Label>
                                            Covered Area
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="0"
                                            name="covered_area"
                                            value={formData ? formData.covered_area : ""}
                                            onChange={handleChange}

                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="subAdminName">
                                        <Form.Label> Action to Remove </Form.Label>
                                        {/*{console.log('selects')}*/}
                                        {/*{selects}*/}

                                        {formData.assetActions && formData.assetActions.map((field, index) => (
                                            <Form.Group className={'mb-3  d-flex align-items-center'} id={field.id} key={field.id}>
                                                <Form.Select
                                                    // value={field.action}
                                                    name={'actions'}
                                                    onChange={(e) => handleActionChange(e, index)} id={field.id}>
                                                    <option value={'DIG'} selected={field.action === 'DIG'}>DIG</option>
                                                    <option value={'COLLECT'}
                                                            selected={field.action === 'COLLECT'}>COLLECT
                                                    </option>
                                                    <option value={'SMASH'} selected={field.action === 'SMASH'}>SMASH
                                                    </option>
                                                    <option value={'CUT'} selected={field.action === 'CUT'}>CUT</option>
                                                    <option value={'SHOO'} selected={field.action === 'SHOO'}>SHOO
                                                    </option>
                                                    <option value={'PUMP'} selected={field.action === 'PUMP'}>PUMP
                                                    </option>
                                                    <option value={'EXCAVATE'}
                                                            selected={field.action === 'EXCAVATE'}>EXCAVATE
                                                    </option>
                                                </Form.Select>
                                                <Button variant={'actionBtn text-danger'} onClick={() => {
                                                    removeSelect(field.id, 'action')
                                                }}><i className={'fal fa-times'}> </i></Button>
                                            </Form.Group>
                                        ))}
                                        {selects && selects.map((select, index) => <div key={index}>{select}</div>)}
                                        <div id='assetActions'>

                                        </div>

                                    </Form.Group>
                                    <Col className="d-flex justify-content-end">
                                        <Button onClick={() => addActionSelect()} variant={"outline-success"}>Add
                                            more</Button>

                                    </Col>
                                    <Form.Group className="mb-2" controlId="subAdminName">
                                        <Form.Label> Map Layer </Form.Label>
                                        {formData.assetAllowedLayers && formData.assetAllowedLayers.map((field, index) => (
                                            <Form.Group className={'mb-3 d-flex align-items-center'} id={field.id} key={field.id}>
                                                <Form.Select
                                                    // value={field.action}
                                                    name="layers" id={field.id}
                                                    onChange={(e) => handleLayerChange(e, index)}>
                                                    <option value={1} selected={field.layer === 1}>1</option>
                                                    <option value={2} selected={field.layer === 2}>2</option>
                                                    <option value={3} selected={field.layer === 3}>3</option>
                                                    <option value={4} selected={field.layer === 4}>4</option>

                                                </Form.Select>
                                                <Button variant={'actionBtn text-danger'} onClick={() => {
                                                    removeSelect(field.id, 'layer')
                                                }}><i className={'fal fa-times'}> </i></Button>
                                            </Form.Group>
                                        ))}
                                        <div id='assetLayers'>

                                        </div>
                                        <Col className="d-flex justify-content-end">
                                            <Button onClick={addLayerSelect} variant={"outline-success"}>Add
                                                more</Button>

                                        </Col>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicName">
                                        <Form.Label>
                                            EXP Gained
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="0"
                                            name="experience_gained"
                                            value={formData ? formData.experience_gained : "0"}
                                            onChange={isNumberKey}

                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicName">
                                        <Form.Label>
                                            Coin Gained
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="0"
                                            name="coin_gained"
                                            value={formData ? formData.coin_gained : "0"}
                                            onChange={isNumberKey}

                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-2" controlId="subAdminName">
                                        <Form.Label> Stake </Form.Label>
                                        <Form.Select aria-label="Default select example" name="stake"

                                                     onChange={handleChange}>
                                            <option value={false} selected={formData.stake === false ? true : false}>No</option>
                                            <option value={true} selected={formData.stake === true ? true : false}>Yes</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Col className="p-4 d-flex justify-content-center">
                                        <Button onClick={props.onHide} variant={"outline-success"}>CANCEL</Button>
                                        <Button className='btn  btn-delete  mx-2 ' onClick={handleSubmit}>SAVE
                                            CHANGES</Button>
                                    </Col>
                                </Form>
                            </Col>
                        </Row>
                    </Modal.Body>
                </Modal>
            </div>
        )
    else return (<div></div>)
}


export default EditAssets;

