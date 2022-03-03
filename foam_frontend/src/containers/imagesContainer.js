import React, { useEffect, useState } from 'react';
import './imagesContainer.css'
import Image from '../components/images'
import { usePagination } from '@mui/material/Pagination';

function ImagesContainer(props) {
    const [state, setState] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/images")
        .then(res => res.json())
        .then(images => setState(images.data))
    }, [])

    const imageData = () => {
        if(props.filterVal === 'unclassified'){
            return state.filter(image => !image.attributes.tag) 
        }else if(!!props.filterVal){
            return state.filter(image => !!image.attributes.tag && image.attributes.tag.name === props.filterVal)
        }else{
            return state
        }
    }

    const images = imageData()

    return (
        <div className='container'>
            <usePagination count={10} />
            {images.map(image => <Image key={image.id} id={image.id} url={image.attributes.url} tag={image.attributes.tag}/>)}
        </div>
    );
}
 
export default ImagesContainer;