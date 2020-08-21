import React , {useState} from 'react';
import Conditions from './Conditions'

const Forecast = () =>{

    let [responseObj, setResponseObj] = useState({});
    let [city , setCity] = useState('');
    let [unit , setUnit] = useState('imperial');
    let [error , setError] = useState(false);
    let [loading , setLoading] = useState(false);

    let uriEncodedCity = encodeURIComponent(city);

    function getForecast(e) {
        e.preventDefault();

        if (city.length === 0) {
            return setError(true);
        }

        setError(false);
        setResponseObj({});
        setLoading(true);

        fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                "x-rapidapi-key": process.env.REACT_APP_API_KEY
            }
        })
        .then(
            response => response.json()
            )
        .then(response => {
            if (response.cod !== 200) {
                throw new Error();
            }
            setResponseObj(response)
            setLoading(false);
        })
        .catch(err => {
            setError(true);
            setLoading(false);
            console.log(err);
        });


    }
    return (
        <div className="container1">
            <h1> Enter your Location </h1>
            <form onSubmit={getForecast}>
                <input 
                    className="textarea"
                    type="text"
                    maxLength="60"
                    value={city}
                    onChange={(e)=> setCity(e.target.value)}
                    placeholder="City"
                />
               
                <div className="labelWrapper">
                    <label class="container">
                        <input 
                            type="radio"
                            value="imperial"
                            checked={unit === "imperial"}
                            name="radio"
                            onChange={(e)=> setUnit(e.target.value)}
                        />
                          <span class="checkmark"></span>
                        Farenhiet
                    </label>      
                    <label class="container">
                            <input 
                                type="radio"
                                value="metric"
                                checked={unit === "metric"}
                                name="radio"
                                onChange={(e)=> setUnit(e.target.value)}
                                className="radio"
                            />
                          <span class="checkmark"></span>
                        Celcius
                    </label>
                    </div>
  
                <button type="submit" className="subBtn">Get Forecast</button>

            </form>
            <Conditions
               responseObj={responseObj}
               error={error}
               loading={loading}
               />

        </div>
    );
}

export default Forecast;