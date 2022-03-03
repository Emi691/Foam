import React from 'react';

function images(props) {
    return (
        <div style={{backgroundColor:"red"}}>
            <img src={props.url} height='150' width="auto"/>
        </div>
    );
}

export default images;