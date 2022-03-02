import React, { useEffect, useState } from 'react';
import Image from '../components/images'
import Tag from '../components/tags'

function ImagesContainer(props) {
    const [state, setState] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/images")
        .then(res => res.json())
        .then(images => setState(images.data))
    }, [])

    return (
        <div className='container'>
            container
            {state.map(image => <div><Image/><Tag/></div>)}
        </div>
    );
}

export default ImagesContainer;