const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLList } = graphql;
const _ = require('lodash');
//const cars = require("../data.json");
/*var keySpecifications = [
  {
    id: '1', ARAIMileage: '12.65kmpl', FuelType: 'Petrol', EngineDisplacement: 3982, MaxPower: '576.63bhp@6250rpm', MaxTorque: '700Nm@2100–5500rpm', SeatingCapacity: 2, TransmissionType: 'Automatic', BootSpace: 285, FuelTankCapacity: 75.0, BodyType: 'Coupe'
  },
  {
    id: '2', ARAIMileage: '15.65kmpl', FuelType: 'Petrol', EngineDisplacement: 3900, MaxPower: '516.63bhp@6250rpm', MaxTorque: '900Nm@2100–5500rpm', SeatingCapacity: 3, TransmissionType: 'Automatic', BootSpace: 295, FuelTankCapacity: 65.0, BodyType: 'Coupe'
  },
  {
    id: '3', ARAIMileage: '10.65kmpl', FuelType: 'Petrol', EngineDisplacement: 3880, MaxPower: '556.63bhp@6250rpm', MaxTorque: '800Nm@2100–5500rpm', SeatingCapacity: 2, TransmissionType: 'Automatic', BootSpace: 280, FuelTankCapacity: 85.0, BodyType: 'Coupe'
  },
];
var keyFeatures = [
  {
    id: '1', PowerSteering: true, PowerWindowsFront: true, AntiLockBrakingSystem: true, AirConditioner: true, DriverAirbag: true,
    PassengerAirbag: true, AutomaticClimateControl: true, AlloyWheels: true,
    MultifunctionSteeringWheel: true
  },
  {
    id: '2', PowerSteering: true, PowerWindowsFront: true, AntiLockBrakingSystem: true, AirConditioner: true, DriverAirbag: true,
    PassengerAirbag: true, AutomaticClimateControl: true, AlloyWheels: true,
    MultifunctionSteeringWheel: true
  },
  {
    id: '3', PowerSteering: true, PowerWindowsFront: true, AntiLockBrakingSystem: true, AirConditioner: true, DriverAirbag: true,
    PassengerAirbag: true, AutomaticClimateControl: true, AlloyWheels: true,
    MultifunctionSteeringWheel: true
  }
];*/

const keySpecifications = require('../models/keySpecifications');
const keyFeatures = require('../models/keyFeatures');
const ksType = new GraphQLObjectType({
  name: 'keySpecifications',
  fields: () => ({
    id: { type: GraphQLID },
    ARAIMileage: { type: GraphQLString },
    FuelType: { type: GraphQLString },
    EngineDisplacement: { type: graphql.GraphQLInt },
    MaxPower: { type: GraphQLString },
    MaxTorque: { type: GraphQLString },
    SeatingCapacity: { type: graphql.GraphQLInt },
    TransmissionType: { type: GraphQLString },
    BootSpace: { type: graphql.GraphQLInt },
    FuelTankCapacity: { type: graphql.GraphQLFloat },
    BodyType: { type: GraphQLString },
    keyfeatures: {
      type: kfType,
      resolve(parent, args) {

      }
    }
  })
});
const kfType = new GraphQLObjectType({
  name: "keyFeatures",
  fields: () => ({
    id: { type: GraphQLID },
    PowerSteering: { type: graphql.GraphQLBoolean },
    PowerWindowsFront: { type: graphql.GraphQLBoolean },
    AntiLockBrakingSystem: { type: graphql.GraphQLBoolean },
    AirConditioner: { type: graphql.GraphQLBoolean },
    DriverAirbag: { type: graphql.GraphQLBoolean },
    PassengerAirbag: { type: graphql.GraphQLBoolean },
    AutomaticClimateControl: { type: graphql.GraphQLBoolean },
    AlloyWheels: { type: graphql.GraphQLBoolean },
    MultifunctionSteeringWheel: { type: graphql.GraphQLBoolean },
    keyspecifications: {
      type: ksType,
      resolve(parent, args) {

      }
    }
  })
});

// {
//   type: new GraphQLList(carType),
//   resolve(parent, args) {
//     // return cars
//   }
// }
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {

    keySpecifications: {
      type: ksType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        //console.log(typeof (args.id));
       // console.log(_.find(keySpecifications, { id: args.id }));
        console.log(args.id,"kil");

        return keySpecifications.findById(args.id);
      }
    },

    keyFeatures: {
      type: kfType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
       //return _.find(keyFeatures, { id: args.id });
       return keyFeatures.findById(args.id);
      }
    },
    specifications: {
      type: new GraphQLList(ksType),
      resolve(parent, args) {
        return keySpecifications.find({});
      }
    },
    features: {
      type: new GraphQLList(kfType),
      resolve(parent, args) {
        return keyFeatures.find({});
      }
    }
    }
  
})

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addkeyFeatures: {
      type: kfType,
      args: {
        PowerSteering: { type: graphql.GraphQLBoolean },
        PowerWindowsFront: { type: graphql.GraphQLBoolean },
        AntiLockBrakingSystem: { type: graphql.GraphQLBoolean },
        AirConditioner: { type: graphql.GraphQLBoolean },
        DriverAirbag: { type: graphql.GraphQLBoolean },
        PassengerAirbag: { type: graphql.GraphQLBoolean },
        AutomaticClimateControl: { type: graphql.GraphQLBoolean },
        AlloyWheels: { type: graphql.GraphQLBoolean },
        MultifunctionSteeringWheel: { type: graphql.GraphQLBoolean }
      },
      resolve(parent, args) {
        let keyFeatures1 = new keyFeatures({
          PowerSteering: args.PowerSteering,
          PowerWindowsFront: args.PowerWindowsFront,
          AntiLockBrakingSystem: args.AntiLockBrakingSystem,
          AirConditioner: args.AirConditioner,
          DriverAirbag: args.DriverAirbag,
          PassengerAirbag: args.PassengerAirbag,
          AutomaticClimateControl: args.AutomaticClimateControl,
          AlloyWheels: args.AlloyWheels,
          MultifunctionSteeringWheel: args.MultifunctionSteeringWheel
        });
        return keyFeatures1.save();
      }
    },
    addkeySpecifications: {
      type: ksType,
      args: {
        kfid: { type: GraphQLID },
        ARAIMileage: { type: GraphQLString },
        FuelType: { type: GraphQLString },
        EngineDisplacement: { type: graphql.GraphQLInt },
        MaxPower: { type: GraphQLString },
        MaxTorque: { type: GraphQLString },
        SeatingCapacity: { type: graphql.GraphQLInt },
        TransmissionType: { type: GraphQLString },
        BootSpace: { type: graphql.GraphQLInt },
        FuelTankCapacity: { type: graphql.GraphQLFloat },
        BodyType: { type: GraphQLString }
      },
      resolve(parent, args) {
        let keySpecifications1 = new keySpecifications({
          kfid: args.kfid,
          ARAIMileage: args.ARAIMileage,
          FuelType: args.FuelType,
          EngineDisplacement: args.EngineDisplacement,
          MaxPower: args.MaxPower,
          MaxTorque: args.MaxTorque,
          SeatingCapacity: args.SeatingCapacity,
          TransmissionType: args.TransmissionType,
          BootSpace: args.BootSpace,
          FuelTankCapacity: args.FuelTankCapacity,
          BodyType: args.BodyType,
        });
        return keySpecifications1.save();
      }
    },
  }
});

// var books = [
//   { name: 'A', genre: 'B', id: '1' },
//   { name: 'C', genre: 'D', id: '2' },
//   { name: 'E', genre: 'F', id: '3' },
// ]
// const BookType = new GraphQlObjectType({
//   name: 'Book',
//   fields: () => ({
//     id: { type: GraphQlString },
//     name: { type: GraphQlString },
//     genre: { type: GraphQlString },
//   })
// })
// const RootQuery = new GraphQlObjectType({
//   name: 'RootQuery',
//   fields: {
//     book: {
//       type: 'BookType',
//       args: { id: { type: GraphQlString } },
//       resolve(parent, args) {

//       }
//     }
//   }
// })
module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
  /*addKeySpecifications:
{
type: ksType,
args:
{
id: { type: GraphQLID },
ARAIMileage: { type: GraphQLString },
FuelType: { type: GraphQLString },
EngineDisplacement: { type: graphql.GraphQLInt },
MaxPower: { type: GraphQLString },
MaxTorque: { type: GraphQLString },
SeatingCapacity: { type: graphql.GraphQLInt },
TransmissionType: { type: GraphQLString },
BootSpace: { type: graphql.GraphQLInt },
FuelTankCapacity: { type: graphql.GraphQLFloat },
BodyType: { type: GraphQLString },
},
resolve(parent, args) {
let keySpecifications = new KeySpecifications(
{
ARAIMileage: args.ARAIMileage,
FuelType: args.FuelType,
EngineDisplacement: args.EngineDisplacement,
MaxPower: args.MaxPower,
MaxTorque: args.MaxTorque,
SeatingCapacity: args.SeatingCapacity,
TransmissionType: args.TransmissionType,
BootSpace: args.BootSpace,
FuelTankCapacity: args.FuelTankCapacity,
BodyType: args.BodyType
}
);
return keySpecifications.save();
}
}*/
// addkeyFeatures(PowerSteering:true,PowerWindowsFront:true,
//   AntiLockBrakingSystem:true,AirConditioner:true,DriverAirbag:true,PassengerAirbag:true,AutomaticClimateControl:true,AlloyWheels:true,MultifunctionSteeringWheel:true){
//     PowerSteering
//     AlloyWheels
//   }
