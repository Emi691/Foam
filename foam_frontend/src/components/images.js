import React from 'react';
import Tag from './tags'

function images(props) {
    return (
        <div style={{backgroundColor:"red"}}>
            <img src={props.url} height='150' width="auto"/>
            <Tag imageId={props.id}/>
        </div>
    );
}

export default images;