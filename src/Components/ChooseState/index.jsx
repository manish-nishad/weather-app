import React from 'react';
import cities from "../../Data/in.json";
import { UseWeatherAppContext } from '../../Context/Context';

const ChooseState = () => {
    console.log(UseWeatherAppContext());
  return (
    <>
        <div className='stateWrap'>
            <select className='stateMenu'>
                {
                    cities && cities.length > 0 && cities.map((city) => {
                        return(
                            <option key={`${city.population}${city.lat}`} value={city.city}>
                                {city.city} - {city.admin_name}
                            </option>
                        )
                    })
                }
            </select>
        </div>
    </>
  )
}

export default ChooseState;