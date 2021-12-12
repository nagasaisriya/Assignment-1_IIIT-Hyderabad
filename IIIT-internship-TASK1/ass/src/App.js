// App.js
import React, { Component } from 'react';
import './App.css';
import Select from 'react-select';
import { Card } from './components/Card';
import { Card1 } from './components/Card1';
import { Data } from "./dataJ";
import './Drop.css';

const options = [
  { value: JSON.stringify((Data[0]), null, 4), label: 'Bugatti' },
  { value: JSON.stringify(Data[1]), label: 'Ferrari' },
  { value: JSON.stringify(Data[2]), label: 'Aston Martin' },
  { value: JSON.stringify(Data[3], null), label: 'Koenigsegg' },
  { value: JSON.stringify(Data[4], null), label: 'BMW' },
  { value: JSON.stringify(Data[5], null), label: 'Cadillac' }
];

console.log(Card)
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

    return (

      < div className='cont' >

        <div className="App" >

          <Card />
          <Card1 />


          <h3>You Favorite Car</h3>
          <Select
            isMulti={true}
            value={selectedOption}
            onChange={this.handleChange}
            options={options}
          />
          {selectedOption.length > 0 ? (
            <div>
              <h3>Your Choices: </h3>
              <ul>
                {this.state.selectedOption.map((option) =>
                  <li key={option.value}>
                    <div className='card-con'>
                      <div className='card-con1'>
                        <div className='btn1'>

                          <h1>CAR Details: </h1>

                          <div className='Hide1'>
                            <h3>Key Specifications and Key Features </h3>
                            <p><br></br></p>
                            {option.value}
                          </div>
                        </div>

                      </div>
                    </div>
                  </li>

                )}
              </ul>
            </div>) : ''
          }
        </div>
      </div >
    );
  }
}

export default App;

