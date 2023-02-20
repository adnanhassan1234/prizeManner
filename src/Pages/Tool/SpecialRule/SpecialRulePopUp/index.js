import React, {useEffect, useState} from 'react'
import {Modal, Row, Col, Form, Card, Button} from "react-bootstrap";
import AuthService from "../../../../services/auth.service";
import {ENDPOINT} from "../../../../config/constants";

const SpecialRulePopUp = (props) => {
    const [data, setData] = useState([]);
    const [assets, setAssetsData] = useState([]);
    const [assetType, setAssetType] = useState("");
    const [assetRules, setAssetRules] = useState([]);
    const [specialRules, setSpecialRules] = useState([]);

    const assetsData = async () => {
        setData([])
        await AuthService.getMethod(ENDPOINT.assets.listing, true)
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {

            });
    };
    const handleAssetType = (evt) => {
        setAssetsData([])
        setAssetRules([])
        setAssetType(evt.target.value)
        setAssetsData(data.filter(data => [evt.target.value].includes(data.asset_type)))
    }
    const handleCheckboxChange = (evt) => {

        let updatedData = [...assetRules];
        if (evt.target.checked) {
            updatedData = [...updatedData, {asset_id: evt.target.value, asset_name: evt.target.id}];

            assetRules.push({
                asset_id: evt.target.value,
                asset_name: evt.target.id,

            })
            console.log(assetRules)

        } else {
            updatedData = updatedData.filter(item => item.asset_id !== evt.target.value)
        }
        setAssetRules(updatedData)

    }
    const handleSubmit = () => {
        const assetObject = {
            asset_type: assetType,
            is_destroy: props.is_destroy,
            effectedAssets: assetRules
        }
        console.log('testing asset')
        props.onSubmit(assetObject)
        setAssetRules([])
        setData([])
        props.onHide()
        console.log(assetObject)
    }
    const triggerSelect = (selectElement) =>{
        let event = new Event('change', {bubbles: true});
        // let option = selectElement.querySelector(`option[value="${optionValue}"]`);
        // option.selected = true;
        selectElement.dispatchEvent(event);
    }


    useEffect(() => {
        assetsData()
    }, [])
    useEffect(() => {
        setSpecialRules(props.data)
    }, [])

    useEffect(()=>{
        const selectElement = document.getElementById('assetList');

        if(data) {
            triggerSelect(selectElement);
        }
    },[data])

    return (
        <div>
            <Modal
                show={props.show}
                size='md'
                centered
            >
                <Modal.Body>
                    <h4 className={"text-center p-3"}>Add Special</h4>
                    <Row className=''>
                        <Col>

                            <Form.Group className="mb-3" controlId="subAdminName">
                                <Form.Label> <strong>Asset</strong> </Form.Label>
                                <Form.Select aria-label="Default select example" id={'assetList'} defaultValue={assetType}
                                             onChange={handleAssetType}>
                                    <option value={"landscape"}>Landscape</option>
                                    <option value={"animals"}>Animals</option>
                                    <option value={"infrastructure"}>Infrastructure</option>
                                    <option value={"substrates"}>Substrates</option>
                                    <option value={"equipment"}>Equipment</option>

                                </Form.Select>
                            </Form.Group>
                            <Card className='p-2'>
                                <Form.Group className="mb-3 checkbox-color" controlId="exampleForm.ControlTextarea1">
                                    {assets && assets.map((asset, index) =>

                                        <Form.Check
                                            label={asset.name}
                                            name="assets"
                                            type='checkbox'
                                            id={asset.name}
                                            value={asset.id}
                                            onChange={handleCheckboxChange}
                                        />
                                    )}
                                </Form.Group>
                            </Card>
                            <Col className="p-4 d-flex justify-content-center">
                                <Button onClick={props.onHide} variant={"outline-success"}>CANCEL</Button>
                                <Button className='btn  btn-delete  mx-2 ' onClick={handleSubmit}>SAVE</Button>
                            </Col>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default SpecialRulePopUp