import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Modal, Row, Col, Form, Card, Button } from "react-bootstrap";
import PageTitle from 'Components/Pagetitle';
import { ENDPOINT, KEY } from "config/constants";
import AuthService from "services/auth.service";

const CreateAssets = () => {

    const [uploadFile, setUploadFile] = useState("");
    const [formData, setFormData] = useState({});
    const [error, setError] = useState();

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


    // const handleChange = (e) => {
    //     setUploadFile(e.target.files[0]);
    //     console.log("🚀 ~ file: index.js:13 ~ handleChange ~ e.target.files", e.target.files);
    // };


    const submitForm = async  (event) => {
        event.preventDefault();
    //             if (!uploadFile) {
    //         setError("Please select an image");
    //         return;
    //     }
    //     setError(null);
    // const dataArray = new FormData();
    // dataArray.append("image", uploadFile[0]);
        // dataArray.append({
        //     "strength": formData.strength,
        //     "area": formData.area,
        //     "expGained": formData.expGained,
        //     "description": formData.description,
        //     "coinGained": formData.coinGained,
        //     "coinGained": formData.coinGained,
        //     "actionRemove": formData.actionRemove,
        //     "assetType": formData.assetType,
        //     "stake": formData.stake,
        // });
     const  dataArray =  {
            "asset_type": formData.assetType,
            "description": formData.description,
            "strength": formData.strength,
            "covered_area": formData.area,
            "experience_gained": JSON.parse(formData.expGained),
            "coin_gained": JSON.parse(formData.coinGained),
            "stake": true,
            "image": "22f8fbc6-49af-4358-8c12-4f635c3b1339",
              "actions": [
              {"action":formData.actionRemove}
            ]
          }
         
        return await AuthService.postMethod(ENDPOINT.assets.add_user, true, dataArray)
        .then((res) => {
            console.log(res);
            // navigate('/route-list');
            // setFormData("");
            // event.target.reset();
        })
        .catch((err) => {
            console.log("🚀 ~ file: index.js:54 ~ submitForm ~ err", err)
            // swal("Error", `${AuthService.errorMessageHandler(err)}`, "error");
        });
    };


    // const ImageSubmit = (e) => {

    // };

    const ImageSubmit = async (event) => {
        event.preventDefault();
        if (!uploadFile) {
            setError("Please select an image");
            return;
        }
        setError(null);
        const formData  = new FormData();
        formData.append("image", uploadFile[0]);

        return await AuthService.postMethod(ENDPOINT.files.add_user, true, formData )
            .then((res) => {
                console.log(res);
                // navigate('/route-list');
                // setFormData("");
                // event.target.reset();
            })
            .catch((err) => {
                console.log("🚀 ~ file: index.js:34 ~ ImageSubmit ~ err", err)
                // swal("Error", `${AuthService.errorMessageHandler(err)}`, "error");
            });

    };

    // const navigate = useNavigate();
    // const mapLink = () => {
    //     navigate('/maps');
    // };

    return (
        <div>
            <PageTitle title={"Create Assets"} />
            <section>
                <div className={"formBox"}>
                    <Form onSubmit={submitForm}>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Image</Form.Label>
                                    <div className="custom-file-upload d-flex">
                                        <input type="file" className="form-control" onChange={(e) => setUploadFile(e.target.files[0])} />
                                        <button type="submit" className="btn btn-sm btn-success" onClick={ImageSubmit}>Upload</button>
                                    </div>
                                    {<p className='text-danger'>{error}</p>}
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Strength</Form.Label>
                                    <Form.Control type="text"
                                        name="strength"
                                        value={formData.strength}
                                        onChange={handleChange}
                                        placeholder="0" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label> Covered Area</Form.Label>
                                    <Form.Control type="text"
                                    name="area"
                                        value={formData.area}
                                        onChange={handleChange}
                                     placeholder="1x1" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label> EXP Gained</Form.Label>
                                    <Form.Control type="text"
                                    name="expGained"
                                        value={formData.expGained}
                                        onChange={handleChange}
                                     placeholder="0" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control as="textarea"
                                     name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                     rows={3} placeholder="Enter your prize description" />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label> Coin Gained</Form.Label>
                                    <Form.Control type="text"
                                    name="coinGained"
                                        value={formData.coinGained}
                                        onChange={handleChange}
                                     placeholder="0" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Action to Remove</Form.Label>
                                    <div className="input-group mb-3">
                                        <select className="form-select" name="actionRemove"
                                        value={formData.actionRemove}
                                        onChange={handleChange}>
                                            <option value="dig">DIG</option>
                                            <option value="collect">COLLECT</option>
                                            <option value="smash">SMASH</option>
                                            <option value="cut">CUT</option>
                                            <option value="shoo">SHOO</option>
                                            <option value="pump">PUMP</option>
                                            <option value="excavate">EXCAVATE</option>
                                        </select>
                                    </div>
                                    <Form.Label>Aasset Type</Form.Label>
                                    <div className="input-group mb-3">
                                        <select className="form-select"  name="assetType"
                                        value={formData.assetType}
                                        onChange={handleChange}>
                                            <option value="substrates">substrates</option>
                                            <option value="landscape">landscape</option>
                                            <option value="animals">animals</option>
                                            <option value="equipment">equipment</option>
                                            <option value="infrastructure">infrastructure</option>
                                        </select>
                                    </div>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Stake</Form.Label>
                                    <div className="input-group mb-3"  name="stake"
                                        value={formData.stake}
                                        onChange={handleChange}>
                                        <select className="form-select">
                                            <option value="true">true</option>
                                            <option value="false">false</option>
                                        </select>
                                    </div>
                                </Form.Group>
                            </Col>

                        </Row>
                        <hr />
                        <div className="col-md-12 d-flex justify-content-end">
                            <Button variant="primary" type="submit">
                                SAVE
                            </Button>
                        </div>
                    </Form>
                </div>
            </section>
        </div>
    )
}

export default CreateAssets;

