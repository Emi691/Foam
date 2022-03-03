import React, { useEffect, useState } from 'react';

function Filters(props) {
    const [state, setState] = useState([])

    const handleClick = () => {
       setState([<button value='#foaming' style={{border:'none', margin:'5px'}} onClick={event => props.handleFilter(event)}>#foaming</button> ,
        <button value='#notfoaming' style={{border:'none', margin:'5px'}} onClick={event => props.handleFilter(event)} >#notfoaming</button>])
    }

    return (
        <div>
            <button style={{border:'none', backgroundColor:'transparent'}} onClick={event => handleClick()}>filters</button>
            {state}
        </div>
    );
}

export default Filters;