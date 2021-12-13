import {
    useQuery
  
  } from "@apollo/client";
  import { getKeyFeaturesQuery } from '../queries/queries'
  // import { graphql } from 'graphql';
  // const getKeySpecificationsQuery = gql`
  // {
  //   specifications{
  //     ARAIMileage
  //     FuelType
  //   }
  // }`
  function KeyFeaturesList({ id }) {
    // console.log(this.props);
    const { loading, error, data } = useQuery(getKeyFeaturesQuery);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error </p>;
    console.log(data.keyFeatures.PowerSteering.toString());
    return (
      <div className="KeyFeaturesList">
        <ul id="key-spec-list">
            <p>id: {data.keyFeatures.id}</p>
            <p>PowerSteering: {data.keyFeatures.PowerSteering.toString()}</p>
            <p>PowerWindowsFront: {data.keyFeatures.PowerWindowsFront.toString()}</p>
            <p>AntiLockBrakingSystem: {data.keyFeatures.AntiLockBrakingSystem.toString()}</p>
            <p>AirConditioner: {data.keyFeatures.AirConditioner.toString()}</p>
            <p>DriverAirbag: {data.keyFeatures.DriverAirbag.toString()}</p>
<p>PassengerAirbag: {data.keyFeatures.PassengerAirbag.toString()}</p>
<p>AutomaticClimateControl: {data.keyFeatures.AutomaticClimateControl.toString()}</p>
          <p>AlloyWheels: {data.keyFeatures.AlloyWheels.toString()}</p>
          <p>MultifunctionSteeringWheel:{data.keyFeatures.MultifunctionSteeringWheel.toString()}</p>
        </ul>
      </div>
    );
  }
  
  export default KeyFeaturesList;

/*
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getkeyFeaturesQuery } from '../queries/queries';

class keyFeaturesDetails extends Component {
    render(){
        return(
            <div id="keyFeatures-details">
                <p>Output Car key features details here</p>
            </div>
        );
    }
}

export default graphql(getkeyFeaturesQuery)(keyFeaturesDetails);
*/
