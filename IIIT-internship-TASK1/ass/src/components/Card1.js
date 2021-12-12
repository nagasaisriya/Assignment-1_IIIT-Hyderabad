import React from 'react'
import './Card1.css';
const title = 'Chrysler'
//const imageUrl='./rock garden.jpeg'
const body = 'The brand is known for sport-oriented vehicles and has been involved in car racing since 1911. Alfa Romeo was owned by Fiat Chrysler Automobiles, the company that was responsible for the production of Alfa Romeo cars until its operations were fully merged with those of the PSA Group to form Stellantis on 16 January 2021.'

function Card1() {
    return (

        <div className='card-container1'>
            <div className='card-content5'>
                <div className='btn'>

                    <a style={{ alignItems: 'bottom' }}>
                        Rolls-Royce
                    </a>
                    <div className='Hide'>
                        Rolls-Royce Motor Cars Limited is a British luxury automobile maker. It is the exclusive manufacturer of Rolls-Royce branded motor cars since 2003.                </div>

                </div>
            </div>




            <div className='card-content6'>


                <div className='btn'>

                    <a style={{ alignItems: 'center' }}>
                        Suzuki

                    </a>
                    <div className='Hide'>
                        Suzuki Motor Corporation  is a Japanese multinational corporation , manufacturing automobiles and a variety of other small internal combustion engines.


                    </div>

                </div>

            </div>

            <div className='card-content7'>


                <div className='btn'>

                    <a style={{ alignItems: 'center' }}>
                        Λudi

                    </a>
                    <div className='Hide'>
                        German automotive manufacturer of luxury vehicles. Audi produces vehicles in nine production facilities worldwide.
                    </div>
                </div>

            </div>


            <div className='card-content8'>


                <div className='btn'>

                    <a style={{ alignItems: 'center' }}>
                        Jaguar

                    </a>
                    <div className='Hide'>

                        Jaguar  is the luxury vehicle brand of Jaguar Land Rover, a British multinational car manufacturer.   </div>
                </div>

            </div>

        </div>



    )
}

export { Card1 };
//export default Card;