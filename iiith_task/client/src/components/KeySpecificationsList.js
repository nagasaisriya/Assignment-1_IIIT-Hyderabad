import {
  useQuery

} from "@apollo/client";
import { getKeySpecificationsQuery } from '../queries/queries'
// import { graphql } from 'graphql';
// const getKeySpecificationsQuery = gql`
// {
//   specifications{
//     ARAIMileage
//     FuelType
//   }
// }`
function KeySpecificationsList({ id }) {
  // console.log(this.props);
  const { loading, error, data } = useQuery(getKeySpecificationsQuery);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error </p>;
  console.log(data);
  return (
    <div className="KeySpecificationsList">
      <ul id="key-spec-list">
      <p>id: {data.keySpecifications.id} </p>
        <p>ARAIMileage: {data.keySpecifications.ARAIMileage}</p> 
        <p>FuelType: {data.keySpecifications.FuelType}</p>
        <p>EngineDisplacement: {data.keySpecifications. EngineDisplacement}</p>
        <p>MaxPower: {data.keySpecifications. MaxPower}</p>
        <p>MaxTorque: {data.keySpecifications.MaxTorque}</p>
     <p>SeatingCapacity: {data.keySpecifications.SeatingCapacity}</p>  
        <p>TransmissionType: {data.keySpecifications.TransmissionType}</p>
        <p>BootSpace: {data.keySpecifications.BootSpace}</p>
        <p>FuelTankCapacity: {data.keySpecifications.FuelTankCapacity}</p>
        <p>BodyType: {data.keySpecifications.BodyType}</p>
       <br/>
      </ul>
    </div>
  );
}

export default KeySpecificationsList;


/*
import {
  useQuery

} from "@apollo/client";
import { getKeySpecificationsQuery } from '../queries/queries'
// import { graphql } from 'graphql';
// const getKeySpecificationsQuery = gql`
// {
//   specifications{
//     ARAIMileage
//     FuelType
//   }
// }`
function KeySpecificationsList() {
  // console.log(this.props);
  const { loading, error, data } = useQuery(getKeySpecificationsQuery);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error </p>;
  console.log(data);
  return (
    <div className="KeySpecificationsList">
      <ul id="key-spec-list">
        {data.specifications.map(keyspec => (
          <li key={keyspec.id}>{keyspec.ARAIMileage},{keyspec.FuelType},{keyspec.EngineDisplacement},{keyspec.FuelTankCapacity}
        ))}
      </ul>
    </div>
  );
}

export default KeySpecificationsList;
*/
/*
import React, {useEffect,useState} from 'react';
import {useQuery, gql} from '@apollo/client';
import {LOAD_USERS} from '../queries/GetKeySpec';

//to display the details of the vehicles in the card on clicking
function KeySpecificationsList({ id }) {
  // console.log(this.props);
  const { loading, error, data } = useQuery(LOAD_USERS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error </p>;
  console.log(data);
  return (
    <div className="KeySpecificationsList">
      <ul id="key-spec-list">
        {data.keySpecifications.ARAIMileage
        }
      </ul>
    </div>
  );
}

export default KeySpecificationsList;
*/

/*
function KeySpecificationsList()
{
    const {error, loading, data} = useQuery(LOAD_USERS);
    const [KeySpecific, setKeySpecifications] = useState([]);
    useEffect(() => {
    if (data) {
      setKeySpecifications(data.KeySpecifications);
    }
  }, [data]);
    return(
        <div>{KeySpecific.map((val)=> {
        return <div><h3>{val.ARAIMileage}</h3><h3>{val.FuelType}</h3><h3>{val.MaxPower}</h3></div>;
         } )}
        </div>

    )
}
export default KeySpecificationsList;
*/

/*
import React,{Component} from 'react';
//import {gql} from 'apollo-boost';
//import { getKeySpecificationsQuery } from '../queries/queries';
import {flowRight as compose} from 'lodash';
import {  gql, useQuery } from '@apollo/client';
//import keySpecifications from '../../../server1/models/keySpecifications';
//import { } from 'react-apollo';

const getKeySpecificationsQuery=gql`
 {
  keySpecifications(id:"61b44a5ece894e293596056d"){
      id
      ARAIMileage
      SeatingCapacity
      FuelType
     }
 }`;

function KeySpecificationsList({id}) {
  const { loading, error, data } = useQuery(getKeySpecificationsQuery);
  console.log(data);
  if (loading) return <p>Loading....</p>
  if (error) return <p>Something went wrong</p>
  return (
    <div className="KeySpecificationsList"><ul id="key-spec-list">{data.keySpecifications.ARAIMileage}</ul></div>
    //data.getKeySpecifications.FuelType
    );
  }
  export default getKeySpecificationsQuery;
//export {getKeySpecificationsQuery};


class KeySpecificationsList extends Component {

  displaykeySpecifications(){
    var data=this.props.data;
    if(data.loading){
      return (<div>Loading key features...</div>);
    }
    else{
      //return data.keySpecifications.map(keySpecification => {
        return(
          <li key="keySpecifications.id">{data.keySpecification}
        );
      
    }
  }
  render(){
      //console.log(this.props)
  return (
    <div >
      <ul id="keySpecifications-list">
        {this.displaykeySpecifications()}
         


      </ul>
      <keySpecificationsDetails />
    </div>
  );
  }
}
*/

