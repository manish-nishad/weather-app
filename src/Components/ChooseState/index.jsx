import React from 'react';
import axios from 'axios';
import cities from "../../Data/in.json";
import { UseWeatherAppContext } from '../../Context/Context';

const ChooseState = () => {
    const {state:{city}, dispatch} = UseWeatherAppContext();
    console.log("UseWeatherAppContext", UseWeatherAppContext)

    const handleChange = (e) => {
        const selectedCity = cities.filter((city) => {
            return city.city = e.target.value
        })[0]
        // console.log(selectedCity);
        dispatch({
            type:'SET_CITY',
            payload:selectedCity
        })
    }
    //API call
    const APIKEY = "5bcda7dbb9b0daa5e2d46b939bfe9124";
    let lat = city && city.lat ? city.lat : "";
    let long = city && city.lng ? city.lng : "";
    let exculde = 'hourly, minutely';
  return (
    <>
        <div className='stateWrap'>
            <select className='stateMenu' defaultValue={city} onChange={handleChange}>
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