import React from 'react'
import './Card.css';
const title = 'Chrysler'
//const imageUrl='./rock garden.jpeg'
const body = 'The brand is known for sport-oriented vehicles and has been involved in car racing since 1911. Alfa Romeo was owned by Fiat Chrysler Automobiles, the company that was responsible for the production of Alfa Romeo cars until its operations were fully merged with those of the PSA Group to form Stellantis on 16 January 2021.'

function Card() {
    return (
        <div>
            <div className="menu">
                <a href="#"><span class="menu">Home</span></a>
                <a href="#"><span class="menu">Cards</span></a>
                <a href="#"><span class="menu">Search</span></a>
                <a href="#"><span class="menu">About Us</span></a>
            </div>

            <div className='card-container'>
                <div className='card-content1'>
                    <div className='btn'>

                        <a style={{ alignItems: 'bottom' }}>
                            BMW
                        </a>
                        <div className='Hide'>
                            BMW was created in 1917 from the Munich firm Rapp-Motorenwerke. The company was incorporated into Knorr-Bremse AG in 1920 before being refounded as BMW .
                        </div>

                    </div>
                </div>




                <div className='card-content2'>


                    <div className='btn'>

                        <a style={{ alignItems: 'center' }}>
                            Ferrari

                        </a>
                        <div className='Hide' >
                            Ferrari S.p.A. is an Italian luxury sports car manufacturer based in Maranello, Italy. Founded by Enzo Ferrari in 1939.
                        </div>
                    </div>

                </div>

                <div className='card-content3'>


                    <div className='btn'>

                        <a style={{ alignItems: 'center' }}>
                            TELSΛ

                        </a>
                        <div className='Hide'>
                            Tesla, is an American electric vehicle and clean energy company based in Austin, Texas, United States. Tesla designs and manufactures electric cars.

                        </div>
                    </div>

                </div>


                <div className='card-content4'>


                    <div className='btn'>

                        <a style={{ alignItems: 'center' }}>
                            Lamborghini

                        </a>
                        <div className='Hide'>

                            Lamborghini S.p.A. is an Italian brand and manufacturer of luxury sports cars and SUVs based in Sant'Agata Bolognese.
                        </div>
                    </div>

                </div>




            </div>
        </div>



    )
}

export { Card };
//export default Card;
