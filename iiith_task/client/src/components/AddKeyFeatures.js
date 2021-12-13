/*
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
//import keyFeatures from '../../../server1/models/keyFeatures';
import {flowRight as compose} from 'lodash';
import {getkeyFeaturesQuery, getKeySpecificationsQuery,  addkeyFeaturesMutation  } from '../queries/queries';

class AddkeyFeatures extends Component {
    constructor(props){
        super(props);
        this.state = {
            AirConditioner: '',
            PowerSteering: '',
            DriverAirbag: ''
        };
    }
    displayAuthors(){
        var data = this.props.getkeyFeaturesQuery;
        if(data.loading){
            return( <option disabled>Loading Key Features</option> );
        } else {
            return data.keyFeatures.map(keyFeature => {
                return( <option key={ keyFeature.id } value={keyFeature.id}>{ keyFeature.AirConditioner}</option> );
            });
        }
    }
    submitForm(e){
        e.preventDefault()
        // use the addBookMutation
        this.props.addkeyFeaturesMutation({
            variables: {
                AirConditioner: this.AirConditioner.state,
                PowerSteering: this.state.PowerSteering,
                DriverAirbag: this.state.DriverAirbag
            },
            refetchQueries: [{ query: getkeyFeaturesQuery }]
        });
    }
    render(){
        return(
            <form id="add-keyFeature" onSubmit={ this.submitForm.bind(this) } >
                <div className="field">
                    <label>Air Conditioning:</label>
                    <input type="boolean" onChange={ (e) => this.setState({ AirConditioner: e.target.value }) } />
                </div>
                <div className="field">
                    <label>Power Steering:</label>
                    <input type="boolean" onChange={ (e) => this.setState({ PowerSteering: e.target.value }) } />
                </div>
               
                <button>+</button>
            </form>
        );
    }
}

export default compose(
    graphql(getkeyFeaturesQuery, { name: "getkeyFeaturesQuery" }),
    graphql(addkeyFeaturesMutation, { name: "addkeyFeaturesMutation" })
)( AddkeyFeatures);
*/
import React, { useState } from "react";
import { addKeySpecificationsMutation } from "../queries/queries";
import { useMutation } from "@apollo/client";

function AddKeySpecifications() {
  const [ARAIMileage,setARAIMileage] = useState("");
  const [FuelType, setFuelType] = useState("");
  const [EngineDisplacement, setEngineDisplacement] = useState("");
  const [MaxPower, setMaxPower] = useState("");
  const [MaxTorque, setMaxTorque] = useState("");
  const [SeatingCapacity,setSeatingCapacity]=useState("");
  const [TransmissionType,setTransmissionType]=useState("");
  const [BootSpace,setBootSpace]=useState("");
  const [FuelTankCapacity,setFuelTankCapacity]=useState("");
  const [BodyType,setBodyType]=useState("");
  const [id,setid]=useState("");

  const [createKeySpec, { error }] = useMutation(addKeySpecificationsMutation);

  const addKeySpec = () => {
    createKeySpec({
      variables: {
           id:id,
           ARAIMileage:ARAIMileage,
           FuelType:FuelType,
           EngineDisplacement:EngineDisplacement,
           MaxPower:MaxPower,
           MaxTorque:MaxTorque,
           SeatingCapacity:SeatingCapacity,
           TransmissionType:TransmissionType,
           BootSpace:BootSpace,
           FuelTankCapacity:FuelTankCapacity,
           BodyType:BodyType
           
      },
    });

    if (error) {
      console.log(error);
    }
  };
  return (
    <div>
        <input
        type="text"
        placeholder="setkfid"
        onChange={(e) => {
            setid(e.target.value);
        }}
      />
        <input
        type="text"
        placeholder="ARAIMileage"
        onChange={(e) => {
            setARAIMileage(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="FuelType"
        onChange={(e) => {
            setFuelType(e.target.value);
        }}
      />
      
      <input
        type="number"
        placeholder="setEngineDisplacement"
        onChange={(e) => {
            setEngineDisplacement(e.target.value);
        }}
      />
       <input
        type="text"
        placeholder="setMaxPower"
        onChange={(e) => {
            setMaxPower(e.target.value);
        }}
      />
      <br></br>
       <input
        type="text"
        placeholder="setMaxTorque"
        onChange={(e) => {
            setMaxTorque(e.target.value);
        }}
      />
      <input
        type="number"
        placeholder="setSeatingCapacity"
        onChange={(e) => {
            setSeatingCapacity(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="setTransmissionType"
        onChange={(e) => {
            setTransmissionType(e.target.value);
        }}
      />
       <input
        type="number"
        placeholder="setBootSpace"
        onChange={(e) => {
            setBootSpace(e.target.value);
        }}
      /><br></br>
       <input
        type="number"
        placeholder="setFuelTankCapacity"
        onChange={(e) => {
            setFuelTankCapacity(e.target.value);
        }}
      />
       <input
        type="text"
        placeholder="setBodyType"
        onChange={(e) => {
            setBodyType(e.target.value);
        }}
      />
       
      
      
      
      <button onClick={addKeySpec}> Create KeySpecification</button>
    </div>
  );
}

export default AddKeySpecifications;
