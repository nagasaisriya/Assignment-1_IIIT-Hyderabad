import { gql } from "@apollo/client";

//import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql`
  mutation createKeyFeature(
    $id: String!,
    $ARAIMileage: String!,
    $FuelType: String!,
    $EngineDisplacement: Number!,
    $MaxPower:String! ,
    $MaxTorque:String!,
           $SeatingCapacity:Number!,
           $TransmissionType:String!,
           $BootSpace:Number!,
           $FuelTankCapacity:Float!,
           $BodyType:String!,
           $kfid:String
    
  ) {
    createKeyFeature(
      id:$id
        ARAIMileage: $ARAIMileage
        FuelType:$FuelType
        EngineDisplacement:$EngineDisplacement
        MaxPower:$MaxPower
           MaxTorque:$MaxTorque
           SeatingCapacity:$SeatingCapacity
           TransmissionType:$TransmissionType
           BootSpace:$BootSpace
           FuelTankCapacity:$FuelTankCapacity
           BodyType:$BodyType
           
    ) {
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
  }
`;
