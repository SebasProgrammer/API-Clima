import React from 'react';
import Charge from './Charge';

const Card = ({loadingData, showData, weather, forecast}) => {

    if (loadingData){
        return <Charge />
    }
    return (
        <div className="mt-5"> 
            {
                showData === true ? (
                    <h1>Con datos</h1>

                ):(
                    <h2>Sin datos</h2>
                )
            }
        </div>
    );
}

export default Card;