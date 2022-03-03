import React, { useEffect, useState } from 'react';
import './imagesContainer.css'
import Image from '../components/images'

function ImagesContainer(props) {
    const [state, setState] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/images")
        .then(res => res.json())
        .then(images => setState(images.data))
    }, [])

    return (
        <div className='container'>
            {state.map(image => <Image key={image.id} id={image.id} url={image.attributes.url} tags={image.attributes.tags}/>)}
        </div>
    );
}
 
export default ImagesContainer;