import React from 'react';
import Tag from './tags'

function images(props) {
    return (
        <div>
            <img src={props.url} height='150' width="auto"/>
            <Tag imageId={props.id} tag={props.tag}/>
        </div>
    );
}

export default images;