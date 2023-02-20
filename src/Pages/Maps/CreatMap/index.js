import PageTitle from 'Components/Pagetitle';
import {Button, Row, Col} from "react-bootstrap";
import React, {useEffect, useState} from 'react'
import Form from 'react-bootstrap/Form';
import {useLocation, useNavigate} from 'react-router-dom';
import {toast} from "react-toastify";
import AuthService from "../../../services/auth.service";
import {ENDPOINT} from "../../../config/constants";

const CreatMap = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const mapLink = () => {
        navigate('/maps');
    };
    const [formData, setFormData] = useState({});
    const [file, setFile] = useState(null);



    function handleFileUpload(e: ChangeEvent<HTMLInputElement>) {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    }
    const handleChange = (event) => {
        let value = event.target.value;
        let name = event.target.name;
        if (name === 'map_type') {
            setFormData({})
        }
        setFormData((prevalue) => {
            return {
                ...prevalue,   // Spread Operator
                [name]: value
            }
        })

    }
    const isNumberKey = (evt) =>{
        let value = evt.target.value;
        let name = evt.target.name;
        const re = /^[0-9\b]+$/;
        if (re.test(evt.target.value)) {
            setFormData((prevalue) => {
                return {
                    ...prevalue,   // Spread Operator
                    [name]: value
                }
            })
        }else if (evt.target.value === ''){
            setFormData((prevalue) => {
                return {
                    ...prevalue,   // Spread Operator
                    [name]: value
                }
            })
        }

    }
    function triggerSelect(selectElement) {
        let event = new Event('change', {bubbles: true});
        // let option = selectElement.querySelector(`option[value="${optionValue}"]`);
        // option.selected = true;
        selectElement.dispatchEvent(event);
    }

    const saveCharityImage = async (evt) => {
        if (!file) {
            handleSubmit()
            return ;
        }
        const fileData = new FormData();
        fileData.append("file", file);
        return await AuthService.postMethod(ENDPOINT.files.add_image, true, fileData)
            .then((res) => {
                handleSubmit(res.data.id)
                setTimeout(() => {
                    // setAddAdmin(props.onHide);
                    // props.subAdminAllData();
                }, 1000);
            })
            .catch((err) => {
                toast("Error", `${AuthService.errorMessageHandler(err)}`, "error");
            });
    }

    const handleSubmit = async (id=null) => {
        formData.charity_image = id;
        formData.invite_code_quantity = formData.invite_code_quantity ? parseInt(formData.invite_code_quantity) : 0
        formData.stake_cost_coins = formData.stake_cost_coins ? parseInt(formData.stake_cost_coins) : 0
        formData.stake_limit_value = formData.stake_limit_value ? parseInt(formData.stake_limit_value) : 0
        formData.reward_share_link_coins = formData.reward_share_link_coins ? parseInt(formData.reward_share_link_coins) : 0
        formData.charity_percentage = formData.charity_percentage ? parseInt(formData.charity_percentage) : null
        formData.winning_percentage = formData.winning_percentage ? parseInt(formData.winning_percentage) : null

        return await AuthService.postMethod(ENDPOINT.maps.add_map, true, formData)
            .then((res) => {
                if (res.status === 422){

                    for (var i = 0; i < res.data.errors.length; i++) {
                        var error = res.data.errors[i];
                        for (var key in error) {
                            // console.log(key + ": " + error[key]);
                            toast(error[key])
                        }
                    }
                }else if(res.status === 201) {
                    toast('Map added successfully!')
                    const mapData = res.data;
                    setTimeout(() => {

                        navigate('/build-map',{state:{mapData}});

                    }, 1000);


                }
            })
            .catch((err) => {


                toast(err.response.data.errors[0])

            });
    }


    useEffect(()=>{

        if (location.state){
            console.log('success')
            console.log(location.state.row)
            setFormData(location.state.row)
        }else {
            const selectElement = document.getElementById('mapTypeList');


            triggerSelect(selectElement);
        }

    },[])
    return (
        <div>
            <PageTitle title={location.state ?"UPDATE MAP":"CREATE A MAP"} />
            <Button onClick={mapLink} variant={"transparent font-20 fw-bold mt-3"}><i className={"fas fa-arrow-left  mx-2"}></i> Map</Button>
            <section>
                <div className={"formBox"}>
                    <Form>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Map Type</Form.Label>
                                    <Form.Select name={'map_type'} id={'mapTypeList'} onChange={handleChange} value={formData.map_type}>
                                        <option value="free to play">Free To Play</option>
                                        <option value="pay to play">Pay To Play</option>
                                        <option value="charity map">Charity Map</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label> Map Title</Form.Label>
                                    <Form.Control type="text" name={'name'} value={formData.name} onChange={handleChange} placeholder="Title"/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Map Description</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        name={'description'}
                                        onChange={handleChange}
                                        value={formData.description}
                                        placeholder="Enter your map description..."

                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label> Game Mode</Form.Label>
                                    <div className="row pb-2">
                                        <div className="col-md-4">
                                            <Form.Check
                                                inline
                                                label="Standard"
                                                name="game_mode"
                                                type='radio'
                                                value={'Standard'}
                                                id={`Standard`}
                                                onChange={handleChange}
                                                checked={formData.game_mode && formData.game_mode === 'Standard'?true:false}
                                            />
                                        </div>
                                        <div className="col-md-4">
                                            <Form.Check
                                                inline
                                                label="Race Mode"
                                                name="game_mode"
                                                type='radio'
                                                value={`RaceMode`}
                                                id={`RaceMode`}
                                                onChange={handleChange}
                                                checked={formData.game_mode && formData.game_mode === 'RaceMode'?true:false}

                                                disabled={formData.map_type && formData.map_type === 'charity map' ? true:false}

                                            />
                                        </div>
                                        <div className="col-md-4">
                                            <Form.Check
                                                inline
                                                label="Proximity"
                                                name="game_mode"
                                                type='radio'
                                                id={`Proximity`}
                                                value={`Proximity`}
                                                checked={formData.game_mode && formData.game_mode === 'Proximity'?true:false}

                                                onChange={handleChange}


                                            />
                                        </div>

                                    </div>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

                                    <Form.Label>Advertisement</Form.Label>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Form.Check
                                                inline
                                                disabled={formData.map_type && formData.map_type === 'free to play' ? false:true}

                                                label="YES"
                                                type='radio'
                                                id={`inline-radio-3`}
                                                name={'advertisement'}
                                                value={true}
                                                onChange={handleChange}
                                                // checked={formData.advertisement && formData.advertisement === true?true:false}

                                                // checked={formData.advertisement && formData.advertisement === true?true:false}

                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <Form.Check
                                                inline
                                                disabled={formData.map_type && formData.map_type === 'free to play' ? false:true}
                                                label="NO"
                                                type='radio'
                                                id={`inline-radio-3`}
                                                name={'advertisement'}
                                                value={false}
                                                onChange={handleChange}
                                                // checked={formData.advertisement && formData.advertisement === false?true:false}
                                                // checked={formData.advertisement && formData.advertisement === false?true:false}

                                            />
                                        </div>
                                    </div>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Real Prize (Player Selected Prize)</Form.Label>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Form.Check
                                                        inline
                                                        label="YES"
                                                        name="player_selected_prize"
                                                        type='radio'
                                                        id={`inline-radio-1`}
                                                        value={true}
                                                        onChange={handleChange}
                                                        // checked={formData.player_selected_prize && formData.player_selected_prize === true?true:false}

                                                // checked={formData.player_selected_prize && formData.player_selected_prize === true?true:true}

                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <Form.Check
                                                        inline
                                                        label="NO"
                                                        name="player_selected_prize"
                                                        type='radio'
                                                        id={`inline-radio-2`}
                                                        value={false}
                                                        onChange={handleChange}

                                                        // checked={formData.player_selected_prize && formData.player_selected_prize === false?true:false}
                                                // checked={formData.player_selected_prize && formData.player_selected_prize  === false?true:false}

                                            />
                                        </div>

                                    </div>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Invite Code Generator</Form.Label>
                                                <Form.Control type="text" name={'invite_code'} onChange={handleChange} value={formData.invite_code} placeholder="Enter invite code"/>
                                            </Form.Group>

                                        </div>
                                        <div className="col-md-2">
                                            <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Quantity</Form.Label>
                                                <Form.Control type="text" name={'invite_code_quantity'} onChange={isNumberKey} value={formData.invite_code_quantity} disabled={formData.is_invite_code === true?true:false} placeholder="0"/>
                                            </Form.Group>
                                        </div>
                                    </div>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Check className=''
                                                inline
                                                label="No Limit"
                                                name={'is_invite_code'}
                                                value={true}
                                                onChange={handleChange}
                                                type='checkbox'
                                                id={`inline-radio-2`}
                                                // checked={formData.is_invite_code && formData.is_invite_code === true?true:false}

                                    />
                                </Form.Group>

                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Stake Cost ({formData.map_type && formData.map_type === 'charity map' ? '£':'Coins'})</Form.Label>
                                    <Form.Control type="text" name={'stake_cost_coins'} value={formData.stake_cost_coins} onChange={handleChange}  placeholder="0"/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Stake Limit</Form.Label>
                                    <Row className={formData.map_type === 'free to play' ? 'is-disabled':''}>
                                        <Col lg={4}>
                                            <Form.Check
                                                className='py-2'
                                                label="Admin Define"
                                                name="stake_limit_by_admin"
                                                type='radio'
                                                id={`AdminDefine`}
                                                value={true}
                                                onChange={handleChange}
                                                disabled={formData.map_type && formData.map_type === 'free to play' ? true:false}
                                                checked={formData.stake_limit_by_admin && formData.stake_limit_by_admin === true?true:false}

                                            />
                                        </Col>
                                        <Col lg={8}>
                                            <Form.Control type="text" name={'stake_limit_value'} onChange={isNumberKey} value={formData.stake_limit_value ?? 0} placeholder="Enter Value"/>
                                        </Col>
                                    </Row>

                                    <Form.Check
                                        className='py-2'
                                        label="User Purchase"
                                        name="stake_limit_by_admin"
                                        type='radio'
                                        value={false}
                                        id={"UserPurchase"}
                                        onChange={handleChange}
                                        disabled={formData.map_type && formData.map_type === 'free to play' ? true:false}
                                        checked={formData.stake_limit_by_admin && formData.stake_limit_by_admin === false?true:false}

                                    />

                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Reward Share Link (Coins)</Form.Label>
                                    <Form.Control type="text" name={'reward_share_link_coins'}  value={formData.reward_share_link_coins} onChange={handleChange} placeholder="0"/>
                                </Form.Group>
                                <Form.Label>Winner’s Percentage</Form.Label>
                            <Form.Group className="mb-3">
                                    <Form.Select className="form-select" name={'winning_percentage'} value={formData.winning_percentage} disabled={formData.map_type && formData.map_type !== 'charity map' ? true:false} onChange={handleChange} id="inputGroupSelect01">
                                        <option value="10">10%</option>
                                        <option value="20">20%</option>
                                        <option value="30">30%</option>
                                    </Form.Select>
                            </Form.Group>
                                <Form.Label>Charity’s Percentage</Form.Label>
                                <Form.Group className="mb-3">

                                    <Form.Select className="form-select" name={'charity_percentage'} value={formData.charity_percentage} disabled={formData.map_type && formData.map_type !== 'charity map' ? true:false} onChange={handleChange} id="inputGroupSelect01">
                                        <option value="10">10%</option>
                                        <option value="20">20%</option>
                                        <option value="30">30%</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className={formData.map_type !== "charity map" ? 'fileUpload col-lg-3  d-none':"fileUpload col-lg-3 "}>
                                    <Form.Label htmlFor={"fileUpload"}>
                                        <input type="file" id={"fileUpload"} accept={"image/*"} onChange={handleFileUpload} />
                                        {formData.charityImage ? formData.charityImage?.fileName : file? <>{file.name}</> : "Upload here"}
                                    </Form.Label>
                                </Form.Group>
                            </Col>
                        </Row>
                        <hr/>
                        <div className="col-md-12 d-flex justify-content-end">
                            <Button variant="primary" onClick={saveCharityImage}>
                                BUILD A MAP
                            </Button>
                        </div>
                    </Form>
                </div>
            </section>
        </div>
    )
}
export default CreatMap
