import React, {useEffect, useState} from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import volume from 'Images/VolumeUp.png'
import SpecialRulePopUp from './SpecialRulePopUp'
import AuthService from "../../../services/auth.service";
import {ENDPOINT} from "../../../config/constants";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";


const SpecialRule = (props) => {
    const [modalShow, setModalShow] = React.useState(false);
    const [isDestroy, setIsDestroy] = React.useState(false);
    const [data, setData] = useState([]);
    const [tools, setTools] = useState([]);
    const [specialRules, setSpecialRules] = useState([]);
    const [toolId, setToolId] = useState("");

    const navigate = useNavigate();

    const toolsData = async () => {

        await AuthService.getMethod(ENDPOINT.tools.listing, true)
            .then((res) => {
               setData(res.data)
                console.log("get tools", res.data);
            })
            .catch((err) => {
                //console.log(" ~ file: index.js:24 ~ assetsRouteGetData ~ err", err)
                // swal("Error", `${AuthService.errorMessageHandler(err)}`, "error");
            });
    };
    function triggerSelect(selectElement) {
        let event = new Event('change', {bubbles: true});
        // let option = selectElement.querySelector(`option[value="${optionValue}"]`);
        // option.selected = true;
        selectElement.dispatchEvent(event);
    }
    const handleToolType = (evt) => {
        setSpecialRules([])

        setTools(data.filter(data => [evt.target.value].includes(data.tool_type)))



    }

    const handleToolChange = (evt) => {
        let tool = tools.filter(data => [evt.target.value].includes(data.id))[0];
        setToolId(tool.id)


        setSpecialRules([])
        tool.toolSpecialRules.forEach(data => saveRuleAssets(data))

    }

    const openSpecialPopup = (destroy) => {
      setModalShow(true)
        setIsDestroy(destroy)
    }

    const handleCheckboxChange = (evt) => {

        let updatedData = [...specialRules];
     if(evt.target.checked) {
         updatedData = [...updatedData, { asset_type: evt.target.id, is_destroy: evt.target.value == "true" ? true : false,specialRules: [] }];

         specialRules.push({
             asset_type: evt.target.id,
             is_destroy: evt.target.value == "true" ? true : false,
             specialRules: []
         })

     }else{
          updatedData = updatedData.filter(item => item.asset_type !== evt.target.id)
     }
        setSpecialRules(updatedData)

    }
    const saveRuleAssets = (obj) => {

        setSpecialRules(prevSpecialRules => {
            // Check if there is an existing special rule for the asset type
            const existingSpecialRuleIndex = prevSpecialRules.findIndex(
                item => item.asset_type === obj.asset_type && item.is_destroy === obj.is_destroy
            );

            if (existingSpecialRuleIndex !== -1) {
                // If there is an existing special rule, update its "is_checked" value
                const updatedSpecialRule = {
                    ...prevSpecialRules[existingSpecialRuleIndex],
                    specialRules:obj.effectedAssets,
                };

                return [
                    ...prevSpecialRules.slice(0, existingSpecialRuleIndex),
                    updatedSpecialRule,
                    ...prevSpecialRules.slice(existingSpecialRuleIndex + 1)
                ];
            } else {
                // If there is no existing special rule, add a new one
                return prevSpecialRules.concat({
                    is_destroy: obj.is_destroy,
                    specialRules:obj.effectedAssets,
                    asset_type : obj.asset_type
                });
            }
        });


    }

    const handleSubmit = async () => {
        // const formData = new FormData();
        // formData.rules = specialRules

        ENDPOINT.tools.edit.id = toolId;

        return await AuthService.patchMethod(ENDPOINT.tools.edit.url + ENDPOINT.tools.edit.id, true, {"rules":specialRules})
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

                    toast("Tool special rules added successfully!")


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

    useEffect(() => {
        toolsData()
    },[props])

    useEffect(()=>{
        const selectElement = document.getElementById('toolList');

        if(tools) {
            console.log(tools)
            triggerSelect(selectElement);
        }
    },[tools])
    useEffect(()=>{
        const selectElement = document.getElementById('typeList');

        if(data) {
            console.log(data)
            triggerSelect(selectElement);
        }
    },[data])
    useEffect(() => {
        console.log('specialRules')
        console.log(specialRules)
    },[specialRules])
    return (
  <>  
        <Card className='p-3'>
            <Row>
                <Col md={6}>

                    <Form>
                        <Form.Group className="mb-3" controlId="subAdminName">
                            <Form.Label> Tool Name </Form.Label>
                            <Form.Select aria-label="Default select example" id={"toolList"} defaultValue={props.data && props.data.name} onChange={handleToolChange}>
                                {/*<option selected>-select-</option>*/}
                                {tools.map((field, index) => (
                                    <option value={field.id}>{field.name}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                        <Form.Label> Can Destroy All </Form.Label>
                        <Card className='p-4'>
                            <Form.Group className="mb-3 checkbox-color" controlId="exampleForm.ControlTextarea1">

                                <Form.Check
                                    label="Landscape"
                                    name="GameMode"
                                    type='checkbox'
                                    id={`landscape`}
                                    checked={specialRules.some(item => item.asset_type === "landscape" && item.is_destroy === true)}
                                    value={true}
                                    onChange={handleCheckboxChange}
                                />
                                <Form.Check
                                    label="Animal"
                                    name="GameMode"
                                    type='checkbox'
                                    id={`animals`}
                                    value={true}
                                    checked={specialRules && specialRules.some(item => item.asset_type === "animals" && item.is_destroy === true)}

                                    onChange={handleCheckboxChange}
                                />
                                <Form.Check

                                    label="Infrastructure"
                                    name="GameMode"
                                    type='checkbox'
                                    id={`infrastructure`}
                                    value={true}
                                    checked={specialRules.some(item => item.asset_type === "infrastructure" && item.is_destroy === true)}

                                    onChange={handleCheckboxChange}
                                />
                                <Form.Check

                                    label="Substrate"
                                    name="GameMode"
                                    type='checkbox'
                                    id={`substrates`}
                                    value={true}
                                    checked={specialRules.filter(item => item.asset_type === "substrates" && item.is_destroy === true)[0]}

                                    onChange={handleCheckboxChange}
                                />
                                <Form.Check

                                    label="Equipment"
                                    name="GameMode"
                                    type='checkbox'
                                    id={`equipment`}
                                    value={true}
                                    checked={specialRules.some(item => item.asset_type === "equipment" && item.is_destroy === true)}

                                    onChange={handleCheckboxChange}
                                />
                            </Form.Group>
                        </Card>
                        <Col className="col-md-12 py-4">
                            <Button className='w-100 ' onClick={()=>openSpecialPopup(true)} variant={"outline-success"}> ADD SPECIAL</Button>
                        </Col>

                    </Form>

                </Col>
                <Col md={6}>
                    <Form>
                        <Form.Group className="mb-3" controlId="subAdminName">
                            <Form.Label> Action </Form.Label>
                            <Form.Select aria-label="Default select example"  id={"typeList"} defaultValue={props.data && props.data.tool_type} onChange={handleToolType}>
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
                        <Form.Label> Does Not Affect </Form.Label>
                        <Card className='p-4'>
                            <Form.Group className="mb-3 checkbox-color" controlId="exampleForm.ControlTextarea1">

                                <Form.Check
                                    label="Landscape"
                                    name="GameMode"
                                    type='checkbox'
                                    id={`landscape`}
                                    checked={specialRules.some(item => item.asset_type === "landscape" && item.is_destroy === false)}
                                    value={false}
                                    onChange={handleCheckboxChange}
                                />
                                <Form.Check
                                    label="Animal"
                                    name="GameMode"
                                    type='checkbox'
                                    id={`animals`}
                                    value={false}
                                    checked={specialRules && specialRules.some(item => item.asset_type === "animals" && item.is_destroy === false)}

                                    onChange={handleCheckboxChange}
                                />
                                <Form.Check

                                    label="Infrastructure"
                                    name="GameMode"
                                    type='checkbox'
                                    id={`infrastructure`}
                                    value={false}
                                    checked={specialRules.some(item => item.asset_type === "infrastructure" && item.is_destroy === false)}

                                    onChange={handleCheckboxChange}
                                />
                                <Form.Check

                                    label="Substrate"
                                    name="GameMode"
                                    type='checkbox'
                                    id={`substrates`}
                                    value={false}
                                    checked={specialRules.some(item => item.asset_type === "substrates" && item.is_destroy === false)}

                                    onChange={handleCheckboxChange}
                                />
                                <Form.Check

                                    label="Equipment"
                                    name="GameMode"
                                    type='checkbox'
                                    id={`equipment`}
                                    value={false}
                                    checked={specialRules.some(item => item.asset_type === "equipment" && item.is_destroy === false)}

                                    onChange={handleCheckboxChange}
                                />
                            </Form.Group>
                        </Card>
                        <Col className="col-md-12 py-4">
                            <Button className='w-100 ' onClick={()=>openSpecialPopup(false)} variant={"outline-success"}> ADD SPECIAL </Button>
                        </Col>
                    </Form>
                </Col>
                <Col md={6}>
                 
                        <Card className='p-4 '>
                            {specialRules && specialRules.filter(item => item.is_destroy === true).map((rule, index) => <div key={index}><ul className={"text-capitalize"}>{rule.asset_type}
                                {rule.specialRules && rule.specialRules.map((effect, index) => <li className={"text-capitalize"}>{effect.asset_name ?? effect.asset?.name}</li>)}
                            </ul></div>)}

                        </Card>
                       
               
                </Col>
                <Col md={6}>

                    <Card className='p-4 '>
                        {specialRules && specialRules.filter(item => item.is_destroy === false).map((rule, index) => <div key={index}><ul className={"text-capitalize"}>{rule.asset_type}
                            {rule.specialRules && rule.specialRules.map((effect, index) => <li className={"text-capitalize"}>{effect.asset_name ?? effect.asset?.name}</li>)}
                        </ul></div>)}

                    </Card>
                       
               
                </Col>
            </Row>
            <hr />
            <div className="col-md-12 d-flex justify-content-end">
                <Button className='btn  btn-delete ' onClick={handleSubmit}>{props.btn}</Button>
            </div>
        </Card>
      {modalShow && <SpecialRulePopUp show={modalShow} onSubmit={saveRuleAssets} is_destroy={isDestroy} onHide={() => setModalShow(false)} />}
        </>


    )
}

export default SpecialRule

