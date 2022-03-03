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

    const images = !!props.filterVal ? state.filter(image => !!image.attributes.tags.length && image.attributes.tags[0].name === props.filterVal) : state

    return (
        <div className='container'>
            {images.map(image => <Image key={image.id} id={image.id} url={image.attributes.url} tags={image.attributes.tags}/>)}
        </div>
    );
}
 
export default ImagesContainer;