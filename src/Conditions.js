import React from 'react'

const Conditions = (props) => {
    return (
        <div>
            {props.error && <div className="outputDiv cRed">Please enter a valid city.</div>}
            {
                props.loading 
                    && 
                <div className="loaderDiv">
                    <img src={require('./assets/loader.gif')} alt="loading..." />
                </div>
            }
            {props.responseObj.cod === 200 ? 
            <div className="outputDiv">
                   <p>It is currently {Math.round(props.responseObj.main.temp)} degrees out with {props.responseObj.weather[0].description} in {props.responseObj.name}.</p>
            </div> : null}

        </div>
    )
}

export default Conditions
