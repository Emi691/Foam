import React, { Component } from 'react';

class Tags extends Component {

    render(){
        return (
        <div style={{backgroundColor:"yellow", textAlign:"left"}}>
            tags: 
            <button style={{border:"none", backgroundColor:"transparent"}} onClick={event => this.handleClick}>+</button>
        </div>
        );
    }
}

export default Tags;