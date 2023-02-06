import React, { useReducer, useContext } from 'react';
import { WeatherReducer } from './Reducer';

const WeatherAppContext = React.createContext();

const WeatherAppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(WeatherReducer, {
        city: {
            "city": "Delhi", 
            "lat": "28.6600", 
            "lng": "77.2300", 
            "country": "India", 
            "iso2": "IN", 
            "admin_name": "Delhi", 
            "capital": "admin", 
            "population": "29617000", 
            "population_proper": "16753235"
        },
        current: '',
        daily: ''
    })
    return(
        <>
            <WeatherAppContext.Provider value={{state, dispatch}}>
                {children}
            </WeatherAppContext.Provider>
        </>
    )
}

export default WeatherAppProvider;

export const UseWeatherAppContext = () => {
    return useContext(WeatherAppContext)
}