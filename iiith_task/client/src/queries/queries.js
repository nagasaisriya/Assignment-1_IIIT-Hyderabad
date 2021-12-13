import {
    gql
  } from "@apollo/client";
  const getKeySpecificationsQuery = gql`
{
  keySpecifications(id:"61b4abfe437415ea611fc4f1"){
      id
    ARAIMileage
    FuelType
    EngineDisplacement
    MaxPower
    MaxTorque
    SeatingCapacity
    TransmissionType
    BootSpace
    FuelTankCapacity
    BodyType
  
    
  }
}`
  /*
  const getKeySpecificationsQuery = gql`
  {
    specifications{
      ARAIMileage
      FuelType
      EngineDisplacement
      FuelTankCapacity 
    }
  }`
  */
  const getKeyFeaturesQuery = gql`
  { 
    keyFeatures(id:"61b42b4def6484456b16bfc8"){
        id
      PowerSteering
      PowerWindowsFront
      AntiLockBrakingSystem
      AirConditioner
      DriverAirbag
      PassengerAirbag
      AutomaticClimateControl
      AlloyWheels
      MultifunctionSteeringWheel
     

    }
  }`
  const addKeySpecificationsMutation = gql`
  mutation(
    
      $ARAIMileage: String!,
      $FuelType:String!,
      $EngineDisplacement:Number!,
      $MaxPower:String!,
      $MaxTorque:String!,
      $SeatingCapacity:Number!,
      $TransmissionType: String!,
      $BootSpace:Number!,
      $FuelTankCapacity:Number!,
      $BodyType:String!,
     $kfid: String!
    ){
    addkeySpecifications(ARAIMileage:$String,FuelType:$String,EngineDisplacement:$Number,MaxPower:$String,MaxTorque:$String,SeatingCapacity:$Number,TransmissionType:$String,BootSpace:$Number,FuelTankCapacity:$Number,BodyType:$String,kfid:$String){
      id
      ARAIMileage
      FuelType
      EngineDisplacement
      MaxPower
      MaxTorque
      SeatingCapacity
      TransmissionType
      BootSpace
      FuelTankCapacity
      BodyType
      kfid
    }
  }
  `
  export { getKeySpecificationsQuery, getKeyFeaturesQuery, addKeySpecificationsMutation };
