import React, {useEffect, useState} from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import volume from 'Images/VolumeUp.png'
import {ENDPOINT} from "../../../config/constants";
import AuthService from "../../../services/auth.service";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";


const SpecificationUpdate = (props) => {
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();


    useEffect(function () {
        console.log(props.data)
            setFormData(props.data)


    }, []);
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

    const handleSubmit = async () => {
        formData.user_limit = parseInt(formData.user_limit)
        formData.coin_cost = parseInt(formData.coin_cost)
        formData.attack = parseInt(formData.attack)
        formData.level = parseInt(formData.level)
        ENDPOINT.tools.edit.id = formData.id;

        return await AuthService.patchMethod(ENDPOINT.tools.edit.url + ENDPOINT.tools.edit.id, true, formData)
            .then((res) => {
                if (res.status === 422){

                    for (var i = 0; i < res.data.errors.length; i++) {
                        var error = res.data.errors[i];
                        for (var key in error) {
                            // console.log(key + ": " + error[key]);
                            toast(error[key])
                        }
                    }
                }else if(res.status === 200) {

                    toast("Tool updated successfully!")


                    setTimeout(() => {

                            navigate('/tools');

                    }, 1000);
                }
            })
            .catch((err) => {


                console.log('errors')
                toast(err.response.data.errors[0])
            });
    }

    if (formData != null)
    return (

        <div className={'p-3'}>
            <Row>
                <Col md={6}>
                    <Form id={"tool_form"}>
                        <Form.Group className="mb-3" controlId="subAdminName">
                            <Form.Label> Tool Type </Form.Label>
                            <Form.Select required aria-label="Default select example" disabled={true} className={"text-capitalize"} onChange={handleChange} name={"tool_type"} value={formData.tool_type}>
                                <option value={""} selected disabled>-Select-</option>
                                <option value={'dig'}>Dig</option>
                                <option  value={'smash'}>smash</option>
                                <option  value={'cut'}>cut</option>
                                <option  value={'excavate'}>excavate</option>
                                <option  value={'collect'}>collect</option>
                                <option  value={'pump'}>pump</option>
                                <option  value={'shoo'}>shoo</option>
                                <option  value={'destroy'}>destroy</option>
                                <option  value={'activate'}>activate</option>
                                <option  value={'drop'}>drop</option>
                                <option  value={'freeze'}>freeze</option>

                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="subAdminName">
                            <Form.Label> Tool Name </Form.Label>
                            <Form.Control type="text" disabled={true} name={"name"}  value={formData.name} placeholder="Pick Axe " />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>
                                SFX
                            </Form.Label>
                            <a className="upload-btn w-100 bg-light">
                                <img src={volume} alt="" />
                                <span>{formData?.sfxEntity?.fileName}</span>
                            </a>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label> Description </Form.Label>

                            <Form.Control as="textarea" placeholder="Enter description" onChange={handleChange} rows={3} name={"description"} value={formData.description}/>
                        </Form.Group>

                    </Form>
                </Col>
                <Col md={6}>
                    <Form>
                        <Form.Group className="mb-3" controlId="subAdminName">
                            <Form.Label> Attack </Form.Label>
                            <Form.Control type="text" placeholder="0" onChange={isNumberKey} name={"attack"} value={formData.attack??0} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="subAdminName">
                            <Form.Label> Area of Effect </Form.Label>
                            <Form.Control type="text" placeholder="2x2" onChange={handleChange} name={"area_of_effect"} value={formData.area_of_effect} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="subAdminName">
                            <Form.Label> Use Limit (For Infinite use “0”) </Form.Label>
                            <Form.Control aria-label="Default select example" onChange={isNumberKey} name={"user_limit"} value={formData.user_limit ?? 0} />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="subAdminName">
                            <Form.Label> Coin Cost </Form.Label>
                            <Form.Control type="text" placeholder="0" onChange={isNumberKey} name={"coin_cost"} value={formData.coin_cost ?? 0}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="subAdminName">
                            <Form.Label> Level </Form.Label>
                            <Form.Control type="text" placeholder="0" onChange={isNumberKey} name={"level"} value={formData.level ?? 0}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="subAdminName">
                            <Form.Label> Time Limit </Form.Label>
                            <Form.Control type="text" placeholder="Time Limit" onChange={handleChange} name={"time_limit"} value={formData.time_limit ?? ""}/>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <hr />
            <div className="col-md-12 d-flex justify-content-end">
                <Button className='btn  btn-delete ' onClick={handleSubmit}>Update</Button>
            </div>
        </div>


    )
    else
        return (<div></div>)
}

export default SpecificationUpdate
