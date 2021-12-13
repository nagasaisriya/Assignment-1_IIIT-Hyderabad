/*import React,{Component} from 'react';
import ApolloClient from '@apollo/client';
import { ApolloProvider} from '@apollo/client';

//components
import KeySpecificationsList from './components/KeySpecificationsList';
import AddKeyFeatures from './components/AddKeyFeatures';

//apollo client setup

const client=new ApolloClient({
  uri:'http://localhost:4000/graphql'
})

class App extends Component {
  render(){
  return (
    <ApolloProvider client={client}>
    <div id="main">
      <h1>Car's details list</h1>
      <KeySpecificationsList/>

    </div>
    </ApolloProvider>
  );
  }
}

export default App;


*/
// App.js
import React, { Component } from 'react';
import './App.css';
import Select from 'react-select';
import { Card } from './components/Card';
import { Card1 } from './components/Card1';
import { Data } from "./dataJ";
//import classNames from 'classnames';
import { Datafile } from './Datafile';
import Details from "./Details";
import './Drop.css';
//import React from 'react';
//import { render } from 'react-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import KeySpecificationsList from './components/KeySpecificationsList';
import AddKeyFeatures from './components/AddKeyFeatures';

import { onError } from 'apollo-link-error';
import KeyFeaturesList from './components/KeyFeaturesList';

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) graphQLErrors.map(({ message }) => console.log(message))
})
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});



const options = [
  { value: JSON.stringify((Data[0]), null, 4), label: 'Bugatti' },
  { value: JSON.stringify(Data[1]), label: 'Ferrari' },
  { value: JSON.stringify(Data[2]), label: 'Aston Martin' },
  { value: ["ARAIMileade : ", Data[0].ARAIMileage, "bhp : ", Data[0].bhp], label: 'Koenigsegg' },
  { value: JSON.stringify(Data[4], null), label: 'BMW' },

  { 
    value: "ARAIMileade :  " + Data[0].ARAIMileage +
      "bhp : " + Data[0].bhp, label: 'Cadillac'
  }
   
];

//console.log(Card)
class App extends Component {
  state = {
    selectedOption: [],
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };

  render() {
    const { selectedOption } = this.state;
    console.log(options);
    console.log(this.props);
  
    return (
      <ApolloProvider client={client}>
    
     
      <div className='cont'>

        <div className="App" >
          <Card />
          <Card1 />
         
    
        
          <h1>Choose Your Favorite Car</h1>
          <Select
            isMulti={true}
            value={selectedOption}
            onChange={this.handleChange}
            options={options}
          />
      
              
      <div id="main">

<h1> Or Add your Car details to list</h1>

<AddKeyFeatures/>
<br></br>
</div>
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
              
          {selectedOption.length > 0 ? (
            <div>
              <h1>Selected Cars</h1>
              <ul>
                {this.state.selectedOption.map((option) =>
                  <li key={option.value}>
                    <div className='card-con'>
                      <div className='card-con1'>
                        <div className='btn1'>

                          <h3>CAR DETAILS: </h3>
                            
                          <div className='Hide1'>
                            <h3>KEY SPECIFICATIONS</h3>
                            <KeySpecificationsList/>
                            <h3>KEY FEATURES:</h3>
                            <KeyFeaturesList/>
                            
                            
                            
                            
                          </div>
                        </div>

                      </div>
                    </div>
                  </li>

                )}
              </ul>
             
             

            </div>
            ) : ''
          }
          </div>
        </div>
        </div>
        </div>
      </div>
      </ApolloProvider>
    );
  }
}

export default App;

