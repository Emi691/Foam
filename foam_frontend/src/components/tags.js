import React, { Component } from 'react';

class Tags extends Component {
    state = {
        plus: false,
        tags: ['#foaming', '#notfoaming'],
    }

    handleClick = (event) => {
        console.log("clicked!")
        this.setState({
            plus: true
        })
    }

    renderAddTags = () => {
        if(!!this.state.plus){
            console.log("adds buttons")
            return this.state.tags.map(tag => <button onClick={event => this.handleAddTag()}>{tag}</button>)
        }
    }

    render(){
        return (
        <div style={{backgroundColor:"yellow", textAlign:"left"}}>
            tags: 
            <button style={{border:"none", backgroundColor:"transparent"}} onClick={event => this.handleClick()}>+</button>
            {this.renderAddTags()}
        </div>
        );
    }
}

export default Tags;